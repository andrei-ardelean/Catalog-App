import SaveIcon from '@material-ui/icons/Save';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from '../interfaces'
import { actionCreators, State } from '../state';
import '../styles/AddProduct.css'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';


// interface AddProductProps {
//   products: Product[]
//   setProducts: React.Dispatch<React.SetStateAction<Product[]>>
// }

const AddProduct: React.FC = () => {
  
  const [input, setInput] = useState({
    name: "",
    url: "",
    price: "",
    description: ""
  })

  const dispatch = useDispatch();
  const {addProduct} = bindActionCreators(actionCreators, dispatch);
  const products = useSelector((state: State) => state.products);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveClick = (): void => {
    if (!input.name || !input.description || !input.price || !input.url) {
      alert('Please fill in all of the fields!');
      return;
    }

    const _id = products.length.toString();

    addProduct({
      _id: _id,
      name: input.name,
      url: input.url,
      price: parseInt(input.price),
      description: input.description,
    });

    setInput({
      name: "",
      url: "",
      price: "",
      description: ""
    });
  }

  return (
    <div className="form-container">
      <TextField
        type="text"
        name="name"
        label="Name"
        variant="outlined"
        style={{marginBottom: 10}}
        value={input.name}
        onChange={handleChange}/>
      <TextField
        type="text"
        name="price"
        label="Price"
        variant="outlined"
        style={{marginBottom: 10}}
        value={input.price}
        onChange={handleChange}/>
      {/* todo: add input file for url */}
      <TextField
        type="text"
        name="url"
        label="URL"
        variant="outlined"
        style={{marginBottom: 10}}
        value={input.url}
        onChange={handleChange}/>
      <TextareaAutosize
        minRows={15}
        name="description"
        value={input.description}
        style={{marginBottom: 10}}
        placeholder="Add description here"
        onChange={handleChange} />
      <Button
        size="large"
        variant="contained"
        color="primary"
        disableElevation
        disableRipple
        onClick={handleSaveClick}
        endIcon={<SaveIcon/>}>
          SAVE
      </Button>
    </div>
  );
}

export default AddProduct;

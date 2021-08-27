import { useState } from 'react';
import Product from '../interfaces'
import '../styles/AddProduct.css'

interface AddProductProps {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const AddProduct: React.FC<AddProductProps>= ({products, setProducts}) => {
  
  const [input, setInput] = useState({
    name: "",
    url: "",
    price: "",
    description: ""
  })

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

    setProducts([
      ...products,
      {
        _id: _id,
        name: input.name,
        url: input.url,
        price: parseInt(input.price),
        description: input.description,
      }
    ]);
  }

  return (
    <div className="form-container">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input-field"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price" 
        placeholder="Price"
        className="input-field"
        value={input.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="url"
        placeholder="URL"
        className="input-field"
        value={input.url}
        onChange={handleChange}
      />
      <textarea
        rows={10}
        name="description"
        placeholder="Description"
        value={input.description}
        onChange={handleChange}
      />
      <button
        className="save-btn"
        onClick={handleSaveClick}
      >
          Save product
      </button>
    </div>
  );
}

export default AddProduct;

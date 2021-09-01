import '../styles/AddEditPopup.css'
import { forwardRef, Ref, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import Product from '../interfaces';
import { NotifyType } from './Notification';

const Transition = forwardRef(
  function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: Ref<unknown>) {
      return <Slide direction="up" ref={ref} {...props} />;
    }
  );

const useStyles = makeStyles((theme: any) => ({
  dialogWrapper: {
    padding: theme.spacing(2), //1->8px
    position: 'absolute',
    top: theme.spacing(10),
    width: '60%'
  }
}))

interface AddProductPopupProps {
  product: Product | undefined
  title: string
  openPopup: boolean
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>
  handleResetCurrentProduct: any
  setNotify: React.Dispatch<React.SetStateAction<NotifyType>>
}

const AddProductPopup: React.FC<AddProductPopupProps> = ({product, title, openPopup, setOpenPopup, handleResetCurrentProduct, setNotify}) => {
  let initialInput;
  if (product === undefined) {
    initialInput = {
      name: "",
      url: "",
      price: "",
      description: ""
    };
  }
  else {
    initialInput = {
      name: product.name,
      url: product.url,
      price: product.price.toString(),
      description: product.description
    }
  }
  const [input, setInput] = useState(initialInput);

  const classes = useStyles();

  const dispatch = useDispatch();
  const {addProduct, editProduct} = bindActionCreators(actionCreators, dispatch);
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

    if (product === undefined) {
      //add
      const maxId = Math.max(...products.map(product => parseInt(product._id)));
      const _id = (maxId + 1).toString();

      addProduct({
        _id: _id,
        name: input.name,
        url: input.url,
        price: parseInt(input.price),
        description: input.description,
      });

      setNotify({
        isOpen: true,
        message: 'Added successfully',
        type: 'success'
      })
    }
    else {
      //edit
      editProduct({
        _id: product._id,
        name: input.name,
        url: input.url,
        price: parseInt(input.price),
        description: input.description,
      })

      setNotify({
        isOpen: true,
        message: 'Updated successfully',
        type: 'success'
      })
    }

    setInput({
      name: "",
      url: "",
      price: "",
      description: ""
    });

    handleResetCurrentProduct();
  }

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{paper:classes.dialogWrapper}}
      TransitionComponent={Transition}>
        <DialogTitle>
          <div style={{display: 'flex'}}>
            <Typography
              variant="h5"
              component="div"
              style={{flexGrow:1}}>
                {title}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleResetCurrentProduct}>
                <CloseIcon/>
            </Button>
          </div>
        </DialogTitle>
        <DialogContent dividers>
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
              onChange={handleChange}/>
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
        </DialogContent>
    </Dialog>
  );
}

export default AddProductPopup;

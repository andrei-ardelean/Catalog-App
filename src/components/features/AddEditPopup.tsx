import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
  InputAdornment,
  Theme,
} from "@material-ui/core";
import Product from "../../interfaces";
import { NotifyType } from "./Notification";

const useStyles = makeStyles((theme: Theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2), //1->8px
    position: "absolute",
    top: theme.spacing(10),
    width: "60%",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

interface AddEditPopupProps {
  product: Product | undefined;
  title: string;
  openPopup: boolean;
  handleResetCurrentProduct: () => void;
  setNotify: React.Dispatch<React.SetStateAction<NotifyType>>;
}

const AddEditPopup: React.FC<AddEditPopupProps> = ({
  product,
  title,
  openPopup,
  handleResetCurrentProduct,
  setNotify,
}) => {
  const classes = useStyles();

  let initialInput;
  if (product === undefined) {
    initialInput = {
      name: "",
      url: "",
      price: "",
      description: "",
    };
  } else {
    initialInput = {
      name: product.name,
      url: product.url,
      price: product.price.toString(),
      description: product.description,
    };
  }
  const [input, setInput] = useState(initialInput);
  const [errors, setErrors] = useState({ name: "", price: "", url: "" });

  const dispatch = useDispatch();
  const { addProduct, editProduct } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const products = useSelector((state: State) => state.products);

  const validate = (): boolean => {
    let temp = { name: "", url: "", description: "", price: "" };
    temp.name = input.name ? "" : "Name cannot be empty.";
    temp.price =
      Number.isInteger(Number(input.price)) && input.price
        ? ""
        : "Price must be an integer value.";
    temp.url = input.url ? "" : "URL cannot be empty.";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((error) => error === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClick = (): void => {
    if (!validate()) return;

    if (product === undefined) {
      //add
      const maxId = Math.max(
        ...products.map((product) => parseInt(product._id))
      );
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
        message: "Added successfully",
        type: "success",
      });
    } else {
      //edit
      editProduct({
        _id: product._id,
        name: input.name,
        url: input.url,
        price: parseInt(input.price),
        description: input.description,
      });

      setNotify({
        isOpen: true,
        message: "Updated successfully",
        type: "success",
      });
    }

    setInput({
      name: "",
      url: "",
      price: "",
      description: "",
    });

    handleResetCurrentProduct();
  };

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetCurrentProduct}
          >
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div
          className="form-container"
          style={{ display: "flex", flexDirection: "column", padding: 20 }}
        >
          <TextField
            type="text"
            name="name"
            label="Name"
            variant="outlined"
            style={{ marginBottom: 10 }}
            value={input.name}
            {...(errors.name !== "" && {
              error: true,
              helperText: errors.name,
            })}
            onChange={handleChange}
          />
          <TextField
            type="text"
            name="price"
            label="Price"
            variant="outlined"
            style={{ marginBottom: 10 }}
            value={input.price}
            {...(errors.price !== "" && {
              error: true,
              helperText: errors.price,
            })}
            onChange={handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">RON</InputAdornment>,
            }}
          />
          <TextField
            type="text"
            name="url"
            label="URL"
            variant="outlined"
            style={{ marginBottom: 10 }}
            value={input.url}
            {...(errors.url !== "" && { error: true, helperText: errors.url })}
            onChange={handleChange}
          />
          <TextareaAutosize
            minRows={15}
            name="description"
            value={input.description}
            style={{ marginBottom: 10 }}
            placeholder="Add description here"
            onChange={handleChange}
          />
          <Button
            size="large"
            variant="contained"
            color="primary"
            disableElevation
            disableRipple
            onClick={handleSaveClick}
            endIcon={<SaveIcon />}
          >
            SAVE
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditPopup;

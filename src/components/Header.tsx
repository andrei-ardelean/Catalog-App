import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import '../styles/Header.css';

interface HeaderProps {
  showAddProduct: boolean
  setShowAddProduct: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({showAddProduct, setShowAddProduct}) => {
  return (
    <div className="header-container">
        <h1 className="title-header">Catalog-App</h1>
        <Button
          size="large"
          variant="contained"
          color={`${showAddProduct ? "secondary" : "primary"}`}
          disableElevation
          disableRipple
          style={{margin: 20}}
          endIcon={
            showAddProduct ? (<CancelIcon/>) : (<AddCircleIcon/>)
          }
          onClick={() => setShowAddProduct(!showAddProduct)}>
          {
            showAddProduct
              ? 'CLOSE' 
              : 'ADD'
          }
        </Button>
    </div>
  );
}

export default Header;
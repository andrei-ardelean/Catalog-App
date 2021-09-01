import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../styles/Header.css';

interface HeaderProps {
  openPopup: boolean
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({openPopup, setOpenPopup}) => {
  return (
    <div className="header-container">
        <h1 className="title-header" style={{flexGrow:1}}>Leroy Merlin low-budget</h1>
        {
          !openPopup &&
            <Button
              size="large"
              variant="contained"
              color={"primary"}
              disableElevation
              disableRipple
              endIcon={
                !openPopup && (<AddCircleIcon/>)
              }
              onClick={() => setOpenPopup(!openPopup)}>
                ADD
            </Button>
        }
    </div>
  );
}

export default Header;
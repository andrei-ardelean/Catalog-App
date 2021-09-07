import '../../styles/Header.css';
import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react';

interface HeaderProps {
  openPopup: boolean
  setOpenPopup: (openPopup: boolean) => void
}

const WrappedHeader: React.FC<HeaderProps> = ({openPopup, setOpenPopup}) => {
  return (
    <div className="header-container">
        <h1 className="header-title" style={{flexGrow:1}}>Leroy Merlin low-budget</h1>
        {
          !openPopup &&
            <Button
              size="large"
              variant="contained"
              color="primary"
              disableElevation
              disableRipple
              endIcon={<AddCircleIcon/>}
              onClick={() => {
                setOpenPopup(!openPopup);
              }}>
                ADD
            </Button>
        }
    </div>
  );
}

const Header = React.memo(WrappedHeader);

export default Header;
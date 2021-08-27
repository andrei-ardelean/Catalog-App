import '../styles/Header.css';

interface HeaderProps {
  showAddProduct: boolean
  setShowAddProduct: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({showAddProduct, setShowAddProduct}) => {
  return (
    <div className="header-container">
        <h1 className="title-header">Catalog-App</h1>
        <button
          className={`${showAddProduct ? 'add-btn-clicked' : 'add-btn'}`}
          onClick={() => setShowAddProduct(!showAddProduct)}
        >
          {
            showAddProduct
              ? 'Close' 
              : 'Add'
          }
          
        </button>
    </div>
  );
}

export default Header;
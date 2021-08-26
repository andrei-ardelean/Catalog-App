import React, { useState } from 'react';
import './App.css'
import Header from './components/Header';
import ProductList from './components/ProductList';

const prods = [
  {
    "_id": "6127aa08fb3c3b10c827e88f",
    "name": "fugiat",
    "url": "http://placehold.it/32x32",
    "price": 84,
    "description": "Sint occaecat laboris magna exercitation veniam proident. Commodo ipsum dolore cillum nisi sit Lorem ea anim duis deserunt pariatur est. Velit tempor labore quis fugiat pariatur proident cillum incididunt reprehenderit et. Dolore eu enim eiusmod ut eu do incididunt non non ullamco sunt. Reprehenderit qui esse irure culpa culpa laboris velit eiusmod excepteur anim laboris officia in sint. Incididunt sint incididunt dolor aute proident.\r\n"
  },
  {
    "_id": "6127aa08af6fd224276b183c",
    "name": "velit",
    "url": "http://placehold.it/32x32",
    "price": 21,
    "description": "Id reprehenderit ex elit cillum ipsum do. Veniam tempor id qui et sunt minim non excepteur laboris occaecat sit. Id non eu aliqua ullamco est fugiat dolore veniam non anim tempor qui in.\r\n"
  },
  {
    "_id": "6127aa08dad0ec542a31a0fc",
    "name": "dolor",
    "url": "http://placehold.it/32x32",
    "price": 11,
    "description": "Ex aute quis deserunt ex reprehenderit tempor fugiat Lorem. Nostrud occaecat cillum dolor et minim nisi aute reprehenderit laboris nisi est excepteur. Adipisicing amet nostrud et incididunt id laboris mollit non do id mollit anim anim nulla. Elit incididunt elit culpa amet laborum quis cupidatat exercitation dolor dolore pariatur dolore sit. Elit voluptate nulla minim consequat anim nisi velit elit laborum. Officia enim laboris magna culpa et exercitation quis.\r\n"
  },
  {
    "_id": "6127aa08dd6ae8a92a171a08",
    "name": "amet",
    "url": "http://placehold.it/32x32",
    "price": 74,
    "description": "Dolore mollit Lorem consequat duis exercitation veniam dolore ullamco consectetur ut. Cupidatat eu laborum ullamco eu proident esse proident. Irure nulla duis magna voluptate enim ullamco consequat nisi.\r\n"
  },
  {
    "_id": "6127aa08ce88fac20bac2066",
    "name": "minim",
    "url": "http://placehold.it/32x32",
    "price": 96,
    "description": "Excepteur amet irure do nulla commodo ut consectetur duis laborum ullamco tempor. Consequat consequat aute esse id aliqua. Qui tempor voluptate labore ea cillum magna nostrud dolor dolore deserunt. Consectetur commodo ipsum ullamco veniam sit qui. Magna dolor sit ut ea id. Tempor quis cillum deserunt adipisicing et est consectetur nulla. Et ea esse aliqua magna laboris laborum reprehenderit labore ad proident in.\r\n"
  },
  {
    "_id": "6127aa082331e6e6ccb9016f",
    "name": "officia",
    "url": "http://placehold.it/32x32",
    "price": 26,
    "description": "Labore anim Lorem id cillum amet ea anim ut sint sit labore. Voluptate incididunt anim veniam adipisicing consequat dolore. Sint cupidatat nulla ullamco occaecat ut officia Lorem laboris enim. Ipsum dolor voluptate culpa officia. Ipsum incididunt adipisicing veniam enim ut ullamco nisi ut quis nostrud ad cupidatat ut labore.\r\n"
  },
  {
    "_id": "6127aa0843adf94d5bcc572a",
    "name": "veniam",
    "url": "http://placehold.it/32x32",
    "price": 28,
    "description": "Dolor anim enim anim veniam nulla elit reprehenderit elit occaecat magna. Aliqua nostrud dolor deserunt tempor sint aliquip enim aliquip voluptate. Do amet velit nostrud veniam cillum irure ex enim aute ipsum. Est consectetur eu ea laborum duis pariatur aliquip aliqua.\r\n"
  }
];

function App() {

  const [products, setProducts] = useState(prods);

  return (
    <div className="App">
      <Header />
      <ProductList products={products}/>
    </div>
  );
}

export default App;

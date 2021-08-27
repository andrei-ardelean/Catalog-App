interface Product {
  _id: string
  name: string
  url: string
  price: number
  description: string
  onDelete?: any
}

export default Product;

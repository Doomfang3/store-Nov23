import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([])

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (response.ok) {
        const productsData = await response.json()
        setProducts(productsData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('Useeffect ran')
    fetchProducts()
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <div className='ProductListPage'>
      {products.map(product => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div>{product.title}</div>
        </Link>
      ))}
    </div>
  )
}

export default ProductListPage

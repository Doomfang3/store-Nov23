import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState()

  const navigate = useNavigate()

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams()
  console.log(productId)

  // To fetch the product details, set up an effect with the `useEffect` hook:
  const fetchOneProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      console.log(response)
      if (response.ok) {
        const productData = await response.json()
        console.log(productData)
        setProduct(productData)
      }
    } catch (error) {
      console.log(error)
      navigate('/')
    }
  }

  useEffect(() => {
    fetchOneProduct()
  }, [productId])

  return product ? (
    <>
      <div className='ProductDetailsPage'>{product.title}</div>
      <Link to='/product/details/1'>To first element</Link>

      <Link to='/'>
        <button type='button'>Back</button>
      </Link>
      <button type='button' onClick={() => navigate('/')}>
        Back
      </button>
    </>
  ) : (
    <h1>Loading..</h1>
  )
}

export default ProductDetailsPage

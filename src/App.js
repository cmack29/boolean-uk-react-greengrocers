import './styles/reset.css'
import './styles/index.css'

import Header from './components/Header'
import Main from './components/Main/Main'
import { useState } from 'react'

const initialStoreItems = [
  {
    id: '001-beetroot',
    name: 'beetroot',
    price: 0.35
  },
  {
    id: '002-carrot',
    name: 'carrot',
    price: 0.35
  }
]

const userCartItems = [
  {
    item: {
      id: '001-beetroot',
      name: 'beetroot',
      price: 0.35
    },
    quantity: 1
  },
  {
    item: {
      id: '002-carrot',
      name: 'carrot',
      price: 0.35
    },
    quantity: 1
  }
]

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  console.log(storeItems)
  console.log(cartItems)

  const addToCart = storeItem => {
    console.log('Inside addToCart: ', storeItem, cartItems)

    let itemFound = false

    const updatedCartItems = cartItems.map(cartItem => {
      if (storeItem.id === cartItem.item.id) {
        const cartItemToUpdate = {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }

        itemFound = true

        setTotalPrice(price => {
          return price + cartItem.item.price
        })

        return cartItemToUpdate
      } else {
        return cartItem
      }
    })

    if (!itemFound) {
      const cartItemToAdd = {
        item: storeItem,
        quantity: 1
      }

      console.log('Item Not Found!')

      setCartItems([...cartItems, cartItemToAdd])
    } else {
      console.log('Updated Items: ', updatedCartItems)

      setCartItems(updatedCartItems)
    }
  }

  const addMoreToCart = newCartItem => {
    // console.log('newcartitem: ', newCartItem)
    const updatedCartItems = cartItems.map(cartItem => {
      if (newCartItem.item.id === cartItem.item.id) {
        const cartItemToUpdate = {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
        setTotalPrice(price => {
          return price + cartItem.item.price
        })
        return cartItemToUpdate
      }
      return cartItem
    })
    // console.log('updating cart: ', updatedCartItems)
    setCartItems(updatedCartItems)
  }

  const removeFromCart = oldCartItem => {
    // console.log('oldcartitem: ', oldCartItem)
    const updatedCartItems = cartItems.map(cartItem => {
      if (oldCartItem.item.id === cartItem.item.id) {
        const cartItemToUpdate = {
          ...cartItem,
          quantity: cartItem.quantity - 1
        }
        setTotalPrice(price => {
          return price - cartItem.item.price
        })
        return cartItemToUpdate
      }
      return cartItem
    })
    // console.log('updating cart: ', updatedCartItems)
    setCartItems(updatedCartItems)
  }

  return (
    <>
      <Header storeItems={storeItems} addToCart={addToCart} />
      <Main
        cartItems={cartItems}
        storeItems={storeItems}
        addMoreToCart={addMoreToCart}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
      />
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}

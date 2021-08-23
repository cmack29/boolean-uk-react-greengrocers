function Main(props) {
  // console.log('main props: ', props.cartItems)
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {props.cartItems.map((cartItem, index) => (
            <li key={index}>
              {/* {console.log('cartitems .:', cartItems.item.id)} */}
              <img
                className="cart--item-icon"
                src={`/assets/icons/${cartItem.item.id}.svg`}
                alt="cartItems"
              />
              {/* {console.log('inside props.cartitems: ', cartItems)} */}

              {cartItem.item.name}
              <button
                className="add-btn"
                onClick={() => props.addMoreToCart(cartItem)}
              >
                +
              </button>
              <h3 className="quantity-text">{cartItem.quantity}</h3>
              <button
                className="remove-btn"
                onClick={() => props.removeFromCart(cartItem)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£{props.totalPrice}</span>
        </div>
      </div>
    </main>
  )
}

export default Main

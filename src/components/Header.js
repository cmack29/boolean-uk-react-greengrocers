function Header(props) {
  // console.log('inside props: ', props)
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {props.storeItems.map((storeItem, index) => (
          <li key={index}>
            <div className="store--item-icon">
              <img src={`/assets/icons/${storeItem.id}.svg`} alt="storeItems" />
            </div>
            <button onClick={() => props.addToCart(storeItem)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header

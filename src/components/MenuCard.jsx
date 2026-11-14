function MenuCard({ name, desc, price, image }) {
  return (
    <article className="menu-card">
      <img src={image} alt={name} className="menu-card-img" />
      <h3>{name}</h3>
      <p>{desc}</p>
      <span className="price">${price}</span>
    </article>
  )
}

export default MenuCard
function TreatCard({ name, desc, price, image }) {
  return (
    <article className="treat-card">
      <div className="treat-image">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{desc}</p>
      <span className="price">${price}</span>
    </article>
  )
}

export default TreatCard
function SpecialCard({ name, desc, color, image }) {
  return (
    <article className={`special-card ${color}`}>
      <img src={image} alt={name} className="special-img" />
      <h3>{name}</h3>
      <p>{desc}</p>
    </article>
  )
}

export default SpecialCard
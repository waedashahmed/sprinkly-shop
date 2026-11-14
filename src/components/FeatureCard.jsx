import { Link } from 'react-router-dom'

function FeatureCard({ title, desc, button, color, icon: Icon, to }) {
  return (
    <article className={`feature-card ${color}`}>
      <div className="feature-icon"><Icon size={26} /></div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to={to} className="btn btn-brown">{button}</Link>
    </article>
  )
}

export default FeatureCard
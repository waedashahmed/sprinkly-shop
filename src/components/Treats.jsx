import { treats } from '../data/treats'
import TreatCard from './TreatCard'
import { Link } from 'react-router-dom'

function Treats() {
  return (
    <section className="treats">
      <div className="treats-inner">
        <p className="section-label">Today's sweets</p>
        <h2>Pick your treat</h2>
        <Link to="/menu" className="btn btn-cream see-menu">See the full menu</Link>
        <div className="treat-grid">
          {treats.map((treat) => (
            <TreatCard
              key={treat.id}
              name={treat.name}
              desc={treat.desc}
              price={treat.price}
              image={treat.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treats
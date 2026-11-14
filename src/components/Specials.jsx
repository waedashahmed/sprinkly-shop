import { specials } from '../data/menu'
import SpecialCard from './SpecialCard'

function Specials({ active }) {
  return (
    <section className="specials">
      <p className="section-label">House specials</p>
      <h2>{active} specials</h2>
      <div className="special-grid">
        {specials
          .filter((item) => item.category === active)
          .map((item) => (
            <SpecialCard
              key={item.id}
              name={item.name}
              desc={item.desc}
              color={item.color}
              image={item.image}
            />
          ))}
      </div>
    </section>
  )
}

export default Specials
import { menuItems } from '../data/menu'
import MenuCard from './MenuCard'

function MenuItems({ active }) {
  return (
    <section className="menu-body">
      <h2>{active}</h2>
      <div className="menu-grid">
        {menuItems
          .filter((item) => item.category === active)
          .map((item) => (
            <MenuCard
              key={item.id}
              name={item.name}
              desc={item.desc}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </section>
  )
}

export default MenuItems
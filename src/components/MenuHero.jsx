const categories = ['Cheesecakes', 'Cakes', 'Macarons', 'Donuts', 'Ice cream', 'Cold drinks']

function MenuHero({ active, setActive }) {
  return (
    <section className="menu-hero">
      <h1>our sweet menu</h1>
      <p>
        Cheesecakes, cakes, macarons, donuts, ice cream and cold drinks, all
        made fresh every day. Pick a category to see what is on today.
      </p>
      <div className="menu-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === active ? 'tab tab-active' : 'tab'}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  )
}

export default MenuHero
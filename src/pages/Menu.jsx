import { useState } from 'react'
import MenuHero from '../components/MenuHero'
import MenuItems from '../components/MenuItems'
import Specials from '../components/Specials'

function Menu() {
  const [active, setActive] = useState('Cheesecakes')

  return (
    <>
      <MenuHero active={active} setActive={setActive} />
      <MenuItems active={active} />
      <Specials active={active} />
    </>
  )
}

export default Menu
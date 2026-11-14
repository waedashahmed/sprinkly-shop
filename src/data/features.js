import { Coffee, Cake, PartyPopper } from 'lucide-react'
export const features = [
  {
    id: 1,
    title: 'Book a table',
    desc: 'Pick a free spot on our café map, choose your time and come hungry.',
    button: 'Find a table',
    color: 'green',
    icon: Coffee,
    to:'/book'
  },
  {
    id: 2,
    title: 'Order a cake',
    desc: 'Choose the flavor, the size and the message on top. Pick it up when it suits you.',
    button: 'Design your cake',
    color: 'pink',
    icon: Cake,
    to: '/cakes'
  },
  {
    id: 3,
    title: 'Birthday party',
    desc: 'A decorated table, a cake with candles and balloons, ready when you arrive.',
    button: 'Plan a party',
    color: 'peach',
    icon: PartyPopper,
     to: '/book'
  },
]
import { Groups, Home } from '../../screens'
import type { ScreenList } from './interfaces'

const screenList: ScreenList = [
  { name: 'Home', component: Home, options: { title: 'Menu' } },
  { name: 'Groups', component: Groups, options: { title: 'Grupos' } }
]

export default screenList

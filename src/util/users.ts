import type { User } from '../types/users.type'
import { mallen29_id, sandrabua_id } from '../config'

export const users: readonly User[] = [
  {
    id: sandrabua_id,
    firstName: 'San',
    username: 'Sandrabua',
    languageCode: 'es',
    position: {
      Queens: 'C',
      Tango: 'E',
      Zip: 'G',
      MiniSudoku: 'I',
    },
  },
  // {
  //   id: mallen29_id,
  //   firstName: 'Carlos',
  //   username: 'Mallen29',
  //   languageCode: 'es',
  //   position: {
  //     Queens: 'D',
  //     Tango: 'F',
  //     Zip: 'H',
  //     MiniSudoku: 'J',
  //   },
  // },
]

import type { User } from '../types/users.type'
import { user_id_2, user_id_1 } from '../config'

export const users: readonly User[] = [
  {
    id: user_id_1,
    firstName: firstname_user_1,
    username: username_user_1,
    languageCode: 'es',
    position: {
      Queens: 'C',
      Tango: 'E',
      Zip: 'G',
      MiniSudoku: 'I',
    },
  },
  {
    id: user_id_2,
    firstName: firstname_user_2,
    username: username_user_2,
    languageCode: 'es',
    position: {
      Queens: 'D',
      Tango: 'F',
      Zip: 'H',
      MiniSudoku: 'J',
    },
  },
]

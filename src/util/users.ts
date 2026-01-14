import type { User } from '../types/users.type'
import { firstname_user_1, firstname_user_2, user_id_1, user_id_2, username_user_1, username_user_2 } from '../config'

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
    winPosition: {
      Queens: 0,
      Tango: 2,
      Zip: 4,
      MiniSudoku: 6,
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
    winPosition: {
      Queens: 1,
      Tango: 3,
      Zip: 5,
      MiniSudoku: 7,
    },
  },
]

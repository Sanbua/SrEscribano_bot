import type { RootObject } from '../types/timesDay.type'
import { users } from '../util/users'
import { getToday } from './calcDate'
import { createEmptyGame } from './createEmptyGame'

export function initTimesDay(): RootObject {
  return {
    today: getToday(),
    users: Object.fromEntries(users.map(user => [user.username, createEmptyGame()])),
  }
}

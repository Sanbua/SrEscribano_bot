import type { User } from '../types/users.type'
import { gameInfo } from '../util/gameInfo'
import { users } from '../util/users'

export function verifyUsers(username: string | undefined): User | undefined {
  return users.find(user => user.username === username) ?? undefined
}

export function verifyGames(gameText: string | undefined) {
  return gameInfo.find(game => gameText?.includes(game.text))
}

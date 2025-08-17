import type { gameInfo } from '../util/gameInfo'

export type GameName = typeof gameInfo[number]['name']

export type Game = Record<GameName, string>

export interface RootObject {
  today: string
  users: Record<string, Game>
}

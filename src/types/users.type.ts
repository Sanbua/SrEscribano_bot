import type { gameInfo } from '../util/gameInfo'

export type GameName = typeof gameInfo[number]['name']

export type PositionMap = Record<GameName, string>
export type WinPositionMap = Record<GameName, number>

export interface User {
  id: string
  firstName: string
  username: string
  languageCode: string
  position: PositionMap
  winPosition: WinPositionMap
}

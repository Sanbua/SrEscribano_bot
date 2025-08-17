import type { Game } from '../types/timesDay.type'
import { gameInfo } from '../util/gameInfo'

export function createEmptyGame(): Game {
  return Object.fromEntries(gameInfo.map(game => [game.name, ''])) as Game
}

import type { Game } from './types/timesDay.type'
import { bot } from './bot'
import { sheets, spreadsheetId } from './conGoogle'
import { getDay, getMonthName, getToday } from './functions/calcDate'
import { createEmptyGame } from './functions/createEmptyGame'
import { timesDay } from './functions/timesDay'
import { gameInfo } from './util/gameInfo'
import { months } from './util/months'
import { users } from './util/users'

export async function setData(gameActual: any, userActual: any, timeGame: string) {
  const positionUser = userActual.position[gameActual?.name]
  const range = `${months[getMonthName()]}!${positionUser}${getDay()}`

  resetTimesDay()

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[timeGame]],
    },
  })

  const game = timesDay.users[userActual.username] as Game
  game[gameActual?.name as keyof Game] = timeGame

  checkCompleted()
}

export function resetTimesDay(): void {
  const today = getToday()
  if (timesDay.today !== today) {
    timesDay.today = today
    users.forEach((user) => {
      timesDay.users[user.username] = createEmptyGame()
    })
  }
}

export function checkCompleted(): void {
  const completed = Object.values(timesDay.users).every(user =>
    Object.values(user).every(value => value.trim() !== ''),
  )

  if (completed) {
    msgComplete()
  }
}

export function msgComplete(): void {
  let message = `✅ ¡Ya tengo todos los tiempos! 🎉\n\n`

  gameInfo.forEach((game) => {
    message += `En el ${game.nameDecorated},\n`
    users.forEach((user) => {
      const value = timesDay.users[user.username]?.[game.name]
      message += ` ${user.firstName}: ${value ?? '(sin datos)'}\n`
    })
    message += `\n`
  })

  users.forEach((user) => {
    bot.api.sendMessage({ chat_id: user.id, text: message })
  })
}

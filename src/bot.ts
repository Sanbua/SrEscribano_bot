import { Bot } from 'gramio'
import { config } from './config'
import { getHour, getToday } from './functions/calcDate'
import { getDataTotalWins, setData } from './obtainData'
import { gameInfo } from './util/gameInfo'
import { MESSAGES } from './util/messages'
import { regexTime } from './util/regex'
import { users } from './util/users'

export const bot = new Bot(config.BOT_TOKEN).onStart(({ info }) =>
  console.log(`✨ Bot ${info.username} was started! ${getToday()}`),
)

bot.on('message', async (context, next) => {
  // log
  console.log(`
    Mensaje de ${context.from.username} [${context.from.id}]: Fecha ${getToday()} - ${getHour()}
    ${context.text}
    `)

  return next()
})

bot.hears(
  context => users.some(user => context.from.username === user.username),
  async (context) => {
    const userActual = users.find(user => context.from.username === user.username)
    const gameActual = gameInfo.find(game => context.text?.includes(game.text))
    if (gameActual !== undefined) {
      const timeGame = context.text?.match(regexTime)?.[0] || '-:--'
      setData(gameActual, userActual, timeGame)
      await context.send(
        MESSAGES.GAME_OK(
          context.from.firstName,
          gameActual?.name,
          getToday(),
          timeGame,
        ),
      )
    } else if (context.text?.toLowerCase().includes('resumen')) {
      getDataTotalWins()
    } else if (context.text?.toLowerCase().includes('moa')) {
      await context.send(MESSAGES.MOA)
    } else {
      await context.sendAnimation(
        MESSAGES.MSG_ERROR.animation,
        { caption: MESSAGES.MSG_ERROR.caption },
      )
    }
  },
)

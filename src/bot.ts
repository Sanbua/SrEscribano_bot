import { Bot } from 'gramio'
import { config } from './config'
import { extractMonthFromText, getHour, getToday } from './functions/calcDate'
import { verifyGames, verifyUsers } from './functions/verifyTypes'
import { getDataToday, getDataTotalWins, setData } from './obtainData'
import { MESSAGES } from './util/messages'
import { regexTime } from './util/regex'

export const bot = new Bot(config.BOT_TOKEN).onStart(({ info }) =>
  console.log(`✨ Bot ${info.username} was started! ${getToday()}`),
)

await bot.api.setMyCommands({
  commands: [
    { command: 'resumen', description: '/resumen <mes> para ver otro' },
    { command: 'hoy', description: 'Los tiempos que has mandado en este día' },
  ],
  scope: { type: 'all_private_chats' },
  language_code: 'es',
})

bot.on('message', async (context, next) => {
  // log
  console.log(`
    Mensaje de ${context.from.username} [${context.from.id}]: Fecha ${getToday()} - ${getHour()}
    ${context.text}
    `)
  return next()
})

bot.command('resumen', async (context) => {
  const userAuthorized = verifyUsers(context.from.username)
  if (!userAuthorized) {
    return
  }

  const monthText = extractMonthFromText(context.args)
  if (monthText === '') {
    return context.send(MESSAGES.MSG_ERROR_MONTH)
  }

  const msgTotalWins = await getDataTotalWins(monthText)
  return context.send(msgTotalWins)
})

bot.command('hoy', async (context) => {
  const userAuthorized = verifyUsers(context.from.username)
  if (!userAuthorized) {
    return
  }

  const msgTimeToday = await getDataToday(userAuthorized)
  return context.send(msgTimeToday)
})

bot.hears(
  context => !!verifyUsers(context.from.username),
  async (context) => {
    const userActual = verifyUsers(context.from.username)
    if (!userActual) {
      return
    }

    const gameActual = verifyGames(context.text)
    if (gameActual !== undefined) {
      const timeGame = context.text?.match(regexTime)?.[0] || '-:--'
      setData(gameActual, userActual, timeGame)

      return context.send(
        MESSAGES.GAME_OK(
          context.from.firstName,
          gameActual?.name,
          getToday(),
          timeGame,
        ),
      )
    }

    if (context.text?.toLowerCase().includes('moa')) {
      return context.send(MESSAGES.MOA)
    }

    return context.sendAnimation(
      MESSAGES.MSG_ERROR.animation,
      { caption: MESSAGES.MSG_ERROR.caption },
    )
  },
)

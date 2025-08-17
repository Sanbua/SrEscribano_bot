import { bot } from './bot'
import { getHour, getToday } from './calcDate'

const signals = ['SIGINT', 'SIGTERM']

for (const signal of signals) {
  process.on(signal, async () => {
    console.log(`Received ${signal}. Initiating graceful shutdown...`)
    await bot.stop()
    process.exit(0)
  })
}

process.on('uncaughtException', (error) => {
  console.log(`Fecha ${getToday()} - ${getHour()}`)
  console.error(error)
})

process.on('unhandledRejection', (error) => {
  console.log(`Fecha ${getToday()} - ${getHour()}`)
  console.error(error)
})

await bot.start()

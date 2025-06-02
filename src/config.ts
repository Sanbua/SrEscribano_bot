import env from 'env-var'

export const config = {
  NODE_ENV: env
    .get('NODE_ENV')
    .default('development')
    .asEnum(['production', 'test', 'development']),
  BOT_TOKEN: env.get('BOT_TOKEN').required().asString(),

  LOCK_STORE: env.get('LOCK_STORE').default('memory').asEnum(['memory']),
}

export const sheet = env.get('SHEET_ID').required().asString()

export const user_id_1 = env.get('USER_ID_1').required().asString()
export const user_id_2 = env.get('USER_ID_2').required().asString()

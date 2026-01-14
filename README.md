# Bot Sr.Escribano ⌚✍

Además dispone de otras funcionalidades como consultar el resumen del mes o ver tus tiempos de ese día.

Con **Sr. Escribano** puedes llevar fácilmente un historial de tus tiempos en los **juegos de LinkedIn**.
Solo tienes que enviar tu tiempo al bot por **Telegram** y él lo guardará automáticamente en una **Google Sheet** para que puedas consultarlo.

Con varios jugadores podrás comparar vuestros tiempos y ver quién es el más rápido, mandando un resumen al finalizar todos ellos los juegos.

También puedes consultar un resumen mensual para revisar tu progreso o ver tus tiempos de ese día.

**Si te gusta el bot, dale una ⭐[estrella](https://github.com/Sanbua/SrEscribano_bot/stargazers) al repositorio.**

## 📑 Tabla de contenidos

- [Bot Sr.Escribano ⌚✍](#bot-srescribano-)
  - [📑 Tabla de contenidos](#-tabla-de-contenidos)
  - [🚀 Características principales](#-características-principales)
  - [🛠 Tecnologías utilizadas](#-tecnologías-utilizadas)
  - [📌 Comandos principales](#-comandos-principales)
  - [⚙️ Instalación y configuración](#️-instalación-y-configuración)
    - [1️⃣ Preparar el repositorio](#1️⃣-preparar-el-repositorio)
    - [2️⃣ Crear la hoja de cálculo](#2️⃣-crear-la-hoja-de-cálculo)
    - [3️⃣ Configurar Google Cloud](#3️⃣-configurar-google-cloud)
    - [4️⃣ Configurar Telegram](#4️⃣-configurar-telegram)
    - [5️⃣ Variables de entorno](#5️⃣-variables-de-entorno)
    - [6️⃣ Personalización de usuarios](#6️⃣-personalización-de-usuarios)
    - [7️⃣ Iniciar el bot](#7️⃣-iniciar-el-bot)
  - [📊 Estado del proyecto](#-estado-del-proyecto)
  - [📝 Licencia](#-licencia)
  - [⭐ Contribuciones y agradecimientos](#-contribuciones-y-agradecimientos)

## 🚀 Características principales

- Guarda automáticamente tus **tiempos de juego** en Google Sheets.
- Permite **varios jugadores** y compara los resultados.
- Consulta **resúmenes mensuales**.
- Envía un **resumen final** una vez que todos los jugadores hayan enviado todos sus tiempos
- Configuración flexible: define **usuarios y posiciones** en la hoja de cálculo.

**Ejemplo de la hoja de cálculo para un mes:**
![mes](./src/images/image-1.png)

**Ejemplo de la hoja de cálculo para el resumen anual:**
![año](./src/images/image-2.png)

## 🛠 Tecnologías utilizadas

- **Node.js** y **TypeScript**
- **GramIO** (framework del bot)
- **Google Sheets API**
- **Telegram Bot API**

## 📌 Comandos principales

| Comando | Descripción |
|---------|-------------|
| `/resumen` | Consulta un resumen mensual |
| `/resumen <mes>` | Consulta un resumen mensual de un mes específico |
| `/hoy` | Consulta los tiempos que has mandado en el mismo día |

**Ejemplo en Telegram:**

| Total tiempos enviados en el día | `/hoy` | `/resumen` |
|------------|------------|------------|
| ![total](./src/images/total.jpg) | ![hoy](./src/images/total.jpg) | ![resumen](./src/images/total.jpg) |

---

## ⚙️ Instalación y configuración

### 1️⃣ Preparar el repositorio

```bash
git clone <URL_DEL_REPO>
cd <NOMBRE_DEL_REPO>
npm install
```

### 2️⃣ Crear la hoja de cálculo

- Puedes usar este ejemplo: [Ejemplo de Google Sheets](https://docs.google.com/spreadsheets/d/1sKFdz1JlsxcmnS4KwEodB_6U97zr1C8ZkwezjLLfw3U/edit?usp=sharing)

### 3️⃣ Configurar Google Cloud

1. Crea un proyecto en [Google Cloud Console](https://console.cloud.google.com/)
2. Habilita la **Google Sheets API**
3. Crea credenciales de tipo **Cuenta de servicio** y descarga el **archivo JSON**
4. Comparte la hoja de cálculo con el email de la cuenta de servicio y dale permisos de **Editor**

### 4️⃣ Configurar Telegram

- Crea un bot en Telegram con [BotFather](https://t.me/BotFather) y obtén el token de acceso.

### 5️⃣ Variables de entorno

Crea un archivo `.env.production` (puedes usar `.env.example` como guía) y añade las siguientes variables de entorno:

| Variable         | Descripción |
|------------------|-------------|
| **BOT_TOKEN**     | El token de acceso de tu bot de Telegram |
| **SHEETS_ID**     | El ID de tu hoja de cálculo de Google Sheets (lo encontrarás en la URL) |
| **CREDENTIALS_JSON** | El contenido del archivo JSON de las credenciales de la cuenta de servicio |
| **USER_ID_1**     | El ID de usuario de Telegram (puedes obtener tu ID hablando con el bot [@userinfobot](https://t.me/userinfobot)) |
| **FIRSTNAME_USER_1** | El nombre del jugador. Este será el que use el bot cuando se dirija a él |
| **USERNAME_USER_1** | El nombre de usuario de Telegram del jugador (sin el @) |
| **USER_ID_2** | Para añadir más jugadores |

### 6️⃣ Personalización de usuarios

- En `src/util/users.ts` puedes modificar las posiciones que corresponden a cada jugador en la hoja de cálculo.

### 7️⃣ Iniciar el bot

```
npm run start
```
## 📊 Estado del proyecto

El bot está en **un punto estable**, listo para usar, aunque siempre se pueden añadir mejoras y nuevas funcionalidades.

## 📝 Licencia

Licencia **MIT**. Consulta [LICENSE](./LICENSE) para más detalles.

## ⭐ Contribuciones y agradecimientos

Si te gusta el bot, **dale una ⭐ al repositorio**.
También puedes contribuir con mejoras, reportes de errores o nuevas ideas mediante **pull requests**.

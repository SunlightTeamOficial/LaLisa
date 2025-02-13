import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'

global.owner = [
  ['51939658716', 'Oso⁩', true],

]

global.mods = []
global.prems = []

global.packname = ``
global.author = '{\n "bot": {\n   "name": "LaLisa",\n     "author": "LaLisa⁩",\n   "status_bot": "active"\n }\n}'
global.wait = 'Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ, sᴏʏ ʟᴇɴᴛᴀ...'
global.botname = 'LaLisa'
global.textbot = `Sunlight Team Oficial`
global.listo = 'Aqui tiene ฅ^•ﻌ•^ฅ'
global.namechannel = 'Sunlight Team Oficial'

global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')

global.group = 'https://chat.whatsapp.com/Ehu5khAUGF2GGXOotcRAal'
global.canal = 'https://whatsapp.com/channel/0029Vb2NkWWFsn0ghn9mOA2G'

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: botname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

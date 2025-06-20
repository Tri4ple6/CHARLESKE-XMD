const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || hh'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tVK25TTmVEWjZXbDlwTVlPM0FVeTRCdDB1d3FZK25lRE01bmFJNE8zdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2dxM08yeWh6cHVId2ZFYmszL0U0NVRqZUZFMFFUdmd6ay9TWHRndHMzbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TnpwQ0o0czZTdHNKZjJEcjhpNWhjNXU2S0dCZldSWit0SXB1UlBmR25JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCQXJQcmtoMUNkNmF2VTBVUWx0eVB4bU4xdFl5OXgyaCtwak9mN0RiaDNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBNdHROUHZyWkpwUXI0SUJlYVFDRENKSGhEU3drOEpvMTJSb0pwMWhyWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRwSldYRW9IYVVRZjFBWDhTZVE4SHN6eXZPTmFkWkVrcEdBNnlGU1MzeEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU1PUzJRcHVCNkZZU0luUU51MkMrSUVOMkpVQnpoZ1o1UHlzRFhRUlgyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3lYMnh1Ry9WNkRZQ2k5OEJXRFNKV3JXVzkyQ3p1OWRTemRxeGEwWDNtUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx4NloybWNLUmtyMTF6QTkrRVBZYkdqbUhiclNBN0F2MkRNQWNKNG1PL0N4aTZnRWFZcnlTakRVbFpxUGhyRURaSlVHeVZiVytvUkduMXU3NmFDL2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6IlBRa0U2Z2NOYktBSXdSSENvQ0dQWmZqbzEweHJZYnorSk5EZTZsZ0ZDODQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzAxNzY0MTcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM1RkEzMkQ0MDcyNzcyMzdFODFGMkMxRUM0Rjc5N0M5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA0NTQ5Njh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwMTc2NDE3MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMkZCRDQ3QkM0Rjk5ODZBRERGMkMyN0VBNDZGQjZGNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNDU0OTc2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiMjU0NzAxNzY0MTcyOjE3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU4OTM1Nzg0OTM1NjQzOjE3QGxpZCIsIm5hbWUiOiLwn5uc8J2Ru/CdkbnwnZGw8J2Rt/CdkbPwnZGsIPCdkb7wn5ucIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNT20wNTBCRUpxbDE4SUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMaG9qQ21ENUh5YkwyYnM3ODN3SzluSGNaMldhcXk2b0w4TTFEYU5VWW1BPSIsImFjY291bnRTaWduYXR1cmUiOiIrNXl4YXlmdjl5eXVoaUcwNmlWMXlLc3FaK3lyelNIdFk2bEJZbFNGL1NxM2FwZlpJN1FRU0VtbURLdnlRNy9vZk1VSTVHWW9WRUxza3VxM3ZPdStBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMmd6S3NLa0FGaEFXa0xBSE9GUXhYRU5MdUVhYmlHOEZCS0hISk9oWUZ1MG50OXZFQTFBUzU2TnFLbUxaUXJqLzZDcFd6d0ZsQWkxOWk2RkRKMVFoalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MDE3NjQxNzI6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzRhSXdwZytSOG15OW03Ty9OOEN2WngzR2RsbXFzdXFDL0ROUTJqVkdKZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNDU0OTUyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9TWCJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "®Charleske",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254759626063",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'CHARLESKE-XMD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/p6uxq0.png',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  CHARLESKE_CHATBOT : process.env.CHARLESKE_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

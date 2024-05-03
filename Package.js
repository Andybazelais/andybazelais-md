{
   "name": "andy-md",
   "version": "2.5.0",
   "description": "Multi device whatsapp bot by Astropeda.",
   "main": "index.js",
   "type": "commonjs",
   "scripts": {
      "run": "pm2 start . --deep-monitoring --attach --name AndyPatch || node .",
      "asta": "pm2 start . --deep-monitoring --attach --name AndyPatch || node .",
      "start": "pm2 start . --attach --name Andypatch",
      "stop": "pm2 stop AstroPatch",
      "heroku-postbuild": "git clone https://github.com/Andybazelais/Andybazelais-Md.git temp && mv temp/.git .git && rm -rf temp && npx puppeteer@latest install  --y",
      "fis-heroku-postbuild": "git clone https://github.com/AndyBazelais/Andybazelais-Md.git temp1 && rsync -av temp1/* ./ && rsync -av temp1/.* ./ && rm -rf temp1 && npm i && npx puppeteer@latest install",
      "postinstall": "npx puppeteer@latest install --y"
   },
   "author": "Andypromo",
   "license": "Apache-2.0",
   "dependencies": {
      "@adiwajshing/keyed-db": "^0.2.4",
      "@hapi/boom": "^9.1.4",
      "@whiskeysockets/baileys": "6.6.0",
      "acrcloud": "^1.4.0",
      "anime-character-random": "latest",
      "aptoide-scraper": "^1.0.1",
      "async-g-i-s": "^1.4.0",
      "axios": "^0.24.0",
      "canvas": "^2.11.2",
      "cheerio": "^1.0.0-rc.10",
      "child_process": "^1.0.2",
      "crypto-js": "latest",
      "discord-mongoose-economy": "^1.2.0",
      "discord-xp": "^1.1.16",
      "dotenv": "^16.0.0",
      "express": "^4.18.1",
      "ffmpeg": "^0.0.4",
      "file-type": "^16.5.3",
      "fluent-ffmpeg": "^2.1.2",
      "form-data": "^4.0.0",
      "fs-extra": "^10.1.0",
      "google-it": "^1.6.4",
      "google-tts-api": "^2.0.2",
      "heroku-client": "3.1.0",
      "human-readable": "^0.2.1",
      "jimp": "^0.16.1",
      "jsdom": "^16.4.0",
      "koyeb-api-client": "latest",
      "link-preview-js": "^3.0.0",
      "moment-timezone": "^0.5.34",
      "mongoose": "^6.2.1",
      "mumaker": "^2.0.0",
      "node-cron": "^3.0.0",
      "node-fetch": "^2.6.1",
      "node-webpmux": "^3.1.0",
      "pastebin-js": "latest",
      "path": "^0.12.7",
      "pg": "^8.11.3",
      "pm2": "^5.2.0",
      "puppeteer": "latest",
      "qrcode": "latest",
      "secktor-pack": "latest",
      "simple-git": "^3.15.1",
      "translatte": "^3.0.1",
      "util": "^0.12.4",
      "wa-sticker-formatter": "^4.3.2",
      "youtubei.js": "^7.0.0",
      "ytdl-core": "^4.11.5",
      "ytdl-secktor": "^0.0.1-development"
   },
   "directories": {
      "lib": "lib",
      "plugins": "plugins"
   },
   "devDependencies": {
      "pino": "^7.0.5"
   },
   "repository": {
      "type": "git",
      "url": "git+https://github.com/Astropeda/Asta-Md.git"
   },
   "bugs": {
      "url": "https://github.com/Astropeda/Asta-Md/issues"
   },
   "homepage": "https://github.com/Astropeda/Asta-Md#readme"
}
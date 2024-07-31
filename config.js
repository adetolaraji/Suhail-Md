const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="adetolaraji610@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Myles❤️" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348136876357";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/3e4d9ddcd1fcd0c17c5c9.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "234xxxxxxxxxx,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_13_48_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MixcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU2LFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MixcbiAgICAgICAgMTY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYyLFxuICAgICAgICA2NixcbiAgICAgICAgMjI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicmlpL05wUEV2c3pjTEVSbWREWi9pNXNNYzQwWDRYcTMwcnJXdEl1L3Vwcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTl9Nc3kwQTNTd3lNcFZYMUpSblFDQVwiLFxuICBcInBob25lSWRcIjogXCIzMDM0NTIzMy0wMjU5LTRkYzktOWU1My1lNGI1ZmYwZDMwYWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICA2OSxcbiAgICAgIDIxMCxcbiAgICAgIDc0LFxuICAgICAgMTY5LFxuICAgICAgMTU1LFxuICAgICAgMTY2LFxuICAgICAgMTY3LFxuICAgICAgMjQzLFxuICAgICAgNDQsXG4gICAgICAyMDgsXG4gICAgICA3NyxcbiAgICAgIDE0MixcbiAgICAgIDc5LFxuICAgICAgMTg4LFxuICAgICAgNTEsXG4gICAgICAxNjMsXG4gICAgICAyNCxcbiAgICAgIDIwLFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDU3LFxuICAgICAgMjQwLFxuICAgICAgMTg3LFxuICAgICAgMTAyLFxuICAgICAgNDcsXG4gICAgICAxNjEsXG4gICAgICAyNTIsXG4gICAgICAxMjksXG4gICAgICA1NCxcbiAgICAgIDIyNCxcbiAgICAgIDIyMCxcbiAgICAgIDcxLFxuICAgICAgMTQsXG4gICAgICA1LFxuICAgICAgMzQsXG4gICAgICAyMCxcbiAgICAgIDU0LFxuICAgICAgMjIzLFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEVHWUwyTkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzY4NzYzNTc6NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2OTE2NjM2MzQ0NzQ2ODo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOR05tdFFDRUpDQnFiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm45Mittd3REeVlwMUZFUnNVSnRGRUx3bDM3L1FEZTRNODhlaUp5UkwzaWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidWhKQ0NMSFZ5VnJwTGRHMStBTzFqdzVnL1VZTGNvRTR2K25QTkNXdUNneEgrSzNYZW53ZUY0a01OWEowcDZxaXJnK3NuYUdiMEhrNjVGWGwrd3hYQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidzNGTGVkZkF0MmdjL1VWMnduVDI1MVdMZ0crdHVsMkFYZWo5WDZrMlZ3TmJiVUM3S1VnMjlLVUU5bEhRb0pSQjBZdUZVMTl4bVp2b3RrclpIRUNKaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjg3NjM1Nzo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0MzM2ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFaW9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVpby5qc29uIjogIntcImtleURhdGFcIjpcInlWTThMejZoRG1Ua1oxSDZEVGpvWFNjakxtcWx3SDlYM2lCT2JGMVhKZ0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzEzNDU5NDA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyNDMyNDU4Mzk2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Myles❤️" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Cent",
  packname: process.env.PACK_NAME || "Cent",
  botname : process.env.BOT_NAME  || "Myles❤️",  
  ownername:process.env.OWNER_NAME|| "Cent", 

  errorChat : process.env.ERRR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "✝️Myles✝️"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

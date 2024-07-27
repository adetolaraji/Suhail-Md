const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_54_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg1LFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxLFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxODksXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDU3LFxuICAgICAgICA5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWUpEczdsNi9ucTRET0NmUEVTcnVBV3dERHl6dUFwaW9jcnZQMEZ6aTZpTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU09FUGUyZGFTQS1hczJKMDRPTlgyUVwiLFxuICBcInBob25lSWRcIjogXCI4NDJlZDgyOC1lMTQ3LTRhNjYtOWVmNi1kOGU1N2NkMGRlMGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMTM0LFxuICAgICAgMjA2LFxuICAgICAgNzcsXG4gICAgICAxNDcsXG4gICAgICAyMjUsXG4gICAgICAyNDgsXG4gICAgICAxNTIsXG4gICAgICAyNTIsXG4gICAgICAyMDQsXG4gICAgICAyMzIsXG4gICAgICA2NSxcbiAgICAgIDE0NSxcbiAgICAgIDI1MSxcbiAgICAgIDUsXG4gICAgICAxNTQsXG4gICAgICA1MyxcbiAgICAgIDIxMSxcbiAgICAgIDE1OSxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMjMyLFxuICAgICAgNjIsXG4gICAgICA0LFxuICAgICAgNjMsXG4gICAgICAxODQsXG4gICAgICAzOCxcbiAgICAgIDEwMyxcbiAgICAgIDE0OSxcbiAgICAgIDIzMSxcbiAgICAgIDI0LFxuICAgICAgMTI1LFxuICAgICAgOTEsXG4gICAgICAxNTMsXG4gICAgICAxMDksXG4gICAgICAyMzksXG4gICAgICA4OSxcbiAgICAgIDgsXG4gICAgICAyMDksXG4gICAgICA2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQQTlZRUNMQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNjg3NjM1Nzo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY5MTY2MzYzNDQ3NDY4OjQ4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ015Tm10UUNFTmEvazdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibjkyK213dER5WXAxRkVSc1VKdEZFTHdsMzcvUURlNE04OGVpSnlSTDNpZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnSXhxNUtVTVFXRnVNVUdVZmxJRkZQV2FJS3RKbUJlV1hjalpyK3FvT0ZSbXZPQjBCdllrSStLSXNGVFVYVytaV2s3SVRKUTdWdmNKM1pCT1dhK3lCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZUlhOV1hiWm9tb3BScERISURjK2JFaG5pOVlWOFRQRE5sM2VIUnA5TVM2d0pDOS9BTjVVWFp0RktJMjhFUGhOY2ZNeEw0aGN5b3JRWmExYm5pNGNBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM2ODc2MzU3OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA4MTI0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUt0eVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3R5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidnRsL2xqSnBNRURSSWlmSTBIQnBEaE8weTZLUHZtOFgvdTJFdVBtL2RzYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTM0NTk0MDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIwODExNDYzMDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Myles❤️",
  ownername:process.env.OWNER_NAME|| "Cent",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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

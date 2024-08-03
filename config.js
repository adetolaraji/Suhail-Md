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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_15_35_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICA1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY1LFxuICAgICAgICA3MixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDk1LFxuICAgICAgICA1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMjMyLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgMTA1LFxuICAgICAgICA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgMTk2LFxuICAgICAgICA5NixcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgODQsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExLFxuICAgICAgICAzLFxuICAgICAgICA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiakwvQndLK2F5M0gxaGtYb0FWNEZ1UWNFWnduWHhkTXZWV0tEZUFybTJzVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM2ODc2MzU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4N0E5MUQ2QzZFNDkwREE4MzU2OEMwRjM5ODlDNjQ2MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2OTkyOTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZmMzaXdHNFBRQTY3VzJnNG5JZllUQVwiLFxuICBcInBob25lSWRcIjogXCJjYzI5MDg4Zi04NWZhLTQwY2MtOGUzYy03OGMzMTViNmI4NGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMTMsXG4gICAgICAyNTIsXG4gICAgICA2MyxcbiAgICAgIDIzMSxcbiAgICAgIDg0LFxuICAgICAgNDgsXG4gICAgICA1MCxcbiAgICAgIDE2NyxcbiAgICAgIDIwOCxcbiAgICAgIDE0MyxcbiAgICAgIDIxMSxcbiAgICAgIDIxNyxcbiAgICAgIDE0MixcbiAgICAgIDg3LFxuICAgICAgOTgsXG4gICAgICAxOTgsXG4gICAgICAzLFxuICAgICAgNTgsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTY5LFxuICAgICAgMTg3LFxuICAgICAgMTU4LFxuICAgICAgMjQyLFxuICAgICAgMTI0LFxuICAgICAgMjAwLFxuICAgICAgMTgyLFxuICAgICAgNDcsXG4gICAgICAxMDUsXG4gICAgICAzOSxcbiAgICAgIDE3OSxcbiAgICAgIDg4LFxuICAgICAgOTAsXG4gICAgICA5MyxcbiAgICAgIDk0LFxuICAgICAgMTUwLFxuICAgICAgNDMsXG4gICAgICA2NyxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHQTlEQUdNQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNjg3NjM1Nzo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY5MTY2MzYzNDQ3NDY4OjYyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05LTm10UUNFSldjdWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibjkyK213dER5WXAxRkVSc1VKdEZFTHdsMzcvUURlNE04OGVpSnlSTDNpZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLdEw5a3J3NlJLZG80ZWh3K0NEbzRTVGtKSXlldFlTbGRDeDVZRUFic3c1TVBqY1kySDRoelN1NkhnOUllMGc2NzZMRDZhdE1nd1RZbXc2LzMzbnVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoeDRhaHBZMmNlejVMd0l2VGtyZG1aTHUyVm52UGtEdlU2OW5QRXhYT1NsNU9XdS94WmRKdytlRG5QSnNkakhWR2hVK2c2RnRqTXZpcUJTTVN5WS9oZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM2ODc2MzU3OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY5OTI5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVpd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWl3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiS1dWaDUxa1JpS3NhU1RvWGRXWkV5LzdhWFZsQlh6TFpIR25wQ2Q0L2MzMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTM0NTk0MDksXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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

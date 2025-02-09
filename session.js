//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                        LLW MD BOT                                               //
//                                                                                                      //
//                                         Ｖ：1.0                                                       //
//
//
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © LLW MD V1
//  * @version      : 1.0
//  * @author       : Lakira Lakdam
//  * @youtube      : https://www.youtube.com/@GAMINGLLWFF
//  * @description  : © LLW MD V1, A Multi-functional WhatsApp bot created by Lakira Lakdam 
//*
//*
//Base by Lakira Lakdam
//GitHub: @LLWEDITZ
//WhatsApp: +94705564619
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@GAMINGLLWFF
//   * Created By GitHub: LLW EDITZ
//   * Credit To Lakira Lakdam
//   * © 2025 © LLW MD V1.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Your session id here",
PORT: process.env.PORT || "8000"
};

const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'bot', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: '.menu ๐ฅฐ'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '.help'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'EFX SONGS ๐ฅ \n\n โญโโโโโโโโโโโโโโโโโโโฎ\n     โฐ๐๐๐๐๐๐๐ ๐๐๐๐ ๐3โฐ \n โญโโโโโโโโโโโโโโโโโโโฏ\n โ \n โ     โ ๐๐๐ก ๐๐๐๐๐๐ โ \n โ \n โ \n โ   โข s1. Done Da Da \n โ   โข s2. Calabria 2007 \n โ   โข s3. Calabria (Firebeatz Remix) \n โ   โข s4. Calabria 2007 #2 \n โ   โข s5. Calabria \n โ   โข s6. Love Nwantiti (ah ah ah) [Remix] \n โ   โข s7. Drive For Ever BBoy Music \n โ   โข s8. go off \n โ   โข s9. Raataan Lambiyan (From Shershaah) \n โ   โข s10. Raataan Lambiyan (Lofi) \n โ   โข s11. Raataan Lambiyan (Lofi) #2 \n โ   โข s12. Play date \n โ   โข s13. You are my enemy \n โ   โข s14. Sochta Hoo Ke Woh Kitne Masoom The \n โ   โข s15. love nwantiti (North African Remix) \n โ   โข s16. arabic song1 \n โ   โข s17. arabic song2 \n โ   โข s18. Old Town Road (Remix) \n โ   โข s19. Morirรฒ Da Re \n โ   โข s20. Talking To The Moon \n โ   โข s21. Toxic \n โ   โข s22. Such a Whore (Potato Remix) \n โ   โข s23. INDUSTRY BABY \n โ   โข s24. How You Like That (Huseyin Yavas Remix) \n โ   โข s25. Maine Royaan (Lofi Remix) \n โ   โข s26. Ghalat Fehmi \n โ   โข s27. XXX Changes \n โ   โข s28. WHATS POPPIN \n โ   โข s29. CHANGES (LoFi Remix) \n โ   โข s30. 7 Rings \n โ   โข s31. ะะฐะนั ัั ะฟะพะนะผะฐะปะฐ \n โ   โข s32. Goodbye [Slow Version] \n โ   โข s33. Way 2 Sexy \n โ   โข s34. 8teen \n โ   โข s35. Tujhpe Pyaar Aaya \n โ   โข s36. Ola La \n โ   โข s37. Talking To The Moon 2 \n โ   โข s38. Your Woman \n โ   โข s39. Mollies, Percs & Drank \n โ   โข s40. drive for ever#1 \n โ   โข s41. On The Floor \n โ   โข s42. Carol Of The Bells \n โ   โข s43. My Ordinary Life \n โ   โข s44. Rasputin (Magentaudios Edit) \n โ   โข s45. Goodbye [Slow Version] \n โ   โข s46. Vaathi Coming (From Master) \n โ   โข s47. One Dance \n โ   โข s48. Mr. Saxobeat \n โ   โข s49. Be My Love \n โ   โข s50. Seรฑorita \n โ   โข s51. Hiya Hiya \n โ   โข s52. Habibi (Slowed) \n โ   โข s53. drive for ever#2 \n โ   โข s54. #BrooklynBloodPop! \n โ \n โฐโโโโโโโโโโโโโโโโโโโฏ \n  \n โญโโโโโโโโโโโโโโโโโโโฎ \n โ ๐ฝ๐ฑ : ๐๐๐๐ ๐๐ข๐๐ ๐๐ ๐๐ \n โ ๐๐ ๐?๐๐๐๐๐๐ ๐๐๐๐๐ ๐?๐๐๐- \n โ   ๐๐๐ ๐๐๐๐๐๐๐๐โคโ๐ฅ \n โ  ๐๐: s35 \n โฐโโโโโโโโโโโโโโโโโโโฏ \n '}, type: 1},
      ]
      
      const buttonMessage = {
          contentText: "Hey bro , How Are You๐โค๏ธ ?",
          footerText: 'owner pepesir  ยฉ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));

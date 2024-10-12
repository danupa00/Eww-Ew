const { copy } = require('fs-extra')
const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
let cap = '*Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴅᴀɴᴜxᴢᴢ*'
//=====================================================================================
cmd({
        pattern: "alive",
        react: "👻",
        alias: ["online", "test", "bot"],
        desc: "Check bot online or no.",
        category: "other",
        use: '.alive',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        prefix,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            let monspace = '```'
            const sssf = `${monspace}🤍 Hello ${pushname} I'm alive now${monspace}

*😼ＫＥＮＺＩ-ＭＤ🤍*
    
> *Name Bot* : Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2
> *Versions* : ${require("../package.json").version}
> *Type Script* : ᴘʟᴜɢɪɴs
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}`

            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "𝐊𝐄𝐍𝐙𝐈 𝐌𝐄𝐍𝐔 📑",
                        id: ".menu"
                    }),
                }
            ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: sssf

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })
    
    cmd({
        pattern: "animes",
        react: "😽",
        alias: ["status"],
        desc: "Check bot system status.",
        category: "other",
        use: '.animes',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
    try{
        
    
    const rtime = await runtime(process.uptime())
    
    const txt =`🪙Command : anime
📝Desc : You can get Anime images.
☘Use: .anime

🪙Command : animeeg
📝Desc : You Can search Animes.
☘Use: .animeeg

🪙Command : loli
📝Desc : Anime cmd.
☘Use: .loli

🪙Command : waifu
📝Desc : Anime cmd.
☘Use: .waifu

🪙Command : neko
📝Desc : Anime cmd.
☘Use: .neko

🪙Command : megumin
📝Desc : Anime cmd.
☘Use: .megumin

🪙Command : maid
📝Desc : Anime cmd.
☘Use: .maid

🪙Command : awoo
📝Desc : Anime cmd.
☘Use: .awoo

🪙Command : anime1
📝Desc : Anime cmd.
☘Use: .anime1

🪙Command : anime2
📝Desc : Anime cmd.
☘Use: .anime2

🪙Command : anime3
📝Desc : Anime cmd.
☘Use: .anime3

🪙Command : anime4
📝Desc : Anime cmd.
☘Use: .anime4

🪙Command : anime5
📝Desc : Anime cmd.
☘Use: .anime5

🪙Command : nsfw1
📝Desc : Anime cmd.
☘Use: .nsfw1

🪙Command : nsfw2
📝Desc : Anime cmd.
☘Use: .nsfw2

🪙Command : nsfw3
📝Desc : Anime cmd.
☘Use: .nsfw3

🪙Command : nsfw4
📝Desc : Anime cmd.
☘Use: .nsfw4

🪙Command : nsfw5
📝Desc : Anime cmd.
☘Use: .nsfw5`
    
    let buttons = [
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "PING 🧬",
              id: ".ping"
          }),
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
            display_text: "SYSTEM ⛓️",
            id: ".cpu"
        }),
    },

    
    ]
    
    let message = {
        image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      
    
    
      body: txt
    
    }
    
    
    
    
    
    
    return await conn.sendButtonMessage(from, buttons, m, message)
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
    })

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "list", "commands", "cmd"],
    desc: "Get bot\'s command list.",
    category: "other",
    use: '.menu',
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
        if (os.hostname().length == 12) hostname = 'replit'
        else if (os.hostname().length == 36) hostname = 'heroku'
        else if (os.hostname().length == 8) hostname = 'koyeb'
        else hostname = os.hostname()
        let monspace = '```'
        const MNG = `👋 *Hey ${pushname}!* 🍃
Welcome to Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2, bot WhatsApp is ready to help you!

_____________________________________

😼ＫＥＮＺＩ-ＭＤ🤗

> Hey 💠 This Is Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 MENU 💗

*ʜɪ 💗, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ 📁, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ* 💠

*🚫𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*🚫𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
_____________________________________

┌─ 📊 *DASHBOARD* ─┐
│
├─ 🩵 *User*: ${pushname}
├─ 🩵 *Mode*: Public
│
├─ 🤖 *INFO BOT* ─┐
│
├─ 🤍 *ɴᴀᴍᴇ ʙᴏᴛ*: Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2
├─ 🤍 *ᴘʟᴀᴛꜰᴏʀᴍ:* ${hostname}
├─ 🤍 *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : ᴘʟᴜɢɪɴs
├─ 🤍 *ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
├─ 🤍 *ᴍᴇᴍᴏʀʏ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
└─ 🤍 *ᴠᴇʀsɪᴏɴs* : ${require("../package.json").version}
│
└─ 💐 Thank you for using *Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2* ! 🌟`

        const categories = [];
        const categoryMap = new Map();

        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
                const category = cmd.category.toUpperCase();
                if (!categoryMap.has(category)) {
                    categories.push(category);
                    categoryMap.set(category, []);
                }
                categoryMap.get(category).push(cmd.pattern);
            }
        }

        const rows = []
        for (const category of categories) {
            rows.push({
                header: '',
                title: `${category} MENU`,
                description: '',
                id: `.category ${category}`
            })
        }

        let buttons = [{
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: '𝙸𝙽𝙵𝙾 𝙺𝙴𝙽𝚉𝙸-𝙼𝙳 🔍',
                    url: `https://whatsapp.com/channel/0029Va8f3smKWEKvPUzXQv34`,
                    merchant_url: `https://whatsapp.com/channel/0029Va8f3smKWEKvPUzXQv34`
                }),
            },
            {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                    title: '𝐁𝐎𝐓-𝐂𝐀𝐓𝐄𝐆𝐎𝐑𝐘 🩵',
                    sections: [{
                        title: 'Please select a category',
                        highlight_label: 'Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2',
                        rows: rows
                    }]
                }),
            }
        ]

        let opts = {
            image: `https://8030.us.kg/file/mKXIMtf1PF1i.jpg`,
            header: '',
            footer: wm,
            body: MNG
        }

        return await conn.sendButtonMessage(from, buttons, m, opts)
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})

cmd({
    pattern: "category",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        let wm = '*Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴅᴀɴᴜxᴢᴢ*'
        const category = q.trim().toUpperCase();
        let commandList = `*㊂ ${category} Command List:*\n\n`;

        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (cmd.category.toUpperCase() === category) {
                commandList += ` • *${cmd.use}* \n`;
            }
        }

        commandList += `\n✦ *Total Commands in ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: commandList,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363192956026815@newsletter',
      newsletterName: "😼ＫＥＮＺＩ-ＭＤ🤍",
      serverMessageId: 1234
    },
externalAdReply: { 
title: 'Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://github.com/mine-bbh" ,
thumbnailUrl: 'https://8030.us.kg/file/mKXIMtf1PF1i.jpg' ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})

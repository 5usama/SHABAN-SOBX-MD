/*
created MR SHABAN 
contact 923059395959
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs sʜᴀʙᴀɴ-sᴏʙx-ᴍᴅ-ʙᴏᴛ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ ᴍʀ-sʜᴀʙᴀɴ...⁴³²*
*│  ◦* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ sʜᴀʙᴀɴ.s*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᴍʀ sʜᴀʙᴀɴ40*
*│  ◦* *ᴀɢᴇ➠ ᴛᴡᴇɴᴛʏ ᴏɴᴇ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SHABAN-SOBX-MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠sɪʟᴇɴᴛ ʟᴏᴠᴇʀ⁴³²*
*│  ◦* *▢➠sɪʟᴇɴᴛ ᴋɪʟʟᴇʀ⁴⁶⁹*
*│  ◦* *▢➠ᴍᴅ ᴍɪsʙʜᴀ⁷¹⁹*
*│  ◦* *▢➠ᴍᴜᴢᴀᴍᴀʟ ᴢᴀᴋʜᴍɪ*
*│  ◦* *▢➠ᴍᴜʙᴀsʜᴀʀ ᴢᴀᴋʜᴍɪ*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.sʜᴀʙᴀɴ⁴³²
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

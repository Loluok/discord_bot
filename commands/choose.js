import { EmbedBuilder } from "discord.js";

export default async function getChoose(message, messageContent) {
    //message.content === "r!choose opcion1, opcion2"
    // messageContent === "opcion1, opcion2"

    if (messageContent) {
        //  console.log(messageContent)
        const choose = messageContent.join(" ").split(",")
        const randomChoose = choose[Math.floor(Math.random() * choose.length)];
        message.reply(`**La opción escogida es:** 
${randomChoose.trim()}`)
    }
    else {
        message.reply("Debes colocar una , para cada opción.")
    }

}

/**
 * 
 * [
      'esta',   'es',
      'la',     'opcion',
      '1,',     'esta',
      'es',     'la',
      'opcion', '2'
  ]

  Si hacemos join(" ") va a quedar: "esta es la opcion 1, esta es la opcion 2"
  Si hacemos .split(",") ["esta es la opcion 1", " esta es la opcion 2"]
 */
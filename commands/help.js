import { EmbedBuilder } from "discord.js";
import { PROFILE_BOT_URL } from "../const.js";

const options = {
  timeZone: 'America/Argentina/Buenos_Aires',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

const formatter = new Intl.DateTimeFormat('es-AR', options);

export default function getHelp(message) {
  const date = new Date();

  const timeInArgentina = formatter.format(date);
    const embed = new EmbedBuilder()
        .setColor("B79A81")
        .setTitle("RAYE BOT")
        .setDescription("**[Invitación del Bot](https://discord.com/oauth2/authorize?client_id=1309585054493573171)**")
        .setThumbnail(PROFILE_BOT_URL)
        .setFooter({ text: `Hora: ${timeInArgentina}` })
        .addFields(
            {
                name: "🧸 — Interacción.",
                value: "`8ball`, `ask`, `avatar`, `choose`, `gay`, `say`, `ship`",
                inline: false,
            },
            {
                name: "🦆 — Entretenimiento.",
                value: "`angry`, `blush`, `bored`, `cry`, `dance`, `hi`, `hug`, `pat`, `punch`, `run`, `sad`, `sing`, `slap`, `sleep`",
                inline: false,
            },  
            {
                name: "💡 — Inteligencia Artificial.",
                value: "`hola gays Blood va a hacer que, no sabe, va a hacer algo`",
                inline: false,
            },
            {
                name: "📒 — Moderación.",
                value: "`ban`, `kick`",
                inline: false,
            },
            {
                name: "💐 — Sobre nosotros.",
                value: "`blood`, `lolu`, `redes`",
                inline: false,
            }
        );
    message.reply({ embeds: [embed] });
}

// te estoy observando :( me dolió. <3 t quiero 💕 <:🔥🔥🔥🔥🔥 😍🤣💕💕😂🤣

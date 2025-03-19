const messages = [
  {
    start: "Tiraste un ",
    end: "!"
  },
  {
    start: "¡Te salió un ",
    end: "!"
  },
  {
    start: "¡Buscabas un ",
    end: ", y te salió!"
  }
]

export default function getDice(message) {
  const randomDiceNumber = Math.floor(Math.random() * 6) + 1;
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const fullMesage = `🎲 ${randomMessage.start}**${randomDiceNumber}**${randomMessage.end || ""}`;

  message.reply(fullMesage);
}
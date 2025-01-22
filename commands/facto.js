const factMessages = ["loluok 02 31", "bañarse está infravalorado", "tora es femboy", "joe es peruano", "comemos palta no aguacate", "el tomate es asqueroso", "frio > calor", "celeste tiene 2 jugadores", "En la vida solo hay dos géneros: hombre o infiel.", "Parece la iglesia esto, lleno de virgenes", "monogamia o bala", "blood infiel"]

export default function getFact(message) {
    const randomIndex = Math.floor(Math.random() * factMessages.length);
    const fact = factMessages[randomIndex];

    message.channel.send(`**Facto número ${randomIndex + 1}/${factMessages.length}** 🚬
${fact}
        `)
}

export default function getTranslate(message, messageContent) {
  translate(messageContent, "en").then(res => {
    message.reply(res[0][0][0]);
  });
}

async function translate(text, target) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;
  const response = await fetch(url);
  return await response.json();
}


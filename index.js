import OpenAI from 'openai';

console.log("Hello")
const mySecret = process.env['key']


const openai = new OpenAI({
  apiKey: mySecret
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Hi chatgpt how are you' },],
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices);
}

main();

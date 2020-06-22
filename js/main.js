let intro = ['Hello, I am Austin', 'Hi, I am Austin', 'Hello, my name is Austin', 'Hi, I am Austin']
let help = ['What can I do for you?, How may I help you?', 'How can i be of help?']
let greetings = ['I am fine', 'I am doing fine', 'I am great', 'I am good']
let greetReply = { morning: 'Good Morning', noon: 'Good Afternoon', eve: 'Good Evening', day: 'Good day' }
let thank = ['You are most welcome', 'It is my pleasure', 'Oh do not mention']
let closing = ['Alright. Bye', 'Bye. Take care', 'Bye']

let mic = document.getElementById('mic')
let chatAreaMain = document.querySelector('.chatarea-main')
let chatAreaOuter = document.querySelector('.chatarea-outer')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

// user message
function showUserMsg(userMessage) {
  let output = ''
  output += `
    <div class="chatarea-inner user text-left py-3 h5">
      <span class="text-light bg-info p-1">${userMessage}</span>
    </div>
  `
  chatAreaOuter.innerHTML += output
  return chatAreaOuter
}
// bot message
function showBotMsg(botMessage) {
  let output = ''
  output += `
    <div class="chatarea-inner chatbot text-right py-3 h5">
      <span class="text-light bg-success p-1">${botMessage}</span>
    </div>
  `
  chatAreaOuter.innerHTML += output
  return chatAreaOuter
}

// bot voice message
function chatBotVoice(botVoiceMsg) {
  const speech = new SpeechSynthesisUtterance()
  speech.text = 'I do not understand. Do you want some Pizza?'

  if (botVoiceMsg.includes('hello')) {
    let finalResult = `${intro[Math.floor(Math.random() * intro.length)]}. ${help[Math.floor(Math.random() * help.length)]}`
    speech.text = finalResult
  }
  if (botVoiceMsg.includes('who are you')) {
    let finalResult = `${intro[Math.floor(Math.random() * intro.length)]}. ${help[Math.floor(Math.random() * help.length)]}`
    speech.text = finalResult
  }
  if (botVoiceMsg.includes('hey')) {
    speech.text = `Welcome. ${intro[Math.floor(Math.random() * intro.length)]}. ${help[Math.floor(Math.random() * help.length)]}`
  }
  if (botVoiceMsg.includes('hey Austin')) {
    speech.text = `Welcome. ${help[Math.floor(Math.random() * help.length)]}`
  }
  if (botVoiceMsg.includes('good morning')) {
    let finalResult = `${greetReply.morning}. ${help[Math.floor(Math.random() * help.length)]}`
    speech.text = finalResult
  }
  if (botVoiceMsg.includes('good afternoon')) {
    let finalResult = `${greetReply.noon}. ${help[Math.floor(Math.random() * help.length)]}`
    speech.text = finalResult
  }
  if (botVoiceMsg.includes('good evening')) {
    let finalResult = `${greetReply.eve}. ${help[Math.floor(Math.random() * help.length)]}`
    speech.text = finalResult
  }
  if (botVoiceMsg.includes('good day')) {
    let finalResult = `${greetReply.day}. ${help[Math.floor(Math.random() * help.length)]}`
    speech.text = finalResult
  }
  
  if (botVoiceMsg.includes('who are you')) {
    let finalResult = intro[Math.floor(Math.random() * intro.length)]
    speech.text = finalResult
  }
  if (botVoiceMsg.includes('how are you')) {
    let finalResult = `${greetings[Math.floor(Math.random() * greetings.length)]}. And you?`
    speech.text = finalResult
  }
  if (botVoiceMsg.includes(greetings[0])) speech.text = help[Math.floor(Math.random() * help.length)]
  if (botVoiceMsg.includes(greetings[1])) speech.text = help[Math.floor(Math.random() * help.length)]
  if (botVoiceMsg.includes(greetings[2])) speech.text = help[Math.floor(Math.random() * help.length)]
  if (botVoiceMsg.includes(greetings[3])) speech.text = help[Math.floor(Math.random() * help.length)]
  
  if (botVoiceMsg.includes('Pizza')) {
    speech.text = 'Pizza is unavailable. Please check back later.'
  }
  if (botVoiceMsg.includes('pizza')) {
    speech.text = 'Pizza is unavailable. Please check back later.'
  }
  if (botVoiceMsg.includes('yes want pizza')) {
    speech.text = 'Pizza is unavailable. Please check back later.'
  }
  if (botVoiceMsg.includes('yes want Pizza')) {
    speech.text = 'Pizza is unavailable. Please check back later.'
  }
  if (botVoiceMsg.includes('yes')) {
    speech.text = 'Pizza is unavailable. Please check back later.'
  }
  if (botVoiceMsg.includes('no')) {
    speech.text = `${closing[Math.floor(Math.random() * closing.length)]}`
  }
  if (botVoiceMsg.includes('alright')) speech.text = `${closing[Math.floor(Math.random() * closing.length)]}`
  if (botVoiceMsg.includes('ok')) speech.text = `${closing[Math.floor(Math.random() * closing.length)]}`
  if (botVoiceMsg.includes('thanks')) speech.text = `${thank[Math.floor(Math.random() * thank.length)]}`
  if (botVoiceMsg.includes('thank you')) speech.text = `${thank[Math.floor(Math.random() * thank.length)]}`
  
  window.speechSynthesis.speak(speech)
  chatAreaMain.appendChild(showBotMsg(speech.text))
}

recognition.onresult = (e) => {
  let resultIndex = e.resultIndex
  let transcript = e.results[resultIndex][0].transcript

  chatAreaMain.appendChild(showUserMsg(transcript))
  chatBotVoice(transcript)
}

mic.addEventListener('click', () => {
  recognition.start()

  console.log('Activated')
})


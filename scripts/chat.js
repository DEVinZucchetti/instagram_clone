
document.getElementById('chat-form').addEventListener('submit', sendMessage)

function sendMessage(event) {
  event.preventDefault()
  const messageInput = document.getElementById('messageInput');
  
  const message = messageInput.value;
  
  if (message.trim() !== '') {
    const chat = document.getElementById('chat');

    const userMessageElement = document.createElement('p');
    userMessageElement.innerHTML = `Você: ${message}`

    chat.appendChild(userMessageElement);

    messageInput.value = '';
    chat.scrollTop = chat.scrollHeight;
    clearInterval(botRun)
  }
}

function generateRandomBotMessage() {
  const messages = [
    "Olá, como posso ajudar?",
    "Estou aqui para responder suas perguntas!",
    "Que ótimo ver você por aqui!",
    "Estou sempre aprendendo coisas novas!",
    "Posso te fornecer informações e dicas úteis.",
    "Estou programado para ser útil e amigável!",
    "Sinta-se à vontade para me perguntar qualquer coisa!",
    "Estou pronto para interagir com você!",
    "Vamos começar!",
    "Estou aqui para tornar sua vida mais fácil.",
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// Gera uma mensagem aleatório do bot
const botRun = setInterval(() => {
  const chat = document.getElementById('chat');
  const botMessage = generateRandomBotMessage();

  const botMessageElement = document.createElement('p');

  botMessageElement.innerHTML = `Bot: ${botMessage}`

  chat.appendChild(botMessageElement);
  chat.scrollTop = chat.scrollHeight;
}, 5000);
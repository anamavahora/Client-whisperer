const chatBox = document.getElementById('chat-box');
const input = document.getElementById('user-input');

function sendMessage() {
  const userText = input.value.trim();
  if (!userText) return;

  addMessage('You', userText);
  input.value = '';
  simulateAIResponse(userText);
}

function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.innerHTML = `<b>${sender}:</b> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function simulateAIResponse(prompt) {
  setTimeout(() => {
    const aiReply = "🤖 AI: This is a sample reply based on your message: " + prompt;
    addMessage('AI', aiReply);
  }, 1000);
}

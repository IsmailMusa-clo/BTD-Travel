// Chat Search Input
const chatSearchButton = document.querySelector('.chatSearchBtn');
const chatSearchInput = document.querySelector('.chatSearchInput');

chatSearchButton.addEventListener('click', () => {

  chatSearchInput.classList.toggle('hidden')
})

window.addEventListener('click', (e) => {
  if (!chatSearchInput.contains(e.target) && e.target !== chatSearchButton) {
    chatSearchInput.classList.add('hidden');
  }
});

// Chat Dropdown Menu
const chatOptionsButton = document.getElementById('chatOptionsButton');
const chatDropdownMenu = document.getElementById('chatDropdownMenu');

chatOptionsButton.addEventListener('click', () => {
  event.stopPropagation();
  chatDropdownMenu.classList.toggle('hidden');
});

// Close the dropdown menu when clicking outside
window.addEventListener('click', (e) => {
  if (!chatDropdownMenu.contains(e.target) && e.target !== chatOptionsButton) {
    chatDropdownMenu.classList.add('hidden');
  }
});

const messageInput = document.getElementById('messageInput');
const chatBody = document.getElementById('chatBody');
const emojiButton = document.getElementById('emojiButton');
const emojiPicker = document.getElementById('emojiPicker');
const sendMessageButton = document.getElementById('sendMessage');
const attachButton = document.getElementById('attachButton');
const fileInput = document.getElementById('fileInput');

// Load messages from local storage on page load
document.addEventListener("DOMContentLoaded", loadMessages);

// Toggle emoji picker
emojiButton.addEventListener('click', (e) => {
  emojiPicker.classList.toggle('hidden');
  e.stopPropagation();
});

emojiPicker.addEventListener('emoji-click', (event) => {
  messageInput.value += event.detail.unicode;
});

// Add file attachment functionality
attachButton.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    addMessage(`📎 مرفق: ${file.name}`);
  }
});

// Send message with "Enter" key or "Send" button
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});
sendMessageButton.addEventListener('click', sendMessage);

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    addMessage(message);
    messageInput.value = '';
  }
}

// Function to add message to chat body and save it in local storage
function addMessage(content) {
  const chatContainer = document.querySelector('.chat-container');
  const messageElement = document.createElement('div');
  messageElement.classList.add('flex', 'justify-end', 'mt-5');
  messageElement.innerHTML = `
      <div>
      <div class="bg-textGreen py-2 px-4 rounded-3xl w-fit mb-1">
        <p class="text-white">${content}</p>
      </div>
      <span class="block text-xs text-gray-400 ml-2 text-left">${new Date().toLocaleTimeString('ar-EG', {
          hour: 'numeric',
          minute: 'numeric', hour12: true
        })}</span>
      </div>
    `;
  chatBody.appendChild(messageElement);
  saveMessageToLocalStorage(content);
  chatContainer.scrollTo({
    top: chatContainer.scrollHeight,
    behavior: 'smooth'
  })
}

// Save message to local storage
function saveMessageToLocalStorage(message) {
  const messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
  messages.push({ content: message, timestamp: new Date() });
  localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Load messages from local storage
function loadMessages() {
  const chatContainer = document.querySelector('.chat-container');
  const messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
  messages.forEach((msg) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('flex', 'flex-col', 'items-end', 'mt-5');
    messageElement.innerHTML = `
<div class="bg-textGreen py-2 px-4 rounded-3xl w-fit max-w-[70%] mb-1">
 <p class="text-white">${msg.content}</p>
</div>
<span class="block text-xs text-gray-400 ml-2 text-left">
 ${new Date(msg.timestamp).toLocaleTimeString('ar-EG', { hour: 'numeric', minute: 'numeric', hour12: true })}
</span>
`;
    chatBody.appendChild(messageElement);
  });

  chatContainer.scrollTop = chatContainer.scrollHeight
}

// Hide emoji picker when clicking outside
document.addEventListener('click', () => {
  emojiPicker.classList.add('hidden');
});
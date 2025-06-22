<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple AI Chat</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .chat-container {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            height: 500px;
            display: flex;
            flex-direction: column;
        }
        
        .chat-header {
            background-color: #4285f4;
            color: white;
            padding: 15px;
            border-radius: 10px 10px 0 0;
            text-align: center;
            font-weight: bold;
        }
        
        .chat-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }
        
        .message {
            margin-bottom: 15px;
            padding: 10px 15px;
            border-radius: 18px;
            max-width: 70%;
        }
        
        .user-message {
            background-color: #e3f2fd;
            margin-left: auto;
            border-bottom-right-radius: 5px;
        }
        
        .ai-message {
            background-color: #f1f1f1;
            margin-right: auto;
            border-bottom-left-radius: 5px;
        }
        
        .chat-input {
            display: flex;
            padding: 15px;
            border-top: 1px solid #eee;
        }
        
        #user-input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 20px;
            outline: none;
        }
        
        #send-button {
            background-color: #4285f4;
            color: white;
            border: none;
            border-radius: 20px;
            padding: 10px 20px;
            margin-left: 10px;
            cursor: pointer;
        }
        
        #send-button:hover {
            background-color: #3367d6;
        }
    </style>
</head>
<body>
    <div class="chat-container">
        <div class="chat-header">
            Simple AI Assistant
        </div>
        <div class="chat-messages" id="chat-messages">
            <div class="message ai-message">
                Hello! I'm your simple AI assistant. How can I help you today?
            </div>
        </div>
        <div class="chat-input">
            <input type="text" id="user-input" placeholder="Type your message here..." autocomplete="off">
            <button id="send-button">Send</button>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const chatMessages = document.getElementById('chat-messages');
            const userInput = document.getElementById('user-input');
            const sendButton = document.getElementById('send-button');
            
            // Simple AI responses
            const aiResponses = {
                "hello": "Hello there! How can I assist you today?",
                "hi": "Hi! What can I do for you?",
                "how are you": "I'm just a computer program, but I'm functioning well! How about you?",
                "what's your name": "I'm a simple AI chatbot created to help you.",
                "what can you do": "I can answer simple questions, have basic conversations, and try to be helpful!",
                "goodbye": "Goodbye! Feel free to come back if you have more questions.",
                "bye": "Bye! Have a great day!",
                "thanks": "You're welcome! Is there anything else I can help with?",
                "thank you": "My pleasure! Let me know if you need anything else."
            };
            
            // Default response if no match found
            const defaultResponse = "I'm not sure how to respond to that. Could you try asking something else?";
            
            function addMessage(message, isUser) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.classList.add(isUser ? 'user-message' : 'ai-message');
                messageDiv.textContent = message;
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            function processUserInput() {
                const message = userInput.value.trim().toLowerCase();
                if (message === '') return;
                
                addMessage(message, true);
                userInput.value = '';
                
                // Simulate AI "thinking"
                setTimeout(() => {
                    let response = defaultResponse;
                    
                    // Check for matching responses
                    for (const [key, value] of Object.entries(aiResponses)) {
                        if (message.includes(key)) {
                            response = value;
                            break;
                        }
                    }
                    
                    addMessage(response, false);
                }, 500);
            }
            
            sendButton.addEventListener('click', processUserInput);
            
            userInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    processUserInput();
                }
            });
        });
    </script>
</body>
</html>

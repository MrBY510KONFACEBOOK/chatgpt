const form = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatContainer = document.getElementById('chat-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userMessage = userInput.value;
    chatContainer.innerHTML += `<p>User: ${userMessage}</p>`;
    
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
            prompt: `User: ${userMessage}\nAssistant:`,
            max_tokens: 500
        })
    });
    
    const responseData = await response.json();
    const assistantResponse = responseData.choices[0].text.trim();
    
    chatContainer.innerHTML += `<p>Assistant: ${assistantResponse}</p>`;
    userInput.value = '';
});

document.getElementById('get-id').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: getChatId,
        },
        (results) => {
          if (results && results[0] && results[0].result) {
            document.getElementById('chat-id').textContent = `Chat ID: ${results[0].result}`;
          } else {
            document.getElementById('chat-id').textContent = 'Failed to get chat ID';
          }
        }
      );
    });
  });
  
  function getChatId() {
    const chatId = window.location.href.split('/').pop();
    return chatId;
  }
  
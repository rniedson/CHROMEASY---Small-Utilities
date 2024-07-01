(function() {
  function getChatId() {
    const chatId = window.location.hash.split('/').pop();
    console.log(chatId);
    return chatId;
  }

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getChatId") {
      const chatId = getChatId();
      sendResponse({ chatId: chatId });
    }
  });
})();

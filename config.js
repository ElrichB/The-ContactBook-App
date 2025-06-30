// config.js

// 1) Base URL for all API calls
const rootPath = "https://mysite.itvarsity.org/api/ContactBook/";

// 2) Immediately check for a saved API key
//    – If missing, redirect to the key-entry page and halt further JS.
const apiKey = (function checkApiKey() {
  const key = localStorage.getItem("apiKey");
  if (!key) {
    // change this filename if yours differs
    window.open("enter-api-key.html", "_self");
    return null; 
  }
  return key;
})();

// 3) (Optional) Any other globals can go here.
//    Removed unused getcontact() stub to avoid confusion.
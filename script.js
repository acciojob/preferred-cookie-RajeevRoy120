//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const form = document.getElementById("fontForm");

  // Function to set CSS variables
  function applyPreferences(fontSize, fontColor) {
    document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
    document.documentElement.style.setProperty("--fontcolor", fontColor);
  }

  // Function to get cookie value
  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    else return null;
  }

  // Load saved preferences from cookies
  fontSizeInput.value = getCookie("fontsize") || "16";
  fontColorInput.value = getCookie("fontcolor") || "#000000";
  applyPreferences(fontSizeInput.value, fontColorInput.value);

  // Save preferences in cookies when form is submitted
  form.onsubmit = function (e) {
    e.preventDefault();
    document.cookie = `fontsize=${fontSizeInput.value}; path=/; max-age=31536000`;
    document.cookie = `fontcolor=${fontColorInput.value}; path=/; max-age=31536000`;
    applyPreferences(fontSizeInput.value, fontColorInput.value);
  };
});

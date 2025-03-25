//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const saveButton = document.getElementById("savePreferences");

  // Function to set CSS variables
  function applyPreferences(fontSize, fontColor) {
    document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
    document.documentElement.style.setProperty("--fontcolor", fontColor);
  }

  // Function to get cookie value
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return decodeURIComponent(value);
    }
    return null;
  }

  // Load saved preferences from cookies
  const savedFontSize = getCookie("fontsize") || "16";
  const savedFontColor = getCookie("fontcolor") || "#000000";
  fontSizeInput.value = savedFontSize;
  fontColorInput.value = savedFontColor;
  applyPreferences(savedFontSize, savedFontColor);

  // Save preferences in cookies
  saveButton.addEventListener("click", () => {
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;
    document.cookie = `fontsize=${fontSize}; path=/; max-age=31536000`;
    document.cookie = `fontcolor=${fontColor}; path=/; max-age=31536000`;
    applyPreferences(fontSize, fontColor);
  });
});

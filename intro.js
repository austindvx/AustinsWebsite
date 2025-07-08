// === Terminal Boot & Redirect ===
const bootLines = [
    "> Initializing secure uplink...",
    "> Establishing encrypted connection...",
    "> Verifying credentials...",
    "> Access protocol loaded.",
    "> Ready for authentication."
  ];
  
  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');
  const passwordInput = document.getElementById('password-input');
  const cursor = document.getElementById('cursor');
  
  const fakePassword = "agent007";
  
  let lineIndex = 0;
  
  function typeLine() {
    if (lineIndex < bootLines.length) {
      const line = bootLines[lineIndex];
      let charIndex = 0;
      const lineElement = document.createElement('p');
  
      terminalOutput.appendChild(lineElement);
  
      function typeChar() {
        if (charIndex < line.length) {
          lineElement.textContent += line.charAt(charIndex);
          charIndex++;
          setTimeout(typeChar, 50);
        } else {
          lineIndex++;
          setTimeout(typeLine, 500);
        }
      }
  
      typeChar();
    } else {
      cursor.style.display = 'none';
      terminalInput.style.display = 'block';
      passwordInput.focus();
    }
  }
  
  typeLine();
  
  setInterval(() => {
    if (cursor.style.display !== 'none') {
      cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }
  }, 500);
  
  passwordInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      if (passwordInput.value.trim() === fakePassword) {
        unlockAndRedirect();
      } else {
        const error = document.createElement('p');
        error.textContent = "> Access denied. Try again.";
        terminalOutput.appendChild(error);
        passwordInput.value = "";
      }
    }
  });
  
  function unlockAndRedirect() {
    window.location.href = "dashboard.html";
  }
  
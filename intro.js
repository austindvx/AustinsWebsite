const bootLines = [
    "> Initializing secure uplink...",
    "> Establishing encrypted connection...",
    "> Verifying credentials...",
    "> Access protocol loaded.",
    "> Ready for authentication."
  ];
  
  const terminalOutput = document.getElementById('terminal-output');
  const cursor = document.getElementById('cursor');
  
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
      // Auto-type fake password
      typeFakePassword();
    }
  }
  
  function typeFakePassword() {
    const inputLine = document.createElement('p');
    inputLine.textContent = "> Enter password: ";
    terminalOutput.appendChild(inputLine);
  
    let password = "agent007";
    let index = 0;
  
    const typed = document.createElement('span');
    inputLine.appendChild(typed);
  
    function typeChar() {
      if (index < password.length) {
        typed.textContent += password.charAt(index);
        index++;
        setTimeout(typeChar, 150);
      } else {
        const granted = document.createElement('p');
        granted.textContent = "> Access granted. Welcome, Agent.";
        terminalOutput.appendChild(granted);
  
        setTimeout(unlockAndRedirect, 1500);
      }
    }
  
    typeChar();
  }
  
  function unlockAndRedirect() {
    window.location.href = "dashboard.html";
  }
  
  // Blink cursor
  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
  }, 500);
  
  typeLine();
  
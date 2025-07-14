const cliLines = [
  "> Welcome, Agent.",
  "> This portfolio is your secure hub for my work and projects.",
  "> Use the gadgets above to navigate to Projects, Media, About, and Contact.",
  "> Good luck.",
  "> (Press the cube to return to the top of the page.)"
];

const cliOutput = document.getElementById('cli-output');
/*console.log(cliOutput);  // ✅ See what you get!*/
const cliCursor = document.getElementById('cli-cursor');

let lineIndex = 0;

function typeLine() {
  if (lineIndex < cliLines.length) {
    const line = cliLines[lineIndex];
    let charIndex = 0;
    const lineElement = document.createElement('p');
    cliOutput.appendChild(lineElement);

    function typeChar() {
      if (charIndex < line.length) {
        lineElement.textContent += line.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 40);
      } else {
        lineIndex++;
        setTimeout(typeLine, 300);
      }
    }

    typeChar();
  }
}

setInterval(() => {
  cliCursor.style.opacity = cliCursor.style.opacity === '0' ? '1' : '0';
}, 500);

typeLine();

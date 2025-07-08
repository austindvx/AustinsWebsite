// === Three.js Cube ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  1, // Square aspect ratio for cube overlay
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(400, 400);

const cubeOverlay = document.getElementById('cube-overlay');
cubeOverlay.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

// === Terminal Typing & Unlock ===
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
const siteContent = document.getElementById('site-content');
const terminalSection = document.getElementById('intro-wrapper');

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

// Blink cursor during boot-up
setInterval(() => {
  if (cursor.style.display !== 'none') {
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
  }
}, 500);

// Handle password input
passwordInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (passwordInput.value.trim() === fakePassword) {
      unlockSite();
    } else {
      const error = document.createElement('p');
      error.textContent = "> Access denied. Try again.";
      terminalOutput.appendChild(error);
      passwordInput.value = "";
    }
  }
});

function unlockSite() {
  terminalSection.style.display = 'none';
  siteContent.style.display = 'block';
  siteContent.classList.add('show');

  // Hide cube overlay on unlock
  cubeOverlay.style.display = 'none';
}

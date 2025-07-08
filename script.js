// Setup scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const cubeContainer = document.getElementById('cube-container');
cubeContainer.appendChild(renderer.domElement);


// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const width = 400;
const height = 400;

renderer.setSize(width, height);


camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});


// === Terminal Typing Effect ===

const bootLines = [
    "> Initializing secure uplink...",
    "> Establishing encrypted connection...",
    "> Verifying credentials...",
    "> Access protocol loaded.",
    "> Ready for authentication.",
    "> Loading surveillance feeds...",
    "> Checking external threats...",
    "> Uplink stable.",
    "> Enter Password:"
    
  ];
  
  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');
  const passwordInput = document.getElementById('password-input');
  const cursor = document.getElementById('cursor');
  const siteContent = document.getElementById('site-content');
  const terminalSection = document.getElementById('terminal');
  
  const fakePassword = "agent007";  // Replace with your fake password
  
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
      // Finished booting, show password input
      cursor.style.display = 'none';
      terminalInput.style.display = 'block';
      passwordInput.focus();
    }
  }
  
  typeLine();
  
  // Blink cursor only during boot-up
  setInterval(() => {
    if (cursor.style.display !== 'none') {
      cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }
  }, 500);
  
  // Listen for password submit
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
  }
  
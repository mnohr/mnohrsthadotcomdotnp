// ============= State Management =============
let globalTime = 0; // milliseconds
let currentLapStart = 0; // milliseconds
let running = false;
let lapNumber = 0;
let laps = []; // Array of {lap, split, round}
let interval = null;
let isMuted = false;

// ============= Audio Setup =============
const audio = {
  lap: new Audio('sounds/lap.wav'),
  start: new Audio('sounds/start.wav'),
  stop: new Audio('sounds/stop.wav'),
  japa: new Audio('sounds/Srila Prabhupada Chanting Japa 16 rounds _ Prabhupada Japa video with counting(MP3_160K)-mc.mp3'),
};

// Set japa audio to loop
audio.japa.loop = true;

// ============= DOM Elements =============
const totalTimeEl = document.getElementById('totalTime');
const roundTimeEl = document.getElementById('roundTime');
const statusEl = document.getElementById('status');
const lapsTableEl = document.getElementById('lapsTable');
const playBtn = document.getElementById('playBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const muteBtn = document.getElementById('muteBtn');
const restartSoundBtn = document.getElementById('restartSoundBtn');
const mantraTextEl = document.querySelector('.mantra-text');

// ============= Audio Functions =============
/**
 * Play a sound if not muted
 * @param {string} soundType - 'lap', 'start', or 'stop'
 */
function playSound(soundType) {
  if (!isMuted && audio[soundType]) {
    audio[soundType].currentTime = 0;
    audio[soundType].play().catch(err => console.log('Audio play failed:', err));
  }
}

/**
 * Start mantra animation
 */
function startMantraAnimation() {
  mantraTextEl.classList.add('mantra-animate');
}

/**
 * Stop mantra animation
 */
function stopMantraAnimation() {
  mantraTextEl.classList.remove('mantra-animate');
}

// ============= Time Formatting =============
/**
 * Format milliseconds to MM:SS.D format
 * @param {number} ms - milliseconds
 * @returns {string} formatted time
 */
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const deciseconds = Math.floor((ms % 1000) / 100);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${deciseconds}`;
}

// ============= Display Updates =============
/**
 * Update both total time and current round time displays
 */
function updateDisplay() {
  totalTimeEl.textContent = formatTime(globalTime);
  const currentRound = globalTime - currentLapStart;
  roundTimeEl.textContent = formatTime(currentRound);
}

/**
 * Render all laps in the table
 */
function renderLaps() {
  lapsTableEl.innerHTML = '';
  laps.forEach((lap) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${lap.lap.toString().padStart(2, '0')}</td>
      <td>${formatTime(lap.split)}</td>
      <td>${formatTime(lap.round)}</td>
    `;
    lapsTableEl.appendChild(row);
  });
}

/**
 * Update status message
 */
function updateStatus(message) {
  statusEl.textContent = message;
  statusEl.style.display = message ? 'block' : 'none';
}

// ============= Timer Control =============
/**
 * Start the timer
 */
function startTimer() {
  if (!running) {
    running = true;
    playBtn.textContent = '⏸';
    updateStatus('Chant and hear maha mantra');
    playSound('start');
    startMantraAnimation();
    
    // Play japa chanting if not muted
    if (!isMuted) {
      audio.japa.play().catch(err => console.log('Japa audio play failed:', err));
    }
    
    interval = setInterval(() => {
      globalTime += 10; // Update every 10ms
      updateDisplay();
    }, 10);
  }
}

/**
 * Pause the timer
 */
function pauseTimer() {
  if (running) {
    running = false;
    playBtn.textContent = '▶';
    clearInterval(interval);
    playSound('stop');
    stopMantraAnimation();
    
    // Pause japa chanting
    audio.japa.pause();
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    updateStatus(`Taking a breath... started at ${hours}:${minutes}`);
  }
}

/**
 * Reset all data
 */
function resetTimer() {
  if (confirm('Reset all data?')) {
    globalTime = 0;
    currentLapStart = 0;
    lapNumber = 0;
    laps = [];
    running = false;
    clearInterval(interval);
    playBtn.textContent = '▶';
    updateStatus('Ready to start');
    updateDisplay();
    renderLaps();
  }
}

/**
 * Add a new lap
 */
function addLap() {
  if (globalTime === 0 || !running) {
    updateStatus('Timer must be running');
    return;
  }
  
  lapNumber++;
  const round = globalTime - currentLapStart;
  const split = globalTime;
  
  laps.unshift({ lap: lapNumber, split, round }); // Add to beginning for reverse order
  currentLapStart = globalTime;
  playSound('lap');
  
  renderLaps();
  updateDisplay();
}

/**
 * Toggle mute
 */
function toggleMute() {
  isMuted = !isMuted;
  muteBtn.textContent = isMuted ? '🔇' : '🔊';
  
  // Stop japa audio when muting
  if (isMuted) {
    audio.japa.pause();
  } else if (running) {
    // Resume japa audio if timer is running
    audio.japa.play().catch(err => console.log('Japa audio play failed:', err));
  }
}

/**
 * Restart the japa sound from beginning
 */
function restartSound() {
  audio.japa.currentTime = 0;
  if (!isMuted) {
    audio.japa.play().catch(err => console.log('Japa audio play failed:', err));
  }
}

// ============= Event Listeners =============
playBtn.addEventListener('click', () => {
  if (running) {
    pauseTimer();
  } else {
    startTimer();
  }
});

lapBtn.addEventListener('click', addLap);
resetBtn.addEventListener('click', resetTimer);
muteBtn.addEventListener('click', toggleMute);
restartSoundBtn.addEventListener('click', restartSound);

// ============= Initialization =============
updateStatus('Ready to start');
updateDisplay();

// Service Worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

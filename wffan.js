function countdown(date, elementId) {
  let countDownDate = new Date(date).getTime();
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML = `<span>${days}D:</span> <span>${hours}h:</span> <span>${minutes}m</span>`;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById(elementId).innerHTML = 'LIVE!';
    }
  }, 1000);
}

countdown('2026-03-11, 16:00:00', 'WF-prime'); // Prime Warframe release
countdown('2026-03-11, 16:00:00', 'Update'); // Main & Interim Updates

countdown('2026-02-12, 19:00:00', 'Resurgence'); // Resurgence Rotation
countdown('2026-02-01, 16:00:00', 'IGE1'); // Annual Events
countdown('2025-12-16, 16:00:00', 'IGE2'); // Event 2 (if multiple)
countdown('2025-10-26, 23:00:00', 'Nightwave'); // Nightwave

countdown('2026-02-10, 19:00:00', 'Devshort'); // Tuesdays
countdown('2026-02-11, 20:00:00', 'WF-int'); // Wednesdays
countdown('2026-02-12, 23:00:00', 'PrimeTime'); // Thursdays
countdown('2026-02-27, 19:00:00', 'Devstream'); // Last Friday of Month
countdown('2026-07-11, 16:00:00', 'TennoCon'); //Annual Event


function countdown(date, elementId) {
  let countDownDate = new Date(date).getTime();
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML = `<span>${days}</span> D, <span>${hours}</span>h, <span>${minutes}</span>m`;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById(elementId).innerHTML = 'LIVE!';
    }
  }, 1000);
}

countdown('2025-12-10, 16:00:00', 'WF-prime'); // Prime Warframe release
countdown('2025-12-10, 16:00:00', 'Update'); // Main & Interim Updates

countdown('2025-12-17, 19:00:00', 'Resurgence'); // Resurgence Rotation
countdown('2025-12-01, 16:00:00', 'IGE1'); // In Game Event 1
countdown('2025-12-16, 16:00:00', 'IGE2'); // In Game Event 2
countdown('2025-10-26, 23:00:00', 'Nightwave'); // Nightwave

countdown('2025-12-09, 19:00:00', 'Devshort'); // Tuesdays
countdown('2025-12-10, 20:00:00', 'WF-int'); // Wednesdays
countdown('2025-12-11, 23:00:00', 'PrimeTime'); // Thursdays
countdown('2026-01-30, 19:00:00', 'Devstream'); // Last Friday of Month

function countdown(date, elementId, resetIntervalInDays = null) {
  let countDownDate = new Date(date).getTime();

  function calculateNextResetDate() {
    return countDownDate + resetIntervalInDays * 24 * 60 * 60 * 1000;
  }

  function updateCountdown() {
    let x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      let countdownElement = document.getElementById(elementId);
      if (countdownElement) {
        if (distance > 0) {
          countdownElement.innerHTML = `<span>${days}D:</span> <span>${hours}h:</span> <span>${minutes}m</span>`;
        } else if (distance <= 0 && distance > -900000) {
          countdownElement.innerHTML = "LIVE!";
        } else {
          countdownElement.innerHTML = "LIVE!";
          clearInterval(x);

          if (resetIntervalInDays) {
            countDownDate = calculateNextResetDate();
            updateCountdown();
          }
        }
      }
    }, 1000);
  }

  updateCountdown();
}

window.onload = function () {
  // Static Countdowns
  countdown("2026-03-25 16:00:00", "Update"); // Mainline Updates
  countdown("2026-02-01 16:00:00", "IGE1"); // Seasonal Event
  countdown("2025-12-16 16:00:00", "IGE2"); // Misc Event
  countdown("2026-03-28 19:00:00", "Devstream"); // Last Friday of each month. No stream in December.
  countdown("2026-07-11 16:00:00", "TennoCon"); // TennoCon

  // Auto-resetting Countdowns
  countdown("2026-02-17 19:00:00", "DevShort", 7); // Tuesday
  countdown("2026-02-11 20:00:00", "eTenno", 7); // Wednesday
  countdown("2026-02-12 23:00:00", "primeTime", 7); // Thursday
  countdown("2026-02-19 18:00:00", "Resurgence", 28); // 28 day rotation, except - December to February
};

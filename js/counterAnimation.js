const counters = document.querySelectorAll('.postOffersCounter');

function countToNumber(target, endNumber) {
  let startNumber = 0;
  let increment = endNumber / 100;

  const interval = setInterval(() => {
    startNumber += increment;
    if (startNumber >= endNumber) {
      clearInterval(interval);
      target.innerText = endNumber;
    } else {
      target.innerText = Math.floor(startNumber);
    }
  }, 10);
}

counters.forEach(counter => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countToNumber(counter, 25);
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(counter);
})

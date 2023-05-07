  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  let intervalId = null;

  startButton.addEventListener('click', function() {
    startButton.disabled = true;
    intervalId = setInterval(function() {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

  stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    clearInterval(intervalId);
  });
   
const container = document.createElement('div');
    container.classList.add('container');
    const startBut = document.querySelector('[data-start]');
    const stopBut = document.querySelector('[data-stop]');
    container.appendChild(startBut);
    container.appendChild(stopBut);
    document.body.insertBefore(container, document.body.secondChild);
const btn = document.getElementById('btn');
const stopOn = document.querySelector('.stop-on');
const stopOff = document.querySelector('.stop-off');
const walkOn = document.querySelector('.walk-on');
const walkOff = document.querySelector('.walk-off');

stopOff.style.display = 'none';
walkOn.style.display = 'none';

btn.addEventListener('click', () => {
  if (stopOff.style.display === 'none') {
    stopOn.style.display = 'none';
    stopOff.style.display = 'inline-block';
    walkOn.style.display = 'inline-block';
    walkOff.style.display = 'none';
  } else {
    stopOn.style.display = 'inline-block';
    stopOff.style.display = 'none';
    walkOn.style.display = 'none';
    walkOff.style.display = 'inline-block';
  }

  setTimeout(() => {
    stopOn.style.display = 'inline-block';
    stopOff.style.display = 'none';
    walkOn.style.display = 'none';
    walkOff.style.display = 'inline-block';
  }, 3000);
});

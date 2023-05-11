const btn = document.getElementById('btn');
const on = document.getElementById('on');
const off = document.getElementById('off');

console.log(on, off);

btn.addEventListener('click', () => {
  on.classList.toggle('stop-off');
  off.classList.toggle('walk-on');

  setTimeout(() => {
    on.className = 'light stop-on';
    off.className = 'light walk-off';
  }, 3000);
});

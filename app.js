const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const solarBtn = document.getElementById('solar');
const body = document.body;

// Apply the saved theme on reload
const theme = localStorage.getItem('theme');
const isSolar = JSON.parse(localStorage.getItem('isSolar'));

// Apply saved themes
theme && body.classList.add('theme', theme);
theme && isSolar && body.classList.add('solar');

lightBtn.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};

darkBtn.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

solarBtn.onclick = () => {
  const isSolarNow = body.classList.toggle('solar');

  solarBtn.innerText = isSolarNow ? 'Normalize' : 'Solarize';
  localStorage.setItem('isSolar', JSON.stringify(isSolarNow));
};

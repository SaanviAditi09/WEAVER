const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

if (menu) {
  menu.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? '' : 'flex';
    if (!open) {
      nav.style.position = 'absolute';
      nav.style.top = '70px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.padding = '20px 7vw';
      nav.style.background = '#f4f1eb';
      nav.style.flexDirection = 'column';
      nav.style.alignItems = 'flex-start';
      nav.style.borderBottom = '1px solid #d8d3c9';
    }
  });
}

const form = document.querySelector('.request-form');
if (form) {
  form.addEventListener('submit', () => {
    const button = form.querySelector('button');
    button.disabled = true;
    button.innerHTML = 'Sending…';
  });
}

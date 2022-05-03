let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', onClick);
}

function onClick() {
  this.classList.toggle('active');
  let panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    this.classList.remove('open');
  } else {
    Array.from(acc).forEach(e => {
      console.log('test')
      e.nextElementSibling.style.maxHeight = null;
      e.classList.remove('open');
    });
    this.classList.add('open');
    panel.style.maxHeight = panel.scrollHeight + 'px'
  }
  // close open tabs
}
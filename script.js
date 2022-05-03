let acc = document.getElementsByClassName('accordion');
let i;

console.log(acc)

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', onClick);
}

function onClick() {
  this.classList.toggle('active');
  let panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px'
  }
}
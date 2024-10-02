const title = document.querySelector('.title')
const text = 'Eu ainda nao te dei flores... mas posso lhe dar elas de outro jeito?'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; 
  element.style.animationDelay = `${randomDelay}s`;
});
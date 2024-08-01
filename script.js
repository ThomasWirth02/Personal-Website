window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let opacity1 = 1 - (scrollPosition / 600);
    let opacity2 = (scrollPosition/750);

    if (opacity1 < 0) opacity1 = 0;
    if (opacity1 > 1) opacity1 = 1;
    if (opacity2 < 0) opacity2 = 0;
    if (opacity2 > 1) opacity2 = 1;

    
    document.getElementById("thomas-wirth").style.opacity = opacity1;
    document.getElementById("uh-1").style.opacity = opacity1;
  

});


class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  const phrases = [
    'AUSTRALIAN STUDENT',
    'STUDYING IN GERMANY'
  ]
  
  const el = document.getElementById('uh-1')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1600)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()
  
function updateHeilbronTime(){
  const now = new Date();

  const heilbronTime = new Intl.DateTimeFormat('en-GB',{
    timeZone: 'Europe/Berlin',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(now);
  document.getElementById('heilbron-time').textContent = `${heilbronTime}`;

}
setInterval(updateHeilbronTime, 1000);
updateHeilbronTime();

const totalCards = 5; // Define the total number of cards
let currentCard = 1;

document.getElementById('btn-next').addEventListener('click', () => {
  if (currentCard < totalCards) {
    const cCard = document.getElementById('card' + currentCard);
    const nextCard = document.getElementById('card' + (currentCard + 1));

    cCard.classList.add('hidden');

    // Use a named function to remove the event listener cleanly
    function handleTransitionEnd() {
      nextCard.classList.remove('hidden');
      //nextCard.style.transform = 'translateX(0)';
      cCard.removeEventListener('transitionend', handleTransitionEnd); 
      // Increment after the transition is complete
      currentCard++; 
    }

    cCard.addEventListener('transitionend', handleTransitionEnd); 
  } else {
    // Handle reaching the last card (e.g., loop back, disable button)
    console.log("You've reached the last card!");
  }
});


document.getElementById('btn-prev').addEventListener('click', () => {
  if (currentCard > 1) {
    const cCard = document.getElementById('card' + currentCard);
    const nextCard = document.getElementById('card' + (currentCard -1));

    cCard.classList.add('hidden');

    // Use a named function to remove the event listener cleanly
    function handleTransitionEnd() {
      nextCard.classList.remove('hidden');
      //nextCard.style.transform = 'translateX(0)';
      cCard.removeEventListener('transitionend', handleTransitionEnd); 
      // Increment after the transition is complete
      currentCard--; 
    }

    cCard.addEventListener('transitionend', handleTransitionEnd); 
  } else {
    // Handle reaching the last card (e.g., loop back, disable button)
    console.log("You've reached the last card!");
  }
});



  
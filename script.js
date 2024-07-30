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
    document.getElementById("uh-2").style.opacity = opacity1; 
    
    document.getElementById("about-me").style.opacity = opacity2;
    document.getElementById("abme-1").style.opacity = opacity2;
    document.getElementById("abme-2").style.opacity = opacity2;
    document.getElementById("abme-3").style.opacity = opacity2;
    document.getElementById("abme-4").style.opacity = opacity2;
    document.getElementById("abme-5").style.opacity = opacity2;
    
    document.getElementById("sk-edu").style.opacity = opacity2;

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
        const start = Math.floor(Math.random() * 70)
        const end = start + Math.floor(Math.random() * 70)
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
  document.addEventListener('DOMContentLoaded', () => {
    const el1 = document.getElementById("abme-1");
    const fx1 = new TextScramble(el1);
    const el2 = document.getElementById("abme-2");
    const fx2 = new TextScramble(el2);
    const el3 = document.getElementById("abme-3");
    const fx3 = new TextScramble(el3);
    const el4 = document.getElementById("abme-4");
    const fx4 = new TextScramble(el4);
    const el5 = document.getElementById("abme-5");
    const fx5 = new TextScramble(el5);
    
    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.4 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // The element is visible, trigger the text scramble
            fx1.setText('Hi! My name is Thomas. I am a student originally from Australia, currently studying').then(() => {
            });
            fx2.setText('in Germany. I have a deep passion for Computer Science, particularly in the').then(() => {
            });
            fx3.setText('development and implementation of projects. Seeing my work come to fruition is').then(() => {
            });
            fx4.setText('what drives me to pursue this career. I am hardworking and take great pride in').then(() => {
            });
            fx5.setText('spearheading projects, especially when I am deeply interested in the topic.').then(() => {
            });
          // Stop observing the element after the effect is triggered
            observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(el1);
    observer.observe(el2);

    observer.observe(el3);

    observer.observe(el4);

    observer.observe(el5);

  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const el1 = document.getElementById("edu-info1");
    const fx1 = new TextScramble(el1);
    const el2 = document.getElementById("edu-info2");
    const fx2 = new TextScramble(el2);
    const el3 = document.getElementById("edu-info3");
    const fx3 = new TextScramble(el3);
    const el4 = document.getElementById("edu-info4");
    const fx4 = new TextScramble(el4);
    const el5 = document.getElementById("edu-info5");
    const fx5 = new TextScramble(el5);
    const el6 = document.getElementById("edu-info6");
    const fx6 = new TextScramble(el6);
    const el7 = document.getElementById("edu-info7");
    const fx7 = new TextScramble(el7);
    const el8 = document.getElementById("edu-info8");
    const fx8 = new TextScramble(el8);
    
    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.4 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // The element is visible, trigger the text scramble
            fx1.setText('I am currently studying information engineering at the Technische Universität München.').then(() => {
            });
            fx2.setText('This Bachelor focuses on the theoretical aspect of Computer Science with courses').then(() => {
            });
            fx3.setText('complementing the theoretical side through the application of the given theory (primarily').then(() => {
            });
            fx4.setText('through the use of JAVA). In addition to the theoretical and practical courses we also').then(() => {
            });
            fx5.setText('have several courses which focus on the business side of developing and implementing a').then(() => {
            });
            fx6.setText('digital system.  This combination has enabled me to learn the full lifecycle of an').then(() => {
            });
            fx7.setText('information system, from the planning, development, implementation and then finally the').then(() => {
            });
            fx8.setText('maintenance involve with information system.').then(() => {
            });
          // Stop observing the element after the effect is triggered
            observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(el1);
    observer.observe(el2);

    observer.observe(el3);

    observer.observe(el4);

    observer.observe(el5);
    observer.observe(el6);
    observer.observe(el7);
    observer.observe(el8);
  });
  

  
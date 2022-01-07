const speakers = [
  {
    img: 'images/Balaji Srinivasan.jfif',
    fulname: 'Balaji Srinivasan',
    position: 'Former coinbase CTO',
    link: 'https://en.wikipedia.org/wiki/Balaji_Srinivasan',
    quote:
        'is a serial entrepreneur, angel investor, and essayist. He was co-founder of Counsyl, Teleport, 21.co,21 Inc and Earn.com.',
  },
  {
    img: 'images/Genslerdyna.jfif',
    fulname: 'Gary Gensler',
    position: 'Chair of SEC',
    link: 'https://en.wikipedia.org/wiki/Gary_Gensler',
    quote: 'is an American government official and former investment banker serving as the chair of the U.S. Securities and Exchange Commission, He is also a professor in the practice at the MIT Sloan School of Management.',
  },
  {
    img: 'images/mwiyadyna.jfif',
    fulname: 'Mwiya Musokotwane',
    position: 'Founder of Nkwashi',
    link: 'https://www.alibaba.com',
    quote:
        'Mwiya is the co-founder and CEO of Thebe Investment Management, a Zambian private investment firm that is the developer of Nkwashi; a 3100 acre satellite town that will be home to up to 100,000 residents. Thebe Investment Management has US$1.5bn of project pipeline under development.',
  },
  {
    img: 'images/Nolan myers.jfif',
    fulname: 'Nolan Myers',
    position: 'CEO & founder of Double GDP',
    link: 'https://www.doublegdp.com/about/',
    quote:
        'DoubleGDP is an end-to-end platform for cities to connect with their community and deliver efficiently-run services.',
  },
  {
    img: 'images/siddyna.jfif',
    fulname: 'Sid(Sytes) Sijbrandij',
    position: 'CEO & Co-founder of Gitlab',
    link: 'https://en.wikipedia.org/wiki/GitLab',
    quote:
        'GitLab Inc. is the open-core company that provides GitLab, the DevOps platform that combines the ability to develop, secure, and operate software in a single application.',
  },
  {
    img: 'images/Vitalik Buterin.jfif',
    fulname: 'Vitalik Buterin',
    position: 'Co-founder of Ethereum.',
    link: 'https://en.wikipedia.org/wiki/Vitalik_Buterin',
    quote:
        's a Russian-Canadian programmer and writer who is best known as one of the co-founders of Ethereum. Buterin became involved with cryptocurrency early in its inception, co-founding Bitcoin Magazine in 2011.',
  },
];

const container = document.getElementById('speakers');

function data() {
  speakers.forEach((speaker) => {
    container.innerHTML += ` <div class="speakersGrid">
      <div class="gridImage">
        <img class="aspect" src="${speaker.img}" alt="${speaker.fulname}'s Portrait" />
      </div>
      <div class="speakerDetails">
        <h3>${speaker.fulname}</h3>
        <h4>${speaker.position}</h4>
        <p class="quotes">
          <i><a href="${speaker.link}">${speaker.quote}</a></i>
        </p>
      </div>
    </div>`;
  });
}

window.onload = data();

// Hamburger Button

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    menu.style.top = '-10px';
    menu.style.opacity = 0;
  } else {
    menu.classList.add('showMenu');
    menu.style.top = '50px';
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    menu.style.opacity = 1;
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

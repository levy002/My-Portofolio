const projects = [
  {
    title: 'Awesome-Books',
    src: 'images/awesomeBooks.png',
    description: 'Personal library which allow user to add name of the book and at the same time with the name of the author. User is able to Add new book and Delete book. This app allows user to store all changes in Local storage so user can be able to see his/her stored data anytime.',
    technologies: ['Javascript', 'Html', 'css', 'Webpack'],
    seeLiveLink: 'https://awesome-book-202.netlify.app/',
    seeSourceLink: 'https://github.com/levy002/Awesome-books-ES6',
  },
  {
    title: 'Math-Magician',
    src: 'images/math-magician.png',
    description: ['Math magicians is a single page app for all mathematics lovers. Math Magicians allow users to perform simple calculations and It generates mathematics quotes.'],
    technologies: ['React.js', 'CSS', 'Jest', 'Webpack'],
    seeLiveLink: 'https://math-magician-202.netlify.app/',
    seeSourceLink: 'https://github.com/levy002/Math-Magician',
  },
  {
    title: 'ShowTime',
    src: 'images/showtime.png',
    description: ['ShowTime is a web application based on an external TV Maze API. The API provides data about TV Shows. We then built the webapp around it. The webapp has 2 user interfaces (pages): The Homepage and the Comment modal. On the Homepage, each Show can be liked and commented on.'],
    technologies: ['JavaScript', 'CSS', 'Jest', 'Webpack'],
    seeLiveLink: 'https://show-time-202.netlify.app/',
    seeSourceLink: 'https://github.com/levy002/ShowTime',
  },
  {
    title: 'Multi-post story4',
    src: 'images/bookstore.png',
    description: ['Bookstore-CMS is an SPA made for all the book lovers. It enables users to track the book progress, add new book and delete book.'],
    technologies: ['React.js', 'Redux', 'Tailwind', ''],
    seeLiveLink: 'https://bookstore-cms-202.netlify.app/',
    seeSourceLink: 'https://github.com/levy002/BookStore--CMS',
  },
];

const AllButtons = document.getElementsByClassName('see-project');
const work = document.querySelector('.project');
const popUp = document.createElement('section');
popUp.classList.add('modal-container');
function popUpDesktop(cardNumber) {
  popUp.style.display = 'block';
  work.appendChild(popUp);
  popUp.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
      <h2>${projects[cardNumber].title}</h2>
        <i class="fa fa-times" id="close-popUp" aria-hidden="true"></i>
    </div>
    <div class="modal-image">
      <img src=${projects[cardNumber].src} alt="App Image">
    </div>
    <div class="modal-description">
      <p>${projects[cardNumber].description}</p>
    </div>
    <div class="modal-technologies">
      <ul class="project-tools">
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[cardNumber].technologies[0]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[cardNumber].technologies[1]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[cardNumber].technologies[2]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[cardNumber].technologies[3]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
      </ul>
    </div>
    <div class="modal-btns">
      <button>
        <a href="${projects[cardNumber].seeLiveLink}">See Live <img src="images/see-live-Icon.png" alt="See live"></i></a>
      </button>
      <button>
        <a href="${projects[cardNumber].seeSourceLink}">See Source <img src="images/Github.png" alt="Github icon"></a>
      </button>
    </div>
  </div>
  </section>`;
  document.addEventListener('click', (event) => {
    if (event.target.id === 'close-popUp') {
      popUp.style.display = 'none';
    }
  });
}
function popUpMobile(cardNumber) {
  popUp.style.display = 'block';
  work.appendChild(popUp);
  popUp.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
      <h2>${projects[cardNumber].title}</h2>
        <i class="fa fa-times" id="close-popUp" aria-hidden="true"></i>
    </div>
    <div class="modal-image">
      <img src=${projects[cardNumber].src} alt="App Image">
    </div>
    <div class="modal-description">
      <p>${projects[cardNumber].description}</p>
    </div>
    <div class="modal-technologies">
      <ul class="project-tools">
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[cardNumber].technologies[0]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[cardNumber].technologies[1]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[cardNumber].technologies[2]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[cardNumber].technologies[3]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
      </ul>
    </div>
    <div class="modal-btns">
      <button>
        <a href="${projects[cardNumber].seeLiveLink}>See Live <img src="images/see-live-Icon.png" alt="See live"></i></a>
      </button>
      <button>
        <a href="${projects[cardNumber].seeSourceLink}>See Source <img src="images/Github.png" alt="Github icon"></a>
      </button>
    </div>
  </div>
  </section>`;
  document.addEventListener('click', (event) => {
    if (event.target.id === 'close-popUp') {
      popUp.style.display = 'none';
    }
  });
}

for (let i = 0; i < AllButtons.length; i += 1) {
  AllButtons[i].addEventListener('click', () => {
    popUpDesktop(i);
  });
  AllButtons[i].addEventListener('click', () => {
    popUpMobile(i);
  });
}

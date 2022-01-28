const projects = [
  {
    title: 'Multi-post story1',
    src: 'images/appImage.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Multi-post story2',
    src: 'images/appImage.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Multi-post story3',
    src: 'images/appImage.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'Multi-post story4',
    src: 'images/appImage.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
    technologies: ['html', 'Ruby on rails', 'css', 'Github'],
    seeLiveLink: '#',
    seeSourceLink: '#',
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
      <p>${projects[cardNumber].description[0]}</p>
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
      <p>${projects[cardNumber].description[0]}</p>
      <p>${projects[cardNumber].description[1]}</p>
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

for (let i = 0; i < AllButtons.length; i += 1) {
  AllButtons[i].addEventListener('click', () => {
    popUpDesktop(i);
  });
  AllButtons[i].addEventListener('click', () => {
    popUpMobile(i);
  });
}

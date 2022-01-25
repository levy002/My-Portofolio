const projects = [
    {
      project: {
        title: 'Multi-post story',
        src: 'images/appImage.png',
        description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe."],
        technologies: ['html', 'Ruby on rails', 'css', 'Github'],
        seeLiveLink: '#',
        seeSourceLink: '#',
      },
    },
  ];
  const work = document.querySelector('.project');
  const popUp = document.createElement('section');
  popUp.classList.add('modal-container');
  function popUpDesktop() {
    popUp.style.display = 'block';
    work.appendChild(popUp);
    popUp.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
      <h2>${projects[0].project.title}</h2>
        <i class="fa fa-times" id="close-popUp" aria-hidden="true"></i>
    </div>
    <div class="modal-image">
      <img src=${projects[0].project.src} alt="App Image">
    </div>
    <div class="modal-description">
      <p>${projects[0].project.description[0]}</p>
    </div>
    <div class="modal-technologies">
      <ul class="project-tools">
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[0].project.technologies[0]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[0].project.technologies[1]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[0].project.technologies[2]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[0].project.technologies[3]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
      </ul>
    </div>
    <div class="modal-btns">
      <button>
        <a href="${projects[0].project.seeLiveLink}">See Live <img src="images/see-live-Icon.png" alt="See live"></i></a>
      </button>
      <button>
        <a href="${projects[0].project.seeSourceLink}">See Source <img src="images/Github.png" alt="Github icon"></a>
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
  function popUpMobile() {
    popUp.style.display = 'block';
    work.appendChild(popUp);
    popUp.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
      <h2>${projects[0].project.title}</h2>
        <i class="fa fa-times" id="close-popUp" aria-hidden="true"></i>
    </div>
    <div class="modal-image">
      <img src=${projects[0].project.src} alt="App Image">
    </div>
    <div class="modal-description">
      <p>${projects[0].project.description[0]}</p>
      <p>${projects[0].project.description[1]}</p>
    </div>
    <div class="modal-technologies">
      <ul class="project-tools">
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[0].project.technologies[0]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[0].project.technologies[1]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[0].project.technologies[2]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
        <li>${projects[0].project.technologies[3]}</li>
        <li><img src="images/Rectangle.png" alt="line" /></li>
      </ul>
    </div>
    <div class="modal-btns">
      <button>
        <a href="${projects[0].project.seeLiveLink}">See Live <img src="images/see-live-Icon.png" alt="See live"></i></a>
      </button>
      <button>
        <a href="${projects[0].project.seeSourceLink}">See Source <img src="images/Github.png" alt="Github icon"></a>
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
  const AllButtons = document.getElementsByClassName('see-project');
  for (let i = 0; i < AllButtons.length; i += 1) {
    AllButtons[i].addEventListener('click', popUpDesktop);
    AllButtons[i].addEventListener('click', popUpMobile);
  }
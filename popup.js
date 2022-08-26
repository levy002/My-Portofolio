const projects = [
  {
    title: "Doctors",
    src: "images/doctors.png",
    description: [
      "Doctor Appointment is a full stack application for book an appointment with doctor. This applications is responsive and users can load, create, and delete doctors and appointments. Users need to sign up or sign in to access application. They can sign up or sign in using the sign up and login forms.",
    ],
    technologies: ["React", "Rails", "Redux", "CSS"],
    seeLiveLink: "https://appointment-app-frontend.netlify.app/",
    seeSourceLink: "https://github.com/ridaarif98/doctors_appointment_front_end",
  },
  {
    title: "Awesome-Books",
    src: "images/awesomeBooks.png",
    description:
      "Personal library which allow user to add name of the book and at the same time with the name of the author. User is able to Add new book and Delete book. This app allows user to store all changes in Local storage so user can be able to see his/her stored data anytime.",
    technologies: ["Javascript", "Html", "css", "Webpack"],
    seeLiveLink: "https://awesome-book-202.netlify.app/",
    seeSourceLink: "https://github.com/levy002/Awesome-books-ES6",
  },
  {
    title: "TRAnzKT",
    src: "images/TRanzakt.png",
    description: [
      "TRAnzKT App is a mobile web application that allows the user to manage his/her budget: they have a list of transactions associated with a category, so that the user can see how much money they spend and on a particular category.",
    ],
    technologies: ["Rails", "Tailwind", "Rspec"],
    seeLiveLink: "dry-bastion-60998.herokuapp.com/",
    seeSourceLink: "https://github.com/levy002/budget-app",
  },
  {
    title: "ShowTime",
    src: "images/showtime.png",
    description: [
      "ShowTime is a web application based on an external TV Maze API. The API provides data about TV Shows. We then built the webapp around it. The webapp has 2 user interfaces (pages): The Homepage and the Comment modal. On the Homepage, each Show can be liked and commented on.",
    ],
    technologies: ["JavaScript", "CSS", "Jest", "Webpack"],
    seeLiveLink: "https://show-time-202.netlify.app/",
    seeSourceLink: "https://github.com/levy002/ShowTime",
  },
  {
    title: "Multi-post story4",
    src: "images/bookstore.png",
    description: [
      "Bookstore-CMS is an SPA made for all the book lovers. It enables users to track the book progress, add new book and delete book.",
    ],
    technologies: ["React.js", "Redux", "Tailwind", ""],
    seeLiveLink: "https://bookstore-cms-202.netlify.app/",
    seeSourceLink: "https://github.com/levy002/BookStore--CMS",
  },
];

const AllButtons = document.getElementsByClassName("see-project");
const work = document.querySelector(".project");
const popUp = document.createElement("section");
popUp.classList.add("modal-container");
function popUpDesktop(cardNumber) {
  popUp.style.display = "block";
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
  document.addEventListener("click", (event) => {
    if (event.target.id === "close-popUp") {
      popUp.style.display = "none";
    }
  });
}
function popUpMobile(cardNumber) {
  popUp.style.display = "block";
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
  document.addEventListener("click", (event) => {
    if (event.target.id === "close-popUp") {
      popUp.style.display = "none";
    }
  });
}

for (let i = 0; i < AllButtons.length; i += 1) {
  AllButtons[i].addEventListener("click", () => {
    popUpDesktop(i);
  });
  AllButtons[i].addEventListener("click", () => {
    popUpMobile(i);
  });
}

// Define Global Variables


const sections = document.querySelectorAll('section');
const navigation = document.getElementById('navbar__list');
const mybutton = document.getElementById("top-button");
const frag = document.createDocumentFragment();


// build the nav

function buildNav() {


  for (let sec of sections) {
    const secID = sec.id;
    const list = document.createElement('li');
    list.classList.add('menu__link');
    list.id = secID;
    list.innerHTML = `<a href="#${secID}">${secID}</a>`;
    frag.appendChild(list);


    //scroll into the wanted element
    list.addEventListener('click', function (event) {
      event.preventDefault();
      sec.scrollIntoView({
        behavior: "smooth"

      });
    });

    navigation.appendChild(frag);
  }
}



function buildActive() {
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    let link = document.getElementById(section.id);
    const entry = Math.floor(section.getBoundingClientRect().top);

    section.classList.toggle('your-active-class', false)
    link.classList.toggle('your-active-class', false);

    if (entry < 250 && entry >= -250) {
      section.classList.toggle('your-active-class', true);
      link.classList.toggle('your-active-class', true);

    }
  }
}


// Build navigation menu
document.addEventListener('DOMContentLoaded', (buildNav()));


//begin the events that set and remove active class and know which class you are scrolling on
window.addEventListener("scroll", buildActive);




// Hide Navigation Bar when scroll down 

var lastScrollTop = 0;

window.addEventListener('scroll', function () {
  var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    pageheader.style.top = '-60px';
  } else {
    pageheader.style.top = '0';
  }
  lastScrollTop = scrollTop
})




//Get the button:

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

mybutton.addEventListener("click", function () {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
});
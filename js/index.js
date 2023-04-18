// GET THE REFERENCES
//This will be the empty div I created in main
const container = document.querySelector(".main-cont");
//This will be my nav links in my header (controls)
const links = document.querySelectorAll("header nav a");
//This should point to the partials html
let url = "./partials/home.html";

// Creating a function to select partial. pc = partial content.
function selectContent(pc) {
  // Preventing default behaviour
  pc.preventDefault();
  // Obtaining value of href attribute of clicked link
  let currentPage = pc.target.href;
  // Calling my function, loadContent, providing the href value of the clicked link by setting 'currentPage' as the parameter of loadContent function
  loadContent(currentPage);
}

// Registering links for the click event with selectContent as the event handler
for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", selectContent);
}

// Creating my function that will load requested partial (pageReq) using fetch, then, return.
function loadContent(pageReq) {
  fetch(pageReq)
    .then(function (rsp) {
      return rsp.text();
    })
    .then(function (data) {
      container.innerHTML = data;
    });
}

// Calling loadContent with the current value of the URL
loadContent(url);

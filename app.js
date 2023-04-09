const sections = document.querySelectorAll(".section");
const setcBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  //Sections active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //Remove the selected button from the other
      setcBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //Hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //Toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}
function downloadFile(event) {
    event.preventDefault();
    const fileUrl = 'https://drive.google.com/uc?id=1W9U7d0WV6zTxx6HPYzz7j8UiIAHSGxlO';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'my-file.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  

PageTransitions();

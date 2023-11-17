let qnsContainerEl = document.querySelectorAll(".qns-container");
let ansContainerEl = document.querySelectorAll(".ans-container");
let arrowEl=document.querySelectorAll(".arrow")
for (let i = 0; i < qnsContainerEl.length; i++) {
  qnsContainerEl[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const answer = this.nextElementSibling;
    qnsContainerEl.forEach((q) => {
      if (q !== this) {
        q.nextElementSibling.style.display = "none";
        q.style.fontWeight = "normal";
        q.classList.remove("active")
      }
    });
    if (answer.style.display === "block") {
      answer.style.display = "none";
      this.style.fontWeight = "normal";
    } else {
      answer.style.display = "block";
      this.style.fontWeight = "bold";
    }
  });
}





let containerEl = document.getElementById("rating-container");
let starEl = document.querySelectorAll(".star");
let submitBtnEl = document.getElementById("submit-btn");
let modalBody1El=document.getElementById("modal-body1")
let modalBody2El=document.getElementById("modal-body2")
let ratingCountTextOutputEl=document.getElementById("rating-count-text-output")
let filled = 0;

//submit button color changing
document.addEventListener("DOMContentLoaded", function () {
  starEl.forEach(function (starButton) {
    starButton.addEventListener("click", function () {
        submitBtnEl.disabled = false;
        submitBtnEl.classList.remove("disabled-btn");
        submitBtnEl.classList.add("submit-btn");
    });
  });
});

//rating color changing
containerEl.addEventListener("click",function(e){
    let currClicked=e.target.dataset.index;
    for(let i=0;i<filled;i++){
        starEl[i].classList.remove("star-filled")
        // console.log(`i am clicked ${i}`);
    }
    for(let i=0;i<currClicked;i++){
        starEl[i].classList.add("star-filled");
        // console.log(`i am clicked ${starEl[i]}`);
    }
    console.log(currClicked)
    filled=currClicked
})

//filling color in mouseover
containerEl.addEventListener("mouseover",function(e){
    let currClicked=e.target.dataset.index;
    
    for(let i=0;i<5;i++){
        starEl[i].classList.remove("star-filled");
    }
    for(let i=0;i<currClicked;i++){
        starEl[i].classList.add("star-filled");
    }
})
//for mouse leave
containerEl.addEventListener("mouseleave",function(e){
    let currClicked=e.target.dataset.index;
    
    for(let i=0;i<5;i++){
        starEl[i].classList.remove("star-filled");
    }
    for(let i=0;i<filled;i++){
        starEl[i].classList.add("star-filled");
    }
})

//after submit button click action
submitBtnEl.addEventListener("click",function(e){
modalBody1El.style.display="none"
ratingCountTextOutputEl.innerText=`You selected ${filled} out of 5`
modalBody2El.style.display="block"

})

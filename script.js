let likeBtn=document.querySelectorAll('.like-box button');
let likeShow=document.querySelectorAll('.like-count');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let cards=document.querySelectorAll('.cards');

likeBtn.forEach(buttn => {
    buttn.addEventListener('click', function() {
        const likeBox = this.closest('.like-box');
        const likeCountSpan = likeBox.querySelector('.like-count');
        let likeCount = parseInt(likeCountSpan.textContent);
        likeCountSpan.textContent = ++likeCount;
    });
});

let pages = document.querySelector(".pages");
let pagesNo = document.getElementById('page-no');

function updateButtonState() {

  if (currentPageIndex === 1) {
      prev.disabled = true;
      prev.style.opacity = 0.5;
  }
   else {
      prev.disabled = false;
      prev.style.opacity = 1;
  }

  if (currentPageIndex === cards.length) {
      next.disabled = true;
      next.style.opacity = 0.5;
  } else {
      next.disabled = false;
      next.style.opacity = 1;
  }
}

let scrollIndex = 0;
let currentPageIndex = 1;

pagesNo.textContent=`page :- ${currentPageIndex }`;

next.addEventListener("click", () => {
  if (currentPageIndex < cards.length ) {
    currentPageIndex++;
    scrollIndex = scrollIndex + 1034;
    pages.scrollTo(scrollIndex, 0);
    updateButtonState();
  }
  pagesNo.textContent=`page :- ${currentPageIndex }`;

  });

  prev.addEventListener("click", () => {
    if(currentPageIndex > 1){

    scrollIndex -= 1034;
    pages.scrollTo(scrollIndex, 0);

    currentPageIndex--;
    updateButtonState();

    }
    pagesNo.textContent=`page :- ${currentPageIndex}`;

  });


// toggle light Mode

let changeTheme=document.querySelector('.change-theme');
let body=document.querySelector('body');

changeTheme.addEventListener('click',()=>{
  body.classList.toggle('light');


  const isModeLight= body.classList.contains('light');
  changeTheme.textContent = isModeLight ? "Dark Mode" : "Light Mode";

})

  
  
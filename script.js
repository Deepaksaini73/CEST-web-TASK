let likeBtn=document.querySelectorAll('.like-box button');
let likeShow=document.querySelectorAll('.like-count');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let cards=document.querySelectorAll('.cards');
let x,scrollLength;

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

  if (currentPageIndex === scrollLength) {
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
  if (currentPageIndex < scrollLength ) {
    currentPageIndex++;
    // // scrollIndex = scrollIndex + 1034;
    // scrollIndex = scrollIndex + 0;
    // pages.scrollTo(scrollIndex, 0);
    checkScreenSize();
    pages.scrollBy({
      left: (x), // Change this value according to your card width
      behavior: 'smooth' // Ensures smooth scrolling
    });
    
    updateButtonState();
  }
  pagesNo.textContent=`page :- ${currentPageIndex }`;

  });

  prev.addEventListener("click", () => {
    if(currentPageIndex > 1){
checkScreenSize()
      pages.scrollBy({
        left: (-1) * (x), // Change this value according to your card width
        behavior: 'smooth' // Ensures smooth scrolling
      });

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


// diffrent js on diffrent screen size

function runForLaptop() {
    // Code to run on laptop screen size
    x=1034;
    scrollLength=cards.length;
}

function runForMobile() {
  // Code to run on mobile screen size
  x=340;
  scrollLength=3 * cards.length;
}

function checkScreenSize() {
  if (window.innerWidth > 600) {
      // Laptop or larger screens
      runForLaptop();
  } else {
      // Mobile screens
      runForMobile();
  }
}

// Run on page load
checkScreenSize();

// Optional: Re-run when the window is resized
window.addEventListener('resize', checkScreenSize);

  

// function dance(){
//   const element = document.querySelector('.spinner');
//   element.classList.add('animate__animated', 'animate__fadeIn');

//   element.addEventListener('animationend', () => {

//   });
//   }
preloader_in();

$(document).ready(function () {

  $(".spinner-container"), setTimeout;
  var table = $('#example').DataTable({
    responsive: true
  })
    .columns.adjust()
    .responsive.recalc();
  disableaccess(unsupportedmq);
  // dance();
})
setTimeout(() => {
  detectInternet();
}, 0);

setTimeout(() => {
  firstchart();
  secondchart();
  thirdchart();
  fourthchart();
  fifthchart();
}, 2900);

function preloader_in() {
  const animations = [
    'animate__animated',
    'animate__fadeIn'
  ];
  const loader = document.getElementById('spinner');
  loader.classList.add(...animations);
  loader.style.setProperty('--animate-duration', '0.5s');

  setTimeout(() => {
    preloader_out();
    setTimeout(() => {
      home_in();
      sidebar_in();
      setTimeout(() => {
        document.getElementById("sidebar-items").style.display = "block";
        document.getElementById("items").style.display = "block";
        sidebar_items_in();
        items();
      }, 300);
    }, 300);
  }, 1600);

  setTimeout(() => {
    document.getElementById("signin_body").style.display = "flex";
    body_in();
    setTimeout(() => {
      document.getElementById("signin_container").style.display = "block";
      container_in();
    }, 1000);
  }, 500);
}

function preloader_out() {
  const animations = [
    'animate__animated',
    'animate__fadeOut'
  ];
  const loaderout = document.getElementById('spinner');
  loaderout.classList.add(...animations);
  loaderout.style.setProperty('--animate-duration', '0.5s');
  setTimeout(() => {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("home-section").style.display = "block";
    document.getElementById("dash-section").style.display = "block";
  }, 400);
}

function home_in() {
  const animations = [
    'animate__animated',
    'animate__fadeIn'
  ];
  const homein = document.getElementById('home-section', 'sidebar', 'dash-section');
  homein.classList.add(...animations);
  homein.style.setProperty('--animate-duration', '0.9s');
}

function items() {
  const animations = [
    'animate__animated',
    'animate__fadeInRight'
  ];
  const homein = document.getElementById('items');
  homein.classList.add(...animations);
  homein.style.setProperty('--animate-duration', '0.5s');
}

function sidebar_in() {
  const animations = [
    'animate__animated',
    'animate__fadeIn'
  ];
  const homein = document.getElementById('sidebar');
  homein.classList.add(...animations);
  homein.style.setProperty('--animate-duration', '0.9s');
}

function sidebar_items_in() {
  const animations = [
    'animate__animated',
    'animate__fadeInLeft'
  ];
  const homein = document.getElementById('sidebar-items');
  homein.classList.add(...animations);
  homein.style.setProperty('--animate-duration', '0.5s');
}

function body_in() {
  const animations = [
    'animate__animated',
    'animate__fadeIn'
  ];
  const homein = document.getElementById('signin_container');
  homein.classList.add(...animations);
  homein.style.setProperty('--animate-duration', '2.5s');
}

function container_in() {
  const animations = [
    'animate__animated',
    'animate__bounceIn'
  ];
  const homein = document.getElementById('signin_container');
  homein.classList.add(...animations);
  homein.style.setProperty('--animate-duration', '2.5s');
}

function popup_in() {
  const animations = [
    'animate__animated',
    'animate__bounceIn'
  ];
  const popupin = document.getElementById('ac-wrapper-2');
  popupin.classList.add(...animations);
  popupin.style.setProperty('--animate-duration', '0.5s');
}

function popup_out() {
  const animations = [
    'animate__animated',
    'animate__bounceOut'
  ];
  const popupout = document.getElementById('ac-wrapper-2');
  popupout.classList.add(...animations);
  popupout.style.setProperty('--animate-duration', '0.5s');
}


let sidebar = document.querySelector(".sidebar");
let quicklink = document.querySelector(".quick-links-sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
var mobileviewmq = window.matchMedia("(max-width: 500px)");
var unsupportedmq = window.matchMedia("screen and (min-width: 320px) and (max-width:480px) and (orientation: landscape)");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   disablequicklink();
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   if (mobileviewmq.matches) { // If media query matches
    disablequicklink();
  } else {
    enablequicklink();
  }
  }
}

function disablequicklink()
{
    document.getElementById("quick-link-sidebar").style.display = "none";
    document.getElementById("quick-link-sidebar-2").style.display = "none";
}

function enablequicklink() {
  document.getElementById("quick-link-sidebar").style.display = "block";
  document.getElementById("quick-link-sidebar-2").style.display = "block";
}

const internetStatus = document.getElementById("internetStatus");
window.addEventListener('load', function(event){
    detectInternet();
});
window.addEventListener('online', function(event){
    detectInternet();
});
window.addEventListener('offline', function(event){
    detectInternet();
});

function detectInternet(){
  if(navigator.onLine){
    console.log('Connection established');
    Offlinecheck()
  }else{
    alert('You are currently offline! Some stuff maynot work :(');
    Internetcheck();
    //*location.reload(true)
  }
}

function Internetcheck(){
  // To start the loop
  var mainLoopId = setInterval(function(){
  if(navigator.onLine){
    let text = "You are back online! Connection Established :)\nWanna Reload?";
    if (confirm(text) == true) {
      location.reload(true)
    }
    else{

    }
    clearInterval(mainLoopId);
    Offlinecheck();
  }else{
    //*location.reload(true)
  }
      move();
  }, 0);
  }

  function Offlinecheck(){
  // To start the loop
  var mainLoopId1 = setInterval(function(){
  if(navigator.onLine){

  }else{
    alert('Connection Lost! You are now offline :(');
    clearInterval(mainLoopId1);
    Internetcheck();
  }
      // move();
  }, 0);
  }

  // function disableQL(mobileviewmq) {
  //   if (mobileviewmq.matches) { 
  //     disablequicklink();
  //   } else {
  //     enablequicklink();
  //   }
  // }

  function disableaccess(unsupportedmq) {
    if (unsupportedmq.matches) { 
      window.location.replace("https://cromaguy.github.io/StudySkill/index.html");
    } else {
    }
  }

  // Call listener function at run time
disableaccess(unsupportedmq);

// Attach listener function on state changes
unsupportedmq.addEventListener("change", function() {
  disableaccess(unsupportedmq);
});

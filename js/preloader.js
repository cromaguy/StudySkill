$(document).ready(function(){
    $(".spinner-container"),setTimeout;
    var table = $('#example').DataTable({
      responsive: true
    })
    .columns.adjust()
    .responsive.recalc();
    disableaccess(unsupportedmq);
    })
    setTimeout(() => {
      detectInternet();
        document.getElementById("spinner").style.display = "none";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("home-section").style.display = "block";
        document.getElementById("dash-section").style.display = "block";
      },900);

    setTimeout(() => {
        firstchart();
        secondchart();
        thirdchart();
        fourthchart();
        fifthchart();
      },1200);
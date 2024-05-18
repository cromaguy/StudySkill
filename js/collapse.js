// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     });
// }
var coll = document.querySelectorAll(".collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {

        // Loop over all the panels an close each one
        document.querySelectorAll(".content").forEach(function (content) {
            content.style.maxHeight = "0";
            content.previousElementSibling.classList.remove("active");
        });

        // Then show the clicked panel
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + "px";
    });
}
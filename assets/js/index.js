$(document).ready(function () {
  $(".nav li a").click(function (e) {
    $(".nav li.active").removeClass("active");

    var $parent = $(this).parent();
    $parent.addClass("active");
    e.preventDefault();
  });
});
window.onscroll = function () {
  myFunction();
};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > document.getElementById("myHeader").offsetTop) {
    document.getElementById("myHeader").classList.add("sticky");
  } else {
    document.getElementById("myHeader").classList.remove("sticky");
  }
}

window.onload = function () {
  var span = document.getElementsByClassName("close")[0];

  var modal = document.getElementById("myModal");

  var btn = document.getElementById("btnShoppingCart");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

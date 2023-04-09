var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("intro-slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

function validateForm() {
  let a = document.forms["myForm"]["username"].value;
  let b = document.forms["myForm"]["pwd"].value;


  if (a == "" && b == "") {
    document.getElementById('error').innerHTML = "Name and password must be filled out";
  }else if (b == "") {
    document.getElementById('error').innerHTML = "Password must be filled out";
  }else if (a == "") {
    document.getElementById('error').innerHTML = "Name must be filled out";
  }
}

//document.getElementById('error').innerHTML = //if thing == true 
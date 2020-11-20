/*function scrollWin() {
    //window.scrollTo(500, 0);

//alert('window.pageXOffset= '+window.pageXOffset + '\nwindow.pageYOffset='+ window.pageYOffset);

    var el= document.getElementsByClassName('header');
    if(window.pageXOffset >= 90)
    {   
        el.style.backgroundColor='turquoise';
    }
    if(window.pageXOffset < 0)
    {   
        el.style.backgroundColor='pink';
    }
}*/

AOS.init({
    duration: 1200,
})



var ulContainer = document.getElementById("ulContainer-link");
var top_links = ulContainer.getElementsByClassName("top-links");

for(var i=0; i<top_links.length; i++) 
{
    top_links[i].addEventListener("click", function() 
    {
        var current = document.getElementsByClassName("active-link");
        
        current[0].className = current[0].className.replace(" active-link", "");
        
        console.log(current[0]);
        this.className += " active-link";
        
        var cpy_ele = document.getElementById("active-link-icon");
        cpy_ele.remove();

        
        var new_ele = document.createElement("span");
        new_ele.setAttribute("id","active-link-icon");
        
        console.log(new_ele);
        
        var ele_bef_ins = current[0];

        ele_bef_ins.parentNode.insertBefore(new_ele,ele_bef_ins);
    });
}


var canvas = document.getElementById('sect-1-canvas');
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 70;

  context.beginPath();
  context.rect(0, 0, 300, 300);
  context.fillStyle = '#1FCC8E';
  context.fill();

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroll-sect").style.top = "0";
  } else {
    document.getElementById("scroll-sect").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}*/

document.getElementById('joinNow').onclick = function() {
  document.getElementById('SignupPopupContainer').style.display = 'block';
};

document.getElementById('Login').onclick = function() {
  document.getElementById('LoginPopupContainer').style.display = 'block';
};

var signupModal = document.getElementById('SignupPopupContainer')
var loginModal = document.getElementById('LoginPopupContainer')

window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
  else if(event.target == loginModal) {
    loginModal.style.display = "none";
  }
}



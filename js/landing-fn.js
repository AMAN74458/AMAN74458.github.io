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


var canvas = document.getElementById('canvas-sl1');
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
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
};

document.getElementById('Login').onclick = function() {
  document.getElementById('LoginPopupContainer').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
};

var signupModal = document.getElementById('SignupPopupContainer')
var loginModal = document.getElementById('LoginPopupContainer')

window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
    document.getElementsByTagName('body')[0].removeAttribute('style');
  }
  else if(event.target == loginModal) {
    loginModal.style.display = "none";
    document.getElementsByTagName('body')[0].removeAttribute('style');
  }
}

// *********************** THEME MODE *************************
// code for toggling style button switching dark and light mode

// here storing boolean to variable that whether these class is present onload if not then it false will store and if present then true will store
var lgtCondition = document.querySelector("#light-toggle").classList.contains("active-light-mode");
// dark mode button will always contain "default-active-dark-mode" onload
var drkCondition = document.querySelector("#dark-toggle").classList.contains("default-active-dark-mode");

// by default none because this button is active by default
// document.getElementById('dark-toggle').style.display = "none";

// adding event listener that on mouserover execute inside codes
document.getElementById('toggle-theme-mode').addEventListener("mouseover", function() {
  // when we hover mouse on dark light toggle button below three lines will applied
  document.getElementById('toggle-theme-mode').style.position = "fixed";
  var bottomAlignment = document.getElementById('toggle-theme-mode').style.bottom = "70px";
  var rightAlignment = document.getElementById('toggle-theme-mode').style.right = "80px";
  // then storing values in fixed variable which cannot be modified. Storing value as const so that these variable should not be modified by mistake
  const btnContainer = document.getElementById('toggle-theme-mode');
  const btns = btnContainer.getElementsByClassName('switch');
  // condition checking
  if(bottomAlignment == "70px" && rightAlignment == "80px") {
    // if above condition is true then execute below cdes
    if(drkCondition) {
      // if this condition is true then execute below codes
      // here a function is created which will work when user will click on dark mode toggle button
      document.getElementById('dark-toggle').onclick = function() {
        // removing class
        btns[0].className = btns[0].className.replace(/\b active-light-mode\b/g, "");
        // adding class
        const clsName1 = "default-active-dark-mode"
        btns[1].className = btns[1].className + " " + clsName1

        //*************************************
        // in developing mode not final ******* IMPORTANT NOTE
        //*************************************
        // appling light mode
        // for html and body tag
        const htmlCusDrk = document.getElementsByTagName('html')[0];
        const bodyCusDrk = document.getElementsByTagName('body')[0];
        htmlCusDrk.removeAttribute("class");
        bodyCusDrk.removeAttribute("class")
        // for nav links
        const link1 = document.getElementById('home');
        const link2 = document.getElementById('blog');
        link1.className = link1.className.replace(/\b tplnk-light-mode\b/g, "");
        link2.className = link2.className.replace(/\b tplnk-light-mode\b/g, "");
        // for navbar after scrolled
        const navLinksContainer = document.getElementById('nav-linksContainer');
        navLinksContainer.className = navLinksContainer.className.replace(/\b ns-light-mode\b/g, ""); 
        // document.getElementById('nav-linksContainer').className = document.getElementById('nav-linksContainer').className.replace(/\b ns-light-mode\b/g, "");

        // for nav link after scrolled
        link1.className = link1.className.replace(/\b tplnkscrd-light-mode\b/g, "");
        link2.className = link2.className.replace(/\b tplnkscrd-light-mode\b/g, "");

        // for navbar on smaller screen
        const colpsdbg = document.getElementById('collapsibleNavbar');
        colpsdbg.className = colpsdbg.className.replace(/\b colpsdbg-light-mode\b/g, "");

        // for section 1 sub-section on left
        const h1SectLft = document.getElementById('h1-sl1');
        h1SectLft.className = h1SectLft.className.replace(/\b h1-sect1-lft-light-mode\b/g, "");
        const blinkingCursor = document.getElementsByClassName('blinking-cursor')[0];
        blinkingCursor.className = blinkingCursor.className.replace(/\bblinkcur-light-mode\b/g, "");
        const pSectLft = document.getElementById('p-sl1');
        pSectLft.className = pSectLft.className.replace(/\b p-sect1-lft-light-mode\b/g, "");

        // for section 1 sub-section on right
        const spanSectRgt = document.getElementById('span-sr1');
        spanSectRgt.removeAttribute('class');
        // spanSectRgt.className = spanSectRgt.className.replace(/\b span-sect1-rgt-light-mode\b/g, "");
        const h5SectRgt = document.getElementById('h5-sr1');
        h5SectRgt.removeAttribute('class');
        // h5SectRgt.className = h5SectRgt.className.replace(/\bh5-sect1-rgt-light-mode\b/g, "");
        const pSectRgt = document.getElementById('p-sr1');
        pSectRgt.removeAttribute('class');
        // pSectRgt.className = pSectRgt.className.replace(/\bp-sect1-rgt-light-mode'\b/g, "");

        // for join-login buttons
        const joinNoWBtn = document.getElementById('joinNow');
        joinNoWBtn.className = joinNoWBtn.className.replace(/\b joinnow-btn-light-mode\b/g, "");
        const Loginbtn = document.getElementById('Login');
        Loginbtn.className = Loginbtn.className.replace(/\blogin-btn-light-mode\b/g, "");

        // optimize below code ********* NOTE
        // for footer tag and footer link
        const btcIndexFooter = document.getElementById('btcIndex-footer');
        btcIndexFooter.className = btcIndexFooter.className.replace(/\b footer-light-mode\b/g, "");
        const ftLink1 = document.getElementById('cpyrgt-sect');
        ftLink1.className = ftLink1.className.replace(/\b cpyrgt-light-mode\b/g, "");
        const ftLink2 = document.getElementById('career');
        ftLink2.className = ftLink2.className.replace(/\b ftlink-light-mode\b/g, "");
        const ftLink3 = document.getElementById('contact');
        ftLink3.className = ftLink3.className.replace(/\b ftlink-light-mode\b/g, "");
        const ftLink4 = document.getElementById('about-us');
        ftLink4.className = ftLink4.className.replace(/\b ftlink-light-mode\b/g, "");
        const ftLink5 = document.getElementById('privacy-policy');
        ftLink5.className = ftLink5.className.replace(/\b ftlink-light-mode\b/g, "");
        const originText = document.getElementById('IN-origin');
        originText.className = originText.className.replace(/\b cntry-IN-light-mode\b/g, "");
        // below 3 three codes not working checkout
        // bug social-icon-theme-toggle error code-sitt01
        const facebookIconLink = document.getElementById('ftsocial-icon-fb');
        facebookIconLink.className = facebookIconLink.className.replace(/\b ftscoial-icon\b/g, "");
        const googleIconLink = document.getElementById('ftsocial-icon-g');
        googleIconLink.className = googleIconLink.className.replace(/\b ftscoial-icon\b/g, "");
        const linkedIconLink = document.getElementById('ftsocial-icon-in');
        linkedIconLink.className = linkedIconLink.className.replace(/\b ftscoial-icon\b/g, "");

        // changing display style
        document.getElementById('dark-toggle').style.display = "none";
        document.getElementById('light-toggle').style.display = "block";
      }
    }
    // again checking condition
    if(!lgtCondition) {
      // if this condition is true then execute below codes
      // here a function is created which will work when user will click on light mode toggle button
      document.getElementById('light-toggle').onclick = function() {
        // removing class
        btns[1].className = btns[1].className.replace(/\b default-active-dark-mode\b/g, "");
        // adding class
        const clsName0 = "active-light-mode"
        btns[0].className = btns[0].className + " " + clsName0
        
        //*************************************
        // in developing mode not final ******* IMPORTANT NOTE
        //*************************************
        // appling light mode
        const htmlCus = document.getElementsByTagName('html')[0];
        const bodyCus = document.getElementsByTagName('body')[0];
        htmlCus.classList.toggle('light-mode');
        bodyCus.classList.toggle('light-mode');
        
        // code needs to be written in correct way this is wriiten for testing correct it in final form 
        document.getElementById('home').classList.toggle('tplnk-light-mode');
        document.getElementById('blog').classList.toggle('tplnk-light-mode');
        
        document.getElementById('nav-linksContainer').classList.toggle('ns-light-mode');
        document.getElementById('home').classList.toggle('tplnkscrd-light-mode');
        document.getElementById('blog').classList.toggle('tplnkscrd-light-mode');

        document.getElementById('collapsibleNavbar').classList.toggle('colpsdbg-light-mode');

        document.getElementById('h1-sl1').classList.toggle('h1-sect1-lft-light-mode');
        document.getElementsByClassName('blinking-cursor')[0].classList.toggle('blinkcur-light-mode');
        document.getElementById('p-sl1').classList.toggle('p-sect1-lft-light-mode');

        document.getElementById('span-sr1').classList.toggle('span-sect1-rgt-light-mode');
        document.getElementById('h5-sr1').classList.toggle('h5-sect1-rgt-light-mode');
        document.getElementById('p-sr1').classList.toggle('p-sect1-rgt-light-mode');

        // these buttons need changes in style and improvement in light mode
        document.getElementById('joinNow').classList.toggle('joinnow-btn-light-mode');
        // document.getElementById('joinNow').classList.toggle('joinnow-btn-light-mode-hover');
        document.getElementById('Login').classList.toggle('login-btn-light-mode');

        document.getElementById('btcIndex-footer').classList.toggle('footer-light-mode');
        document.getElementById('cpyrgt-sect').classList.toggle('cpyrgt-light-mode');
        document.getElementById('career').classList.toggle('ftlink-light-mode');
        document.getElementById('contact').classList.toggle('ftlink-light-mode');
        document.getElementById('about-us').classList.toggle('ftlink-light-mode');
        document.getElementById('privacy-policy').classList.toggle('ftlink-light-mode');
        document.getElementById('IN-origin').classList.toggle('cntry-IN-light-mode');
        document.getElementById('ftsocial-icon-fb').classList.toggle('ftsocial-icon');
        document.getElementById('ftsocial-icon-g').classList.toggle('ftsocial-icon');
        document.getElementById('ftsocial-icon-in').classList.toggle('ftsocial-icon');
        
        // changing display style
        document.getElementById('dark-toggle').style.display = "block";
        document.getElementById('light-toggle').style.display = "none";
      }
    }
  }
})

// setting interval so that after that interval dark light toggle button goes back to its initial position
setInterval(function() { 
  // changing syle so that dark light toggle button return to its original position as they were before hover
  document.getElementById('toggle-theme-mode').style.position = "fixed";
  bottomAlignment = document.getElementById('toggle-theme-mode').style.bottom = "30px";
  rightAlignment = document.getElementById('toggle-theme-mode').style.right = "30px"; 
}, 12000);











// ServiceWorker is a progressive technology. Ignore unsupported browsers
if('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('/service-worker.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
}, function() {
    console.log('CLIENT: service worker registration failure.');
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}

// for navbar on small screen 
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener("click", function() {
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  const ariaValue = document.getElementById('menu-button').getAttribute('aria-expanded');
  if(ariaValue === "true") {
    document.getElementsByTagName('body')[0].removeAttribute('style');
  }
})

// giving style to active link in navbar
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

// canvas 
var canvas = document.getElementById('canvas-sl1');
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 70;

  context.beginPath();
  context.rect(0, 0, 300, 300);
  context.fillStyle = '#1FCC8E';
  context.fill();


// *********************** THEME MODE *************************
// code for toggling style button switching dark and light mode
// MAYBE MISBEHAVE

// here storing boolean to variable that whether these class is present onload if not then it false will store and if present then true will store
var lgtCondition = document.querySelector("#light-toggle").classList.contains("active-light-mode");
// dark mode button will always contain "default-active-dark-mode" onload
var drkCondition = document.querySelector("#dark-toggle").classList.contains("default-active-dark-mode");

const htmlCusDrk = document.getElementsByTagName('html')[0];
const bodyCusDrk = document.getElementsByTagName('body')[0];
const link1 = document.getElementById('home');
const link2 = document.getElementById('blog');
const navLinksContainer = document.getElementById('nav-linksContainer');
const colpsdbg = document.getElementById('collapsibleNavbar');
const h1SectLft = document.getElementById('h1-sl1');
const blinkingCursor = document.getElementsByClassName('blinking-cursor')[0];
const pSectLft = document.getElementById('p-sl1');
const spanSectRgt = document.getElementById('span-sr1');
const h5SectRgt = document.getElementById('h5-sr1');
const pSectRgt = document.getElementById('p-sr1');
const joinNoWBtn = document.getElementById('joinNow');
const Loginbtn = document.getElementById('Login');
const btcIndexFooter = document.getElementById('btcIndex-footer');
const ftLink1 = document.getElementById('cpyrgt-sect');
const ftLink2 = document.getElementById('career');
const ftLink3 = document.getElementById('contact');
const ftLink4 = document.getElementById('about-us');
const ftLink5 = document.getElementById('privacy-policy');
const originText = document.getElementById('IN-origin');
const facebookIconLink = document.getElementById('ftsocial-icon-fb');
const googleIconLink = document.getElementById('ftsocial-icon-g');
const linkedIconLink = document.getElementById('ftsocial-icon-in');

// adding event listener that on mouserover execute inside codes
const darkSwitch = document.getElementById('toggle-theme-mode');
darkSwitch.addEventListener("mouseenter", function() {
  // when we hover mouse on dark light toggle button below three lines will applied
  document.getElementById('toggle-theme-mode').style.position = "fixed";
  var bottomAlignment = document.getElementById('toggle-theme-mode').style.bottom = "70px";
  var rightAlignment = document.getElementById('toggle-theme-mode').style.right = "70px";
  // then storing values in fixed variable which cannot be modified. Storing value as const so that these variable should not be modified by mistake
  const btnContainer = document.getElementById('toggle-theme-mode');
  const btns = btnContainer.getElementsByClassName('switch');
  // condition checking
  if(bottomAlignment === "70px" && rightAlignment === "70px") {
    // if above condition is true then execute below cdes
    if(drkCondition) {
      // if this condition is true then execute below codes
      // here a function is created which will work when user will click on dark mode toggle button
      document.getElementById('dark-toggle').onclick = function() {
        // removing class
        btns[0].className = btns[0].className.replace(/\b active-light-mode\b/g, "");
        // adding class to dark-mode button
        const clsName1 = "default-active-dark-mode";
        btns[1].className = btns[1].className + " " + clsName1;

        //*************************************
        // in developing mode not final ******* IMPORTANT NOTE
        //*************************************
        // applying light mode
        // for html and body tag
        htmlCusDrk.removeAttribute("class");
        bodyCusDrk.removeAttribute("class");
        // for nav links
        link1.className = link1.className.replace(/\b tplnk-light-mode\b/g, "");
        link2.className = link2.className.replace(/\b tplnk-light-mode\b/g, "");
        // for navbar after scrolled
        navLinksContainer.className = navLinksContainer.className.replace(/\b ns-light-mode\b/g, ""); 

        // for nav link after scrolled
        link1.className = link1.className.replace(/\b tplnkscrd-light-mode\b/g, "");
        link2.className = link2.className.replace(/\b tplnkscrd-light-mode\b/g, "");

        // for navbar on smaller screen
        colpsdbg.className = colpsdbg.className.replace(/\b colpsdbg-light-mode\b/g, "");

        // for section 1 sub-section on left
        h1SectLft.className = h1SectLft.className.replace(/\b h1-sect1-lft-light-mode\b/g, "");
        blinkingCursor.className = blinkingCursor.className.replace(/\bblinkcur-light-mode\b/g, "");
        pSectLft.className = pSectLft.className.replace(/\b p-sect1-lft-light-mode\b/g, "");

        // for section 1 sub-section on right
        spanSectRgt.removeAttribute('class');
        h5SectRgt.removeAttribute('class');
        pSectRgt.removeAttribute('class');

        // for join-login buttons
        joinNoWBtn.className = joinNoWBtn.className.replace(/\b joinnow-btn-light-mode\b/g, "");
        Loginbtn.className = Loginbtn.className.replace(/\blogin-btn-light-mode\b/g, "");

        // for footer tag and footer link
        btcIndexFooter.className = btcIndexFooter.className.replace(/\b footer-light-mode\b/g, "");
        ftLink1.className = ftLink1.className.replace(/\b cpyrgt-light-mode\b/g, "");
        ftLink2.className = ftLink2.className.replace(/\b ftlink-light-mode\b/g, "");
        ftLink3.className = ftLink3.className.replace(/\b ftlink-light-mode\b/g, "");
        ftLink4.className = ftLink4.className.replace(/\b ftlink-light-mode\b/g, "");
        ftLink5.className = ftLink5.className.replace(/\b ftlink-light-mode\b/g, "");
        originText.className = originText.className.replace(/\b cntry-IN-light-mode\b/g, "");
        facebookIconLink.className = facebookIconLink.className.replace(/\b ftsocial-icon\b/g, "");
        googleIconLink.className = googleIconLink.className.replace(/\b ftsocial-icon\b/g, "");
        linkedIconLink.className = linkedIconLink.className.replace(/\b ftsocial-icon\b/g, "");

        // changing display style of buttons on click
        document.getElementById('dark-toggle').style.display = "none";
        document.getElementById('light-toggle').style.display = "block";
      }
    }
    // again checking condition
    if(!lgtCondition) {
      // if this condition is true then execute below codes
      // here a function is created which will work when user will click on light mode toggle button
      const lightSwitch = document.getElementById('light-toggle');
      lightSwitch.onclick = function() {
        // removing class
        btns[1].className = btns[1].className.replace(/\b default-active-dark-mode\b/g, "");
        // adding class to light-mode button
        const clsName0 = "active-light-mode";
        btns[0].className = btns[0].className + " " + clsName0;
        
        //*************************************
        // in developing mode not final ******* IMPORTANT NOTE
        //*************************************
        // appling light mode
        htmlCusDrk.classList.toggle('light-mode');
        bodyCusDrk.classList.toggle('light-mode');
        
        // code needs to be written in correct way this is wriiten for testing correct it in final form 
        link1.classList.toggle('tplnk-light-mode');
        link2.classList.toggle('tplnk-light-mode');
        
        navLinksContainer.classList.toggle('ns-light-mode');
        link1.classList.toggle('tplnkscrd-light-mode');
        link2.classList.toggle('tplnkscrd-light-mode');

        colpsdbg.classList.toggle('colpsdbg-light-mode');

        h1SectLft.classList.toggle('h1-sect1-lft-light-mode');
        blinkingCursor.classList.toggle('blinkcur-light-mode');
        pSectLft.classList.toggle('p-sect1-lft-light-mode');

        spanSectRgt.classList.toggle('span-sect1-rgt-light-mode');
        h5SectRgt.classList.toggle('h5-sect1-rgt-light-mode');
        pSectRgt.classList.toggle('p-sect1-rgt-light-mode');

        joinNoWBtn.classList.toggle('joinnow-btn-light-mode');
        Loginbtn.classList.toggle('login-btn-light-mode');

        btcIndexFooter.classList.toggle('footer-light-mode');
        ftLink1.classList.toggle('cpyrgt-light-mode');
        ftLink2.classList.toggle('ftlink-light-mode');
        ftLink3.classList.toggle('ftlink-light-mode');
        ftLink4.classList.toggle('ftlink-light-mode');
        ftLink5.classList.toggle('ftlink-light-mode');
        originText.classList.toggle('cntry-IN-light-mode');
        facebookIconLink.classList.toggle('ftsocial-icon');
        googleIconLink.classList.toggle('ftsocial-icon');
        linkedIconLink.classList.toggle('ftsocial-icon');
        
        // changing display style of buttons
        document.getElementById('dark-toggle').style.display = "block";
        document.getElementById('light-toggle').style.display = "none";
      }
    }
  }
})

// for darkLight Switch
function setTiming() {
  const ruTouchOrNot = window.matchMedia("(pointer: fine)").matches;
  // setting initial running time to zero
  let timeRunning = 0;
  // if device is touch then this will not work
  // and if device is not touch then this will work
  if(ruTouchOrNot) {
    // setting interval to perform specific task
    var timer = setInterval(function() { 
      // incrementing running time by 1 second
      timeRunning += 1;
      // if running time is equal to 1 sec then stop setInterval
      if(timeRunning === 1) {
        // stoping setInterval named timer
        clearInterval(timer);
      }
      // changing syle so that dark light toggle button return to its original position as they were before hover
      document.getElementById('toggle-theme-mode').style.position = "fixed";
      bottomAlignment = document.getElementById('toggle-theme-mode').style.bottom = "30px";
      rightAlignment = document.getElementById('toggle-theme-mode').style.right = "30px";
    }, 8000);
  }
}
// when user remove mouse from switch then setTiming function will be called
darkSwitch.addEventListener("mouseleave", setTiming())
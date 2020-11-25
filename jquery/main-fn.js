// navbar scrolling effect-- color chng
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// $("#customSwitches").change(function(){
//     if($(this).prop("checked") == true){
//        //run code
//        $("#top-toggle-label").html("Light Mode");
//     }else{
//        //run code
//        $("#top-toggle-label").html("Dark Mode");
//     }
// });

// $('#customSwitches').change(function(){
//     $('body').toggleClass('lightbg-mode');
//     $('.top-links').toggleClass('light-top-link-mode'); 
//     $('.light-color').toggleClass('light-label-mode');
//     $('.navbar').toggleClass('light-navbar-mode');
//     $('.scrolled, .top-links').toggleClass('light-top-scrolled-link-mode');
//     $('.scrolled, .show, .top-links').toggleClass('light-top-show-scrolled-link-mode');
//     $('.show').toggleClass('light-collapsed-bg');
//     $('.navbar').toggleClass('light-navbar-scrolled-mode');
//     $('.section-1').toggleClass('light-section-1-mode');
//     $('h1').toggleClass('light-h1-mode');
//     $('p').toggleClass('light-p-mode');
//     $('span').toggleClass('light-span-mode');
//     $('h5').toggleClass('light-h5-mode');
//     $('p').toggleClass('light-p-subrt-mode');
//     $('.join-now-btn').toggleClass('light-join-btn-mode');
//     $('footer').toggleClass('light-footer-mode');
//     $('.copyright-sect').toggleClass('light-copyright-mode');
//     $('a').toggleClass('light-footer-link-mode');
//     $('.made-in-india').toggleClass('light-made-in-india-mode');
// });
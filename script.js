$(document).ready(function(){

  console.log("Hello there. Welcome to my humble abode.")
  $('.bookToRead').on('mouseenter', function(){
    $('.construction').fadeIn("slow");
  })

  $('.bookToRead').on('mouseleave', function(){
    $('.construction').fadeOut("slow");
  })



})

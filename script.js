$(document).ready(function(){

  console.log("Hello there. Welcome to my humble abode.")
  $('.bookToRead').on('mouseenter', function(){
    $('.construction').removeClass('hidden');
  })

  $('.bookToRead').on('mouseleave', function(){
    $('.construction').addClass('hidden');
  })

  

})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.clientWidth >=640) {

    if (document.documentElement.scrollTop > 80) {
        document.getElementById("header-img").style.height = "3rem";
        document.getElementById("header-img").style.width = "4.5rem";
      } else {
        document.getElementById("header-img").style.height = "4rem";
        document.getElementById("header-img").style.width = "6rem";
      }
    } 
}

function toggle_drop_down_menu() {
    var x = document.getElementById('nav-ul');
    if (x.style.display == 'none') {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}


function hide_drop_down_menu() {
    var x = document.getElementById('nav-ul');
    x.style.display = "none";
}

// //Array of images which you want to show: Use path you want.
// var images=new Array('assets/Harvest at La Crau, with Montmajour in the Background.jpg',
//                      'assets/Sunset Wheat Fields Near Arles.jpg', 
//                      'assets/The Sower 4.jpg', 
//                      'assets/post-impressionist-1424183.jpg', 
//                      'assets/post-impressionist-1428128.jpg', 
//                      'assets/post-impressionist-1428136.jpg', 
//                      'assets/View of Arles with Irises in the Foreground.jpg');
// var nextimage=0;
// // doSlideshow();

// function doSlideshow(){
//     if(nextimage>=images.length){nextimage=0;}
//     $('header')
//     .css('background-image','url("'+images[nextimage++]+'")')
//     .fadeIn(1,function(){
//         setTimeout(doSlideshow,5000);

//     });
  
// }

// $(document).ready(function () { 
//     // document.write("got here");
//     var img_array = ['assets/Harvest-at-La-Crau-with-Montmajour-in-the-Background.jpg',
//                      'assets/Sunset-Wheat-Fields-Near-Arles.jpg', 
//                      'assets/The-Sower-4.jpg', 
//                      'assets/post-impressionist-1424183.jpg', 
//                      'assets/post-impressionist-1428128.jpg', 
//                      'assets/post-impressionist-1428136.jpg', 
//                      'assets/View-of-Arles-with-Irises-in-the-Foreground.jpg']; 	
//     var index = 0; 	
//     $('header').css({'background-image':'url('+img_array[index]+')'}); 		

//     function fadeToNext(){ 		
//         index = (index + 1) % img_array.length; 		
//         $('header').css({'background-image':'url('+img_array[index]+')'}); 		
//         waitNext(); 	
//     } 	
    
// function waitNext(){ 		
//     setTimeout(function() { 
//         fadeToNext(); },5000); 	} 	
//         waitNext();});



// var x = 0;

// function doSlides() {

// switch (x) {
//     case 0:
//         $('.header').css({"background-image": 'url('+'assets/Harvest-at-La-Crau-with-Montmajour-in-the-Background.jpg'+')'});
//         break;
//     case 1:
//         $('.header').css({"background-image": 'url('+'assets/post-impressionist-1424183.jpg'+')'});
//         break;
//     case 2:
//         $('.header').css({"background-image": 'url('+'assets/View-of-Arles-with-Irises-in-the-Foreground.jpg'+')'});
//         break;
//     case 3:
//         $('.header').css({"background-image": 'url('+'assets/Sunset-Wheat-Fields-Near-Arles'+')'});
//         break;
//     case 4:
//         $('.header').css({"background-image": 'url('+'assets/post-impressionist-1428128'+')'});
//         break;
//     case 5:
//         $('.header').css({"background-image": 'url('+'assets/post-impressionist-1428136.jpg'+')'});
//         break;
//     case 6:
//         $('.header').css({"background-image": 'url('+'assets/The-Sower-4.jpg'+')'});
//         break;
//     }

//     if (x < 6) {
//         x = x + 1;
//     } else {
//         x = 0;
//     }

//     setTimeout(function(){ doSlides(); }, 8000); 
    
// }


$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

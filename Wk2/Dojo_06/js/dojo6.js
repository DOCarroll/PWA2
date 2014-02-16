$(document).ready(function(){
   //alert("I exist");
//   $('.hideShow').click(function(){
//       $('p').toggle("slow", function(){
//           if($('p').is(':visible')){
//               $('p').val('hidden');
//           }
//           else {
//               $('p').val('visible');
//           }
//       });
//     });
    $('table td, table th').mouseover(function(){
       $(this).addClass('highlight');
    $('table td, table th').mouseout(function(){
           $(this).removeClass('highlight');
       });
    });

    $('.toggleButton').click(function(){
       $('p').slideToggle(1000);
    });
});
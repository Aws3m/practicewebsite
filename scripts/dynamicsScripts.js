// $('#worktogether').on('click',() => {
//     $('#worktogether').css(
//         "transform", 'scale(0.95)'
//       );
// });
$('#worktogether').on( "mouseenter", () => {
    $('#handshake').addClass('animate__animated animate__swing');
}).on('mouseleave', () => {
    $('#handshake').removeClass('animate__animated animate__swing');
});



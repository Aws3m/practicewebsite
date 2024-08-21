
const toggleMenu = (status) => {
    $('.slidetoggle').slideToggle('fast');
    if(status === "open"){
        $('#openmenu').css('display', 'none');
        $('#closedmenu').css('display', 'block');
    } else {
        $('#closedmenu').css('display', 'none');
        $('#openmenu').css('display', 'flex');
    }
}

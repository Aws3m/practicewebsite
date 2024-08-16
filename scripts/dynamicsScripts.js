//change sendbutton colors
changeColors = (sendbutton, sendsvg) => {
    $(`.${sendbutton}`).css('color', 'rgb(7, 151, 232)');
    $(`.${sendbutton}`).css('border-color', 'rgb(7, 151, 232)');
    $(`.${sendsvg}`).css('color', 'rgb(7, 151, 232)');
    setTimeout(() => {
        $(`.${sendbutton}`).css('color', 'rgb(64,64,102)');
    $(`.${sendbutton}`).css('border-color', 'rgb(64,64,102)');
    $(`.${sendsvg}`).css('color', 'rgb(64,64,102)');
    }, 1000);
};

//errors







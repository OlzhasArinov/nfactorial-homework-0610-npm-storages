$(document).ready(function() {
    // $('#almaty').on('click', function() {
    //     $('#bg').removeClass();
    //     $('#bg').addClass(['bg', 'almaty'])
    // });
    // $('#astana').on('click', function() {
    //     $('#bg').removeClass();
    //     $('#bg').addClass(['bg', 'astana'])
    // });
    // $('#semey').on('click', function() {
    //     $('#bg').removeClass();
    //     $('#bg').addClass(['bg', 'semey'])
    // });


});
function setAlmaty() {
    localStorage.setItem('city', 'almaty');
    const bg = document.getElementById('bg');
    bg.className = 'almaty';
}
function setAstana() {
    localStorage.setItem('city', 'astana');
    const bg = document.getElementById('bg');
    bg.className = 'astana';
}
function setSemey() {
    localStorage.setItem('city', 'semey');
    const bg = document.getElementById('bg');
    bg.className = 'semey';
}
function getValue() {
    const city = localStorage.getItem('city');
    const bg = document.getElementById('bg');
    bg.className = city;
}

function setCookie() {
    document.cookie = "user=Kazakhstan; expires=Wed, 15 June 2022 12:00:00 GMT";
}



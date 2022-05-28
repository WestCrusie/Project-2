let swiper = new Swiper(".my-slider", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    centeredSlides: true,
    spaceBetween: 10,
});

// $(document).ready(function () {
//     $('.image-content1').on("mouseenter", function () {
//         $('.image-content1').slideDown(1000);
//     });
// });


$(document).ready(function () {
    $(".grid1")
        .mouseenter(function () {
            $(".grids-overlay1").fadeIn(200);
        })
        .mouseleave(function () {
            $(".grids-overlay1").fadeOut(200);
        });
});
$(document).ready(function () {
    $(".grid2")
        .mouseenter(function () {
            $(".grids-overlay2").fadeIn(200);
        })
        .mouseleave(function () {
            $(".grids-overlay2").fadeOut(200);
        });
});
$(document).ready(function () {
    $(".grid3")
        .mouseenter(function () {
            $(".grids-overlay3").fadeIn(200);
        })
        .mouseleave(function () {
            $(".grids-overlay3").fadeOut(200);
        });
});
$(document).ready(function () {
    $(".grid4")
        .mouseenter(function () {
            $(".grids-overlay4").fadeIn(200);
        })
        .mouseleave(function () {
            $(".grids-overlay4").fadeOut(200);
        });
});
$(document).ready(function () {
    $(".grid5")
        .mouseenter(function () {
            $(".grids-overlay5").fadeIn(200);
        })
        .mouseleave(function () {
            $(".grids-overlay5").fadeOut(200);
        });
});
$(document).ready(function () {
    $(".grid6")
        .mouseenter(function () {
            $(".grids-overlay6").fadeIn(200);
        })
        .mouseleave(function () {
            $(".grids-overlay6").fadeOut(200);
        });
});
$(document).ready(function () {
    $(".grid7")
        .mouseenter(function () {
            $(".grids-overlay7").fadeIn(200);
        })
        .mouseleave(function () {
            $(".grids-overlay7").fadeOut(200);
        });
});
$(document).ready(function () {
    $(".grid8")
        .mouseenter(function () {
            $(".grids-overlay8").fadeIn(200);
        })
        .mouseleave(function () {
            $(".grids-overlay8").fadeOut(200);
        });
});





$(document).ready(function () {
    var elementos = document.querySelectorAll("img");

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener("mouseover", cambiar, false);
        elementos[i].addEventListener("mouseout", restaurar, false);

    }
});

function cambiar(img) {
    if (img.target == img1) {
        $("#img1").attr("src", "../img/zapatos/zapato1-1.jpg").delay(3000);
    } else if (img.target == img2) {
        $("#img2").attr("src", "../img/zapatos/zapato2-2.jpg");
    } else if (img.target == img3) {
        $("#img3").attr("src", "../img/zapatos/zapato3-3.jpg");
    } else if (img.target == img4) {
        $("#img4").attr("src", "../img/zapatos/zapato4-4.jpg");
    } else if (img.target == img5) {
        $("#img5").attr("src", "../img/zapatos/zapato5-5.jpg");
    } else if (img.target == img6) {
        $("#img6").attr("src", "../img/zapatos/zapato6-6.jpg");
    } else if (img.target == img7) {
        $("#img7").attr("src", "../img/zapatos/zapato7-7.jpg");
    } else if (img.target == img8) {
        $("#img8").attr("src", "../img/zapatos/zapato8-8.jpg");
    } else if (img.target == img9) {
        $("#img9").attr("src", "../img/zapatos/zapato9-9.jpg");
    } else if (img.target == img10) {
        $("#img10").attr("src", "../img/zapatos/zapato10-10.jpg");
    } else if (img.target == img11) {
        $("#img11").attr("src", "../img/zapatos/zapato11-11.jpg");
    } else if (img.target == img12) {
        $("#img12").attr("src", "../img/zapatos/zapato12-12.jpg");
    } else if (img.target == img13) {
        $("#img13").attr("src", "../img/zapatos/zapato13-13.jpg");
    } else if (img.target == img14) {
        $("#img14").attr("src", "../img/zapatos/zapato14-14.jpg");
    } else if (img.target == img15) {
        $("#img15").attr("src", "../img/zapatos/zapato15-15.jpg");
    } else if (img.target == img16) {
        $("#img16").attr("src", "../img/zapatos/zapato16-16.jpg");
    } else if (img.target == img17) {
        $("#img17").attr("src", "../img/zapatos/zapato17-17.jpg");
    } else if (img.target == img18) {
        $("#img18").attr("src", "../img/zapatos/zapato18-18.jpg");
    }
}

function restaurar(img) {
    if (img.target == img1) {
        $("#img1").attr("src", "../img/zapatos/zapato1.jpg").delay(3000);
    } else if (img.target == img2) {
        $("#img2").attr("src", "../img/zapatos/zapato2.jpg");
    } else if (img.target == img3) {
        $("#img3").attr("src", "../img/zapatos/zapato3.jpg");
    } else if (img.target == img4) {
        $("#img4").attr("src", "../img/zapatos/zapato4.jpg");
    } else if (img.target == img5) {
        $("#img5").attr("src", "../img/zapatos/zapato5.jpg");
    } else if (img.target == img6) {
        $("#img6").attr("src", "../img/zapatos/zapato6.jpg");
    } else if (img.target == img7) {
        $("#img7").attr("src", "../img/zapatos/zapato7.jpg");
    } else if (img.target == img8) {
        $("#img8").attr("src", "../img/zapatos/zapato8.jpg");
    } else if (img.target == img9) {
        $("#img9").attr("src", "../img/zapatos/zapato9.jpg");
    } else if (img.target == img10) {
        $("#img10").attr("src", "../img/zapatos/zapato10.jpg");
    } else if (img.target == img11) {
        $("#img11").attr("src", "../img/zapatos/zapato11.jpg");
    } else if (img.target == img12) {
        $("#img12").attr("src", "../img/zapatos/zapato12.jpg");
    } else if (img.target == img13) {
        $("#img13").attr("src", "../img/zapatos/zapato13.jpg");
    } else if (img.target == img14) {
        $("#img14").attr("src", "../img/zapatos/zapato14.jpg");
    } else if (img.target == img15) {
        $("#img15").attr("src", "../img/zapatos/zapato15.jpg");
    } else if (img.target == img16) {
        $("#img16").attr("src", "../img/zapatos/zapato16.jpg");
    } else if (img.target == img17) {
        $("#img17").attr("src", "../img/zapatos/zapato17.jpg");
    } else if (img.target == img18) {
        $("#img18").attr("src", "../img/zapatos/zapato18.jpg");
    }
}

var pagina = 1;

$(document).ready(function () {
    $("#page2").hide()
    $("#page3").hide()
    $("#p1").click(function() {
        $("#page1").show()
        $("#page2").hide()
        $("#page3").hide()
        pagina = 1;
    })
    $("#p2").click(function() {
        $("#page1").hide()
        $("#page2").show()
        $("#page3").hide()
        pagina = 2;
    })
    $("#p3").click(function() {
        $("#page1").hide()
        $("#page2").hide()
        $("#page3").show()
        pagina = 3;
    })
})




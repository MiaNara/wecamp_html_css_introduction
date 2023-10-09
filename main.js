window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.position = "sticky";
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("navbar").style.boxShadow = "0 4px 2px -2px rgba(0,0,0,0.2)";
        document.getElementById("navbar").style.transition = "all 0.5s ease-out";



    }
    else {
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.boxShadow = "none";
        document.getElementById("navbar").style.transition = "all 0.5s ease-in";
    }
}


function clickFunction(target) {
    document.getElementById("zoom").style.display = "block";
    document.getElementById("navbar").style.display = "none";

    var DOM_img = document.getElementById("zoomPic");

    DOM_img.src = target.src;
    var DOM_span = document.getElementById("zoomText");
    DOM_span.innerHTML = target.alt;
    var DOM_exitBtn = document.getElementById("exitBtn");

    DOM_exitBtn.onclick = function () {
        document.getElementById("zoom").style.display = "none";
        document.getElementById("navbar").style.display = "block";
    };
}


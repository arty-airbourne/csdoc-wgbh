function Button1 {
    document.getElementById("button1").styles.background = "grey";
    document.getElementById("button2").styles.background = "white";
    document.getElementById("button3").styles.background = "white";
    var greyHat = document.getElementById("greyHat");
    var whiteHat = document.getElementById("whiteHat");
    var blackHat = document.getElementById("blackHat");
    whitehat.classList.remove("hatopen");
    greyhat.classList.remove("hatopen");
    blackhat.classList.remove("hatopen");
}
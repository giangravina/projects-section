var i=0, text;
text = "welcome to my page"

function typing() {
    if(i<text.length) {
        document.getElementById("text").innerHTML += text.charAT(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();
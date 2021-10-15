function openTab(evt, elmnt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("qualification-icon-active", " qualification-icon");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " qualification-icon-active";
}

document.getElementById("defaultOpen").click();
var listOfLinks = document.getElementsByClassName("link");
var listOfCards = document.getElementsByClassName("card");
listOfCards = Array.from(listOfCards);

document.getElementById("a1").style.backgroundColor = "rgb(160, 178, 209)";
document.getElementById("a1").style.borderColor = "rgb(160, 178, 209)";
document.getElementById("a1").style.color = "rgb(255, 255, 255)";

function linkclicked(aid) {
    for(var i = 0; i < listOfLinks.length; i++) {
        if(("a" + aid) == listOfLinks[i].id) {
            var number = aid.toString();
            var element = document.getElementById("card" + number);
            var color = window.getComputedStyle(element).backgroundColor;

            document.getElementById("a" + aid).style.backgroundColor = color;
            document.getElementById("a" + aid).style.borderColor = color;
            document.getElementById("a" + aid).style.color = "rgb(255, 255, 255)";
        } else {
            document.getElementById(listOfLinks[i].id).style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById(listOfLinks[i].id).style.borderColor = "rgb(255, 255, 255)";
            document.getElementById(listOfLinks[i].id).style.color = "rgb(0, 0, 0)";
        }
    }
}

function linkto(boolnumber) {
    var activeDiv = document.getElementsByClassName("active");
    var idname = activeDiv[0].id;
    var indexnumber = listOfCards.findIndex(x => x.id === idname);
    var aid = parseInt(idname.replace("card", ""));
    var index = 0;

    listOfCards[indexnumber].className = listOfCards[indexnumber].className.replace(" active", "");

    if(boolnumber == 1) {
        if(indexnumber < (listOfCards.length - 1)) {
            listOfCards[indexnumber + 1].className += " active";
            aid += 1;
            index = indexnumber + 1;
        } else {
            listOfCards[0].className += " active";
            aid = 1
            index = 0;
        }
    } else {
        if(indexnumber > 0) {
            listOfCards[indexnumber - 1].className += " active";
            aid -= 1;
            index = indexnumber - 1;
        } else {
            listOfCards[listOfCards.length - 1].className += " active";
            aid = listOfCards.length;
            index = listOfCards.length - 1;
        }
    }

    linkclicked(aid);
    window.location.hash = "#" + listOfCards[index].id;
}
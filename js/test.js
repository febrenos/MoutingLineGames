    var count = 0;
    while(count < 10){
        count = count + 1;
        while(count < 10){
            count = count + 1;
            setTimeout(function(){document.querySelector("._ac0d").click();}, 4000);
        }
}

var count = 0;
while(count < 10){
    count = count + 1;
    var i = setTimeout(function(){document.querySelector("._9zm2").click();}, 2000);
}
document.querySelectorAll("button")[4].getAttribute("class");

function doSetTimeout(i) {
    setTimeout(function() { document.querySelector("._9zm2").click(); }, 2000);
}
var count = 0;
while(count < 10){
    count = count + 1;
    var count = 0;
    doSetTimeout(i);
}

for (var i = 1; i <= 10; ++i){
    setTimeout(function() { 
        document.querySelector("._9zm2").click();
    }, 2000);
}

//EDIT
clickInEdit = 0;
getButton(3).onclick = () => {
    let fP = filterP();
    let fS = filterS();
    let edit = null;
    
    if(fP.length === 1){
        edit = fP[0].nickName;
        findPlayer();
    }else if(fS.length === 1){
        edit = fS[0].nickName;
        findScore();
    }
    if (clickInEdit === 0 && filterP().length === 1 || clickInEdit === 0 && filterS().length === 1) {
        input.value = "";
        validateI();
        setTimeout(() => {
            getButton(3).removeAttribute("disabled");
        }, "400")
        clickInEdit += 1;
    } else if (clickInEdit == 1) {
        playersStorage = JSON.parse(localStorage.getItem("players"));
        for (const p of playersStorage) {
            if (p.nickName === edit) {
                p.nickName = input.value;
                break;
            }
        }
        clickInEdit = 0;
        localStorage.setItem("players", JSON.stringify(playersStorage));
        makePList();
        console.log("'" + edit + "' " + "EDITED" + " for" + " '" + input.value + "'");
    }
    return clickInEdit;
}
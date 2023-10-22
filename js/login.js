const submit = document.querySelector(".submit");
const input = document.querySelector(".input");
const form = document.querySelector(".loginF");
const ul = document.querySelector(".playersL > ul");
const warning = document.querySelector(".warning");
const warningP = document.querySelector(".warning > p");
let playersStorage = JSON.parse(localStorage.getItem("players") || "[]");// get existent list, if dont exist create empty array
const table = document.querySelector("table");
const thn = document.createElement("th");//table header nickName
const ths = document.createElement("th");//table header score
let players = [];//{nickName:"lucas", score:15}
// let filtedE = [];
let filtedP = [];
let filtedS = [];
let clickInEdit = 0;
thn.innerHTML = "Players";
ths.innerHTML = "Scors";
makePList();

//filter again error
//criar um documento que compara se o js esta igual e nao foi alterado
//verificacoes nas funcoes
//more values in obj list date, scores
//explication how use

function getButton(int) {
    return document.querySelectorAll("body button")[int];
}

let validateI = () => {//obj destructer "input.value.event.target.value"
    //var includes = Object.values(playersStorage[0,1].nickName).join("").includes("f");
    // console.log(target.value);
    filterS();
    filterP();
    let resultL = document.querySelectorAll("tr").length -1;
    founded = playersStorage.filter(p => p.nickName === input.value);
    ((founded.length === 0) ? founded = false : founded = true);
    let validI = /[=]|\s|\d/.test(input.value) || founded;// true / false(null)

    if (input.value.length > 1 && input.value.length < 20 && !founded && !validI) {//!includesN
        submit.disabled = false;//enable
        warning.classList.remove("warningStyle")
        warningP.innerHTML = "";
    } else {
        warning.classList.add("warningStyle")
        warningP.innerHTML = "Be unique, 1>21 characters without space";
        submit.disabled = true;//disable create "atribute","valueAtribute"
    }
    // if(playersStorage !== null){}

    if ( resultL === playersStorage.length || playersStorage.length === 0) {//iInMkp.length !== playersStorage.length
        getButton(1).disabled = true;
    } else {
        getButton(1).disabled = false;
    }
    if (filtedP.length !== 0 ) {
        getButton(2).disabled = false;
    } else {
        getButton(2).disabled = true;
    }
    if (filtedS.length !== 0 ) {
        getButton(3).disabled = false;
    } else {
        getButton(3).disabled = true;
    }
    //subimit true and click=1 and enontrado input
    if( !submit.disabled && clickInEdit === 1 && !founded){ //filtedP.length === 0 && playersStorage.some(i => i.nickName === firstI)
        getButton(4).disabled = false;//habilita bnt
    }else if(clickInEdit === 0 && founded){
        getButton(4).disabled = false;
    }else{
        getButton(4).disabled = true;//desabilita
    }
    if (filtedP.length !== 0 || filtedS.length !== 0 || founded) {
        getButton(5).disabled = false;
    } else {
        getButton(5).disabled = true;
    }
    if (playersStorage.length !== 0) {//filtedP.length === 1
        getButton(6).disabled = false;
        getButton(7).disabled = false;
    }else{
        getButton(6).disabled = true;
        getButton(7).disabled = true;
    }
    //for list() run right
    filtedP.length = 0;//set
    filtedS.length = 0;//set
}

const subimit = (event) => {
    event.preventDefault();
    filterS();
    filterP();
    ((filtedP.length !== 0) ? founded = filtedP[0].nickName : founded = null);
    // let validI = /^([=]|\s|\d)/.test(input.value) || founded;
    if(input.value.length > 1 && input.value.length < 20){//&& input.value !== founded && !validI
        filtedP.length = 0;
        filtedS.length = 0;
        playersStorage.push({ rank: 0, nickName: input.value, score: 5});
        localStorage.setItem("players", JSON.stringify(playersStorage));
        console.log("New player " + "'" + input.value + "'");
        input.value = "";
        makePList();
        validateI();
    }
}

const clearL = () => {
    // window.localStorage.removeItem("players");
    // localStorage.clear();
    // storage.removeItem(keyName);
    playersStorage.length = 0;
    localStorage.setItem("players", JSON.stringify(playersStorage));
    makePList();
    validateI();
    console.log("CLEANED");
}

const list = () => {
    makePList();
    validateI();
    console.log("LISTED");
}

const findPlayer = () => {
    filterP();
    makePList();
    validateI();
    console.log("PLAYER(S) FILTED");
}
function filterP() {
    filtedP.length = 0;
    // playersStorage;
    let word = input.value.match(/[^=]*$/);

    if (/=/.test(input.value)) {
        filtedP = playersStorage.filter(i => i.nickName === word[0]);
        //xx
    } else if (!/[=]/.test(input.value) && word[0] !== "") {
        filtedP = playersStorage.filter(i => i.nickName.toString().includes(word[0]));
    }//else if(playersStorage.filter(i => i.nickName === "").length > 0 ){
    //     filtedP = playersStorage.filter(i => i.nickName === "");
    // }
    return filtedP;
}
const findScore = () => {
    filterS();
    makePList();
    validateI();
    console.log("SCORE(S) FILTED");
}

function filterS() {
    filtedS.length = 0;
    let firstD = parseInt(input.value.match(/\d+/));
    let lastD = parseInt(input.value.match(/\d+$/));

    //=00
    if (/^\=[0-9]+$/.test(input.value)) {
        filtedS = playersStorage.filter(p => p.score === firstD);
        //00
    } else if (/^[0-9]+$/.test(input.value)) {
        filtedS = playersStorage.filter(p => p.score.toString().includes(firstD));
        //<00
    } else if (/^[<][0-9]+$/.test(input.value)) {
        filtedS = playersStorage.filter(p => p.score < firstD);
        //>00
    } else if (/^[>][0-9]+$/.test(input.value)) {
        filtedS = playersStorage.filter(p => p.score > firstD);
        //00<00
    } else if (/^\d+[<]\d+$/.test(input.value)) {
        filtedS = playersStorage.filter(p => p.score < firstD && p.score > lastD);
        //00>00
    } else if (/^\d+[>]\d+$/.test(input.value)) {
        filtedS = playersStorage.filter(p => p.score > firstD && p.score < lastD);
    }
    return filtedS;
}

const edit = () => {
    filterP();
    // ((filtedP.length !== 0) ? founded = filtedP[0].nickName : founded = null);
    let founded = playersStorage.filter(p => p.nickName === input.value);
    if (clickInEdit === 0 && founded.length === 1) {
        firstI = founded[0].nickName;
        input.value = "";
        clickInEdit = 1;
        getButton(4).disabled = true;

    }else if(clickInEdit === 1 && founded.length === 0 ){//playersStorage.some(i => i.nickName === firstI)
        for (const p of playersStorage) {
            if (p.nickName === firstI) {
                p.nickName = input.value;
                break;
            }
        }
        clickInEdit = 0;
        filtedP.length = 0;
        localStorage.setItem("players", JSON.stringify(playersStorage));
        console.log("'" + firstI + "' " + "EDITED" + " for" + " '" + input.value + "'");
        input.value = "";
        makePList();
        validateI();
    }
}

const remove = () => {
    let filtedS = filterS();
    if (filtedS.length !== 0) {
        for (f in filtedS) {
            for (p in playersStorage) {
                if (playersStorage[p].score === filtedS[f].score) {
                    playersStorage.splice(p, 1);
                    console.log("'" + filtedS[f].score + "' " + "REMOVED");
                }
            }
        }
        filtedS.length = 0;
    }
    localStorage.setItem("players", JSON.stringify(playersStorage));
    let filtedP = filterP();
    if (filtedP.length !== 0) {
        for (f in filtedP) {
            for (p in playersStorage) {
                if (playersStorage[p].nickName === filtedP[f].nickName) {
                    playersStorage.splice(p, 1);
                    console.log("'" + filtedP[f].nickName + "' " + "REMOVED");
                }
            }
        }
        filtedP.length = 0;
    }
    localStorage.setItem("players", JSON.stringify(playersStorage));
    makePList();
    validateI();
    input.value = "";
    //playersStorage = playersStorage.filter(function (i) { return i['nickName'] !== input.value; });//arr without input.valuevalue
}

const makeRank = () =>{
    // let playerList = playersStorage;
    // ((filtedP.length !== 0) ? playerList = filtedP : null);
    // ((filtedS.length !== 0) ? playerList = filtedS : null);
    // playerList.sort((a, b) => { return b.score - a.score; });
    
}

function makePList() {
    // var generateL = playerList.map(function(item, index){}
    let rank = 1;
    playersStorage.sort((a, b) => { return b.score - a.score; });
    for(i in playersStorage){
        if(i != 0 ){
            if(playersStorage[i].score !== playersStorage[i - 1].score){
                rank += 1;
            }
            playersStorage[i].rank = rank;
            // localStorage.setItem("players", JSON.stringify(playersStorage));
        }
        playersStorage[i].rank = rank;
        localStorage.setItem("players", JSON.stringify(playersStorage));
    }

    let playerList = playersStorage;
    ((filtedP.length !== 0) ? playerList = filtedP : null);
    ((filtedS.length !== 0) ? playerList = filtedS : null);
    // playerList.sort((a, b) => { return b.score - a.score; });
    document.querySelector("table").innerHTML = "";//reset
    function title(){
        return `<tr>
                    <th>${"Rank"}</th>
                    <th>${"Players"}</th>
                    <th>${"Scors"}</th>
                </tr>`;
    }
    var generateL = playerList.map(function(item, index){
        return `<tr>
            <td>${item.rank}</td>
            <td>${item.nickName}</td>
            <td>${item.score}</td>
        </tr>`;
    });
    if(playerList.length !== 0){
        document.querySelector("table").innerHTML = title() + generateL.join("");//rm ","
    }
}

window.onload = function () { validateI(); }
input.oninput = function () { validateI(); }//onkeyup
form.addEventListener("submit", subimit);//send dados and refresh page

// var podioPorPais = vencedores.map(function(item, indice){
//     return `<tr>
//     <td>${indice + 1}</td>
//     <td>${item.nome}</td>
//     <td>${item.pais}</td>
// </tr>`;
// });
// playersStorage.forEach(function loop(p) {
//     if(loop.stop){ return; }
//     if(p.score === firstD){
//         filter.push(p);
//         loop.stop = true;
//     }
// });


//https://jsfiddle.net/xvt6wbvb/


// document.querySelector("#tbPodio tbody").innerHTML = podioPorPais.join("");
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//https://www.devmedia.com.br/javascript-foreach-executando-uma-funcao-para-cada-elemento-de-um-array/39808
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//https://stackoverflow.com/questions/62491628/localstorage-remove-item-from-object-using-javascript
//https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values

// try {
//     const result = JSON.parse(playersStorage);
// } catch (err) {
//   // 👇️ This runs
//   console.log('Error: ', err.message);
// }

// TR HTML TO ARRAY JS
// const array = [];
// for(i in document.querySelectorAll("tr").length){
//     if(i%2 !== 0 ){
//         p = document.querySelectorAll("td")[i].innerHTML;
//     }else if(i%2 === 0){
//         s = document.querySelectorAll("td")[i].innerHTML;
//     }else if(s !== undefined){
//         array.push({nickName:p, score:s});
//     }
    
// }

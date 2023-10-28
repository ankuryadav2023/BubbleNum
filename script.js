function settarget() {
    var target = bsarray[Math.floor(Math.random() * 15)][Math.floor(Math.random() * 10)];
    document.getElementById('tcontainer').childNodes[1].innerHTML = target;
}

var bsarray = [];
for (var i = 0; i < 15; i++) {
    barray = []
    for (var j = 0; j < 10; j++) {
        barray[j] = Math.floor(Math.random() * 150);
    }
    bsarray[i] = barray;
}
console.log(bsarray);
var bscontainer = document.getElementById('bscontainer');
for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 10; j++) {
        bscontainer.innerHTML += `<div class="bcontainer" onclick="onclickbubble(this)"><p style="display: none;">${i}</p><p style="display: none;">${j}</p><p>${bsarray[i][j]}</p></div>`;
    }
}
settarget();

function onclickbubble(bcontainer) {
    if (document.getElementById('tcontainer').childNodes[1].innerHTML == bcontainer.childNodes[2].innerText) {
        bsarray[Number(bcontainer.childNodes[0].innerHTML)][Number(bcontainer.childNodes[1].innerHTML)] = Math.floor(Math.random() * 150);
        bcontainer.childNodes[2].innerHTML = bsarray[Number(bcontainer.childNodes[0].innerHTML)][Number(bcontainer.childNodes[1].innerHTML)];
        document.getElementById('scontainer').childNodes[1].innerHTML = Number(document.getElementById('scontainer').childNodes[1].innerHTML) + 1;
    }
    else
        document.getElementById('scontainer').childNodes[1].innerHTML = Number(document.getElementById('scontainer').childNodes[1].innerHTML) - 1;
    settarget();
}

var min = 10, sec = 0, temp = 0;
function settimer() {
    if (min == 0 && sec == 0){
        if (confirm(`Game Over\nScore: ${document.getElementById('scontainer').childNodes[1].innerHTML}\nStart Game Again?`) == true) {
            location.reload();
        }
        else document.body.style.display = 'none';
    }
    document.getElementById('timercontainer').innerHTML = `Time Left: ${min}:${sec} minutes`;
    if (temp == 0) {
        document.getElementById('timercontainer').style.display = 'block';
        temp = 1;
    }
    sec--;
    if (sec == -1) {
        min -= 1;
        sec = 59;
    }
    const timeout4 = setTimeout(settimer, 1000);
}

if (confirm('Start Game?') == true) func();
function func() {
    var tl1=gsap.timeline();
    var tl2=gsap.timeline();
    tl1.from('#tascontainer', {
        width: 0,
        duration: 1
    })
    tl1.from('#tcontainer,#scontainer',{
        opacity: 0,
        duration: 0.5,
        stagger: 0.5
    })
    tl2.from('#bscontainer', {
        width: 0,
        duration: 1
    })
    tl2.from('.bcontainer',{
        opacity: 0,
        duration: 0.1,
        stagger: 0.1
    })
    gsap.from('#timercontainer',{
        y: -100,
        opacity: 0,
        delay: 16.5,
        duration: 0.5
    })
    const timeout4 = setTimeout(settimer, 17000);
}
let a;
let time;
let date;
setInterval(() => {
    
a = new Date();
date = a.getDate()
time = a.getHours()+ ':' +a.getMinutes()+ ':' +a.getSeconds();
document.getElementById('time').innerHTML = time + ":"+ date;
}, 1000);
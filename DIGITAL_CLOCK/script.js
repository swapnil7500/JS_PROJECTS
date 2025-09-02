const clock = document.getElementById('clock')
setInterval(function(e){
    let now = new Date();
    clock.innerHTML = now.toLocaleTimeString();
})
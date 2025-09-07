const randomcolor = function(){
    let hex = '0123456789ABCDEF'
    let color = '#';
    for(let i=0;i<6;i++){
     color += hex[parseInt(Math.random() *16)]  
    //  isko krne se keval 6 tak ke color hi genrate honge export.23ff64. isi loop se hi diff typs of color genrate honge.
    
    }
    return color;
}
let changing;
function wow(){
        document.body.style.backgroundColor = randomcolor();
    }
function StartColorChange(){
    //  document.body.style.backgroundColor = randomcolor();
    // () =>{document.body.style.backgroundColor=randomcolor()}
    if (!changing) {
         changing = setInterval(wow,1000);
    }
    
}
function StopColorChange(){
    clearInterval(changing)
    changing  = null;

}

document.getElementById('start').addEventListener('click',StartColorChange);
document.getElementById('stop').addEventListener('click',StopColorChange);

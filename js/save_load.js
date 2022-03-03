var saves = []

function save(color_start,color_end,x,y){
    if (saves.length > 10000){
        saves.splice(0,1);
    }
    saves.push({
        x:x,
        y:y,
        color_start:color_start.substr(0,7).toUpperCase()+"F",
        color_end:color_end.substr(0,7).toUpperCase()+"F"
    })
}
function load(){
    if (saves[saves.length-1].x < 0 && saves[saves.length-1].y < 0){
        console.log(1)
        //document.getElementById("jscolor").value = "#"+saves[saves.length-1].color_start;
        FillAll(false,"#"+saves[saves.length-1].color_start);
    }
    else{
        console.log(2)
        ctx.fillStyle = '#'+saves[saves.length-1].color_start;
        ctx.fillRect(saves[saves.length-1].x+1,saves[saves.length-1].y+1,z-2,z-2);
        //document.getElementById("jscolor").value = "#"+saves[saves.length-1].color_start;
    }
    //console.log(saves[saves.length-1].color_start)
    saves.pop();
}
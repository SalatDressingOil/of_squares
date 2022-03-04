var saves = []
but1 = document.getElementById('buttonName');
but2 = document.getElementById('buttom_fun_load');

inp_load1.maxLength = 4
function fun_load(){
    try{
        g = parseInt(document.getElementById("inp_load1").value)
        if (g > saves.length){
            g = saves.length
            inp_load1.value = g;
        }
        load(g)
    }
    catch{
        console.error('error')
    }
    //if (isNaN(g))
    //load()
}
var score_no_fillAll = -1;
function save(color_start,color_end,x,y){
    //inp_load1.value = saves.length;
    if (saves.length > 100000){
        saves.splice(0,1);
    }
    if (x>0 && y>0){
        if (color_start==color_end){
            return
        }
        score_no_fillAll+=1;
    }
    else{
        score_no_fillAll=0;
    }
    saves.push({
        x:x,
        y:y,
        color_start:color_start.substr(0,7).toUpperCase()+"F",
        color_end:color_end.substr(0,7).toUpperCase()+"F",
        score_no_fillAll:score_no_fillAll
    })
}
async function load(n=1){
    cvs.removeEventListener("mousemove",event_mouse);
    but1.onclick = '';
    but2.onclick = '';
    for (var i = 0; i<n; i++){
        if (saves[saves.length-1].x < 0 && saves[saves.length-1].y < 0){
            console.log(1)
            //document.getElementById("jscolor").value = "#"+saves[saves.length-1].color_start;
            var promise = new Promise((resolve) =>{
                    resolve(FillAll(false,"#"+saves[saves.length-1].color_start));
            });
            await promise;
            saves.pop();
            k=saves.length-1
            while (k != 0 || saves[k].score_no_fillAll!=0) {
                ctx.fillStyle = '#'+saves[k].color_end;
                //ctx.fillRect(saves[saves.length-1].x+1,saves[saves.length-1].y+1,z-2,z-2)
                var promise = new Promise((resolve) =>{
                    setTimeout(() => {
                        resolve(ctx.fillRect(saves[k].x+1,saves[k].y+1,z-2,z-2));
                    },0)
                });
                await promise;
                k-=1;
            }
        }
        else{
            console.log(2)
            ctx.fillStyle = '#'+saves[saves.length-1].color_start;
            var promise = new Promise((resolve) =>{
                setTimeout(() => {
                    resolve(ctx.fillRect(saves[saves.length-1].x+1,saves[saves.length-1].y+1,z-2,z-2));
                },10)
            });

            await promise;
            saves.pop();

        }

    }
    //inp_load1.value = saves.length;
    cvs.addEventListener("mousemove",event_mouse);
    but1.onclick=fun_FillAll;
    but2.onclick=fun_load;
}
inp_load1 = document.getElementById("inp_load1");
inp_load1.addEventListener('input', function(e){
    g = inp_load1.value;
    document.getElementById("buttom_fun_load").innerText = "Отменить действий: "+parseInt(g);
});

async function FillAll(save_bool = true,color = document.getElementById("jscolor").value){
    cvs.removeEventListener("mousemove",event_mouse);
    but1.onclick = '';
    but2.onclick = '';
    if (save_bool){
        start_color = rgba2hex("rgba("+String(ctx.getImageData(z-1, z-1, 1, 1).data)+")");        
    }

    console.log('123123123493594306859045684905869485690')
    if (color.substr(-2) == 'FF'){
        var result = [0,1]
        while(result[0] != result[1]) {

            var promise = new Promise((resolve) =>{
                setTimeout(() => {
                    resolve(Rect(x,y,z,color.substr(0,7)+"0F"));
                },1);
            });

            result = await promise;

        }
    }
    setTimeout(Rect,0,x,y,z,color);
    if (save_bool){
        save(start_color,rgba2hex("rgba("+String(ctx.getImageData(z-1, z-1, 1, 1).data)+")"),-1,-1)
    }

    cvs.addEventListener("mousemove",event_mouse)
    but1.onclick=fun_FillAll;
    but2.onclick=fun_load;
}
function fun_FillAll(){
    FillAll()
}



async function f() {

    let promise = new Promise((resolve) => {
      setTimeout(() => resolve("готово!"), 3000)
    });
  
    let result = await promise; // будет ждать, пока промис не выполнится (*)
  
    console.log(result)// "готово!"
  }



function rgba2hex(orig) {
    var a, isPercent,
      rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
      alpha = (rgb && rgb[4] || "").trim(),
      hex = rgb ?
      (rgb[1] | 1 << 8).toString(16).slice(1) +
      (rgb[2] | 1 << 8).toString(16).slice(1) +
      (rgb[3] | 1 << 8).toString(16).slice(1) : orig;
  
    if (alpha !== "") {
      a = alpha;
    } else {
      a = 01;
    }
    // multiply before convert to HEX
    a = ((a * 255) | 1 << 8).toString(16).slice(1)
    hex = hex + a;
  
    return hex;
  }
  

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */

var x = 100; // количество (x*y)
var y = 100; 
var z = 10; // размер квадратов
var len = 10; // расстояние между квадратами
var rect_arr = new Array(x);

var cvs = document.createElement('canvas');

cvs.id = "CursorLayer";
cvs.width = x*len-(len-z)+2;
cvs.height = y*len-(len-z)+2;



/*
var saves = [];
function save(){
    if (saves.length>=1000){
        saves.splice(0,1);
    }
    a = new Array(x);
    for (var i=0;i<x;i++){
        a[i] = new Array(y);
        for(var j=0;j<y;j++){
            a[i][j] = rgba2hex("rgba("+String(ctx.getImageData(rect_arr[i][j].x+1, rect_arr[i][j].y+1, 1, 1).data)+")").substring(0,6);
        }
    }
    saves.push(a);
}
function load(zn=saves.length-1){
    for (var i=0;i<x;i++){
        for(var j=0;j<y;j++){
            ctx.fillStyle = "#"+saves[zn][i][j]
            ctx.fillRect(rect_arr[i][j].x+1,rect_arr[i][j].y+1,z-2,z-2);
        }
    }
    saves.pop();
}
*/


var p = document.getElementsByTagName("div")[0];
p.appendChild(cvs);
var ctx = cvs.getContext("2d");


for (var i = 0; i < x; i++){
    rect_arr[i] = new Array(y);
    for (var j = 0; j < y; j++){
        rect_arr[i][j] = {
            x: 0,
            y: 0,
        }
    }
}
function Rect_stroke(x,y,z,color){

    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
            rect_arr[i][j].x = 1+(i*len);
            rect_arr[i][j].y = 1+(j*len);
            ctx.strokeStyle = color;
            ctx.strokeRect(1+(i*len) ,1+(j*len),z,z);

        }
        console.log('----------')
    }


};
function Rect(x,y,z,color){
    var resul1 = rgba2hex("rgba("+String(ctx.getImageData(z-1, z-1, 1, 1).data)+")").substring(0,6)
    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
            //console.log(String(i*1)+"   "+String(j*50)+" "+String(z))
            //console.log('    ')
            ctx.fillStyle = color;
            ctx.fillRect(rect_arr[i][j].x+1,rect_arr[i][j].y+1,z-2,z-2);

        }
        console.log('----------')
    }
    return [resul1,rgba2hex("rgba("+String(ctx.getImageData(z-1, z-1, 1, 1).data)+")").substring(0,6)];

};
Rect_stroke(x,y,z,'black')
Rect(x,y,z,'white');
//mousemove
cvs.addEventListener('click', function (e) {
    console.log('событие!');
    var x1 = e.pageX - e.target.offsetLeft;
    var y1 = e.pageY - e.target.offsetTop;
    
    //console.log(String(x1)+" "+String(y1));
    //console.log(fun_x(x1,rect_arr[0]))

    for (var i = 0; i < x; i++){
        if (x1>=rect_arr[i][0].x && x1<=rect_arr[i][0].x+z+7){
            //console.log(rect_arr[i][0])
            //dsfsd
            var dat = (new Date()).getTime();
            //console.log(dat);
            for (var j = 0; j < y; j++){

                //console.log(String(x1)+" "+String(y1));
                //console.log(rect_arr[i][j]);
                //console.log(fun_y(y1,rect_arr[i]))
                //console.log(String(rect_arr[i][j].x+z)+" "+String(rect_arr[i][j].y+z))
                //console.log('-------------')
                //ctx.strokeStyle = 'green';
                //console.log(x1,y1)
                
                //ctx.strokeRect(rect_arr[i][j].x,rect_arr[i][j].y, z, z);

                if(y1>=rect_arr[i][j].y && y1<=rect_arr[i][j].y+z+7){


                    /*
                    if (rect_arr[i][j].color == '#ffffff'){
                        ctx.fillStyle = 'red';
                        rect_arr[i][j].color = 'red'
                    }
                    else {
                        ctx.fillStyle = '#ffffff';
                        rect_arr[i][j].color = '#ffffff'
                    }
                    */
                   
                    start_color = rgba2hex("rgba("+String(ctx.getImageData(rect_arr[i][j].x+1, rect_arr[i][j].y+1, 1, 1).data)+")");

                    ctx.fillStyle = document.getElementById("jscolor").value;

                    ctx.fillRect(rect_arr[i][j].x+1,rect_arr[i][j].y+1,z-2,z-2);

                    save(start_color,rgba2hex("rgba("+String(ctx.getImageData(rect_arr[i][j].x+1, rect_arr[i][j].y+1, 1, 1).data)+")"),rect_arr[i][j].x,rect_arr[i][j].y)

                    return 0;
                }
            }

        }
    }
});

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */

var x = 100; // количество (x*y)
var y = 100; 
var z = 5; // размер квадратов
var len = 5; // расстояние между квадратами
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
        //console.log('----------')
    }
    return [resul1,rgba2hex("rgba("+String(ctx.getImageData(z-1, z-1, 1, 1).data)+")").substring(0,6)];

};
Rect_stroke(x,y,z,'black')
Rect(x,y,z,'white');


//mousemove
cvs.addEventListener('mousemove', event_mouse);


function event_mouse (e) {
    //console.log('событие!');
    var x1 = e.pageX - e.target.offsetLeft;
    var y1 = e.pageY - e.target.offsetTop;
    
    //console.log(String(x1)+" "+String(y1));
    //console.log(fun_x(x1,rect_arr[0]))
    g = (div(x1+len-9,len)-1);
        if (x1>=rect_arr[g][0].x && x1<=rect_arr[g][0].x+z+7){
            h = (div(y1+len-9,len)-1);
            if(y1>=rect_arr[g][h].y && y1<=rect_arr[g][h].y+z+7){
                //console.log(h,y1+len+9,len)
                start_color = rgba2hex("rgba("+String(ctx.getImageData(rect_arr[g][h].x+1,rect_arr[g][h].y+1, 1, 1).data)+")");
    
                ctx.fillStyle = document.getElementById("jscolor").value;
    
                ctx.fillRect(rect_arr[g][h].x+1,rect_arr[g][h].y+1,z-2,z-2);
    
                save(start_color,rgba2hex("rgba("+String(ctx.getImageData(rect_arr[g][h].x+1,rect_arr[g][h].y+1, 1, 1).data)+")"),rect_arr[g][h].x,rect_arr[g][h].y)
    
                return 0;
            }

        }
    
}



function bsrc(arr, search){
    var toValue = arguments[2] || search.toValue || (f=>f);
    search = toValue(search);
    for(var x1=0, mid, x2=arr.length; x1 < x2;){

        mid = x2+x1-1>>1;
        if(toValue(arr[mid]) > search) x2=mid;
        else x1=mid+1;
    }
    //console.log(x1%=arr.length,toValue(arr[x1-1]))
    return (x1%=arr.length) && toValue(arr[x1-=1])==search ? x1:-1;
}
var a = [1,3,4,5,6,7]

function div(x,y){
    if(x/y>=0)
    return(Math.floor(x/y));
    else
    return(Math.ceil(x/y));
}
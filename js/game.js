
/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */

var x = 25; // количество (x*y)
var y = 25; 
var z = 45; // размер квадратов
var len = 50; // расстояние между квадратами
var rect_arr = new Array(x);

var cvs = document.createElement('canvas');

cvs.id = "CursorLayer";
cvs.width = x*len-(len-z)+2;
cvs.height = y*len-(len-z)+2;


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
function Rect(x,y,z,color){

    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
            rect_arr[i][j].x = 1+(i*len);
            rect_arr[i][j].y = 1+(j*len);
            //console.log(String(i*1)+"   "+String(j*50)+" "+String(z))
            //console.log('    ')
            ctx.fillStyle = color;
            ctx.fillRect(rect_arr[i][j].x ,rect_arr[i][j].y,z,z);
            ctx.strokeRect(rect_arr[i][j].x ,rect_arr[i][j].y,z,z);
        }
        console.log('----------')
    }

};
Rect(x,y,z,'white');
//mousemove
cvs.addEventListener('click', function (e) {
    console.log('событие!');
    var x1 = e.pageX - e.target.offsetLeft;
    var y1 = e.pageY - e.target.offsetTop;
    
    //console.log(String(x1)+" "+String(y1));
    //console.log(fun_x(x1,rect_arr[0]))

    for (var i = 0; i < x; i++){
        if (x1>=rect_arr[i][0].x && x1<=rect_arr[i][0].x+z){
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

                if(y1>=rect_arr[i][j].y && y1<=rect_arr[i][j].y+z){


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

                    ctx.fillStyle = document.getElementById("jscolor").value;

                    ctx.fillRect(rect_arr[i][j].x+1,rect_arr[i][j].y+1,z-2,z-2);
                    return
                }
            }

        }
    }
});
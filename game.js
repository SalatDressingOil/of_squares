var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

function Rect(x,y,z){

    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
            rect_arr[i][j].x = i*len;
            rect_arr[i][j].y = j*len;
            //console.log(String(i*1)+"   "+String(j*50)+" "+String(z))
            //console.log('    ')
            ctx.strokeRect(rect_arr[i][j].x ,rect_arr[i][j].y,z,z);
        }
        console.log('----------')
    }

};
var x = 3; // количество (x*y)
var y = 3; 

var z = 45; // размер квадратов

var len = 50; // расстояние между квадратами

var rect_arr = new Array(x);

for (var i = 0; i < x; i++){
    rect_arr[i] = new Array(y);
    for (var j = 0; j < y; j++){
        rect_arr[i][j] = {
            x: 0,
            y: 0
        }
    }
}

Rect(x,y,z);

//mousemove
cvs.addEventListener('click', function (e) {
    console.log('событие!');
    var x1 = e.pageX - e.target.offsetLeft;
    var y1 = e.pageY - e.target.offsetTop;
    for (var i = 0; i < x; i++){
        if (x1>=rect_arr[i][0].x && x1<=rect_arr[i][0].x+z){

            for (var j = 0; j < y; j++){
                //console.log(String(x1)+" "+String(y1));
                //console.log(rect_arr[i][j]);
                //console.log(String(rect_arr[i][j].x+z)+" "+String(rect_arr[i][j].y+z))
                //console.log('-------------')
                if(y1>=rect_arr[i][j].y && y1<=rect_arr[i][j].y+z){
                    ctx.fillStyle = 'red';
                    ctx.fillRect(rect_arr[i][j].x ,rect_arr[i][j].y,z,z);
                    return
                }
            }

        }
    }
});



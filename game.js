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
var x = 5000; // количество (x*y)
var y = 5000; 

var z = 1; // размер квадратов

var len = 1; // расстояние между квадратами

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

var dat1 = 0;
var dat2 = 0;

//mousemove
cvs.addEventListener('mousemove', function (e) {
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
                    dat1 += new Date().getTime()-dat;
                    console.log(dat1);

                    dat = new Date().getTime();
                    b = fun_y(y1,rect_arr[i])
                    dat2 += new Date().getTime()-dat
                    console.log(dat2);

                    console.log();
                    ctx.fillStyle = 'red';
                    ctx.fillRect(b.x ,b.y,z,z);
                    return
                }
            }

        }
    }
});









function fun_x(x,a){
    //console.log(a)
    if (a.length > 1){
        var leng = Math.floor(a.length/2)
        if (x < a[leng].x){

            return fun_x(x,a.slice(0,leng))
        }
        else{
            //console.log(String(leng)+" "+String(a.length))
            return fun_x(x,a.slice(leng,a.length))
        }
    }
    else {
        return a[0]
    }
}

function fun_y(x,a){
    //console.log(a)
    if (a.length > 1){
        var leng = Math.floor(a.length/2)
        if (x < a[leng].y){

            return fun_y(x,a.slice(0,leng))
        }
        else{

            return fun_y(x,a.slice(leng,a.length))
        }
    }
    else {
        return a[0]
    }
}
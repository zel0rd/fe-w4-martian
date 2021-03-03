const getCanvas=()=>{
    console.log("왜안돼");
    var canvas = document.querySelector('.canvas');
    console.log(canvas);
    var ct = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 500;
    //canvas 중심점
    var center_x = canvas.width / 2+3;
    var center_y = canvas.height / 2-7;
    console.log(center_x);
    console.log(center_y);
    if(canvas.getContext){
        //원형
        ct.clearRect(0,0,500,500);
        ct.strokeStyle = '#bbb5c3';
        ct.lineWidth=10;
        ct.fillStyle = '#ede7f6';
        ct.font = "20px Arial"
        for (let i=0;i<=16;i++){
            ct.beginPath();//Path 시작
            ct.moveTo(center_x,center_y);// 중심적으로 이동 
            ct.arc(center_x,center_y,center_y-50,getRadian(22.5*i),getRadian(22.5*(i+1)),false);
            ct.closePath();
            ct.stroke();
            ct.fill();
        }
        //글자
        for (let i=0;i<=15;i++){
            ct.fillStyle = '#bbb5c3';
            if (i>9) {
                ct.fillText((i.toString(16)).toUpperCase(),
                center_x-3 + 150 * Math.cos((22.5*i+11.25) * Math.PI/180),
                center_y+7 + 150 * Math.sin((22.5*i+11.25) * Math.PI/180));
            }
            else{

                ct.fillText(
                    i, 
                    center_x-3 + 150 * Math.cos((22.5*i+11.25) * Math.PI/180),
                    center_y+7 + 150 * Math.sin((22.5*i+11.25) * Math.PI/180));
            }
        }

  
        // ct.fillStyle = '#00ff00';
        // ct.fillRect(10,230,10,10);
        
        // ct.font = 'bold 12px/12px Sans-Serif';
        // ct.fillStyle = '#000';
        // ct.fillText('A',25,240);
        
        // ct.fillStyle = '#0000ff';
        // ct.fillRect(10,245,10,10);
        
        // ct.fillStyle = '#000';
        // ct.fillText('B',25,255);
        
        // ct.fillStyle = '#ff0000';
        // ct.fillRect(10,260,10,10);
        
        // ct.fillStyle = '#000';
        // ct.fillText('C',25,270);
        
        // ct.fillStyle = '#ffdd66';
        // ct.fillRect(10,275,10,10);
        
        // ct.fillStyle = '#000';
        // ct.fillText('D',25,285);
        center_x -= 12;
        center_y += 6;
        // ct.fillText('6.94%',center_x + 70 * Math.cos(12.5 * Math.PI/180),center_y + 70 * Math.sin(12.5 * Math.PI/180));
        // ct.fillText('18%',center_x + 70 * Math.cos(57.5 * Math.PI/180),center_y + 70 * Math.sin(57.5 * Math.PI/180));
        // ct.fillText('45.83%',center_x + 70 * Math.cos(172.5 * Math.PI/180),center_y + 70 * Math.sin(172.5 * Math.PI/180));
        // ct.fillText('29.23%',center_x + 70 * Math.cos(307.5 * Math.PI/180),center_y + 70 * Math.sin(307.5 * Math.PI/180));
    }
}

function getRadian (degrees) {
    return degrees * Math.PI / 180;
};




export{getCanvas}



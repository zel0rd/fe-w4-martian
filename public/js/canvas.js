
const getCanvas=()=>{
    console.log("왜안돼");
    var canvas = document.querySelector('.canvas');
    console.log(canvas);
    var ct = canvas.getContext('2d');

    canvas.width = 300;
    canvas.height = 300;
    //canvas 중심점
    var center_x = canvas.width / 2;
    var center_y = canvas.height / 2;
    if(canvas.getContext){
    ct.clearRect(0,0,300,300);
    ct.fillStyle = '#00ff00';
    ct.beginPath();
    ct.moveTo(center_x,center_y);
    ct.arc(center_x,center_y,center_y-50,0 * Math.PI/180,25 * Math.PI/180,false);
    ct.closePath();
    ct.fill();
    
    ct.fillStyle = '#0000ff';
    ct.beginPath();
    ct.moveTo(center_x,center_y);
    ct.arc(center_x,center_y,center_y-50,25 * Math.PI/180,90 * Math.PI/180,false);
    ct.closePath();
    ct.fill();
    
    ct.fillStyle = '#ff0000';
    ct.beginPath();
    ct.moveTo(center_x,center_y);
    ct.arc(center_x,center_y,center_y-50,90 * Math.PI/180,255 * Math.PI/180,false);
    ct.closePath();
    ct.fill();
    
    ct.fillStyle = '#ffdd66';
    ct.beginPath();
    ct.moveTo(center_x,center_y);
    ct.arc(center_x,center_y,center_y-50,255 * Math.PI/180,360 * Math.PI/180,false);
    ct.closePath();
    ct.fill();
    
    ct.fillStyle = '#00ff00';
    ct.fillRect(10,230,10,10);
    
    ct.font = 'bold 12px/12px Sans-Serif';
    ct.fillStyle = '#000';
    ct.fillText('A',25,240);
    
    ct.fillStyle = '#0000ff';
    ct.fillRect(10,245,10,10);
    
    ct.fillStyle = '#000';
    ct.fillText('B',25,255);
    
    ct.fillStyle = '#ff0000';
    ct.fillRect(10,260,10,10);
    
    ct.fillStyle = '#000';
    ct.fillText('C',25,270);
    
    ct.fillStyle = '#ffdd66';
    ct.fillRect(10,275,10,10);
    
    ct.fillStyle = '#000';
    ct.fillText('D',25,285);
    center_x -= 12;
    center_y += 6;
    ct.fillText('6.94%',center_x + 70 * Math.cos(12.5 * Math.PI/180),center_y + 70 * Math.sin(12.5 * Math.PI/180));
    ct.fillText('18%',center_x + 70 * Math.cos(57.5 * Math.PI/180),center_y + 70 * Math.sin(57.5 * Math.PI/180));
    ct.fillText('45.83%',center_x + 70 * Math.cos(172.5 * Math.PI/180),center_y + 70 * Math.sin(172.5 * Math.PI/180));
    ct.fillText('29.23%',center_x + 70 * Math.cos(307.5 * Math.PI/180),center_y + 70 * Math.sin(307.5 * Math.PI/180));
    }
}

export{getCanvas}



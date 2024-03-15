// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let N=4;
let x=[0,canvas.width,0,canvas.width], y=[0,0,canvas.height,canvas.height];
let dx= [5,5,5,5], dy =[5,5,5,5], r = [30,30,30,30], color =["#00BB00","#EAC100","#00AEAE","#977C00"];
let m1=9, m2=1;

// 畫圓形

    function drawBall(x, y, r, color){
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
  }


// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(let i=0;i<N;i++){
    x[i] = x[i] + dx[i];
    y[i] = y[i] + dy[i];
  }
    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    
  for(let i=0;i<N;i++){
    if(x[i]<0 || x[i]>canvas.width){
      dx[i]=-dx[i];
    }
    if(y[i]<0 || y[i]>canvas.height) {
      dy[i]=-dy[i];
    }
  }
  
     //彈性碰撞
  for(let i=0; i<N; i++){
    for(let j=i+1;j<N;j++){
      if((x[i]-x[j])*(x[i]-x[j]) + (y[i]-y[j])*(y[i]-y[j]) < (r[i]+r[j])*(r[i]+r[j]))
        [[dx[i], dy[i]],  [dx[j], dy[j]]] = [[dx[j], dy[j]],  [dx[i], dy[i]]]; 
      
    }  
  }  
      /*
      dx1=((m1-m2)*dx1+2*m2*dx2)/(m1+m2)
      dy1=((m1-m2)*dy1+2*m2*dx2)/(m1+m2)
      dx2=((m2-m1)*dx2+2*m1*dx1)/(m1+m2)
      dy2=((m2-m1)*dy2+2*m1*dx1)/(m1+m2)*/
    
    for(let i=0;i<N;i++){
      drawBall(x[i], y[i], r[i], color[i]);
    }
   
    requestAnimationFrame(draw);
}
draw();
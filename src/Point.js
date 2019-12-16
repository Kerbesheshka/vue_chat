//import { log } from 'util'
export class Point{
   constructor(canvas,size,color='black',speed=1){
       canvas.setAttribute('width',document.documentElement.clientWidth)
       canvas.setAttribute('height',document.documentElement.clientHeight)
       setInterval(function(){
          canvas.setAttribute('width',document.documentElement.clientWidth)
          canvas.setAttribute('height',document.documentElement.clientHeight)
       },100)
       this._canvas = canvas
       this._canvasSize = canvas.getBoundingClientRect()
       this._size = size
       this._color = color
       this._ctx = canvas.getContext('2d')
       this.speed = speed
       this._start(this._ctx,this._canvas,this._color)
    }
    _start(ctx,canvas){
       this._points = []
       let startX = canvas.getBoundingClientRect().width/2
       let startY = (canvas.getBoundingClientRect().height-(this._size+this._size/2))/2
       for(let i = 0;i<100;i++){
        ctx.beginPath()
        ctx.arc(startX,startY,this._size,0,2*Math.PI)
        ctx.stroke()
        this._points.push([startX,startY])
        /* if(this._randomazer()%2!=0){
            startX -= this._randomazer()
            startY -= this._randomazer()
        }
        else{
            startY += this._randomazer()
            startX += this._randomazer()
        } */
        startX = this._randomInteger(0,this._canvas.getBoundingClientRect().width)
        startY = this._randomInteger(0,this._canvas.getBoundingClientRect().height)
        //log(`ширина ${startX} высота ${startY}`)
    }
    function random(){
        let first = Math.random().toString()[2]
        first = +first
        if(first > 3){
            return random()
        }else{
            return first
        }
    }
    for(let i = 0;i<this._points.length;i++){
        this._points[i][2]=random()
    }
    function animate(){
        ctx.clearRect(canvas.getBoundingClientRect().x,canvas.getBoundingClientRect().y,canvas.getBoundingClientRect().width,canvas.getBoundingClientRect().height)
        for(let i = 0;i<this._points.length;i++){
            let startX
            let startY
            if(this._points[i][2]==0){
                if(this._points[i][1]>document.documentElement.clientHeight-this._size){
                    this._points[i][2]=2
                }
                startX = this._points[i][0]+0
                startY = this._points[i][1]+1
                this._points[i][0]=this._points[i][0]+0
                this._points[i][1]=this._points[i][1]+this.speed
            }else if(this._points[i][2]==1){
                if(this._points[i][0]>document.documentElement.clientWidth-this._size){
                    this._points[i][2]=3
                }
                startX = this._points[i][0]+1
                startY = this._points[i][1]+0
                this._points[i][0]=this._points[i][0]+this.speed
                this._points[i][1]=this._points[i][1]+0
            }
            else if(this._points[i][2]==2){
                if(this._points[i][1]<this._size){
                    this._points[i][2]=0
                }
                startX =this. _points[i][0]-0
                startY =this. _points[i][1]-1
                this._points[i][0]=this._points[i][0]-0
                this._points[i][1]=this._points[i][1]-this.speed
            }else if(this._points[i][2]==3){
                if(this._points[i][0]<this._size){
                    this._points[i][2]=1
                }
                startX = this._points[i][0]-1
                startY = this._points[i][1]-0
                this._points[i][0]=this._points[i][0]-this.speed
                this._points[i][1]=this._points[i][1]-0
            }
            let ctx = canvas.getContext('2d')
            ctx.beginPath()
            ctx.arc(startX,startY,this._size,0,2*Math.PI)
            ctx.fillStyle=this._color
            ctx.strokeStyle=this._color
            ctx.fill()
            ctx.stroke()
}
        window._stopKey = requestAnimationFrame(animation)
    }
    let animation = animate.bind(this)
    animation()
}
stop(){
    window.cancelAnimationFrame(window._stopKey)
}
_randomazer(mode=1){
    if(mode == 1){
        let first = Math.random().toString()[2]
        let second = Math.random().toString()[2]
        let result = first + second
        result = +result
        return result
    }else if(mode == 2){
       //
    }
}
_randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
setSize(x){
    this._size=x
}
setSpeed(x){
    this.speed=x
}
}
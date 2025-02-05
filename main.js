function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let colors = ['red', 'blue', 'pink','white','orange','yellow','green','purple'];


function getRandomColor(){
    let i = Math.floor(Math.random() * colors.length);
    let r = colors[i];

    return r
}

const posX = getRandomNumber(200,500)
const posY = getRandomNumber(100,600)

const c2anvas = document.createElement('canvas');
c2anvas.width = 300;
c2anvas.height = 300;
c2anvas.style.position = 'fixed';
c2anvas.style.top = posX + 'px';
c2anvas.style.left = posY + 'px';
c2anvas.style.zIndex = '9999';
document.body.appendChild(c2anvas);
  
const frame = c2anvas.getContext('2d');
frame.fillStyle = 'grey';
frame.fillRect(0, 0, 300, 300);

const canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 300;
canvas.style.position = 'fixed';
canvas.style.top = posX + 'px';
canvas.style.left = posY + 'px';
canvas.style.zIndex = '9999';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const RightBctx = canvas.getContext('2d');
RightBctx.fillStyle = 'black';

const LeftBctx = canvas.getContext('2d');
RightBctx.fillStyle = 'black';

const UpBctx = canvas.getContext('2d');
RightBctx.fillStyle = 'black';

const DownBctx = canvas.getContext('2d');
RightBctx.fillStyle = 'black';

const pos = { x: getRandomNumber(0,250), y:getRandomNumber(0,250), xn: false, yn: false};

function setColor(colored){
    color = colored
    console.log('color')
}

// variables
const trail = true
const speed = 10
let color = getRandomColor()



// move go go
move = setInterval(function(){
    
    
    if (pos.x >= 245 && pos.y >= 245)
        setColor(getRandomColor())
    if (pos.x <= 5 && pos.y >= 245)
        setColor(getRandomColor())
    if (pos.x >= 245 && pos.y <= 5)
        setColor(getRandomColor())
    if (pos.x <= 5 && pos.y <= 5)
        setColor(getRandomColor())

    if (pos.x >= 250)
        pos.xn = true
        //pos.size += grow
    if (pos.x <= 0)
        pos.xn = false
        //pos.size += grow
    if (pos.xn == true)
        pos.x -= getRandomNumber(1,getRandomNumber(2,4))
    if (pos.xn == false)
        pos.x += getRandomNumber(1,getRandomNumber(2,4))

    if (pos.y >= 250)
       // pos.size += grow
        pos.yn = true
    if (pos.y <= 0)
        //pos.size += grow
        pos.yn = false
    if (pos.yn == true)
        pos.y -= getRandomNumber(1,getRandomNumber(2,3))
    if (pos.yn == false)
        pos.y += getRandomNumber(1,getRandomNumber(2,3))

    //ctx.clearRect(0, 0, canvas.width, canvas.height);
   // frame.fillStyle = 'grey'
    //frame.fillRect(0, 0, 200, 200);

    if (trail == true)
        RightBctx.fillStyle = 'black'
        RightBctx.fillRect(pos.x - 0.3,pos.y,20,48)

        LeftBctx.fillStyle = 'black'
        LeftBctx.fillRect(pos.x + 30.3,pos.y,20,48)

        DownBctx.fillStyle = 'black'
        DownBctx.fillRect(pos.x,pos.y + 2.3,48,48)

        UpBctx.fillStyle = 'black'
        UpBctx.fillRect(pos.x,pos.y - 0.5,49,48)
    if (trail == false)
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color
    ctx.fillRect(pos.x,pos.y,50,50)
},speed)

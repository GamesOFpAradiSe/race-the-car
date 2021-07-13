// maim i want to give the gameState in making the object and display if car
//collided with the o1 o2 o3 o4 o5 o6 then the gamestate end 
//maim in this case my star will go down in my review of this project in whiteHatjr
//maim i also uploaded the code of plinko 2


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Sat = Matter.SAT.collides
var engine, world;
var gS = Intro
var Intro
var Play
var time = 3
var o1 = []
var win = []
function preload(){
reset = loadImage("assest/Reset.png")
r1 = loadImage("assest/reset1.png")
  bgi = loadImage("assest/bg.jpg")
bgf = loadImage("assest/bgf.png")
bgm = loadSound("assest/bgm.mp3")


}

function setup() {
  createCanvas(1168,552);
  engine = Engine.create();
  world = engine.world;
  
  bg = createSprite(width/2+100,height/2)

  bg.velocityY = 5

 sm = new SM(200,350)
steering = new Steering(200,420)
//speed = new SB(800,450)
// brake = new SB(1000,500)

 player = new Player(500,500,50,100)
 border = new Border(470,height/2,5,height)
 border = new Border(594,height/2,5,height)
 meter = new Meter({x:88,y:434},{x:200,y:420})
// Matter.Body.setVertices(meter.body, {x:88,y:434+10})
//bgm.play()
 
}

function draw() {
     Engine.update(engine);
 
  
      
    
       if (gS === Play) {
        cursor("assest/mouse2.png")
        if (frameCount % 100 === 0) {
          bg.velocityY = bg.velocityY + 5
          //meter = new Meter({x:88,y:434},{x:200,y:420})
 
        }
        if (bg.y > height) {
          bg.y = bg.height;
        }
        if (frameCount % 100 === 0) 
        { o1.push(new Opposite(random([570, 500, 577]), -10, 50, 100))
         }
    if(frameCount%12 === 0){
      win.push(new Win(-50,height/2,100,50))
    }
    
        imageMode(CENTER)
        image(bgi, bg.x, bg.y, width + 1000, height - height)
        //bg.addImage(bgi)
    
        sm.display()
       // speed.display()
        //meter.display()
        steering.display()
        //brake.display2()
        player.display3()
        for (var i = 0; i < win.length; i++) {
          win[i].display()
         }
    for (var i = 0; i < o1.length; i++) {
         o1[i].display()
        }
    
    
        fill("red")
        textFont("italic")
        stroke("black")
        strokeWeight(3)
        textSize(25)
    
        text("100% canvas zoom is best for this game thanks!", 250, 20)
        text(time + "/3 Lap", 30, 70)
        text("It's highway", 30, 100)
        text("In Forest mode", 30, 130)
        text("Enjoy!", 30, 160)
        text("W", 190, 270)
        text("D", 363, 430)
        text("A", 20, 430)
    
        textSize(50)
    
        text(mouseX + "," + mouseY, 500, 250)
        text(frameCount , 1000, 250)
    
        if (keyCode === 68) {
          Matter.Body.setPosition(player.body, { x: 560, y: 500 })
          Matter.Body.setAngle(steering.body, 50)
        }
    
        else if (keyCode === 65) {
          Matter.Body.setAngle(steering.body, -50)
          Matter.Body.setPosition(player.body, { x: 500, y: 500 })
        }
    
        else if (keyCode === 87) {
          Matter.Body.setAngle(steering.body, 0)
          Matter.Body.setAngle(player.body, 0)
        }
    
        //check whether opposite car obj isamde or ot
        if (o1.length > 0) {
          //for each oppo car i array ,u create a line as per SAT theorem
          for (var i = 0; i < o1.length; i++) {
     
            collision = Matter.SAT.collides(player.body, o1[i].body)
    
            //check if collision happens
            if (collision.collided) {
              
                gS = "LOSE"
            }
          }
        }
      }
    
      if (gS == "LOSE") {
        //giving background as black when gamestate is lose
        background(bgf)
        fill("blue")
        textFont("italic")
        stroke("lightblue")
        strokeWeight(10)
        textSize(100)
        text("U can't continue",300,height/2)
        imageMode(CENTER)
        image(reset,120,100,100,50)
        image(r1,120,50,50,50)
      
      }

      
      if (gS == "WIN") {
        
        background(winner)
        fill("blue")
        textFont("italic")
        stroke("lightblue")
        strokeWeight(10)
        textSize(100)
        text("^_^👍U Win👍^_^",width/2,height/2)
       
      
      }
    
    }
  
    
    
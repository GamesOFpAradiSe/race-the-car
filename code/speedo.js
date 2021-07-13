class SM {
    constructor(x,y) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.circle(x,y,0.2,options);
     
      this.image = loadImage("assest/speedometer.png")
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 300,200);
        pop();
    }
    
  };
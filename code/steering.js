class Steering {
    constructor(x,y) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.circle(x,y,1,options);
     
      this.image = loadImage("assest/steering.png")
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 300,300);
        pop();
    }
  };

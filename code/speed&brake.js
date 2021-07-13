class SB {
    constructor(x,y) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x,y,1,1,options);
     
      this.image = loadImage("assest/speed.png")
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 200,200);
        pop();
    }
    display2(){
        var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, 400,100);
          pop();
      }
  };
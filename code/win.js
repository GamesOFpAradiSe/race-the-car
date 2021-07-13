class Win{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,1,1, options);
        this.width = width;
        this.height = height;
        
        this.image3 = loadImage("assest/win.png");
        World.add(world, this.body);
      }
    

display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image3, 0, 0,this.width,this.height);
  pop();

}
}
class Player{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        this.image3 = loadImage("assest/bluecar.png");
        World.add(world, this.body);
      }
    

display3(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image3, 0, 0, 50,100);
  pop();

}
}
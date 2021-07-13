class Opposite{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0,
          'density':1.0
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image1 = loadImage("assest/o1.png");
      this.image2 = loadImage("assest/o2.png");
      this.image3 = loadImage("assest/o3.png"); 
      this.image4 = loadImage("assest/whitecar.png");
      this.image5 = loadImage("assest/bluecar.png");
      this.image6 = loadImage("assest/redcar.png");
      

      World.add(world, this.body);
      var rand=Math.round(random(1,6))
      switch(rand)
      {
        case 1:
          this.image=this.image1
          break;

       case 2:
            this.image=this.image2
            break;
            
       case 3:
              this.image=this.image3
              break;  

       case 4:
             this.image=this.image4
                break;  
       case 5:
              this.image=this.image5
              break;
       case 6:
              this.image=this.image6
              break;
       default:
             break;    
      }
    }
    display(){
     
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0,50,100);
      pop();
    }


}
class Meter{
    constructor(pointA, pointB){
        var options = {
            pointA: pointA,
            pointB: pointB,
            stiffness: 0.04
        }
        this.pointA = pointA
        this.pointB = pointB
        this.body =Matter.Constraint.create(options)
        World.add(world, this.body);
    }

   

    display(){
        
        
            var pointA = this.pointA
            var pointB = this.pointB;
            stroke("red")
       strokeWeight(4);
      
        line(pointA.x, pointA.y, pointB.x, pointB.y);
              
                
           
            
        }
    }
    


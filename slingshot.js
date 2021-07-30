class Slingshot{
    constructer(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:5
        }
      this.sling=  Constraint.create(options)
      World.add(world,this.sling)
      this.pointB=pointB
    }
    display(){
        strokeWeight(3)
        stroke("yellow")
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}
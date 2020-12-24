class Chain {
constructor(body1,point1){
    var options ={
bodyA:body1,pointB:point1


    }
this.chain1=Constraint.create(options)
World.add(world,this.chain1)
}
display(){
    strokeWeight(4,5)
    line(this.chain1.bodyA.position.x,this.chain1.bodyA.position.y,this.chain1.pointB.x,this.chain1.pointB.y);


}
}
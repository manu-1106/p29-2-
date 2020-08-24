class polygon extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.body= Bodies.circle(50, 200, 20);
        World.add(world,polygon);
        polygon.x=mouseX;
polygon.y=mouseY;
    }
    display(){
        super.display();
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
      }
    }

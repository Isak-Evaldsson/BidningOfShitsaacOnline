class shitSaac extends ex.Actor {
    speed = 250;
    dirX = 0;
    dirY = 0;
    
    constructor(x, y) {
        super(x,y,50, 50, ex.Color.Orange);
        this.collisionType = ex.CollisionType.Active;
    }

    update(engine, delta) {
        super.update(engine , delta)

        engine.input.keyboard.on('hold', (evt) => this.handleKeyEvent(evt));
        engine.input.keyboard.on('release', () => { 
                this.vel = ex.Vector.Zero.clone()
         });
    }

    handleKeyEvent(evt) {
        var dir = ex.Vector.Zero.clone()

        switch(evt.key) {
            case ex.Input.Keys.W:
                    dir.y = -1;
            break;
            case ex.Input.Keys.S:
                    dir.y = 1;
            break;
            case ex.Input.Keys.A:
                    dir.x = -1;
            break;
            case ex.Input.Keys.D:
                    dir.x = 1;
            break;

        }

        if(dir.x !== 0 || dir.y !== 0) {
            this.vel = dir.normalize().scale(this.speed);
        }
    }   
}    

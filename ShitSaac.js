class shitSaac extends ex.Actor {
    speed = 250;
    dirX = 0;
    dirY = 0;
    
    constructor(x, y) {
        super(x,y,50, 50, ex.Color.Orange);
        this.collisionType = ex.CollisionType.Active;
    }

    onInitialize(engine) {
        engine.input.keyboard.on('hold', (evt) => this.handleKeyEvent(evt, engine));
        engine.input.keyboard.on('release', () => { 
                this.vel = ex.Vector.Zero.clone()
         });
    }

    handleKeyEvent(evt, engine) {
        var dir = ex.Vector.Zero.clone()

        if (evt.key === ex.Input.Keys.W && this.pos.y > 0) {
            dir.y += -1;
        } else if (evt.key === ex.Input.Keys.S && this.pos.y < 600) {
            dir.y += 1;
        } else if (evt.key === ex.Input.Keys.A && this.pos.x > 0) {
            dir.x += -1;
        } else if (evt.key === ex.Input.Keys.D && this.pos.x < 800) {
            dir.x += 1;
        }    

        if(dir.x !== 0 || dir.y !== 0) {
            this.vel = dir.normalize().scale(this.speed);
        }
    }   
}    

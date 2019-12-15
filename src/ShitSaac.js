class shitSaac extends ex.Actor {
    speed = 250;
    dirX = 0;
    dirY = 0;
    
    constructor(x, y) {
        super(x,y,50, 50, ex.Color.Orange);
        this.collisionType = ex.CollisionType.Active;
    }

    onInitialize(engine) {
        // Movement
        engine.input.keyboard.on('hold', (evt) => this.handleKeyEvent(evt));
        engine.input.keyboard.on('release', () => { 
                this.vel = ex.Vector.Zero.clone()
         });
    }

    onPostUpdate(engine, delta) {
        // Keep player in view
        var xOfset = this.width / 2
        var yOfset = this.height / 2

        if(this.pos.x < xOfset) this.pos.x = xOfset;
        if(this.pos.y < yOfset) this.pos.y = yOfset;
        if(this.pos.x > engine.drawWidth - xOfset) this.pos.x = (engine.drawWidth - xOfset);
        if(this.pos.y > engine.drawHeight - yOfset) this.pos.y = (engine.drawHeight - yOfset);
    }

    handleKeyEvent(evt) {
        var dir = ex.Vector.Zero.clone()

        if (evt.key === ex.Input.Keys.W) {
            dir.y += -1;
        } else if (evt.key === ex.Input.Keys.S) {
            dir.y += 1;
        } else if (evt.key === ex.Input.Keys.A) {
            dir.x += -1;
        } else if (evt.key === ex.Input.Keys.D) {
            dir.x += 1;
        }    

        if(dir.x !== 0 || dir.y !== 0) {
            this.vel = dir.normalize().scale(this.speed);
        }
    }   
}    

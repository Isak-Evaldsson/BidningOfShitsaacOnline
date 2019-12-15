class shitSaac extends ex.Actor {
    speed = 250;
    direction = new ex.Vector(0, 1);

    constructor() {
        super(0, 0,50, 50, ex.Color.Orange);
        this.collisionType = ex.CollisionType.Active;
    }

    onInitialize(engine) {
        this.x = engine.drawWidth / 2;
        this.y = engine.drawHeight / 2;

        // Movement
        engine.input.keyboard.on('hold', (evt) => this.handleKeyEvent(evt, engine));
        engine.input.keyboard.on('press', (evt) => this.spawnTears(evt, engine));
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

    spawnTears(evt, engine) {
        if(evt.key === ex.Input.Keys.Q) {
            engine.add(new Tear(this.x, this.y, this.direction))
        }
    }

    handleKeyEvent(evt, engine) {
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

        // Define Direction
        if(dir.x !== 0 || dir.y !== 0) {
            this.direction = dir.normalize()
            this.vel = this.direction.scale(this.speed);
        }
    }   
}    

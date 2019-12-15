class Tear extends ex.Actor {
    velocity = 300;

    constructor(x, y, movementVector) {
        super(x, y, 10, 10, ex.Color.Blue);


        this.vel = movementVector.scale(this.velocity)
    }

    onInitialize(engine) {
        this.on('exitviewport', () => this.kill());
    }
}
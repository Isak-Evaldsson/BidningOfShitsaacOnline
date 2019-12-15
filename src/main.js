const width = 800;
const height = 600;

var engine = new ex.Engine({
    width: width,
    height: height,
    backgroundColor: ex.Color.Black,
});

var player = new shitSaac()

engine.add(player);
engine.start();
const width = 800;
const height = 600;

var engine = new ex.Engine({
    width: width,
    height: height,
    backgroundColor: ex.Color.Black,
});

var player = new shitSaac(width / 2, height / 2)

engine.add(player);
engine.start();
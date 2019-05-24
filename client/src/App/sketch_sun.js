export default class Sun {

  display(p) {
    // used for making gradient of sun
    let from = p.color(255, 204, 0, 4);
    let to = p.color(255, 250, 250, 4);
    let inter = p.lerpColor(from, to, .1)

    p.fill(inter)
    p.noStroke()

     // sun rays
    for(var i = 0; i < 12; i++) {
      if (i === 0) {
        this.sunRays(p);
      } else {
        p.rotate(100);
        this.sunRays(p);
      }
    }

    p.fill('white')
    p.ellipse(0, 0, 140, 140)
  }

  // sun
  sunRays(p) {
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
  }
}

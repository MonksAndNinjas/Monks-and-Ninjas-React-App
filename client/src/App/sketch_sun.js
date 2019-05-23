export default class Sun {
  constructor () {

  }

  display(p) {
    let from = p.color(255, 204, 0, 4);
    let to = p.color(255, 250, 250, 4);
    let inter = p.lerpColor(from, to, .1)

    p.fill(inter)
    p.noStroke()

    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
////////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
///////////////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
//////////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
/////////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
//////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
//////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
///////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
///////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
///////////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
/////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)
/////////////////
    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)

    p.push()
    p.rotate(Math.PI/16)
    p.triangle(50, 0, 0, 300, -50, 0)
    p.pop()

    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.fill('white')
    p.ellipse(0, 0, 140, 140)
  }
}

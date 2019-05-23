export default function sketch (p) {
  let stepMultiplier = 0;

  p.setup = function () {
    p.createCanvas(window.outerWidth, window.outerHeight * 2);
  };

  p.draw = function () {
    let width = window.outerWidth;
    let height = window.outerHeight * 2;
    let stepDistance = 10;
    let multiplier = (width / 10) / 140;
    let from = p.color(255, 204, 0, 5);
    let to = p.color(255, 250, 250, 5);
    let inter = p.lerpColor(from, to, .1)
    let dim = 140;

    p.background('white')

    if (window.location.pathname === "/training") {

      p.translate(width / 10, height / 2)
      p.scale(multiplier)

    //  p.translate(stepDistance + stepMultiplier, 0)

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


      stepMultiplier = stepMultiplier + .25;
    }
  };
};

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
    let from = p.color(255, 204, 0, 4);
    let to = p.color(255, 250, 250, 4);
    let inter = p.lerpColor(from, to, .1)

    p.background('white')

    if (window.location.pathname === "/training") {

      p.translate(width / 10, height / 2)
      p.scale(multiplier)

      p.push()

      p.translate(stepDistance + stepMultiplier, 0)

      p.fill('white')
      p.rect(50, 90, 200, 100)
      p.fill(173, 216, 230, 20)
      p.rect(50, 90, 200, 100)
      p.triangle(0, 170, -100, 170, 0, 150)

      p.fill('white')
      p.ellipse(60, 90, 60, 60)
      p.fill(173, 216, 230, 20)
      p.ellipse(60, 90, 60, 60)

      p.fill('white')
      p.ellipse(145, 150, 100, 100)
      p.fill(0, 0, 255, 10)
      p.ellipse(145, 150, 100, 100)

      p.fill('white')
      p.ellipse(70, 150, 130, 100)
      p.fill(0, 0, 255, 10)
      p.ellipse(70, 150, 130, 100)

      p.fill('white')
      p.ellipse(60, 150, 130, 100)
      p.fill(173, 216, 230, 20)
      p.ellipse(60, 150, 130, 100)

      p.fill('white')
      p.ellipse(170, 60, 100, 100)
      p.fill(173, 216, 230, 20)
      p.ellipse(170, 60, 100, 100)

      p.fill('white')
      p.ellipse(100, 90, 80, 80)
      p.fill(173, 216, 230, 20)
      p.ellipse(100, 90, 80, 80)

      p.fill('white')
      p.ellipse(230, 80, 70, 70)
      p.fill(173, 216, 230, 20)
      p.ellipse(230, 80, 70, 70)

      p.fill('white')
      p.ellipse(220, 130, 130, 130)
      p.fill(0, 0, 255, 10)
      p.ellipse(220, 130, 130, 130)

      p.fill('white')
      p.ellipse(230, 140, 130, 130)
      p.fill(173, 216, 230, 20)
      p.ellipse(230, 140, 130, 130)

      p.fill('white')
      p.ellipse(160, 170, 80, 70)
      p.fill(0, 0, 255, 10)
      p.ellipse(160, 170, 80, 70)


      p.fill('white')
      p.ellipse(160, 180, 80, 70)
      p.fill(173, 216, 230, 20)
      p.ellipse(160, 180, 80, 70)

      p.fill('white')
      p.ellipse(95, 175, 60, 60)
      p.fill(173, 216, 230, 20)
      p.ellipse(95, 175, 60, 60)

      p.fill('white')
      p.ellipse(0, 155, 50, 50)
      p.fill(173, 216, 230, 20)
      p.ellipse(0, 155, 50, 50)

      p.fill('white')
      p.ellipse(-20, 165, 30, 30)
      p.fill(173, 216, 230, 20)
      p.ellipse(-20, 165, 30, 30)

      p.fill('white')
      p.ellipse(-40, 135, 10, 10)
      p.fill(173, 216, 230, 20)
      p.ellipse(-40, 135, 10, 10)

      p.fill('white')
      p.ellipse(-60, 125, 6, 6)
      p.fill(173, 216, 230, 20)
      p.ellipse(-60, 125, 6, 6)

      p.pop()
///////////////

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

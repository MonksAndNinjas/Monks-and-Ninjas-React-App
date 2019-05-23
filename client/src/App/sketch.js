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

    p.background('white')
    p.stroke(0, 0, 0, 25)

    p.translate(width / 10, height / 2)
    p.scale(multiplier)

  //  p.translate(stepDistance + stepMultiplier, 0)

    p.fill(255, 204, 0, 25)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.rotate(100)
    p.triangle(50, 0, 0, 150, -50, 0)
    p.triangle(0, 0, -300, 5000, 300, 5000)

    p.fill('white')
    p.ellipse(0, 0, 140, 140)


    stepMultiplier = stepMultiplier + .25;
  };
};

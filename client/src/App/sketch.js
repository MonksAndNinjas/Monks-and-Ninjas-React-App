export default function sketch (p) {
  let stepMultiplier = 0;

  p.setup = function () {
    p.createCanvas(window.outerWidth, window.outerHeight * 2);
  };

  p.draw = function () {
    let width = window.outerWidth;
    let height = window.outerHeight * 2;
    let stepDistance = 10;

    p.background('white')
    p.stroke('#eeee')

    p.translate(stepDistance + stepMultiplier, 0)
    p.triangle((width / 10) + 50, height / 2, width / 10, (height / 2) + 150, (width / 10) - 50, height / 2)
    p.ellipse(width / 10, height / 2, width / 5, width / 5)

    stepMultiplier = stepMultiplier + .25;
  };
};

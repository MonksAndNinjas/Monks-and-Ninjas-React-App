import Cloud from './sketch_cloud.js';
import Sun from './sketch_sun.js';

export default function sketch (p) {
  let stepMultiplier = 0;
  let cloud;
  let sun;

  p.setup = function () {
    p.createCanvas(window.outerWidth, window.outerHeight * 2);
    cloud = new Cloud(p)
    sun = new Sun(p)
  };

  p.draw = function () {
    let width = window.outerWidth;
    let height = window.outerHeight * 2;
    let stepDistance = 10;
    let multiplier = (width / 10) / 140;

    p.background('white')

    if (window.location.pathname === "/training") {
      p.translate(width / 10, height / 2)
      p.scale(multiplier)

      p.push()
      p.translate(stepDistance + stepMultiplier, 0)
      cloud.display(p)
      p.pop()

      p.push()
      p.translate((stepDistance * -5) + (stepMultiplier * 2), -100)
      p.scale(multiplier / 2)
      cloud.display(p)
      p.pop()

      p.push()
      p.translate((stepDistance * -10) + (stepMultiplier * 6), -400)
      p.scale(multiplier / 4)
      cloud.display(p)
      p.pop()

      p.push()
      p.translate((stepDistance * -40) + (stepMultiplier * 4), 400)
      p.scale(multiplier * 1.25)
      cloud.display(p)
      p.pop()

      p.push()
      p.translate((stepDistance * -40) + (stepMultiplier * 8), -600)
      p.scale(multiplier * .75)
      cloud.display(p)
      p.pop()

      sun.display(p)

      stepMultiplier = stepMultiplier + .25;
    }
  };
};

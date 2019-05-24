import Cloud from './sketch_cloud.js';
import Sun from './sketch_sun.js';

export default function sketch (p) {
  let stepMultiplier = 0;
  let stepDistance = 10;
  let width = window.outerWidth;
  let height = window.outerHeight * 2;
  let multiplier = (width / 10) / 140;
  let cloud;
  let sun;

  p.setup = function () {
    p.createCanvas(window.outerWidth, window.outerHeight * 2);
    cloud = new Cloud(p)
    sun = new Sun(p)
  };

  p.draw = function () {

    p.background('white')

    if (window.location.pathname === "/training") {
      p.translate(width / 10, height / 2)
      p.scale(multiplier)

      p.push()
      p.translate(stepDistance + stepMultiplier, 0)
      cloud.display(p)
      p.pop()

      createClouds(p, 2, -5, -100, 1/2)

      createClouds(p, 6, -10, -400, 1/4)

      createClouds(p, 4, -40, 400, 1.25)

      createClouds(p, 8, -40, -600, .75)

      sun.display(p)

      stepMultiplier = stepMultiplier + .25;
    }
  };

  function createClouds(p, m, d, y, s) {
    let multMagnifier = m;
    let distMagnifier = d;
    let yValue = y;
    let scaleValue = s;

    p.push()
    p.translate((stepDistance * distMagnifier) + (stepMultiplier * multMagnifier), yValue)
    p.scale(multiplier * scaleValue)
    cloud.display(p)
    p.pop()
  };
};

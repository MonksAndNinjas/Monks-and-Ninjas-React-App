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
    let from = p.color(255, 204, 0, 4);
    let to = p.color(255, 250, 250, 4);
    let inter = p.lerpColor(from, to, .1)

    p.background('white')

    if (window.location.pathname === "/training") {

      p.translate(width / 10, height / 2)
      p.scale(multiplier)

      p.push()

      p.translate(stepDistance + stepMultiplier, 0)

      cloud.display(p)

      p.pop()
///////////////
      sun.display(p)
    
      stepMultiplier = stepMultiplier + .25;
    }
  };
};

import Cloud from './sketch_cloud.js';
import Sun from './sketch_sun.js';

export default function sketch (p) {
  let stepMultiplier = 0;               // for moving the clouds, speed
  let stepDistance = 10;                // for moving the clouds, size of step
  let width = window.outerWidth;
  let height = window.outerHeight * 2;  // canvas size
  let multiplier = (width / 10) / 140;  // for scaling
  let cloud;                            // for cloud object
  let sun;                              // for sun object

  p.setup = function () {
    p.createCanvas(width, height);
    cloud = new Cloud(p)
    sun = new Sun(p)
  };

  p.draw = function () {

    p.background('white')

    if (window.location.pathname === "/admin") {     // only displayed in /training page
      p.translate(width / 10, height / 2)     // set origin

      sun.display(p)

      createClouds(p, 1, 1, 0, 1)
      createClouds(p, 2, -5, -100, 1/2)
      createClouds(p, 6, -10, -400, 1/4)
      createClouds(p, 4, -40, 400, 1.25)
      createClouds(p, 8, -40, -600, .75)



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

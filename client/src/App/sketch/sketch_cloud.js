export default class Cloud {

  display (p) {
    let v = 60;

    p.fill('white')
    p.rect(50, 90, 200, 100)
    p.fill(173, 216, 230, 30)
    p.rect(50, 90, 200, 100)
    p.triangle(0, 170, -100, 170, 0, 150)

    this.cloudBubble(p, v, v + 30, v, v)

    this.cloudBubble(p, (v * 2) + 25, (v * 2) + 30, v + 40, v + 40)

    this.cloudBubble(p, v + 10, (v * 2) + 30, (v * 2) + 30, v + 40)

    this.cloudBubble(p, v, (v * 2) + 30, (v * 2) + 30, v + 40)

    this.cloudBubble(p, (v * 2) + 50, v, v + 40, v + 40)

    this.cloudBubble(p, v + 40, v + 30, v + 20, v + 20)

    this.cloudBubble(p, (v * 3) + 50, v + 20, v + 10, v + 10)

    this.cloudBubble(p, (v * 3) + 40, (v * 2) + 10, (v * 2) + 10, (v * 2) + 10)

    this.cloudBubble(p, (v * 3) + 50, (v * 2) + 20, (v * 2) + 10, (v * 2) + 10)

    this.cloudBubble(p, (v * 2) + 40, (v * 2) + 50, v + 20, v + 10)

    this.cloudBubble(p, (v * 2) + 40, (v * 2), v + 20, v + 10)

    this.cloudBubble(p, v + 35, (v * 2) - 5, v, v)

    this.cloudBubble(p, 0, (v * 2) + 35, v - 10, v - 10)

    this.cloudBubble(p, -v + 20, (v * 2) + 45, v - 30, v - 30)

    this.cloudBubble(p, -v + 20, (v * 2) + 15, v - 50, v - 50)

    this.cloudBubble(p, -v, (v * 2) + 5, (v / 10), (v / 10))
  }

  cloudBubble(p, x, y, w, h) {
    p.fill('white')
    p.ellipse(x, y, w, h)
    p.fill(173, 216, 230, 30)
    p.ellipse(x, y, w, h)
  }
}

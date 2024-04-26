export default class Canvas {
  constructor(width, height, id) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext('2d');
    if (id) {
      this.canvas.id = id;
    }
    document.body.appendChild(this.canvas);
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
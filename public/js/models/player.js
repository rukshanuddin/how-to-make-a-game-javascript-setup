class Player {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.color = 'white';
        this.width = 20;
        this.height = 20;
    }

    draw() {
        ctx.fillStyle =
        ctx.fillRect(this.x, this.y, this.witdh, this.height)
    }
}
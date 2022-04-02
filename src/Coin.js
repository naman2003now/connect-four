export default class Coin {
    constructor(gridHeight, gridWidth) {
        this.gridHeight = gridHeight;
        this.gridWidth = gridWidth;
        this.container = document.getElementById("container");
    }

    #clear() {
        let allCoins = document.getElementsByClassName("coin");
        for (let i = 0; i < this.gridHeight * this.gridWidth; i++) {
            allCoins[i].style.display = "none";
        }
    }

    draw(x, y) {
        this.#clear();

        //
        //
        //
        let coin = document.getElementById(Math.floor(x) + "," + Math.floor(y));
        if (coin) {
            coin.style.display = "block";
            coin.style.marginLeft =
                (x % 1) * (this.canvasHeight / this.gridHeight) + "px";
            coin.style.marginTop =
                (y % 1) * (this.canvasWidth / this.gridWidth) + "px";
        }
        //
        //
        //
        coin = document.getElementById(Math.floor(x) + 1 + "," + Math.floor(y));
        if (coin) {
            coin.style.display = "block";
            coin.style.marginLeft =
                ((x % 1) - 0.86) * (this.canvasHeight / this.gridHeight) + "px";
            coin.style.marginTop =
                (y % 1) * (this.canvasWidth / this.gridWidth) + "px";
        }
        //
        //
        //
        coin = document.getElementById(
            Math.floor(x) + "," + (Math.floor(y) + 1)
        );
        if (coin) {
            coin.style.display = "block";
            coin.style.marginLeft =
                (x % 1) * (this.canvasHeight / this.gridHeight) + "px";
            coin.style.marginTop =
                ((y % 1) - 0.86) * (this.canvasWidth / this.gridWidth) + "px";
        }
        //
        //
        //
        coin = document.getElementById(
            Math.floor(x) + 1 + "," + (Math.floor(y) + 1)
        );
        if (coin) {
            coin.style.display = "block";
            coin.style.marginLeft =
                ((x % 1) - 0.86) * (this.canvasHeight / this.gridHeight) + "px";
            coin.style.marginTop =
                ((y % 1) - 0.86) * (this.canvasWidth / this.gridWidth) + "px";
        }
    }
}

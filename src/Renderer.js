export default class Renderer {
    constructor() {
        this.#clear;
        this.heightArray = [];
        this.oldX = -1;
    }

    #clear() {
        let allCoins = document.getElementsByClassName("coin");
        for (let i = 0; i < this.gridHeight * this.gridWidth; i++) {
            allCoins[i].style.display = "none";
        }
    }

    draw(stateString) {
        this.#clear();
        this.heightArray = [];
        for (let i = 0; i < this.gridWidth; i++) {
            this.heightArray.push(0);
        }
        for (let i = 0; i < stateString.length; i++) {
            let x = stateString.charAt(i);
            let cell = document.getElementById(x + "," + this.heightArray[x]);
            cell.style.backgroundColor = i % 2 ? "#2aa198" : "#cb4b16";
            cell.style.display = "block";
            cell.style.opacity = "1.0";
            this.heightArray[x]++;
        }
    }

    hover(stateString, mouseX) {
        if (this.oldX != mouseX) {
            this.draw(stateString);
            this.oldX = mouseX;
            let hoverCell = document.getElementById(
                mouseX + "," + this.heightArray[mouseX]
            );
            hoverCell.style.backgroundColor =
                stateString.length % 2 ? "#2aa198" : "#cb4b16";
            hoverCell.style.display = "block";
            hoverCell.style.opacity = "0.2";
        }
    }
}

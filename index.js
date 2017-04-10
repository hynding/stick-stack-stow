
var grid;

class StickStackStow {
    constructor() {
        this.grid = new Array(3);
        this.grid.forEach((column)=>{
            column = new Array(3);
        });
        this.player = 0;
    }
    move(column, row){
        if (this.grid(column,row)!==null){
            return false;
        }
        this.grid[column][row]=this.player;
        this.player=!this.player;
        return true;
    }
    addCells(h,v) {
        if (h<0){
            // add left column
            for(var i=0;i<this.grid[0].length;i++) {
                this.grid.unshift(new Array(this.grid.length));
            }
        }
        else if (h>0) {
            // add right column
            for(var i=0;i<this.grid[0].length;i++) {
                this.grid.push(new Array(this.grid.length));
            }
        }
        if (v<0) {
            // add top row
            for(var i=0;i<this.grid.length;i++) {
                this.grid[i].unshift(new Array(this.grid[0].length));
            }
        }
        else if (v>0) {
            // add bottom row
            for(var i=0;i<this.grid.length;i++) {
                this.grid.push(new Array(this.grid[0].length));
            }
        }
    }
    print() {
        for(var col=0;col<this.grid.length;col++) {
            var aCol = [];
            for(var row=0;row<this.grid[col].length;row++) {
                var spot = this.grid[col][row];
                aCol.push(spot ? 'X': (spot===0?'O':' '));
            }
            console.log(aCol.join('|'));
        }
    }
}
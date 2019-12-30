export class Array2D<Type> {
  numRows :number;
  numCols :number;
  grid :Array<Array<Type>>;

  constructor(nRows: number, nCols: number){
      this.numRows = nRows;
      this.numCols = nCols;
      this.grid = [];
      for (let i = 0; i < nRows; i++){
        this.grid.push(new Array<Type>(nCols));
      }
  }

  get(r: number, c: number) :Type{
      return this.grid[r][c];
  }

  set(r: number, c: number, x : Type) :void{
      this.grid[r][c] = x;
  }

  getAt(pt : Array<number>) :Type{
      return this.get(pt[0], pt[1]);
  }
  setAt(pt : Array<number>, x:Type) :void{
      this.set(pt[0], pt[1], x);
  }

  copy() :Array<Array<Type>>{
    const grid = [];
    this.grid.forEach(r => {
        grid.push(r.slice());
    })
    return grid;
  }

  choose(r: number, c: number, r1: number, c1: number) :Array<Array<Type>>{
    const toVal = !this.get(r, c);
    const grid = this.copy();
    if(r1 <= r) {
        [r, r1] = [r1, r]
    }
    if(c1 <= c) {
        [c, c1] = [c1, c]
    }

    for(let i = r; i <= r1; i++) {
        for(let j = c; j <= c1; j++) {
            grid[i][j] = toVal;
        }
    }

    return grid;
  }

  save(array: Array<Array<Type>>) {
      //细化，目前不安全
      this.grid = array
  }
};
import {Array2D} from './Array2D'

interface Pos {
  x?: Number;
  y?: Number;
}

interface PosMove {
  start?: Pos;
  end?: Pos;
}

/**
 * 类说明
 * @class Map
 * @constructor
 */
export default class Map<Type> {
  private startPosition: Pos = null
  private endPosition: Pos = null
  private array2D: Array2D<Type>

  constructor(row:number, col:number) {
    this.array2D = new Array2D<Type>(row, col);
  }

  /**
   * 开始选择
   * @method start
   * @for Map
   * @param {Pos} pos 起始点
   * @return {Array2D<Type>} 起始点和终点
   */
  start(pos: Pos) :Array2D<Type>{
    const startPos = this.startPosition = {
      x: Number(pos.x),
      y: Number(pos.y)
    }

    const endPos = this.endPosition = {
      x: Number(pos.x),
      y: Number(pos.y)
    }

    const view = this.array2D.choose(startPos.x, startPos.y, endPos.x, endPos.y)
    return view
  }

  /**
   * @method move
   * @for Map
   * @param {Pos} pos 终点
   * @return {Array2D<Type>} 起始点和终点
   */
  move(pos: Pos) :Array2D<Type>{
    if(Number(pos.x) === this.endPosition.x && Number(pos.y) === this.endPosition.y){
      return
    }
    this.endPosition = {
      x: Number(pos.x),
      y: Number(pos.y)
    }

    const startPos = this.startPosition
    const endPos = this.endPosition

    const view = this.array2D.choose(startPos.x, startPos.y, endPos.x, endPos.y)
    return view
  }

  /**
   * @method end
   * @for Map
   * @param {Pos} pos 终点
   * @return {Array2D<Type>} 起始点和终点
   */
  end(pos: Pos) :Array2D<Type>{
    const startPos = this.startPosition
    const endPos:Pos = {
      x: pos.x,
      y: pos.y
    }

    this.startPosition = null
    this.endPosition = null

    const view = this.array2D.choose(startPos.x, startPos.y, endPos.x, endPos.y)
    this.array2D.save(view)

    return view
  }
}

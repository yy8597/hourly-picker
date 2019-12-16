import {Array2D} from './Array2D'

interface Pos {
  x?: any;
  y?: any;
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
    // console.log(this.map)
  }

  /**
   * 开始选择
   * @method start
   * @for Map
   * @param {Pos} pos 起始点
   * @return {PosMove} 起始点和终点
   */
  start(pos: Pos) :PosMove{
    this.startPosition = {
      x: pos.x,
      y: pos.y
    }

    return {
      start: this.startPosition,
      end: null
    }
  }

  /**
   * @method end
   * @for Map
   * @param {Pos} pos 终点
   * @return {PosMove} 起始点和终点
   */
  end(pos: Pos) :PosMove{
    const startPos = this.startPosition
    const endPos:Pos = {
      x: pos.x,
      y: pos.y
    }

    this.startPosition = null

    return {
      start: startPos,
      end: endPos
    }
  }
}

interface Pos {
  x: any;
  y: any;
}

export default class Map {
  private startPosition: Pos = {}
  private endPostion: Pos = {}
  private map: Array<int> = []

  // constructor() {
    //todo
    //初始化
  // }

  start(pos: Pos) {
    this.startPosition = {
      x: pos.x,
      y: pos.y
    }
  }

  end(pos: Pos) {
    this.endPosition = {
      x: pos.x,
      y: pos.y
    }

    return {
      start: this.startPosition,
      end: this.endPosition
    }
  }
}

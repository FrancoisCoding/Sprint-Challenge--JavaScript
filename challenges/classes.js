// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(attrs) {
        this.length = attrs.length
        this.width = attrs.width
        this.height = attrs.height
    }
    volume() {
        return 'Volume: ' + this.length * this.width * this.height
    }
    surfaceArea() {
        return 'Surface Area: ' + 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

class CubeMaker extends CuboidMaker {
    constructor(CubeMakerAttrs) {
        super(CubeMakerAttrs);
    }
    volume() {
        return 'Volume: ' + (this.length * this.length * this.length);
    }
    surfaceArea() {
        return 'Surface Area: ' + 6 * (this.length * this.length);
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});

const cube = new CubeMaker({
    length: 4,
    width: 5,
    height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

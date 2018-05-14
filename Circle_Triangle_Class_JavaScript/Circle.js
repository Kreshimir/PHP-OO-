class Circle 
{
    constructor(radius)
    {
        this._radius = radius;
    }

    set radius(value)
    {
        return this._radius = value;
    }

    get Area()
    {
        var result = Math.pow(this._radius,2) * Math.PI;
        return result.toFixed(2);
    }

    get Perimeter()
    {
        var result = 2 * this._radius * Math.PI;
        return result.toFixed(2);
    }
}

let circle = new Circle(5);
console.log(circle.Area);
console.log(circle.Perimeter);


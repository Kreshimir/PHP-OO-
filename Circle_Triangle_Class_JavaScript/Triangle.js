class Triangle
{
    Perimeter(a,b,c)
    {
        return a + b + c;
    }

    Area(a = null,b = null,c = null,height = null)
    {
        if(a != 0 && height != 0)
        {
            return a * height / 2;
        }

        if(b != 0 && height !=0)
        {
            return b * height / 2;
        }

        if(c != 0 && height !=0)
        {
            return c * height / 2;
        }
    }
}

let triangle = new Triangle();
console.log(triangle.Perimeter(5,7,8));
console.log(triangle.Area(5," "," ",7) + " -lenght(a) + height");
console.log(triangle.Area(" ",4," ",6) + " -lenght(b) + height");
console.log(triangle.Area(" "," ",3,5) + " -lenght(c) + height");
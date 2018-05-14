function Calc_CircleArea() 
{
    var getValue = document.getElementById("radius").value;
    var result = getValue * getValue * Math.PI;
    document.getElementById("circle_result").innerHTML = result.toFixed(2);
}

function Calc_CirclePerimeter()
{
    var getValue = document.getElementById("radius").value;
    var result = 2 * getValue * Math.PI;
    document.getElementById("circle_result").innerHTML = result.toFixed(2);
}

function Clear_Circle()
{
    document.getElementById("circle_result").innerHTML = " ";
}

function Calc_TriangleArea() 
{
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;

    var result = (base * height) / 2;
    document.getElementById("triangle_result").innerHTML = result.toFixed(2);
}

function Calc_TrianglePerimeter()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    if(a == 0 || b == 0 || c == 0) 
    {
        alert("Add all lengths for perimeter");
    }

    var result = parseInt(a) + parseInt(b) + parseInt(c);
    document.getElementById("triangle_result").innerHTML = result;
}

function Clear_Triangle()
{
    document.getElementById("triangle_result").innerHTML = " ";
}
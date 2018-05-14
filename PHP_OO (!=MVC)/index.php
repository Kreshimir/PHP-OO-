<?php
    include 'Circle.php';
    include 'Triangle.php';

    echo "Circle Area and Perimeter" . "<br>";

    $circle = new Circle();
    $circle->SetRadius(5);
    echo $circle->GetArea() . "<br>";
    echo $circle->GetPerimeter() . "<br>";

    echo "Triangle Area and Perimeter" . "<br>";

    $triangle = new Triangle();
    echo $triangle->GetPerimeter(5,8,7) . "</br>";
    echo $triangle->GetArea(7,"","",7) . " -area for length(a) and height base(a)" . "<br>"; 
    echo $triangle->GetArea("",5,"",6) . " -area for length(b) and height base(b)" . "<br>"; 
    echo $triangle->GetArea("","",4,5) . " -area for length(c) and height base(c)" . "<br>"; 
    echo $triangle->GetArea(7,5,5) . " -error message";
?>
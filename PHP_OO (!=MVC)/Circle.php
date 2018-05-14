<?php

//define('PI', 3.14);

class Circle 
{    
    //const PI = 3.14;
    var $radius;

    public function SetRadius($_radius) 
    {
        $this->radius = $_radius;
    }

    public function GetArea() 
    {
        return number_format((float) $this->radius * $this->radius * M_PI, 2, '.', '');
    }

    public function GetPerimeter() 
    {
        return number_format((float) 2 * $this->radius * M_PI, 2, '.', '');
    }
}

?>
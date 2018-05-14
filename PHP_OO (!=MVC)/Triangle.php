<?php

class Triangle 
{
    var $a;
    var $b;
    var $c;
    var $height;

    public function GetArea($_a = null, $_b = null, $_c = null, $_height = null)
    {
        $this->a = $_a;
        $this->b = $_b;
        $this->c = $_c;
        $this->height = $_height;

        $numargs = func_num_args();

        if($numargs != 4)
        {
            return "You need to have 4th parameter for height";
        }

        if($this->a != 0 && $this->height != 0)
        {
            return ($this->a * $this->height) / 2;
        }

        if($this->b != 0 && $this->height != 0)
        {
            return ($this->b * $this->height) / 2;
        }

        if($this->c != 0 && $this->height != 0)
        {
            return ($this->c * $this->height) / 2;
        }

    }

    public function GetPerimeter($_a, $_b, $_c) 
    {
        $this->a = $_a;
        $this->b = $_b;
        $this->c = $_c;
        return $this->a + $this->b + $this->c;
    }

}

?>
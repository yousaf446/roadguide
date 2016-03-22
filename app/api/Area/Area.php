<?php
namespace App\api\Area;

use App\api\Area\AreaHandler;
use \DB;

class Area
{

    protected $areaHandler;

    public function __construct(AreaHandler $areaHandler)
    {
        $this->areaHandler = $areaHandler;
    }

    public function addArea($data) {
        $result = $this->areaHandler->addArea($data);
        return $result;
    }

    public function getArea() {
        $result = $this->areaHandler->getArea();
        return $result;
    }
}
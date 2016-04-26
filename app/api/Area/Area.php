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

    public function getArea($status) {
        $result = $this->areaHandler->getArea($status);
        return $result;
    }

    public function getAreaBounds($status, $bounds) {
        $result = $this->areaHandler->getAreaBounds($status, $bounds);
        return $result;
    }

    public function getAreaCity($city) {
        $result = $this->areaHandler->getAreaCity($city);
        return $result;
    }

    public function updateArea($id) {
        $result = $this->areaHandler->updateArea($id);
        return $result;
    }

    public function fixArea() {
        $result = $this->areaHandler->fixArea();
        return $result;
    }
}
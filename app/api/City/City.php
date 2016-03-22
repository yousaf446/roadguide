<?php
namespace App\api\City;

use App\api\City\CityHandler;
use \DB;

class City
{

    protected $cityHandler;

    public function __construct(CityHandler $cityHandler)
    {
        $this->cityHandler = $cityHandler;
    }

    public function addCity($data) {
        $result = $this->cityHandler->addCity($data);
        return $result;
    }

    public function getCity() {
        $result = $this->cityHandler->getCity();
        return $result;
    }
}
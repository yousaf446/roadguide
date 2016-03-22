<?php

namespace App\api\City;
use \DB;

class CityHandler
{

    public function addCity($data)
    {

        $id = DB::table('city')->insertGetId($data);
        if ($id)
            return $id;
        else
            return false;
    }

    public function getCity()
    {

        $city = DB::table('city')
            ->get();
        if ($city)
            return $city;
        else
            return false;
    }
}
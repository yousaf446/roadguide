<?php

namespace App\api\Area;
use \DB;

class AreaHandler
{

    public function addArea($data)
    {

        $id = DB::table('areas')->insertGetId($data);
        if ($id)
            return $id;
        else
            return false;
    }

    public function getArea()
    {

        $city = DB::table('areas')
            ->where('latitude', '=', null)
            ->where('longitude', '=', null)
            ->get();
        if ($city)
            return $city;
        else
            return false;
    }
}
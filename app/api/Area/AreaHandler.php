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

    public function getArea($status)
    {

        $city = DB::table('areas')
            ->where('status', '=', $status)
            ->take(1000)
            ->get();
        if ($city)
            return $city;
        else
            return false;
    }

    public function getAreaBounds($status, $bounds)
    {

        $city = DB::table('areas')
            ->where('status', '=', $status)
            ->whereNull('bounds')
            ->take(500)
            ->get();
        if ($city)
            return $city;
        else
            return false;
    }
}
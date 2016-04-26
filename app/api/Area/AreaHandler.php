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
            ->where('bounds', '=', 'NA')
            ->get();
        if ($city)
            return $city;
        else
            return false;
    }

    public function getAreaCity($city)
    {

        $city = DB::table('areas')
            ->where('status', '=', 1)
            ->where('cityName', '=', $city)
            ->where('bounds', '<>', false)
            ->orWhere('bounds', '<>', 'NA')
            ->take(1)
            ->get();
        if ($city)
            return $city;
        else
            return false;
    }

    public function updateArea($id)
    {

        $city = DB::table('areas')
            ->where('_id', '=', $id)
            ->update([
                'status' => 2
            ]);
        if ($city)
            return $city;
        else
            return false;
    }

    public function fixArea()
    {

        $city = DB::table('areas')
            ->where('status', '=', 2)
            ->update([
                'status' => 1
            ]);
        if ($city)
            return $city;
        else
            return false;
    }
}
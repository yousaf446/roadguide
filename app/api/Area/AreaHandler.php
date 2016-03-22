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

    public function getArea($status, $bounds = null)
    {

        $city = DB::table('areas')
            ->where('status', '=', $status)
            ->where('bounds', '=', $bounds)
            ->take(20)
            ->get();
        if ($city)
            return $city;
        else
            return false;
    }
}
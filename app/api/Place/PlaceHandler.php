<?php

namespace App\api\Place;
use \DB;

class PlaceHandler
{

    public function addPlace($data)
    {

        $id = DB::table('places_id')->insertGetId($data);
        if ($id)
            return $id;
        else
            return false;
    }
}
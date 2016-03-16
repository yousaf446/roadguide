<?php
namespace App\api\Place;

use App\api\Place\PlaceHandler;
use \DB;

class Place
{

    protected $placeHandler;

    public function __construct(PlaceHandler $placeHandler)
    {
        $this->placeHandler = $placeHandler;
    }

    public function addPlace($data) {
        DB::beginTransaction();
        try {
            $result = $this->placeHandler->addPlace($data);

            DB::commit();
            return $result;
        } catch(\Exception $e){
            DB::rollback();

        }
    }
}
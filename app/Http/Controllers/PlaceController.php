<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\api\Response\Response;

use App\api\Place\Place;

class PlaceController extends Controller
{

    protected $request;
    protected $response;
    protected $place;

    public function __construct(Request $request, Response $response, Place $place){
        $this->request = $request;
        $this->response = $response;
        $this->place = $place;
    }

    public function addPlace() {

        $data = $this->request->all();

        $result = $this->place->addPlace($data);

        if($result){

            return $this->response->success($result);

        } else {

            return $this->response->application_error('Internal Server Error');

        }
    }
}

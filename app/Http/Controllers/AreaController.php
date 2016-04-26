<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\api\Response\Response;

use App\api\Area\Area;

class AreaController extends Controller
{

    protected $request;
    protected $response;
    protected $area;

    public function __construct(Request $request, Response $response, Area $area){
        $this->request = $request;
        $this->response = $response;
        $this->area = $area;
    }

    public function getAreaCity() {
        $city = "Rawalpindi";
        $result = $this->area->getAreaCity($city);

        if($result){

            return $this->response->success($result);

        } else {

            return $this->response->application_error('Internal Server Error');

        }
    }
    public function updateArea() {

        $id = $this->request->get('areaID');
        $result = $this->area->updateArea($id);

        if($result){

            return $this->response->success($result);

        } else {

            return $this->response->application_error('Internal Server Error');

        }
    }

    public function fixArea() {

        $result = $this->area->fixArea();

        if($result){

            return $this->response->success($result);

        } else {

            return $this->response->application_error('Internal Server Error');

        }
    }



}

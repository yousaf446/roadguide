@extends('layout.default')

@section('content-wrapper')
    <div ng-controller="searchController">
        <form class="form-inline">
            <div class="form-group">
                <label for="location">Location</label>
                <input type="text" class="form-control" id="location" placeholder="Enter Location">
            </div>

            <button class="btn btn-default" ng-click="getPlaces()">Get Places</button>
        </form>
        <br/>
        <div id="map_canvas" style="width:100%;height:90%;position:absolute !important"></div>

    </div>
@endsection
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>RoadGuide</title>
    <meta name="description" content="Here goes description" />
    <meta name="author" content="author name" />

    <!-- Mobile Specific Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' type='text/css' />

</head>
<body>
            @yield('content-wrapper')

<!-- Scripts -->
<script src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>
<script src="https://code.jquery.com/jquery-1.12.1.min.js" integrity="sha256-I1nTg78tSrZev3kjvfdM5A5Ak/blglGzlaZANLPDl3I="
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script type="text/javascript" src="{{URL::to('app/lib/requirejs/require.js')}}" data-main="{{URL::to('app/main.js')}}"></script>
</body>
</html>
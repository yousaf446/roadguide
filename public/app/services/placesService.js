define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('placesService', function() {
        this.places = [
            'airport',
            'amusement_park',
            'art_gallery',
            'atm',
            'bakery',
            'bank',
            'beauty_salon',
            'book_store',
            'bus_station',
            'cafe',
            'car_dealer',
            'car_rental',
            'car_repair',
            'car_wash',
            'cemetery',
            'church',
            'clothing_store',
            'dentist',
            'department_store',
            'doctor',
            'electrician',
            'fire_station',
            'gas_station',
            'grocery_or_supermarket',
            'gym',
            'hair_care',
            'home_goods_store',
            'hospital',
            'jewelry_store',
            'laundry',
            'lawyer',
            'library',
            'meal_delivery',
            'meal_takeaway',
            'mosque',
            'movie_theater',
            'museum',
            'park',
            'parking',
            'plumber',
            'police',
            'post_office',
            'real_estate_agency',
            'restaurant',
            'school',
            'shoe_store',
            'shopping_mall',
            'stadium',
            'store',
            'taxi_stand',
            'train_station',
            'travel_agency',
            'university',
            'veterinary_care',
            'zoo'
        ]
    });
});
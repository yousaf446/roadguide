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

        this.areas = {
                "Islamabad": {
                    "SectorD":
                        [
                            {
                                "name": 'D-12',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.7097131,
                                        "lng" : 72.96109319999999
                                    },
                                    "southwest" : {
                                        "lat" : 33.6922452,
                                        "lng" : 72.934724
                                    }
                                },
                            },
                            {
                                "name": 'D-17',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.6692113,
                                        "lng" : 72.8752327
                                    },
                                    "southwest" : {
                                        "lat" : 33.646064,
                                        "lng" : 72.8463507
                                    }
                                },
                            },
                            {
                                "name": 'D-18',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.6610497,
                                        "lng" : 72.8588068
                                    },
                                    "southwest" : {
                                        "lat" : 33.6373732,
                                        "lng" : 72.8384756
                                    }
                                },
                            },
                ],
                    "SectorE":
                        [
                            {
                                "name": 'E-7',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.7306237,
                                        "lng" : 73.0566654
                                    },
                                    "southwest" : {
                                        "lat" : 33.7230837,
                                        "lng" : 73.0408429
                                    }
                                },
                            },
                            {
                                "name": 'E-8',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.727266,
                                        "lng" : 73.0429048
                                    },
                                    "southwest" : {
                                        "lat" : 33.713994,
                                        "lng" : 73.02320779999999
                                    }
                                },
                            },
                            {
                                "name": 'E-9',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.7239408,
                                        "lng" : 73.0265711
                                    },
                                    "southwest" : {
                                        "lat" : 33.706597,
                                        "lng" : 73.006209
                                    }
                                },
                            },
                            {
                                "name": 'E-10',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.7204838,
                                        "lng" : 73.0124435
                                    },
                                    "southwest" : {
                                        "lat" : 33.695669,
                                        "lng" : 72.9777038
                                    }
                                },
                            },
                            {
                                "name": 'E-11',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.7063111,
                                        "lng" : 72.9900894
                                    },
                                    "southwest" : {
                                        "lat" : 33.6864475,
                                        "lng" : 72.9633702
                                    }
                                },
                            },
                            {
                                "name": 'E-18',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.6416874,
                                        "lng" : 72.86664949999999
                                    },
                                    "southwest" : {
                                        "lat" : 33.6229103,
                                        "lng" : 72.84210209999999
                                    }
                                },
                            },
                        ],
                    "SectorF":
                        [
                            {
                                "name": 'F-6',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.7422533,
                                        "lng" : 73.08763669999999
                                    },
                                    "southwest" : {
                                        "lat" : 33.7198773,
                                        "lng" : 73.0622109
                                    }
                                }
                            },
                            {
                                "name": 'F-7',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.7309804,
                                        "lng" : 73.0698819
                                    },
                                    "southwest" : {
                                        "lat" : 33.7105353,
                                        "lng" : 73.0446675
                                    }
                                },
                            },
                            {
                                "name": 'F-8',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.721865,
                                        "lng" : 73.0522843
                                    },
                                    "southwest" : {
                                        "lat" : 33.7014581,
                                        "lng" : 73.02713469999999
                                    }
                                },
                            },
                            {
                                "name": 'F-9',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.7126163,
                                        "lng" : 73.03566579999999
                                    },
                                    "southwest" : {
                                        "lat" : 33.6911838,
                                        "lng" : 73.00957400000001
                                    }
                                },
                            },
                            {
                                "name": 'F-10',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.70192660000001,
                                        "lng" : 73.0179528
                                    },
                                    "southwest" : {
                                        "lat" : 33.6815035,
                                        "lng" : 72.99322819999999
                                    }
                                },
                            },
                            {
                                "name": 'F-11',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.6927348,
                                        "lng" : 73.00068539999999
                                    },
                                    "southwest" : {
                                        "lat" : 33.6721847,
                                        "lng" : 72.97548279999999
                                    }
                                },
                            },
                            {
                                "name": 'F-15',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.65249420000001,
                                        "lng" : 72.93012139999999
                                    },
                                    "southwest" : {
                                        "lat" : 33.6350954,
                                        "lng" : 72.9083742
                                    }
                                },
                            },
                            {
                                "name": 'F-17',
                                "bounds" : {
                                    "northeast" : {
                                        "lat" : 33.63990990000001,
                                        "lng" : 72.8966046
                                    },
                                    "southwest" : {
                                        "lat" : 33.6171925,
                                        "lng" : 72.8686665
                                    }
                                },
                            },
                        ],
                    "SectorG": [
                        {
                            "name": 'G-5',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.7287669,
                                    "lng" : 73.1055813
                                },
                                "southwest" : {
                                    "lat" : 33.7134806,
                                    "lng" : 73.0905662
                                }
                            },
                        },
                        {
                            "name": 'G-6',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.7255275,
                                    "lng" : 73.09916579999999
                                },
                                "southwest" : {
                                    "lat" : 33.7042449,
                                    "lng" : 73.0733973
                                }
                            },
                        },
                        {
                            "name": 'G-7',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.7163514,
                                    "lng" : 73.08158229999999
                                },
                                "southwest" : {
                                    "lat" : 33.6950813,
                                    "lng" : 73.05577219999999
                                }
                            },
                        },
                        {
                            "name": 'G-8',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.7072239,
                                    "lng" : 73.06244869999999
                                },
                                "southwest" : {
                                    "lat" : 33.6853312,
                                    "lng" : 73.0375117
                                }
                            },
                        },
                        {
                            "name": 'G-9',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6979696,
                                    "lng" : 73.04645459999999
                                },
                                "southwest" : {
                                    "lat" : 33.6767186,
                                    "lng" : 73.020675
                                }
                            },
                        },
                        {
                            "name": 'G-10',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6887495,
                                    "lng" : 73.02891850000002
                                },
                                "southwest" : {
                                    "lat" : 33.6675322,
                                    "lng" : 73.00311859999999
                                }
                            },
                        },
                        {
                            "name": 'G-11',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.67965840000001,
                                    "lng" : 73.0113436
                                },
                                "southwest" : {
                                    "lat" : 33.6583084,
                                    "lng" : 72.98561599999999
                                }
                            },
                        },
                        {
                            "name": 'G-13',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6611248,
                                    "lng" : 72.97597949999999
                                },
                                "southwest" : {
                                    "lat" : 33.6399278,
                                    "lng" : 72.9498126
                                }
                            },
                        },
                        {
                            "name": 'G-14',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6523156,
                                    "lng" : 72.9579306
                                },
                                "southwest" : {
                                    "lat" : 33.632755,
                                    "lng" : 72.9333508
                                }
                            },
                        },
                        {
                            "name": 'G-15',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6430986,
                                    "lng" : 72.93967019999999
                                },
                                "southwest" : {
                                    "lat" : 33.62216,
                                    "lng" : 72.9149079
                                }
                            },
                        },
                        {
                            "name": 'G-16',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6333445,
                                    "lng" : 72.9223966
                                },
                                "southwest" : {
                                    "lat" : 33.6175678,
                                    "lng" : 72.8975488
                                }
                            },
                        },
                    ],
                    "SectorH": [
                        {
                            "name": 'H-8',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6911919,
                                    "lng" : 73.07468249999999
                                },
                                "southwest" : {
                                    "lat" : 33.670457,
                                    "lng" : 73.04967959999999
                                }
                            },
                        },
                        {
                            "name": 'H-9',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6825975,
                                    "lng" : 73.0580961
                                },
                                "southwest" : {
                                    "lat" : 33.6612707,
                                    "lng" : 73.03217939999999
                                }
                            },
                        },
                        {
                            "name": 'H-10',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.673217,
                                    "lng" : 73.0401237
                                },
                                "southwest" : {
                                    "lat" : 33.6522104,
                                    "lng" : 73.01443789999999
                                }
                            },
                        },
                        {
                            "name": 'H-11',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6643725,
                                    "lng" : 73.02274419999999
                                },
                                "southwest" : {
                                    "lat" : 33.6427191,
                                    "lng" : 72.99660799999999
                                }
                            },
                        },
                        {
                            "name": 'H-12',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6557973,
                                    "lng" : 73.00617729999999
                                },
                                "southwest" : {
                                    "lat" : 33.63299860000001,
                                    "lng" : 72.97848999999999
                                }
                            },
                        },
                    ],
                    "SectorI": [
                        {
                            "name": 'I-8',
                            "bounds": {
                                "northeast": {
                                    "lat": 33.6784525,
                                    "lng": 73.08522809999999
                                },
                                "southwest": {
                                    "lat": 33.6554771,
                                    "lng": 73.0589105
                                }
                            }
                        },
                        {
                            "name": 'I-9',
                            "bounds": {
                                "northeast": {
                                    "lat": 33.6686604,
                                    "lng": 73.0682977
                                },
                                "southwest": {
                                    "lat": 33.6469014,
                                    "lng": 73.04264259999999
                                }
                            },
                        },
                        {
                            "name": 'I-10',
                            "bounds": {
                                "northeast": {
                                    "lat": 33.6594534,
                                    "lng": 73.05142499999999
                                },
                                "southwest": {
                                    "lat": 33.6373452,
                                    "lng": 73.0250415
                                }
                            },
                        },
                        {
                            "name": 'I-11',
                            "bounds": {
                                "northeast": {
                                    "lat": 33.6503185,
                                    "lng": 73.03370459999999
                                },
                                "southwest": {
                                    "lat": 33.6281174,
                                    "lng": 73.0074869
                                }
                            },
                        },
                        {
                            "name": 'I-14',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.62181960000001,
                                    "lng" : 72.9810543
                                },
                                "southwest" : {
                                    "lat" : 33.6005996,
                                    "lng" : 72.9548786
                                }
                            },
                        },
                        {
                            "name": 'I-16',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6040608,
                                    "lng" : 72.9456366
                                },
                                "southwest" : {
                                    "lat" : 33.5829199,
                                    "lng" : 72.9204572
                                }
                            },
                        },
                    ],
                    "Other": [
                        {
                            "name": 'Aghosh',
                            "bounds": {
                                "northeast": {
                                    "lat": 33.5609091,
                                    "lng": 73.15249799999999
                                },
                                "southwest": {
                                    "lat": 33.5558196,
                                    "lng": 73.1467432
                                }
                            },
                        },
                        {
                            "name": 'DHA Phase II',
                            "bounds": {
                                "northeast": {
                                    "lat": 33.542897,
                                    "lng": 73.17931999999999
                                },
                                "southwest": {
                                    "lat": 33.5136511,
                                    "lng": 73.12798260000001
                                }
                            },
                        },
                        {
                            "name": 'PWD',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.5725206,
                                    "lng" : 73.14745810000001
                                },
                                "southwest" : {
                                    "lat" : 33.5723095,
                                    "lng" : 73.14721940000001
                                }
                            },
                        },
                        {
                            "name": 'Soan Gardens',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.5714268,
                                    "lng" : 73.16729309999999
                                },
                                "southwest" : {
                                    "lat" : 33.5521963,
                                    "lng" : 73.1392479
                                }
                            },
                        },
                        {
                            "name": 'Margalla Town',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6753464,
                                    "lng" : 73.1102638
                                },
                                "southwest" : {
                                    "lat" : 33.6644352,
                                    "lng" : 73.10326359999999
                                }
                            },
                        },
                        {
                            "name": 'Korang Town',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.5832165,
                                    "lng" : 73.1466556
                                },
                                "southwest" : {
                                    "lat" : 33.5740366,
                                    "lng" : 73.13283749999999
                                }
                            },
                        },
                        {
                            "name": 'Chak Shahzad',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.675506,
                                    "lng" : 73.15325989999999
                                },
                                "southwest" : {
                                    "lat" : 33.6476894,
                                    "lng" : 73.13154469999999
                                }
                            },
                        },
                        {
                            "name": 'CBR Town',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.5661435,
                                    "lng" : 72.9228258
                                },
                                "southwest" : {
                                    "lat" : 33.5647489,
                                    "lng" : 72.920723
                                }
                            },
                        },
                        {
                            "name": 'PAF Tarnol',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6148428,
                                    "lng" : 72.86200409999999
                                },
                                "southwest" : {
                                    "lat" : 33.5962206,
                                    "lng" : 72.832092
                                }
                            },
                        },
                        {
                            "name": 'Judicial Colony',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.59784190000001,
                                    "lng" : 73.1373528
                                },
                                "southwest" : {
                                    "lat" : 33.5931933,
                                    "lng" : 73.13261059999999
                                }
                            },
                        },
                        {
                            "name": 'PAF Tarnol',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6148428,
                                    "lng" : 72.86200409999999
                                },
                                "southwest" : {
                                    "lat" : 33.5962206,
                                    "lng" : 72.832092
                                }
                            },
                        },
                        {
                            "name": 'Gulraiz Housing',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.5895911,
                                    "lng" : 73.1051073
                                },
                                "southwest" : {
                                    "lat" : 33.5857956,
                                    "lng" : 73.0972017
                                }
                            },
                        },
                        {
                            "name": 'AirPort Housing Scheme',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6035203,
                                    "lng" : 73.1388188
                                },
                                "southwest" : {
                                    "lat" : 33.5795523,
                                    "lng" : 73.11630959999999
                                }
                            },
                        },
                        {
                            "name": 'Wapda Town',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6710059,
                                    "lng" : 72.8284122
                                },
                                "southwest" : {
                                    "lat" : 33.6493148,
                                    "lng" : 72.79942269999999
                                }
                            },
                        },
                        {
                            "name": 'Orchard Scheme',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.6874495,
                                    "lng" : 73.11552549999999
                                },
                                "southwest" : {
                                    "lat" : 33.6628502,
                                    "lng" : 73.0896075
                                }
                            },
                        },
                        {
                            "name": 'Police Foundation',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.4754376,
                                    "lng" : 73.2031703
                                },
                                "southwest" : {
                                    "lat" : 33.471464,
                                    "lng" : 73.1962824
                                }
                            },
                        },
                        {
                            "name": 'Jinnah Garden',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.5810897,
                                    "lng" : 73.18291420000001
                                },
                                "southwest" : {
                                    "lat" : 33.5649635,
                                    "lng" : 73.1653833
                                }
                            },
                        },
                        {
                            "name": 'Doctors Housing Society',
                            "bounds" : {
                                "northeast" : {
                                    "lat" : 33.5712926,
                                    "lng" : 73.1313514
                                },
                                "southwest" : {
                                    "lat" : 33.5662328,
                                    "lng" : 73.12478539999999
                                }
                            },
                        },
                    ]
                }
            }
    });
});
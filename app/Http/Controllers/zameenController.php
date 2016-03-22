<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;
use Storage;
use Symfony\Component\CssSelector\CssSelectorConverter;
use DB;
use App\api\City\City;
use App\api\Area\Area;
use GuzzleHttp\Exception\RequestException as guzzleException;

class zameenController extends Controller
{
    private $client;
    public  $url;
    public  $crawler;
    public  $filters;
    public  $content = array();
    protected $city;
    protected $area;
    protected $map_bounds;

    /**
     * Defining our Dependency Injection Here.
     * or Instantiate new Classes here.
     *
     * @return void
     */
    public function __construct(Client $client, City $city, Area $area)
    {
        $this->client 	= $client;
        $this->city 	= $city;
        $this->area 	= $area;
    }

    /**
     * This will be used for Outputing our Data
     * and Rendering to browser.
     *
     * @return void
     */
    public function getPageData()
    {
        return $this->getPages('http://www.zameen.com/v3/index.php?t=ajax&c=ajax_sort_cat_childs&sort_by=alpha&s_param=41_1_9,8,21,22,20,24,25');
    }

    /**
     * Setup our scraper data. Which includes the url that
     * we want to scrape
     *
     * @param (String) $url = default is NULL
     *		  (String) $method = Method Types its either POST || GET
     * @return void
     */
    public function setScrapeUrl($url = 'http://www.zameen.com/society_maps/islamabad-3.html', $method = 'GET')
    {
        $agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36';

        try {
            $response  = $this->client->request($method, $url, ['headers' => [
                'User-Agent' => $agent,
                'delay' => '3000'
            ]
            ]);
        } catch (guzzleException $e) {
            if ($e->hasResponse()) {
                $response =  $e->getResponse();
            }
        }
        if($response->getStatusCode() == 404) {
            $this->crawler = false;
        } else {
            $this->crawler = new Crawler($response->getBody()->getContents());
        }
    }

    public function guzzle_req($url = '', $method = 'GET') {

        try {
            $response  = $this->client->request($method, $url, ['headers' => [
                'delay' => '3000'
            ]
            ]);
        } catch (guzzleException $e) {
            if ($e->hasResponse()) {
                $response =  $e->getResponse();
            }
        }
        if($response->getStatusCode() == 404) {
            $this->map_bounds = false;
        } else {
            $this->map_bounds = json_decode($response->getBody()->getContents());
        }
    }
    /**
     * This will get all the return Result from our Web Scraper
     *
     * @return array
     */
    public function getContent($type)
    {
        return $this->startScraper($type);
    }

    /**
     * It will handle all the scraping logic, filtering
     * and getting the data from the defined url in our method setScrapeUrl()
     *
     * @return array
     */
    private function startScraper($type)
    {
        switch($type) {
            case 'city':
                $this->setScrapeUrl('http://www.zameen.com');
                // lets check if our filter has result.
                // im using CssSelector Dom Components like jquery for selecting data attributes.
                $cellCount = $this->crawler->filter('select#tab_city')->count();
                $aCity = [];
                if ($cellCount) {
                    // loop through in each ".posts--list-large li" to get the data that we need.
                    $aCity[] = $this->crawler->filter('select#tab_city')->children()->each(function(Crawler $node, $i) {
                        if ($i > 5) {
                        $vCity = [];
                        $vCityName = $node->getNode(0)->textContent;
                        $vCityID = $node->getNode(0)->getAttribute('value');
                        $vCity['name'] = !empty($vCityName) ? $vCityName : "";
                        $vCity['_id'] = !empty($vCityID) ? $vCityID : "";
                        if (!empty($vCity['name']) && !empty($vCity['_id']))
                            DB::table('city')->insert($vCity);
                        return $vCity;
                    }
                    });
                } else echo 'Not found';
                return $aCity;
                break;
            case 'area':
                $city = $this->city->getCity();
                print_r($city);
                echo "<br/><br/>";
                $aCityArea = [];
                foreach($city as $thisCity) {
                    $thisCityArea = [];
                    $thisCityArea['city'] = $thisCity['name'];
                    $thisCityArea['areas'] = [];
                    $id = $thisCity["_id"];
                        $this->setScrapeUrl('http://d8051479972c475a3951-404cba19095390c4eb84d98475bfbe2e.r58.cf1.rackcdn.com/2016-03-17-12-36-00/ajax_category_list_'
                            . $thisCity["_id"] . '_en.js');
                    if($this->crawler) {
                        $removeWindow = "window.cat_json_object_en[" . $id . "] = ";
                        $content = $this->crawler->filter('p')->getNode(0)->textContent;
                        $filterContent = str_replace($removeWindow, "", $content);
                        $removeBracketFirst = str_replace("[[", "[", $filterContent);
                        $removeBracketSecond = str_replace("]]", "]", $removeBracketFirst);
                        $removeSemiColon = str_replace(';', "", $removeBracketSecond);
                        $areas = explode("],", $removeSemiColon);
                        foreach ($areas as $thisArea) {
                            $vArea = [];
                            $removeBracket = str_replace("[", "", $thisArea);
                            $area_split = explode(",", $removeBracket);
                            $vArea['_id'] = $area_split[0];
                            $vArea['cityName'] = $thisCity['name'];
                            $vArea['cityID'] = $id;
                            $vArea['name'] = str_replace("'", "", $area_split[1]);
                            DB::table('areas')->insert($vArea);
                            $thisCityArea['areas'][] = $vArea;
                        }
                        $aCityArea[] = $thisCityArea;
                        print_r($thisCityArea);
                        echo "<br/><br/>";
                        DB::table('city')
                            ->where('_id', $id)
                            ->update([
                                'status' => 1
                            ]);
                    } else {
                        DB::table('city')
                            ->where('_id', $id)
                            ->update([
                                'status' => 0
                            ]);
                    }
                }
                break;
            case 'crd':
                $areas = $this->area->getArea(null);
                $aArea = [];
                foreach($areas as $thisArea) {
                    $city = $thisArea['cityID'];
                    $area = $thisArea['_id'];
                    $scrapeURL = 'http://www.zameen.com/search/results.html?tab_city=' . $city . '&developer_id=&tab_cat_id=' . $area . '%2C&property_type=&tab_type=9%2C8%2C21%2C22%2C20%2C24%2C25&development_id=&tab_beds=&sb_price_from=No+Min&sb_price_to=No+Max&tab_price=&tab_sqft_unit=Marla&sb_sel_area=3&tab_sqft_input1=No+Min&tab_sqft_input2=No+Max&tab_sqft_custom=1&tab_sqft_conv_unit=3&tab_sqft=&tab=1&tab_purpose=1&tab_search=1';
                    $this->setScrapeUrl($scrapeURL);
                    $find = false;
                    if ($this->crawler) {
                        $id = $thisArea['_id'];
                        $vArea = $this->crawler->filter('script')->each(function (Crawler $node, $i) {
                            $content = $node->getNode(0)->textContent;
                            $start = strpos($content, "coards:[") + 8;
                            if ($start > 8) {
                                $vArea = [];
                                $content = $node->getNode(0)->textContent;
                                $start = strpos($content, "coards:[") + 8;
                                $end = strpos($content, "],zoom:");
                                $length = $end - $start;
                                $crd = substr($content, $start, $length);
                                $filter_crd = str_replace("'", "", $crd);
                                $aCrd = explode(",", $filter_crd);
                                $vArea['latitude'] = $aCrd[0];
                                $vArea['longitude'] = $aCrd[1];
                                $vArea['status'] = 1;
                                return $vArea;
                            }
                        });
                        foreach ($vArea as $a) {
                            if (!empty($a)) {
                                $find = true;
                                DB::table('areas')
                                    ->where('_id', $area)
                                    ->update($a);
                                $aArea[] = $a;
                            }
                        }
                        if(!$find) {
                            DB::table('areas')
                                ->where('_id', $area)
                                ->update([
                                    'status' => 0
                                ]);
                        }
                    } else {
                        DB::table('areas')
                            ->where('_id', $area)
                            ->update([
                                'status' => 0
                            ]);
                    }
                }
                return $aArea;
                break;
            case 'bounds':
                $areas = $this->area->getAreaBounds(1, null);
                $aArea = [];
                foreach($areas as $thisArea) {
                    $thisCityArea = [];
                    $latitude = $thisArea['latitude'];
                    $longitude = $thisArea['longitude'];
                    $this->guzzle_req('https://maps.googleapis.com/maps/api/geocode/json?latlng='
                        . $latitude . ',' . $longitude);
                    if($this->map_bounds) {
                        if(isset($this->map_bounds->results[0]->geometry->bounds)) {
                            $bounds = $this->map_bounds->results[0]->geometry->bounds;
                            print_r($bounds);
                            echo "<br/><br/>";
                            DB::table('areas')
                                ->where('_id', $thisArea['_id'])
                                ->update([
                                    'bounds' => $bounds
                                ]);
                        } else {
                            echo "N/A";
                            print_r($thisArea);
                            echo "<br/><br/>";
                            DB::table('areas')
                                ->where('_id', $thisArea['_id'])
                                ->update([
                                    'bounds' => false
                                ]);
                        }
                    }
                }
                break;
        }
    }
}


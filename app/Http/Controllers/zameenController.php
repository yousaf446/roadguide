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

class zameenController extends Controller
{
    private $client;
    public  $url;
    public  $crawler;
    public  $filters;
    public  $content = array();
    public  $city = array();

    /**
     * Defining our Dependency Injection Here.
     * or Instantiate new Classes here.
     *
     * @return void
     */
    public function __construct(Client $client)
    {
        $this->client 	= $client;
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
    public function setScrapeUrl($method = 'GET')
    {
        $agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36';
        $url = 'http://www.zameen.com/v3/index.php?t=ajax&c=ajax_sort_cat_childs&sort_by=alpha&s_param=41_1_9,8,21,22,20,24,25';
        $response = $this->client->request($method, $url, ['headers' => [
            'User-Agent' => $agent,
            'delay' => '3000'
        ]
        ]);
        $this->crawler = new Crawler($response->getBody()->getContents());
    }

    /**
     * This will get all the return Result from our Web Scraper
     *
     * @return array
     */
    public function getContents()
    {
        return $this->startScraper();
    }

    /**
     * It will handle all the scraping logic, filtering
     * and getting the data from the defined url in our method setScrapeUrl()
     *
     * @return array
     */
    private function startScraper()
    {
        $this->setScrapeUrl();
        // lets check if our filter has result.
        // im using CssSelector Dom Components like jquery for selecting data attributes.
        $cellCount = $this->crawler->filter('ul.l')->count();
        $aCompany = [];
        if ($cellCount) {
            // loop through in each ".posts--list-large li" to get the data that we need.
            $aCompany[] = $this->crawler->filter('li')->each(function(Crawler $node, $i) {
                $vCompany = [];
                dd($node->children()->getNode(0)->textContent);
                $a_elements = $node->children()->getNode(0);
                //DB::table('auto_parts')->insert($vCompany);
                return $vCompany;
            });
        } else echo 'Not found';
        return $aCompany;
    }

    private function getPages($url, $method = 'GET') {
        $agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36';
        $response = $this->client->request($method, $url, ['headers' => [
            'User-Agent' => $agent,
            'delay' => '3000',
            //'scheme' => 'http',
            //'version' => 'HTTP/1.1',
            //'accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            //'accept-encoding' => 'gzip, deflate, sdch',
            //'accept-language' => 'en-US,en;q=0.8',
            //'cache-control' => 'max-age=0',
            //'cookie' => 'premiumProductListingId=15038660; tilesOrStrip=Strip; AMCV_8412403D53AC3D7E0A490D4C%40AdobeOrg=1766948455%7CMCMID%7C88201684336367437513517147478992337982%7CMCAAMLH-1456384140%7C6%7CMCAAMB-1456384140%7CNRX38WO0n5BH8Th-nqAG_A%7CMCAID%7CNONE; yellow-guid=0b0b1098-98a0-40a7-b3df-e828b2c3a5df; __gads=ID=c774730fd082dbb5:T=1455779638:S=ALNI_MZAuWwvJNS4HLOgKpaRzmjQYSn99w; searchVariation=1; TS01551a48=01e338ebf2c0922bfe65d7cd092787af4c464f0771b41655150c5951d0e64a96e740095a21ad692cf886d0ba84ee16206417fe4cf1bd143c88cc2a0f446c8cf34c71df2069; clue=Electricians; locationClue=Bacchus%20Marsh; _qst_s=7; _qsst_s=1455863027415',
            //'upgrade-insecure-requests' => 0
        ]
        ]);

        $crawler = new Crawler($response->getBody()->getContents());
        dd($crawler);
        $count = $crawler->filter('ul.search-result-message')->count();
        return $count;
    }

}


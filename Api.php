<?php

/**
 * Created by PhpStorm.
 * User: Рожнов
 * Date: 11.06.2017
 * Time: 23:14
 */

if(!isset($_GET['url'])) {
    $_GET['url'] = 'https://ok.ru/';
}

new Api();
class Api
{
    public function __construct() {
        $json = file_get_contents('http://noblockme.ru/api/anonymize?url='.$_GET['url']);
        echo $json;
//        echo $_GET['url'];
    }

}
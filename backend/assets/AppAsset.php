<?php

namespace backend\assets;

use yii\web\AssetBundle;

/**
 * Main backend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
        'themeassets/global/css/icon-peta.css',
        'themeassets/global/css/icon-warroom.css',
        'themeassets/global/plugins/font-awesome/css/font-awesome.min.css',
        'themeassets/global/plugins/simple-line-icons/simple-line-icons.min.css',
        'themeassets/global/plugins/bootstrap/css/bootstrap.min.css',
        'themeassets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
        'themeassets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css',
        'themeassets/global/css/components.min.css',
        'themeassets/global/css/plugins.min.css',
        'themeassets/layouts/layout4/css/layout.min.css',
        'themeassets/layouts/layout4/css/themes/default.min.css',
    ];
    public $js = [

            'themeassets/global/plugins/misc/jquery.mCustomScrollbar.min.js',
            'themeassets/global/plugins/misc/jquery.stickytableheaders.min.js',
            'themeassets/global/plugins/misc/jquery.mousewheel-3.0.6.min.js',
            'themeassets/global/plugins/misc/jquery.ui.touch-punch.min.js',
            'themeassets/global/plugins/misc/retina.min.js',
            'themeassets/global/plugins/misc/icheck.min.js',
            'themeassets/global/plugins/misc/circloid-functions.js',
            'themeassets/global/plugins/misc/jquery.easing.1.3-min.js',
            'themeassets/global/plugins/jquery-ui-1.11.0.custom/jquery-ui.min.js',
            'themeassets/global/plugins/misc/script.js',
            'themeassets/global/plugins/misc/mapjs.js',
            
            'themeassets/global/plugins/bootstrap/js/bootstrap.min.js',
            'themeassets/global/plugins/js.cookie.min.js',
            'themeassets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js',
            'themeassets/global/plugins/jquery.blockui.min.js',
            'themeassets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
            'themeassets/global/plugins/moment.min.js',
            'themeassets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js',

            'themeassets/global/scripts/app.min.js',
            'themeassets/layouts/layout/scripts/layout.min.js',
            'themeassets/layouts/layout/scripts/demo.min.js',
            'themeassets/layouts/global/scripts/quick-sidebar.min.js',
            
             'themeassets/global/plugins/jquery.simplePagination.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}

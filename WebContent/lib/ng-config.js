/**
 * --------------------------------------
 * 模块定义
 * --------------------------------------
 */

//工具模块定义
var libapp = angular.module('startapp.libapp', []);

//控制器专用模块定义
var ctrlapp = angular.module('startapp.ctrlapp', []);

//主模块定义（同时引入需要的模块）
var startapp = angular.module('startapp', ['startapp.libapp', 'startapp.ctrlapp', 'ui.router']);

/**
 * --------------------------------------
 * 模块启动
 * --------------------------------------
 */

//主模块
startapp.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', "$compileProvider", "$filterProvider", "$provide", function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
    "use strict";

    console.debug("[" + new Date() + "] >>配置主模块");

    //定义需要使用的方法
    startapp.register = {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
    };

    //异步加载控制器文件
    startapp.asyncjs = function(js) {
        return ['$q', function($q) {

            var delay = $q.defer(),
                load = function() {
                    window.$$.getScript(js, function() {
                        delay.resolve();
                    });
                };
            load();
            return delay.promise;
        }];
    };


    //定义路由
    $stateProvider.state("login", { //登录页面
        url: "/login",
        templateUrl: "html/login/mod.html",
        resolve: {
            delay: startapp.asyncjs('html/login/mod.js')
        },
        controller: "LoginController"
    });

    $urlRouterProvider.otherwise("/login");

}]).run(['$rootScope', function($rootScope) {
    "use strict";

    console.debug("[" + new Date() + "] >>启动主模块");

}]);

//工具模块
startapp.config(function() {
    "use strict";

    console.debug("[" + new Date() + "] >>配置工具模块");

}).run(function() {
    "use strict";

    console.debug("[" + new Date() + "] >>启动工具模块");

});

//控制器专用模块
startapp.config(function() {
    "use strict";

    console.debug("[" + new Date() + "] >>配置控制器专用模块");

}).run(function() {
    "use strict";

    console.debug("[" + new Date() + "] >>启动控制器专用模块");

});

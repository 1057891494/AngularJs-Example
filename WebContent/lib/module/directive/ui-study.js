/*
 *
 * @author:yelloxing
 *
 * 2018-03-04
 *
 *
 */
(function(window, angular, $$) {
    'use strict';
    libapp.directive("uiStudy", ['$rootScope', '$compile', '$http', function($rootScope, $compile, $http) {
        return {
            restrict: 'E',
            template: '<ul class="uiStudy"><li>{{type}}</li><li>{{information}}</li><li ng-click="_useParentMethod()">点击我</li></ul>',
            replace: "true",
            scope: {
                information: '=showinfo', //使用父作用域的一个属性
                type: '@typeinfo', //传递一个字符串
                _onSend: "&onSend" //使用&符号可以在其中调用父类的方法
            },
            link: function($scope, element, attrs) {
                console.log("简单的指令传值问题");
            },
            compile: function(element, attrs) {
                console.log("如果有了这里，就不会执行上面的link了哦");
                return {
                    pre: function($scope, element, attrs) {
                        console.log("pre-link");
                    },
                    post: function($scope, element, attrs) {
                        console.log("post-link");
                        $scope._useParentMethod = function() {
                            $scope._onSend();
                        };
                    }
                };
            }
        };
    }]);
})(window, window.angular, window.Luna);

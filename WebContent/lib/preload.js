'use strict';
/**
 * 公共资源路径加载配置
 */
(function() {
    var cssFiles = [
        'style/min/butterfly.min.css', /*初始化基础样式*/
        'style/min/root.css' /*自定义样式*/
    ];
    var jsFiles = [
        /*基础文件*/
        'lib/min/jquery.js',
        'lib/min/luna.js',
        'lib/min/angular.js',
        /*插件 */
        'lib/min/angular.ui-router.js', //ui-router

        /*配置文件 */
        'lib/ng-config.js' //启动配置文件

        /*过滤器*/


        /*服务文件 */


        /*指令文件 */

    ];

    if (typeof exports != 'undefined') {
        exports.jsFiles = jsFiles;
        exports.cssFiles = cssFiles;
    } else {
        for (var i = 0; i < cssFiles.length; i++) {
            loadCss(cssFiles[i]);
        }
        for (var i = 0; i < jsFiles.length; i++) {
            loadJs(jsFiles[i]);
        }
    }

    function loadJs(path) {
        var scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.src = path;
        document.write(outerHTML(scriptTag));
    }

    function outerHTML(node) {
        return (
            node.outerHTML ||
            (function(n) {
                var div = document.createElement('div'),
                    h;
                div.appendChild(n);
                h = div.innerHTML;
                div = null;
                return h;
            })(node)
        );
    }

    function loadCss(path) {
        var cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.type = 'text/css';
        cssLink.href = path;
        document.getElementsByTagName('head')[0].appendChild(cssLink);
    }
})();

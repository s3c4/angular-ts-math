System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AngularTsMath;
    return {
        setters: [],
        execute: function () {
            (function (AngularTsMath) {
                function hello() {
                    console.log('Hello!');
                }
                AngularTsMath.hello = hello;
            })(AngularTsMath || (AngularTsMath = {}));
            exports_1("AngularTsMath", AngularTsMath);
        }
    };
});

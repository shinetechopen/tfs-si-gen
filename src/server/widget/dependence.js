var TfsGen;
(function (TfsGen) {
    (function (Widget) {
        var ResourceLoader = (function () {
            function ResourceLoader() {
            }
            ResourceLoader.prototype.Init = function () {
            };
            return ResourceLoader;
        })();        
        var ScriptLoader = (function () {
            function ScriptLoader() {
            }
            ScriptLoader.prototype.Init = function () {
            };
            return ScriptLoader;
        })();        
        function Initialize(callback) {
            var resourceList = [
                new ResourceLoader(), 
                new ScriptLoader()
            ];
            resourceList.forEach(function (resource) {
                resource.Init();
            });
            callback();
        }
        Widget.Initialize = Initialize;
    })(TfsGen.Widget || (TfsGen.Widget = {}));
    var Widget = TfsGen.Widget;
})(TfsGen || (TfsGen = {}));
//@ sourceMappingURL=dependence.js.map

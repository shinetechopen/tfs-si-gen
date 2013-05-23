import entity = module("entity")
import dependence = module("dependence");

var loader = new dependence.Loader();
loader.Initialize(() => {
    var newIncident = new entity.Incident();
});
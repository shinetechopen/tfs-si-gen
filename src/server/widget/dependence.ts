export class Loader {
    private resourceLoader: ResourceLoader;
    private scriptLoader: ScriptLoader;

    constructor() {
        this.resourceLoader = new ResourceLoader();
        this.scriptLoader = new ScriptLoader();
    }

    Initialize(callback: () => any) {
        this.resourceLoader.Init();
        this.scriptLoader.Init();

        callback();
    }
}

interface IInitializable {
    Init();
}

class ResourceLoader implements IInitializable {
    constructor() {

    }

    Init() { }
}

class ScriptLoader implements IInitializable {
    constructor() {

    }

    Init() { }
}
module TfsGen.Widget {
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

    export function Initialize(callback: () => any) {
        var resourceList: IInitializable[] = [
            new ResourceLoader(),
            new ScriptLoader()
        ];

        resourceList.forEach(resource => {
            resource.Init();
        });

        callback();
    }
}
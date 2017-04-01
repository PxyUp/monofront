/**
 * Created by PyxRu on 4/1/2017.
 */
class Application {

    constructor(locale = "ru") {
        this.allowLocale = ["ru", "en"];
        this.locale = locale;
        this.component = {};
    }

    changeLocale(locale) {
        if (this.allowLocale.indexOf(locale) != -1) {
            this.locale = locale;
            this.refreshAllComponent();
        }
    }

    addComponent(alias, component) {
        this.component[alias] = component;
    }

    refreshComponent(alias) {
        this.component[alias].$forceUpdate();
    }

    refreshAllComponent() {
        Object.keys(this.component).forEach((elem) => {
            this.component[elem].$forceUpdate()
        })
    }

    getAllowLocale() {
        return this.allowLocale
    }

    getCurrentLocale(){
        return this.locale
    }
}

let app = new Application();
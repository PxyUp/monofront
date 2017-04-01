/**
 * Created by PyxRu on 4/2/2017.
 */

app.addComponent("footer", new Vue({
    el: '.app > .footer',
    data: {
        languages: app.getAllowLocale()
    },
    methods: {
        changeLocale: function (locale) {
            app.changeLocale(locale);
        }
    }
}));

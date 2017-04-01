/**
 * Created by PyxRu on 4/1/2017.
 */
app.addComponent("header", new Vue({
    el: '.app > .header',
    data: {
        title: 'MonoPolly',
        menu: [
            {
                title: "header.menu.item.title.main",
                url: "/"
            },
            {
                title: "header.menu.item.title.about",
                href: "/about"
            },
            {
                title: "header.menu.item.title.faq",
                href: "/faq"
            }
        ]
    }
}));

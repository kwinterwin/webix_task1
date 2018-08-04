let treetable = {
    view: "treetable",
    select: true,
    columns: [
        {id: "id", header: "", template: "<span>#id#</span>"},
        {
            id: "title",
            header: "Title",
            template: "{common.icon()} {common.folder()} <span>#title#</span>",
            fillspace: 1
        },
        {id: "price", header: "Price"}
    ],
    url: "js/products.js",
    ready: function () {
        this.openAll();
    }
};

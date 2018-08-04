let treetable = {
    view:"treetable",

    columns: [
        {id: "id", header: "", template: "<span>#id#</span>"},
        {id: "title", header: "Title", template:"{common.icon()} {common.folder()} <span>#title#</span>", fillspace: 1},
        {id: "price", header: "Price"}
    ],
    url: "js/products.js",
    ready:function(){
        this.openAll();
    }
};

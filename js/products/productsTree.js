let treetable = {
    view: "treetable",
    select: "cell",
    columns: [
        {id: "id", header: "", template: "<span>#id#</span>"},
        {
            id: "title",
            header: "Title",
            template: "{common.icon()} {common.folder()} <span>#title#</span>",
            fillspace: 1,
            editor: "text"
        },
        {id: "price", header: "Price", editor: "text"}
    ],
    editable: true,
    editaction:"dblclick",
    url: "js/data/products.js",
    ready: function () {
        this.openAll();
    },
    rules:{
        title: webix.rules.isNotEmpty,
        price: webix.rules.isNumber
    },
    on:{
        'onBeforeEditStop': function (obj,id) {
            if(id.column=="title"){
                if(obj.value=="")
                    obj.value=obj.old;
            }
            if(id.column=="price"){
                if(isNaN(obj.value))
                    obj.value=obj.old;
            }
        }

    }
};

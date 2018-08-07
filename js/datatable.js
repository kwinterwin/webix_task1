function sortTitle(a, b) {
    a = a.title;
    b = b.title;
    return a > b ? 1 : (a < b ? -1 : 0);
};

let datatable = {
    rows:[
        tabbar,
        {view: "datatable",

    id: "datatable",
    select: true,
    scheme: {
        $init: function (obj) {
            obj.categoryId = Math.floor(Math.random() * 3) + 1;
        }
    },
    editable: true,
    editaction: "dblclick",
    columns: [
        {id: "id", header: "", width: 40, css: "titleStyle"},
        {id: "title", header: ["Title", {content: "textFilter"}], fillspace: true, sort: sortTitle},
        {id: "year", header: "Year"},
        {id: "votes", header: ["Votes", {content: "textFilter"}]},
        {id: "rating", header: ["Rating", {content: "textFilter"}]},
        {id: "rank", header: ["Rank", {content: "textFilter"}]},
        {id: "categoryId", editor: "select", collection: categoriesData},
        {template: "<i class='fa fa-trash delete'></i>", width: 40}
    ],
    scrollX: false,
    onClick: {
        delete: function (e, id) {
            webix.confirm({
                text: "Film will be removed. Continue?", title: "Attention",
                ok: "Yes",
                cancel: "No",
                callback: function (result) {
                    if (result) {
                        $$("datatable").remove(id);
                    }
                }
            });
            return false;
        }
    },
    hover: "datatableHover",
    url: "js/data/data.js"}
        ],
    gravity: 2
};

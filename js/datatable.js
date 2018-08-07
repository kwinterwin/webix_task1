function sortTitle(a,b) {
        a = a.title;
        b = b.title;
        return a>b?1:(a<b?-1:0);
};

var categoriesJSON = webix.ajax().sync().get("js/data/categories.js");
var categories = JSON.parse(categoriesJSON.responseText);

let datatable = {
    view: "datatable",
    gravity: 2,
    id: "datatable",
    select: true,
    scheme:{
        $init:function (obj) {
            obj.categoryId = Math.floor(Math.random() * 3) + 1;
        }
    },
    editable:true,
    editaction:"dblclick",
    columns: [
        {id:"id", header:"", width:40, css:"titleStyle"},
        {id: "title", header: ["Title",{ content:"textFilter"}], fillspace: true, sort: sortTitle},
        {id: "year", header: "Year"},
        {id: "votes", header: ["Votes", { content:"textFilter"}]},
        {id: "rating", header: ["Rating", { content:"textFilter"}]},
        {id: "rank", header: ["Rank",{ content:"textFilter"}]},
        {id:"categoryId", editor:"select",  collection: categories},
        {template: "<i class='fa fa-trash delete'></i>", width:40}
    ],
    scrollX: false,
    onClick: {
        delete: function (e, id) {
            this.remove(id);
            return false;
        }
    },
    hover:"datatableHover",
    url: "js/data/data.js"
};

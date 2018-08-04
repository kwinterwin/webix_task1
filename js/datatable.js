let datatableID = 0;

function sortTitle(a,b) {
        a = a.title;
        b = b.title;
        return a>b?1:(a<b?-1:0);
};

let datatable = {
    view: "datatable",
    gravity: 2,
    id: "datatable",
    select: true,
    columns: [
        {id: "title", header: ["Title",{ content:"textFilter"}], fillspace: true, sort: sortTitle, css:"titleStyle"},
        {id: "year", header: ["Year", { content:"textFilter"}]},
        {id: "votes", header: ["Votes", { content:"textFilter"}]},
        {id: "rating", header: ["Rating", { content:"textFilter"}]},
        {
            id: "rank",
            header: ["Rank",{ content:"textFilter"}],
            template: "#rank#<i class='fa fa-trash delete'></i><i class='fa fa-pencil edit' style='padding-right:10px;'></i>"
        },
    ],
    scrollX: false,
    onClick: {
        delete: function (e, id) {
            this.remove(id);
            return false;
        },
        edit: function (e, id) {
            datatableID = id;
            $$("myform").setValues({
                title: this.getItem(id).title,
                year: this.getItem(id).year,
                rating: this.getItem(id).rating,
                votes: this.getItem(id).votes
            });
            return false;
        }
    },
    hover:"datatableHover",
    url: "js/data.js"
};


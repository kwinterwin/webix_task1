let adminDatatable = {
    rows: [
        {
            view: "datatable",

            id: "adminDatatable",
            select: true,
            editable: true,
            editaction: "dblclick",
            columns: [
                {id: "id", header:""},
                {id: "value", header:"Category", editor:"text", fillspace:true},
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
                                $$("adminDatatable").remove(id);
                            }
                        }
                    });
                    return false;
                }
            },
            hover: "datatableHover",
            data: categoriesData,
            height: 300
        },
        {view:"button", value:"Add", width:300, click: function () {
                categoriesData.add({value:"Romantic"});
            }},
        {}
    ]
};

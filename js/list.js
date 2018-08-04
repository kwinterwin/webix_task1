let list = {
    rows: [
        {
            view: "list",
            scroll: false,
            borderless: true,
            select:true,
            on: {
                onAfterSelect: function (id) {
                    $$(id).show();
                }
            },
            data: [
                {id: "Dashboard", value: "Dashboards"},
                {id: "Users", value: "Users"},
                {id: "Products", value: "Products"},
                {id: "Locations", value: "Locations"}
            ]
        },
        {},
        {
            template: "<span><i class='fa fa-check'></i>Connected</span>", height: 25, borderless: true
        }
    ], width:300
};
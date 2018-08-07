let main_body = {
    cols: [
        list,
        {view: "resizer"},
        {
            cells: [
                {id: "Dashboard", cols: [datatable, form]},
                {id: "Users", rows: [userHeader, userList, chart]},
                {id: "Products", cols: [treetable]},
                {id: "Admin", cols:[adminDatatable]}
            ]
        }
    ]
};

webix.ready(function(){
    webix.ui({
        rows: [
            toolbar,
            main_body,
            {
                template: "The software is provided by <a href='https://webix.com'>https://webix.com</a>. All rights reserved &copy;.",
                height: 40
            }
        ]
    });

    $$("datatable").markSorting("title", "asc");
});


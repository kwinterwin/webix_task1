let list = {
    rows: [
        {
            view: "list",
            scroll: false,
            borderless: true,
            data: [
                {id: 1, value: "Dashboards"},
                {id: 2, value: "Users"},
                {id: 3, value: "Products"},
                {id: 4, value: "Locations"}
            ]
        },
        {},
        {
            template: "<span><i class='fa fa-check'></i>Connected</span>", height: 25, borderless: true
        }
    ]
};

let datatable = {
    view: "datatable",
    gravity: 3,
    id: "datatable",
    autoConfig: true,
    scrollX: false,
    data: webix.copy(small_film_set)
};

let pop_list = {
    view: "list",
    select: true,
    scroll: false,
    autoheight: true,
    data: [
        {id: 1, value: "Settings"},
        {id: 2, value: "Log Out"}
    ]
};

let toolbar_popup = webix.ui({
    view: "popup",
    id: "popup",
    body: {
        cols: [
            pop_list
        ]
    }
});

let toolbar = {
    view: "toolbar", elements: [
        {view: "label", label: "My App"},
        {},
        {
            view: "button",
            id: "profile_button",
            type: "icon",
            icon: "user",
            label: "Profile",
            width: 80,
            popup: "popup"
        },
    ]
};

let date = new Date().getFullYear();

let form_button = {
    cols: [
        {view: "button", value: "Add new", type: "form", click: function () {
                if ($$("myform").validate()) {
                    $$('datatable').add($$("myform").getValues());
                    webix.message({text: "Validation is success", type: "info"});
                }
            }
        },
        {view: "button", value: "Clear", click: function () {
                webix.confirm({
                    text: "The form will be cleared. Continue?", title: "Attention",
                    ok: "Yes",
                    cancel: "No",
                    callback: function (result) { //setting callback
                        if(result){
                            $$("myform").clear();
                        }
                    }
                });
            }
        }
    ],
};

let form = {
    view: "form",
    id: "myform",
    gravity: 1.2,
    elements: [
        {type: "section", template: "edit films"},
        {view: "text", label: "Title", name: "title", invalidMessage: "Title must be filled in"},
        {view: "text", label: "Year", name: "year", invalidMessage: "Year should be between 1970 and current"},
        {view: "text", label: "Rating", name: "rating", invalidMessage: "Rating cannot be empty or 0"},
        {view: "text", label: "Votes", name: "votes", invalidMessage: "Votes must be less than 100000"},
        form_button,
        {}
    ],
    rules: {
        title: webix.rules.isNotEmpty,
        year: function (value) {
            return (value >= 1970 && value <= date);
        },
        votes: function (value) {
            return value < 100000;
        },
        rating: function (value) {
            if(value!=0)
                return true;
            else
                webix.rules.isNotEmpty;
        }
    }
};

let main_body = {
    cols: [
        list,
        {view: "resizer"},
        datatable,
        form
    ]
};

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


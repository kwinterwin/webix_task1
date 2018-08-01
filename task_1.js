let list = {
    view: "list",
    scroll: false,
    data: [
        {id: 1, value: "Dashboards"},
        {id: 2, value: "Users"},
        {id: 3, value: "Products"},
        {id: 4, value: "Locations"}
    ]
};

let datatable = {
    view: "datatable",
    gravity: 3,
    autoConfig: true,
    data: webix.copy(small_film_set)
};

let toolbar = {
    view: "toolbar", elements: [
        {view: "label", label: "My App"},
        {},
        {view: "button", type: "icon", icon: "user", label: "Profile", width: 80},
    ]
};

let form_button = {
    cols: [
        {view: "button", value: "Add new", css: "greenbutton"},
        {view: "button", value: "Clear"}
    ]
};

let form = {
    view: "form",
    gravity: 1.2,
    elements: [
        {type: "section", template: "EDIT FILMS"},
        {view: "text", label: "Title"},
        {view: "text", label: "Year"},
        {view: "text", label: "Rating"},
        {view: "text", label: "Votes"},
        form_button
    ]
};

let main_body = {
    cols: [
        list,
        datatable,
        form
    ]
};

webix.ui({
    rows: [
        toolbar,
        main_body,
        {template: "The software is provided by <a href='https://webix.com'>https://webix.com</a>. All rights reserved &copy;."}
    ]
});


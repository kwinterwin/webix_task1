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
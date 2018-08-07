function userFilter() {
    let value = this.getValue().toLowerCase();
    $$("userList").filter(function (obj) {
        console.log(obj);
        return obj.name.toLowerCase().indexOf(value) == 0;
    })
};


let userHeader = {
    cols: [
        {
            view: "text", id: "list_input", placeholder: "Type to filter...",
            on: {
                'onTimedKeyPress': userFilter
            }
        },
        {
            view: "button", value: "Sort asc", width: 200, click: function () {
                $$("userList").sort("#name#", "asc");
            }
        },
        {
            view: "button", value: "Sort desc", width: 200, click: function () {
                $$("userList").sort("#name#", "desc");
            }
        },
        {
            view: "button", value: "Add new", width:200, click: function () {
                $$("userList").add({ name: "Anna Samuseva", age: 20, country: "Russia"})
            }
        }
    ]
};


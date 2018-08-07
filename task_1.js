webix.ready(function () {
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

    $$('myform').bind($$('datatable'));
    $$("datatable").registerFilter(
        $$("tabbar"),
        {
            columnId: "year", compare: function (value, filter, item) {
                switch (filter) {
                    case "oldView": return value < 1960;
                    case "modernView": return (value < 1990 && value >=1960);
                    case "newView": return value>=1990;
                    default: return value;
                }
            }
        },
        {
            getValue: function (node) {
                return node.getValue();
            },
            setValue: function (node, value) {
                node.setValue(value);
            }
        }
    );
    $$("userChart").sync($$("userList"), function () {
        this.group({
            by: "country",
            map: {
                age: ["age", "count"]
            }
        });
    });
});


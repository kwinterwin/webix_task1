let date = new Date().getFullYear();

let form_button = {
    rows: [
        {
            cols: [
                {
                    view: "button", value: "Add new", autoheight: true, type: "form", click: function () {
                        if ($$("myform").validate()) {
                            $$('datatable').add($$("myform").getValues());
                            webix.message({text: "Validation is success", type: "info"});
                        }
                    }
                },
                {
                    view: "button", value: "Clear", autoheight: true, click: function () {
                        webix.confirm({
                            text: "The form will be cleared. Continue?", title: "Attention",
                            ok: "Yes",
                            cancel: "No",
                            callback: function (result) {
                                if (result) {
                                    $$("myform").clear();
                                }
                            }
                        });
                    }
                }
            ]
        }
    ]
};

let form = {
    view: "form",
    gravity: 0.8,
    id: "myform",
    elements: [
        {type: "section", template: "edit films"},
        {view: "text", label: "Title", name: "title", invalidMessage: "Title must be filled in"},
        {view: "text", label: "Year", name: "year", invalidMessage: "Year should be between 1970 and current"},
        {view: "text", label: "Rating", name: "rating", invalidMessage: "Rating cannot be empty or 0"},
        {view: "text", label: "Votes", name: "votes", invalidMessage: "Votes must be less than 100000"},
        {
            view: "richselect",
            label: "Categories",
            options:{
                data:categoriesData
            },
            value: 1,
            id: "richselect"
        },form_button,
    {}
],
on: {
    'onChange'
:

    function () {
        this.save();
    }
}
,
rules: {
    title: webix.rules.isNotEmpty,
        year
:

    function (value) {
        return (value >= 1970 && value <= date);
    }

,
    votes: function (value) {
        value = value.replace(',', '.');
        let numberValue = parseFloat(value);
        return value < 100000;
    }
,
    rating: function (value) {
        if (value != 0)
            return true;
        else
            webix.rules.isNotEmpty;
    }
}
}
;
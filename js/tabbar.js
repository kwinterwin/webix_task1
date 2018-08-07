var tabbar ={
    view:"tabbar",
    id:"tabbar",
    value:"allView",
    options: [
        {"id":"allView", "value":"All", width:100},
        {"id":"oldView", "value":"Old", width:100},
        {"id":"modernView", "value":"Modern", width:100},
        {"id":"newView", "value":"New", width:100}
    ],
    on: {
        onChange: function () {
            $$("datatable").filterByAll();
        }
    }
};
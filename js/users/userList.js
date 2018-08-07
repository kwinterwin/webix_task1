webix.protoUI({
    name:"userList"
}, webix.EditAbility, webix.ui.list);

let userList = {
    view: "userList",
    id: "userList",
    select: true,
    autoheight: true,
    template: "#id#. <strong>#name#</strong> from #country# <i class='fa fa-trash delete'></i>",
    url: "js/data/users.js",
    editable:true,
    editor:"text",
    editValue:"name",
    editaction:"dblclick",
    onClick: {
        delete: function (e, id) {
            this.remove(id);
            return false;
        }
    },
    scheme:{
        $init:function (obj) {
            if(obj.age<26)
                obj.$css = "highlight";
        }
    },
    on:{
        'onBeforeEditStop': function (obj) {
            if(obj.value=="")
                obj.value=obj.old;
        }
    }
};




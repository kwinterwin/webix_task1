let userList = {
    view: "list",
    id: "userList",
    select: true,
    autoheight: true,
    template: "#id#. <strong>#name#</strong> from #country# <i class='fa fa-trash delete'></i>",
    url: "js/users.js",
    onClick: {
        delete: function (e, id) {
            this.remove(id);
            return false;
        }
    }
};
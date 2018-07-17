Template.profileEdit.renderedF7 = () => {
    navbarF7.left.set('<a href="#" onclick="event.preventDefault();Router.go(\'profile\');" class="link back"><i class="icon icon-back" style=""></i><span class="ios-only">Назад</span></a>')
};

Template.profileEdit.passwordEdit = (e) => {
    e.preventDefault();
    appAlert('Пароль успешно изменён');
    //app.popup.create({el: '#editPasswordPopup'}).close();
};

Template.profileEdit.events({

    'click #saveButton': (e) => {
        e.preventDefault();
        appAlert('Изменения сохранены');
    },

    'click #editPasswordButton': (e) => {
        e.preventDefault();
        mainView.router.navigate({
                url: '/profileEditPassword',
                route: {
                    path: '/profileEditPassword',
                    pageName: 'profileEditPassword'
                }
            }
        );
        //app.popup.create({el: '#editPasswordPopup'}).open();
    }
});
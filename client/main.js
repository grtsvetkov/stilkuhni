import Framework7 from "framework7";
import "framework7/css/framework7.min.css";
import "framework7-icons";
import "jquery-mask-plugin";

app = null, mainView = null;

let flag_welcome = localStorage.getItem('_firstTimeOpenedApp') || null;

if (flag_welcome != "true") {
    localStorage.setItem('_firstTimeOpenedApp', true);
    Router.go('welcome');
}


Template.AppLayout.rendered = function () {
    app = new Framework7({
        root: '#app',
        name: 'stilkuhni',
        id: 'com.stilkuhni.test',
        clicks: {
            externalLinks: '*'
        },
        view: {
            main: true,
            stackPages: true,
            animate: true
        }
    });

    mainView = app.views.create('.view-main');
};

Template.navbar.helpers({
    'navbarF5': function () {
        return {
            title: navbarF7.title.get(),
            left: navbarF7.left.get(),
            right: navbarF7.right.get()
        };
    }});

Template.toolbar.helpers({
    'list': function () {

        let crn = currentRouterName.get();

        return [
            {name: 'Главная', path: 'index', icon: 'home', isActive: crn == 'index'},
            {name: 'Акции', path: 'promo', icon: 'star', isActive: crn == 'promo'},
            {name: 'Профиль', path: 'profile', icon: 'person', isActive: crn == 'profile'}
        ]
    }
});

Template.inputMask.rendered = function () {
    $(this.firstNode).mask(this.data.mask, {reverse: this.data.reverse ? this.data.reverse : false});
};

// =============== GLOBAL FUNCTIONS

appAlert = function (text) {
    app.notification.create({
        subtitle: text,
        closeTimeout: 4000,
        closeOnClick: true
    }).open();
};

getDataFromStruct = function (struct) {

    let data = {};

    for (let key in struct) {

        let el = struct[key];

        if ((_.isUndefined(el.notRequired) || !el.notRequired) && !el.val.length) {
            appAlert('Заполните поле "' + el.field + '"');
            return false;
        }

        data[key] = el.val;
    }

    return data;
};

// =============== GLOBAL FUNCTIONS

// =============== GLOBAL HELPERS

Template.registerHelper('eq', function (op1, op2) {
    return op1 == op2;
});

Template.registerHelper('moneyFormat', function (num) {
    return String(Number(num ? num : 0) + '|').replace(/\d(?=(\d{3})+\|)/g, '$& ').replace('|','');
});

Template.registerHelper('consoleLog', function (obj) {
    console.log(obj);
});

// =============== GLOBAL HELPERS
let tmp_promo_list = [
    {name: 'Акция с <span style="color: #ff0000; font-size: 2rem;">BOSCH</span>', img:'/assert/promo/Акция с BOSCH.jpg', description: 'Суперцена на комплект техники Bosch при заказе кухонного гарнитура. Срок действия специального предложения ограничен.<br/>Все подробности уточняйте у дизайнеров-консультантов в наших фирменных салонах.'},
    {name: 'Акция с <span style="color: #ff0000; font-size: 2rem;">Electrolux</span>', img:'/assert/promo/Акция с Electrolux.jpg', description: 'Суперцена на комплект техники Electrolux при заказе кухонного гарнитура. Срок действия специального предложения ограничен.<br/>Все подробности уточняйте у дизайнеров-консультантов в наших фирменных салонах.'},
    {name: 'Акция с <span style="color: #ff0000; font-size: 2rem;">Gorenje</span>', img:'/assert/promo/Акция с Gorenje.jpg', description: 'Суперцена на комплект техники Gorenje при заказе кухонного гарнитура. Срок действия специального предложения ограничен.<br/>Все подробности уточняйте у дизайнеров-консультантов в наших фирменных салонах.'},
    {name: 'Акция с <span style="color: #ff0000; font-size: 2rem;">NEFF</span>', img:'/assert/promo/Акция с NEFF.jpg', description: 'Суперцена на комплект техники NEFF при заказе кухонного гарнитура. Срок действия специального предложения ограничен.<br/>Все подробности уточняйте у дизайнеров-консультантов в наших фирменных салонах.'}
];

let promoItemPopup,
    selectedItem = new ReactiveVar(null);

Template.promo.renderedF7 = () => {
    new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        }
    });
};

Template.promo.helpers({
    'promo_list': () => {
        return tmp_promo_list;
    },
    
    'item': () =>{
        return tmp_promo_list[selectedItem.get()];
    }
});

Template.promo.events({
    'click .goItem': (e) => {
        selectedItem.set(e.currentTarget.dataset.id);
        app.popup.create({el: '#promo-item'}).open();
    }
});
let tmp_catalog_list = [
    {name: 'Кухонные гарнитуры', img: '/assert/catalog/Кухонные гарнитуры.png', description: 'Мебельная фабрика «Стильные кухни» (Москва) предлагает своим клиентам кухонные гарнитуры по выгодным ценам.'},
    {name: 'Фасады для кухни', img: '/assert/catalog/Фасады для кухни.png', description: 'Мебельная фабрика «Стильные кухни» предлагает своим клиентам кухонные фасады в широком ассортименте.'},
    {name: 'Корпуса', img: '/assert/catalog/Корпуса.png', description: 'Корпуса элементов мебели изготавливаются из высококачественной древесной плиты торговой марки "LAMARTY" (Россия) и австрийской компании Egger.'},
    {name: 'Витражи', img: '/assert/catalog/Витражи.png', description: 'В компании «Стильные Кухни» вы всегда можете заказать витражи для кухонных фасадов. Мы предлагаем высококачественную современную и стильную продукцию. Она пользуется заслуженной популярностью!'}
];

Template.index.renderedF7 = () => {
    new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        }
    });
};

Template.index.helpers({
    'catalog_list': () => {
        return tmp_catalog_list;
    }
});
var goods = [
    {
        name: 'MANGO PEOPLE T-SHIRT',
        price: 60.00,
        cover: 'images/featuredItem1.jpg'
    },
    {
        name: 'MANGO PEOPLE T-SHIRT',
        price: 65.00,
        cover: 'images/featuredItem2.jpg'
    },
    {
        name: 'MANGO PEOPLE T-SHIRT',
        price: 87.00,
        cover: 'images/featuredItem3.jpg'
    },
    {
        name: 'MANGO PEOPLE T-SHIRT',
        price: 37.00,
        cover: 'images/featuredItem4.jpg'
    },
    {
        name: 'MANGO PEOPLE T-SHIRT',
        price: 52.00,
        cover: 'images/featuredItem5.jpg'
    },
    {
        name: 'MANGO PEOPLE T-SHIRT',
        price: 42.00,
        cover: 'images/featuredItem6.jpg'
    },
    {
        name: 'MANGO PEOPLE T-SHIRT',
        price: 72.00,
        cover: 'images/featuredItem7.jpg'
    },
    {
        name: 'MANGO PEOPLE T-SHIRT',
        price: 62.00,
        cover: 'images/featuredItem8.jpg'
    },
];

const renderItem = ({cover, name, price, size='M'}) => {
    return `<div class='featuredItem'><div class='featuredImgWrap'><div class='featuredBuy'><button><img  src='images/addToCart.png' alt="">Add to Cart</button></div><img src=${cover}></div><div class='featuredNameAndPrice'><div class='featuredItemName'>${name}<br>SIZE: ${size}</div><div class='featuredItemPrice'>$${price.toFixed(2)}</div></div></div>`;
};

const renderList = (goods) => {
    const itemsHtml = goods.map(renderItem);
    document.querySelector('.featuredItems').innerHTML = itemsHtml.join('');
}
renderList(goods);

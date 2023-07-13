class Header {

    handlerOpenCartPage() {
        cartPage.render();
    }

    render(count) {
        const html = `
        <header class="header">
        <div class="logo">
            <a href="/index.html"><img src="/images/_Path_.png" alt="logo">
            <span class="logot">Полезная еда</span></a>
        </div>
        <nav class="menu__nav">
            <ul class="menu">
                <li class="menu__active"><a href="/index.html">Главная</a></li>
                <li><a href="/pages.html/about.html">О нас</a></li>
                <li><a href="/pages.html/shopping.html">Каталог</a></li>
            </ul>
        </nav>
        <div class="cart">
           <img src="/images/Shopping_cart_icon.png" alt="cart">
           <div class="cart-counter" onclick="headerPage.handlerOpenCartPage();">${count}</div>           
        </div>       
        `;

        ROOT_HEADER.innerHTML = html;
    }
}
const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);
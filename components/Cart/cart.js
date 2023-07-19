class Shopping {
    handleClear() {
        ROOT_CART.innerHTML = '';
    }

    

    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        let counterValue = 1;
        

        CATALOG.forEach(({ id, name, price }) => {

            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                    <td class="cart-element__name">📌${name}</td>
                    <td class="cart-element__price">❗${price.toLocaleString()} руб.</td>
                    <td>
                    <div class="quantity">
                        <button class="plus-btn" type="button" name="button" onclick="cartPage.plusFunction(counterValue);">➕</button>
                        <div class="cart-counter">${counterValue}</div>
                        <button class="minus-btn" type="button" name="button">➖</button>
                    </div>
                    </td>
                </tr>
                `;
                sumCatalog += price;
            }

        });

        const html = `
        <div class="cart-container">
        <h1 class="cart__title">Ваша корзина</h1>
        <div class="cart__close" onclick='cartPage.handleClear();'></div>
        <table>
            ${htmlCatalog}            
            <tr>
                <td class="cart-element__sum">📌Сумма:</td>
                <td class="cart-element__price">${sumCatalog.toLocaleString()} руб.</td>
            </tr>
        </table>
        
        <form class="cart__form">            
            <label>
                <input type="text" name="name">
                <div class="label__text">
                    Ваше имя
                </div>
            </label>
            <label>
                <input type="tel" name="tel">
                <div class="label__text">
                    Ваш телефон
                </div>
            </label>
            <label>
                <textarea name="message"></textarea>
                <div class="label__text">
                    Примечания
                </div>
            </label>
            <button type="submit">Заказать</button>
        </form>
        </div>        
        `;
        ROOT_CART.innerHTML = html;

        //добавление количества товара

        
    }
}

const cartPage = new Shopping();
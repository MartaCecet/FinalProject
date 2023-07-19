class Products {
    constructor() {
        this.classNameActive = 'product-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины'; 
        
    }
   
    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length);

    }
    
    plusFunction(counterValue) {
        
        console.log('plus');        
        counterValue = counterValue + 1;
        console.log(counterValue);
       
        };
   
   

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let counterValue = 1;
        
        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';
            
            
           
            
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            }else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }
           // console.log({ id, name, price, img });
            htmlCatalog += `
            <li class="products-element">
            <span class="products-element__name">${name}</span>
            <img class="products-element__img" src="${img}"/>
            <span class="products-element__price">❗${price.toLocaleString()} руб.</span>
            <div class="quantity">
                        <button class="plus-btn" type="button" name="button" onclick="productsPage.plusFunction(counterValue);">➕</button>
                        <span class="counter-value">${counterValue}</span>
                        <button class="minus-btn" type="button" name="button" onclick='productsPage.minusFunction();'>➖</button>
                    </div>
            <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">${activeText}</button>
            </li>
            `;

        


        });

        

        const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
        `;
       

        ROOT_PRODUCTS.innerHTML = html; 
        
        

    }
    
   
       
   
    
    minusFunction(counterValue) {
        
        console.log('minus');
        
        console.log(counterValue);
        
        };
     
}





// const btnPlus = document.querySelector('.plus-btn');
// const btnMinus = document.querySelector('.minus-btn');
// console.log(btnPlus);

const productsPage = new Products();
productsPage.render();
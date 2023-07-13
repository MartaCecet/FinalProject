class Shopping {
    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        Catalog.forEach(({ id, name, price }) => {

            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                <td>📌${name}</td>
                <td>❗${price}</td>
                </tr>
                `;
            }

        });

        const html = `
        <div>
        <table>
            ${htmlCatalog}
        </table>
        </div>
        `;
        ROOT_CART.innerHTML = html;
    }
}

const cartPage = new Shopping();
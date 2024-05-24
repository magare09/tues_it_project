function copyProduct() {
        const product = document.getElementById('product1');
        const productHTML = product.outerHTML;

        navigator.clipboard.writeText(productHTML).then(() => {
            alert('Product copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
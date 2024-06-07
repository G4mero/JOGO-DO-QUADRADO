/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://localhost:3000/products';

    // Função para carregar os produtos
    function loadProducts() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(products => {
                const productList = document.getElementById('productList');
                productList.innerHTML = '';

                products.forEach(product => {
                    const li = document.createElement('li');
                    li.textContent = `${product.name} - $${product.price}`;

                    // Adicionar botão de apagar
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.addEventListener('click', function () {
                        deleteProduct(product._id); // Passa o id do produto a ser apagado
                    });
                    li.appendChild(deleteButton);

                    productList.appendChild(li);
                });
            })
            .catch(error => console.error('Error loading products:', error));
    }

    // Carregar produtos ao carregar a página
    loadProducts();

    // Adicionar produto
    const addProductForm = document.getElementById('addProductForm');
    addProductForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(addProductForm);
        const productData = {};
        formData.forEach((value, key) => {
            productData[key] = value;
        });

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response => response.json())
        .then(() => {
            // Limpar formulário e recarregar produtos
            addProductForm.reset();
            loadProducts();
        })
        .catch(error => console.error('Error adding product:', error));
    });

    // Remover produto
    function deleteProduct(productId) {
        fetch(`${apiUrl}/${productId}`, {
            method: 'DELETE'
        })
        .then(() => {
            // Recarregar produtos após a remoção
            loadProducts();
        })
        .catch(error => console.error('Error deleting product:', error));
    }
});



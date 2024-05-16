<script>
    // Функция для добавления товара в корзину
    function addToCart(event) {
        var button = event.target; // Получаем кнопку, по которой было совершено нажатие
        var product = button.parentNode.parentNode; // Получаем родительский элемент товара
        var productName = product.querySelector('h3').innerText; // Получаем название товара
        var productPrice = product.querySelector('.price').innerText; // Получаем цену товара

        // Создаем новый элемент списка для добавленного товара
        var listItem = document.createElement('li');
        listItem.innerText = productName + ' - ' + productPrice;

        // Добавляем элемент в корзину
        var cartItems = document.getElementById('cart-items');
        cartItems.appendChild(listItem);
    }
</script>

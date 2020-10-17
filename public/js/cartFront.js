        // Array que ira guardar os itens do carrinho
        const cartItems = [];

        // Seletor para pegar o botao de adicionar do HTML
        const cartAddButton = document.querySelectorAll('.addToCart');

        /* Seletor em todos cartAddButton para dsparar a função 
        updateCart sempre que clicar no botao adicionar*/
        cartAddButton.forEach((item) => {
            item.addEventListener('click', updateCart);
        });

        /* Função para pegar a cerveja do elemento clicado
        e adiciona-la a array cartItems o que a leva para
        o carrinho */
        function addingToCart(cerveja) {
           /*  // filter para checar se a cerveja já está presente no cartItems
            let cervejaExiste = cartItems.filter(cerv => cerv.productCode == cerveja.productCode);
            // se a cerveja já estiver presente, modificar a qt
            if(cervejaExiste.length != 0){
                let position = cartItems.indexOf(cerveja);
                console.log("esse é o index" + position);
            } else {
            //     // se a cerveja não estiver presente a adiciona no carrinho por completo
                return cartItems.push(cerveja);
            } */

            return cartItems.push(cerveja);
        }

        /* Criação dos elementos de total e soma que aparecem
        após os itens do carrinho */
        const cartDetails = document.createElement('div');
        cartDetails.className = 'cart--details';
        const cartTotal = document.createElement('div');
        cartTotal.className = 'cart--totalitem total big';
        const totalText = document.createElement('span');
        totalText.innerHTML = 'Total';
        const totalDin = document.createElement('span');
        totalDin.innerHTML = '';
        const finCompra = document.createElement('div');
        finCompra.className = 'cart--finalizar';
        finCompra.innerHTML = 'Finalizar Compra';
        cartTotal.appendChild(totalText);
        cartTotal.appendChild(totalDin);
        cartDetails.appendChild(cartTotal);
        cartDetails.appendChild(finCompra);
        console.log(cartDetails);
        let total = 0;
        let modalQt = 1;

        // Criação do botao de fechar do carrinho e do paragafro
        const cart = document.querySelector('.sideCart');
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');   
        const cartCloseButton = document.createElement('span');
        const cartTitle = document.createElement('p');
        cartCloseButton.className = 'close';
        cartCloseButton.innerHTML = '&times;';
        cartCloseButton.onclick = closeCart;
        cartTitle.innerHTML = 'Carrinho'; 
        

        // Funcao que atualiza o carrinho 
        function updateCart() {
            document.querySelector('.content-venda').style.width = '70%';
            document.querySelector('.sideCart').style.display = 'block';
               
            cart.innerHTML = ""
            itemContainer.innerHTML = ""
                
            for (let item in cartItems) {
                // Criar elementos HTML do carrinho
                const cartItem = document.createElement('div');
                cartItem.className = 'cart--item';
                
                const cartImg = document.createElement('img');
                cartImg.className = 'cart--item--img';
                
                const cartName = document.createElement('div');
                cartName.className = 'cart--item-nome';
                
                const cartQtArea = document.createElement('div');
                cartQtArea.className = 'cart--item--qtarea';
                
                const cartItemQt = document.createElement('div');
                cartItemQt.className = 'cart--item--qt';
                cartItemQt.innerHTML = '';

                const buttonQtMenos = document.createElement('button');
                buttonQtMenos.className = 'cart--item-qtmenos';
                buttonQtMenos.innerHTML = '-' ;
                
                const buttonQtMais = document.createElement('button');
                buttonQtMais.className = 'cart--item-qtmais';
                buttonQtMais.innerHTML = '+';

                cartImg.src = cartItems[item].img;
                cartImg.alt = cartItems[item].name;
                cartName.innerHTML = cartItems[item].name;
                cartItemQt.innerHTML = modalQt;
                cartItems[item].qt = modalQt;

                // Append child para adicionar elementos ao carrinho
                cart.appendChild(cartCloseButton);
                cart.appendChild(cartTitle);  
                cart.appendChild(itemContainer);
                itemContainer.appendChild(cartItem);
                cart.appendChild(cartDetails);
                cartItem.appendChild(cartImg);
                cartItem.appendChild(cartName);
                cartItem.appendChild(cartQtArea);
                cartQtArea.appendChild(buttonQtMenos);
                cartQtArea.appendChild(cartItemQt);
                cartQtArea.appendChild(buttonQtMais); 
                
                getTotal(cartItems);
            }
              
        };

        // Calculo do total do carrinho
        function getTotal(cartItems) {
            let total = 0;
            for (item in cartItems) {
                total += cartItems[item].qt * cartItems[item].price;
            };
            totalDin.innerHTML = `R$ ${total.toFixed(2)}`;
        }
        
        // Close cart para fechar o carrinho
        function closeCart() {
            document.querySelector('.content-venda').style.width = '100%';
            document.querySelector('.sideCart').style.display = 'none';
        }

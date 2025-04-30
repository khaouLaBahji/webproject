document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les produits depuis le localStorage ou utiliser les produits par défaut
    let products = [];
    
    // Essayer de charger les produits depuis le localStorage
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    } else {
        // Si pas de produits stockés, charger les produits par défaut
        products = [
            {
                id: 1,
                name: "Sandales plates dorées à lanières fines",
                price: 159,
                category: "Sandales",
                image: "image1.jpg",
                shortDescription: "Élégantes et parfaites pour l'été",
                description: "Élégantes et parfaites pour l'été. Produit minimaliste avec un design chic et moderne. Parfait pour un look décontracté tout en restant élégant. Ces sandales plates dorées à lanières fines sont confectionnées avec des matériaux de haute qualité pour un confort optimal."
            },
            {
                id: 2,
                name: "Sandales compensées en liège et toile beige",
                price: 239,
                category: "Sandales",
                image: "image2.jpg", 
                shortDescription: "Tendance bohème, idéales pour robe d'été",
                description: "Parfaites pour un style bohème, ces sandales offrent confort et légèreté grâce à leur semelle en liège et toile naturelle. Idéales pour les journées estivales."
            },
            {
                id: 3,
                name: "Sandales à talon carré nude",
                price: 269,
                category: "Sandales",
                image: "image3.jpg",
                shortDescription: "Confortables et élégantes pour les soirées.",
                description: "Talon carré qui assure stabilité et confort, une touche féminine qui complète vos tenues de soirée."
            },
            {
                id: 4,
                name: "Sandales à perles blanches",
                price: 179,
                category: "Sandales",
                image: "image4.jpg",
                shortDescription: "Féminines et chic, parfaites pour les mariages.",
                description: "Idéales pour des événements spéciaux, ces sandales ajoutent une touche d'élégance avec des perles décoratives."
            },
            {
                id: 5,
                name: "Sandales en raphia naturel tressé",
                price: 139,
                category: "Sandales",
                image: "image5.jpg",
                shortDescription: "Look naturel, estivales et stylées.",
                description: "En matière naturelle, ces sandales apportent une touche d'authenticité à votre look estival."
            },
            {
                id: 6,
                name: "Sandales à talon en strass argenté",
                price: 299,
                category: "Sandales",
                image: "image6.jpg",
                shortDescription: "Brillent sous la lumière, parfaites pour l'événementiel.",
                description: "Les strass argentés ajoutent une dimension festive et élégante à vos tenues de gala ou soirée."
            },
            {
                id: 7,
                name: "Sandales minimalistes noir mat",
                price: 199,
                category: "Sandales",
                image: "image7.jpg",
                shortDescription: "Look épuré, facile à porter au quotidien.",
                description: "Confortable et simple, ces sandales s'adaptent à tous vos looks quotidiens."
            },
            {
                id: 8,
                name: "Sandales pastel avec boucle dorée",
                price: 189,
                category: "Sandales",
                image: "image8.jpg",
                shortDescription: "Détail raffiné pour un look doux.",
                description: "Des couleurs pastels avec une touche de doré pour apporter douceur et éclat à vos tenues estivales."
            },
            {
                id: 9,
                name: "Sandales croisées en cuir camel",
                price: 229,
                category: "Sandales",
                image: "image9.jpg",
                shortDescription: "Classiques et confortables pour tous les jours.",
                description: "Confort optimal pour un usage quotidien, avec un design croisé qui reste intemporel."
            },
            {
                id: 10,
                name: "Sandales plates effet serpent doré",
                price: 219,
                category: "Sandales",
                image: "image10.jpg",
                shortDescription: "Toucher de luxe, légères et modernes.",
                description: "Le cuir effet serpent doré offre un look luxueux tout en restant confortable et léger."
            },
            {
                id: 11,
                name: "Sneakers blanches à plateforme",
                price: 289,
                category: "Sneakers",
                image: "image11.jpg",
                shortDescription: "Indispensables, vont avec tout.",
                description: "Le design plateforme augmente la hauteur tout en offrant un confort exceptionnel. Indispensables dans la garde-robe."
            },
            {
                id: 12,
                name: "Sneakers sport rose poudré",
                price: 269,
                category: "Sneakers",
                image: "image12.jpg",
                shortDescription: "Style girly et très confortable.",
                description: "Légères et colorées, parfaites pour les activités sportives tout en gardant un look féminin."
            },
            {
                id: 13,
                name: "Sneakers en toile fleurie",
                price: 189,
                category: "Sneakers",
                image: "image13.jpg",
                shortDescription: "Parfaites pour le printemps et l'été.",
                description: "La toile fleurie fait de ces sneakers une option idéale pour des journées ensoleillées."
            },
            {
                id: 14,
                name: "Sneakers en mesh respirant gris clair",
                price: 279,
                category: "Sneakers",
                image: "image14.jpg",
                shortDescription: "Idéal pour marcher ou faire du sport.",
                description: "Conçues pour un maximum de confort, elles assurent une bonne ventilation pendant l'activité physique."
            },
            {
                id: 15,
                name: "Sneakers à semelle colorée chunky",
                price: 309,
                category: "Sneakers",
                image: "image15.jpg",
                shortDescription: "Look streetwear très tendance.",
                description: "Les semelles chunky et colorées ajoutent du caractère à vos tenues et sont parfaites pour un style urbain."
            },
            {
                id: 16,
                name: "Sneakers noires avec détails dorés",
                price: 289,
                category: "Sneakers",
                image: "image16.jpg",
                shortDescription: "Chiques et urbaines.",
                description: "Des sneakers noires classiques avec une touche dorée pour un effet plus sophistiqué."
            },
            {
                id: 17,
                name: "Sneakers pastel multicolores",
                price: 299,
                category: "Sneakers",
                image: "image17.jpg",
                shortDescription: "Tendance actuelle, fun et féminines.",
                description: "Ces sneakers apportent une touche de couleur tout en restant pratiques pour le quotidien."
            },
            {
                id: 18,
                name: "Sneakers en cuir synthétique beige",
                price: 259,
                category: "Sneakers",
                image: "image18.jpg",
                shortDescription: "Look propre, casual chic.",
                description: "Le cuir synthétique beige offre un style épuré et raffiné."
            },
            {
                id: 19,
                name: "Sneakers à scratch pour un look rétro",
                price: 199,
                category: "Sneakers",
                image: "image19.jpg",
                shortDescription: "Faciles à enfiler, effet vintage.",
                description: "Un retour aux années 90, avec des scratchs pour plus de praticité et de style."
            },
            {
                id: 20,
                name: "Sneakers sport ultra légères",
                price: 279,
                category: "Sneakers",
                image: "image20.jpg",
                shortDescription: "Confort maximal pour usage quotidien.",
                description: "Parfait pour les personnes actives, ces sneakers sont légères et confortables."
            },
            {
                id: 21,
                name: "Bottines en simili cuir noir à talon moyen",
                price: 349,
                category: "Bottes",
                image: "image21.jpg",
                shortDescription: "Classiques et élégantes.",
                description: "Ces bottines sont idéales pour un look élégant tout en étant confortables grâce à leur talon moyen."
            },
            {
                id: 22,
                name: "Bottes hautes camel doublées intérieur",
                price: 429,
                category: "Bottes",
                image: "image22.jpg",
                shortDescription: "Chaud et chic pour l'hiver.",
                description: "Ces bottes sont doublées pour plus de chaleur et de confort pendant l'hiver."
            },
            {
                id: 23,
                name: "Bottines Chelsea marron foncé",
                price: 319,
                category: "Bottes",
                image: "image23.jpg",
                shortDescription: "Incontournables pour la saison froide.",
                description: "Design intemporel avec une touche moderne, facile à porter pour toute occasion."
            },
            {
                id: 24,
                name: "Bottines style militaire à lacets",
                price: 359,
                category: "Bottes",
                image: "image24.jpg",
                shortDescription: "Look affirmé, très tendance.",
                description: "Ces bottines militaires sont à la fois robustes et stylées."
            },
            {
                id: 25,
                name: "Bottes imperméables avec semelle crantée",
                price: 389,
                category: "Bottes",
                image: "image25.jpg",
                shortDescription: "Idéales pour les jours de pluie.",
                description: "Conçues pour résister aux intempéries, ces bottes sont parfaites pour les journées pluvieuses."
            },
            {
                id: 26,
                name: "Bottines à talon carré et zip latéral",
                price: 339,
                category: "B",
                image: "image26.jpg",
                shortDescription: "Design moderne et pratique.",
                description: "Faciles à enfiler grâce au zip latéral, et le talon carré assure confort et stabilité."
            },
            {
                id: 27,
                name: "Bottines en daim noir à boucle décorative",
                price: 379,
                category: "Bottes",
                image: "image27.jpg",
                shortDescription: "Chic et élégance hivernale.",
                description: "Le daim et la boucle décorative ajoutent une touche de raffinement."
            },
            {
                id: 28,
                name: "Bottines fourrées style casual",
                price: 299,
                category: "Bottes",
                image: "image28.jpg",
                shortDescription: "Chaleur et confort au quotidien.",
                description: "L'intérieur fourré assure une chaleur optimale pour l'hiver tout en restant stylé."
            },
            {
                id: 29,
                name: "Bottes hautes en cuir noir",
                price: 439,
                category: "Bottes",
                image: "image29.jpg",
                shortDescription: "Classiques et résistantes pour l'hiver.",
                description: "Ces bottes en cuir sont parfaites pour résister aux conditions hivernales tout en étant élégantes."
            },
            {
                id: 30,
                name: "Bottes en laine doublées",
                price: 399,
                category: "Bottes",
                image: "image30.jpg",
                shortDescription: "Chaleur et confort inégalés pour l'hiver",
                description: "Ces bottines vernies à plateforme sont conçues pour faire tourner les têtes. Leur semelle épaisse assure confort et style affirmé."
            }
        ];
   
        // Sauvegarder dans le localStorage
        localStorage.setItem('products', JSON.stringify(products));
    }

    // Panier
    let cart = [];

    // DOM elements
    const productsContainer = document.getElementById('products-container');
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.querySelector('.close');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPriceElements = document.querySelectorAll('#cart-total-price');
    const cartCountElement = document.getElementById('cart-count');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const checkoutBtn = document.getElementById('checkout-btn');
    const productDetailView = document.getElementById('product-detail-view');
    const backToProductsButton = document.getElementById('back-to-products');
    const cartTotalElement = document.getElementById('cart-total');
    // Afficher tous les produits
    displayProducts(products);

    // Event listeners
    cartIcon.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    applyFiltersBtn.addEventListener('click', applyFilters);
    checkoutBtn.addEventListener('click', checkout);
    backToProductsButton.addEventListener('click', () => {
        productDetailView.style.display = 'none';
        productsContainer.style.display = 'grid';
    });

    // Écouter les mises à jour des produits
    window.addEventListener('productsUpdated', function(e) {
        products = e.detail.products;
        displayProducts(products);
    });

    // Écouter les changements dans le localStorage
    window.addEventListener('storage', function(e) {
        if (e.key === 'products') {
            products = JSON.parse(e.newValue);
            displayProducts(products);
        }
    });

    // Fermer les modals lorsqu'on clique en dehors
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            closeCart();
        }
    });

    // Fonction pour afficher les détails du produit
    function showProductDetails(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const detailView = document.getElementById('product-detail-view');
        const productsContainer = document.getElementById('products-container');

        // Mettre à jour le contenu de la vue détaillée
        detailView.querySelector('.product-detail-img').src = product.image;
        detailView.querySelector('.product-detail-img').alt = product.name;
        detailView.querySelector('.product-detail-title').textContent = product.name;
        detailView.querySelector('.product-detail-price').textContent = `${product.price} DH`;
        detailView.querySelector('.product-detail-category').textContent = `Catégorie: ${product.category}`;
        detailView.querySelector('.product-detail-description').textContent = product.description;

        // Cacher la grille des produits et afficher la vue détaillée
        productsContainer.style.display = 'none';
        detailView.style.display = 'block';

        // Gérer le bouton "Ajouter au panier" dans la vue détaillée
        const addToCartDetailBtn = detailView.querySelector('.add-to-cart-detail');
        addToCartDetailBtn.onclick = () => addToCart(productId);
    }

    // Fonction pour afficher les produits
    function displayProducts(productsToShow) {
        const container = document.getElementById('products-container');
        container.innerHTML = '';

        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price} DH</p>
                <p class="category">${product.category}</p>
                <p class="short-description">${product.shortDescription}</p>
                <div class="product-buttons">
                    <button class="add-to-cart" data-id="${product.id}">Ajouter au panier</button>
                    <button class="more-info" data-id="${product.id}">Plus d'infos</button>
                </div>
            `;

            // Ajouter les écouteurs d'événements pour les boutons
            const addToCartBtn = productCard.querySelector('.add-to-cart');
            const moreInfoBtn = productCard.querySelector('.more-info');

            addToCartBtn.addEventListener('click', () => addToCart(product.id));
            moreInfoBtn.addEventListener('click', () => showProductDetails(product.id));

            container.appendChild(productCard);
        });
    }

    // Ajouter un produit au panier
    function addToCart(productId) {
        const product = products.find(item => item.id === productId);
        
        if (product) {
            // Vérifier si le produit est déjà dans le panier
            const existingProductIndex = cart.findIndex(item => item.id === productId);
            
            if (existingProductIndex !== -1) {
                // Augmenter la quantité
                cart[existingProductIndex].quantity += 1;
            } else {
                // Ajouter le produit avec quantité 1
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            // Mettre à jour l'affichage du panier
            updateCartDisplay();
            
            // Animation ou notification
            showNotification(`${product.name} ajouté au panier !`);
        }
    }

    // Supprimer un produit du panier
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
    }

    // Mettre à jour l'affichage du panier
    function updateCartDisplay() {
        // Mettre à jour le compteur d'articles
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = `${totalItems} articles`;
        
        // Mettre à jour le contenu du panier
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart"><div class="empty-cart-icon"></div><p class="empty-cart-text">Votre panier est vide</p></div>';
            updateCartTotal(0);
            return;
        }
        
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-quantity">Quantité: ${item.quantity}</div>
                    <div class="cart-item-price">${item.price} DH</div>
                </div>
                <button class="remove-from-cart" data-id="${item.id}">✕</button>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Ajouter les écouteurs pour les boutons de suppression
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
       
        // Mettre à jour le total
        updateCartTotal(total);
    }

    // Mettre à jour le prix total partout où il apparaît
    function updateCartTotal(total) {
        // Mettre à jour tous les éléments avec l'ID cart-total-price
        cartTotalPriceElements.forEach(el => {
            el.textContent = total;
        });
        
        // Mettre à jour également l'élément cart-total (FIX)
        if (cartTotalElement) {
            cartTotalElement.textContent = total;
        }
    }

    // Appliquer les filtres
    function applyFilters() {
        const categoryValue = categoryFilter.value;
        const priceValue = priceFilter.value;
        
        let filteredProducts = [...products];
        
        // Filtrer par catégorie
        if (categoryValue !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === categoryValue);
        }
        
        // Filtrer par prix
        if (priceValue !== 'all') {
            const [minPrice, maxPrice] = priceValue.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => 
                product.price >= minPrice && (maxPrice ? product.price <= maxPrice : true)
            );
        }
        
        // Afficher les produits filtrés
        displayProducts(filteredProducts);
    }

    // Ouvrir le panier
    function openCart() {
        cartModal.style.display = 'block';
        // Ajouter un petit délai pour permettre l'animation CSS
        setTimeout(() => {
            cartModal.classList.add('active');
        }, 10);
    }

    // Fermer le panier
    function closeCart() {
        cartModal.classList.remove('active');
        // Attendre la fin de l'animation avant de cacher complètement
        setTimeout(() => {
            cartModal.style.display = 'none';
        }, 400); // Correspond à la durée de la transition dans le CSS
    }

    // Fonction pour afficher une notification
    function showNotification(message) {
        // Créer un élément de notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Ajouter à la page
        document.body.appendChild(notification);
        
        // Animer l'apparition
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Disparaître après 3 secondes
        setTimeout(() => {
            notification.classList.remove('show');
            // Supprimer après la fin de l'animation
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Fonction pour vérifier le stock avant de valider le checkout
    function checkout() {
        if (cart.length === 0) {
            alert('Votre panier est vide !');
            return;
        }
        
        // Calculer le total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Afficher un message de confirmation
        const confirmation = confirm(`Total de votre commande : ${total} DH\nVoulez-vous confirmer votre commande ?`);
        
        if (confirmation) {
            alert('Merci pour votre commande ! Vous allez être redirigé vers la page de paiement.');
            // Ici vous pouvez ajouter la redirection vers la page de paiement
            cart = []; // Vider le panier
            updateCartDisplay(); // Mettre à jour l'affichage
            closeCart(); // Fermer le modal du panier
        }
    }

    // Ajouter la classe CSS pour le panier modal si elle n'existe pas déjà
    function addCartModalStyles() {
        // Vérifier si les styles existent déjà
        const existingStyle = document.getElementById('cart-modal-js-styles');
        if (existingStyle) return;

        // Créer une nouvelle balise style
        const styleElement = document.createElement('style');
        styleElement.id = 'cart-modal-js-styles';
        
        // Ajouter les styles CSS nécessaires
        styleElement.textContent = `
            .cart-modal {
                transition: transform 0.4s ease, opacity 0.4s ease;
                transform: translateX(100%);
                opacity: 0;
            }
            
            .cart-modal.active {
                transform: translateX(0);
                opacity: 1;
            }
            
            .notification {
                position: fixed;
                bottom: 30px;
                right: 30px;
                background-color: #e91e63;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 6px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s ease;
                max-width: 300px;
            }
            
            .notification.show {
                opacity: 1;
                transform: translateY(0);
            }
            
            .empty-cart {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 3rem 1.5rem;
                text-align: center;
            }
            
            .empty-cart-icon {
                font-size: 3rem;
                color: #ccc;
                margin-bottom: 1rem;
            }
            
            .empty-cart-text {
                font-size: 1.1rem;
                color: #666;
                margin-bottom: 1.5rem;
            }
        `;
        
        // Ajouter à la tête du document
        document.head.appendChild(styleElement);
    }

    // Ajouter les styles pour le panier modal
    addCartModalStyles();

    // Initialiser l'affichage du panier
    updateCartDisplay();

    // Remplir le sélecteur de catégories basé sur les produits disponibles (au chargement)
    function populateCategorySelect() {
        if (!categoryFilter) return;
        
        const categories = [...new Set(products.map(product => product.category))];
        
        // Supprimer toutes les options sauf "Toutes"
        while (categoryFilter.options.length > 1) {
            categoryFilter.remove(1);
        }
        
        // Ajouter les catégories trouvées
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }
    
    // Initialiser les catégories dans le filtre
    populateCategorySelect();
});

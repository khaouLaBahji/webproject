document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements pour le formulaire client et le dashboard
    const clientInfoPanel = document.getElementById('client-info');
    const dashboardPanel = document.getElementById('admin-dashboard');
    const infoForm = document.getElementById('info-form');
    const clientDataTextarea = document.getElementById('client-data');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Vérifier si localStorage est disponible
    let localStorageAvailable = false;
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        localStorageAvailable = true;
    } catch (e) {
        console.warn('localStorage n\'est pas disponible dans ce contexte. Le fichier doit être servi via HTTP/HTTPS.');
    }
    
    // Gérer la soumission du formulaire d'information client
    infoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        // Stocker les informations client si localStorage est disponible
        const clientInfo = `Nom: ${fullname}\nEmail: ${email}\nTéléphone: ${phone}`;
        if (localStorageAvailable) {
            localStorage.setItem('clientInfo', clientInfo);
        }
        
        // Afficher les informations dans la section paramètres si elle existe
        if (clientDataTextarea) {
            clientDataTextarea.value = clientInfo;
        }
        
        // Masquer le panneau client et afficher le dashboard
        clientInfoPanel.style.display = 'none';
        dashboardPanel.style.display = 'flex';
        
        // Charger les données du tableau de bord
        loadProductsTable();
        updateStats();
    });
    
    // Produits par défaut - stockés dans une variable pour pouvoir les restaurer
    const defaultProducts = [
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
        // Les autres produits sont maintenus... (j'ai conservé seulement 2 pour brevité)
        // Pour une utilisation réelle, conservez tous les produits du fichier original
    ];
    
    // Récupération des produits depuis le storage local ou initialisation
    let products = [];
    
    // Fonction pour tenter de charger les produits depuis localStorage
    function loadProducts() {
        if (!localStorageAvailable) {
            products = [...defaultProducts];
            return;
        }
        
        // Essayer de charger les produits depuis le localStorage
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            try {
                products = JSON.parse(storedProducts);
            } catch (e) {
                console.error('Erreur lors du parsing des produits:', e);
                products = [...defaultProducts];
            }
        } else {
            // Si pas de produits stockés, charger les produits par défaut
            products = [...defaultProducts];
            
            // Sauvegarder dans le localStorage
            try {
                localStorage.setItem('products', JSON.stringify(products));
            } catch (e) {
                console.warn('Impossible de sauvegarder les produits dans localStorage');
            }
        }
    }
    
    // Charger les produits au démarrage
    loadProducts();

    // Événement pour le bouton de déconnexion/retour
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Retourner à l'écran d'information client
            dashboardPanel.style.display = 'none';
            clientInfoPanel.style.display = 'flex';
        });
    }
    
    // DOM Elements pour le tableau de bord
    const productsTableBody = document.getElementById('products-table-body');
    const addProductBtn = document.getElementById('add-product-btn');
    const productModal = document.getElementById('product-modal');
    const productForm = document.getElementById('product-form');
    const cancelProductBtn = document.getElementById('cancel-product');
    const modalTitle = document.getElementById('modal-title');
    const productIdInput = document.getElementById('product-id');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');
    const productCategoryInput = document.getElementById('product-category');
    const productImageInput = document.getElementById('product-image');
    const productShortDescInput = document.getElementById('product-short-desc');
    const productDescInput = document.getElementById('product-desc');
    const deleteModal = document.getElementById('delete-modal');
    const deleteConfirmBtn = document.getElementById('delete-confirm');
    const deleteCancelBtn = document.getElementById('delete-cancel');
    const deleteProductId = document.getElementById('delete-product-id');
    
    // Ajouter le bouton "Mes produits"
    const resetProductsBtn = document.getElementById('reset-products-btn');
    if (resetProductsBtn) {
        resetProductsBtn.addEventListener('click', function() {
            resetToDefaultProducts();
        });
    }
    
    // Fonction pour réinitialiser à la liste de produits par défaut
    function resetToDefaultProducts() {
        // Restaurer les produits par défaut
        products = [...defaultProducts];
        
        // Sauvegarder dans le localStorage si disponible
        if (localStorageAvailable) {
            try {
                localStorage.setItem('products', JSON.stringify(products));
                
                // Dispatcher un événement personnalisé pour notifier les autres pages
                const updateEvent = new CustomEvent('productsUpdated', {
                    detail: { products: products }
                });
                window.dispatchEvent(updateEvent);
            } catch (e) {
                console.warn('Impossible de sauvegarder les produits dans localStorage');
            }
        }
        
        // Rafraîchir le tableau et les statistiques
        loadProductsTable();
        updateStats();
        
        // Notification à l'utilisateur
        alert('La liste des produits par défaut a été restaurée avec succès!');
    }
    
    // Navigation entre les tabs du dashboard
    const tabLinks = document.querySelectorAll('.sidebar li');
    tabLinks.forEach(tab => {
        tab.addEventListener('click', function() {
            // Retirer la classe active de tous les tabs
            tabLinks.forEach(t => t.classList.remove('active'));
            
            // Ajouter la classe active au tab cliqué
            this.classList.add('active');
            
            // Masquer tous les contenus de tab
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Afficher le contenu correspondant au tab cliqué
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Fonction pour charger les produits dans le tableau
    function loadProductsTable() {
        if (!productsTableBody) return;
        
        // Vider le tableau existant
        productsTableBody.innerHTML = '';
        
        // Ajouter chaque produit au tableau
        products.forEach(product => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price} DH
                </td>
                <td>${product.category}</td>
                <td>
                    <button class="edit-btn" data-id="${product.id}">Modifier</button>
                    <button class="delete-btn" data-id="${product.id}">Supprimer</button>
                </td>
            `;
            
            productsTableBody.appendChild(row);
        });
        
        // Ajouter les écouteurs d'événements pour les boutons d'édition et de suppression
        addEditButtonListeners();
        addDeleteButtonListeners();
    }
    
    // Fonction pour mettre à jour les statistiques du tableau de bord
    function updateStats() {
        const totalProducts = document.getElementById('total-products');
        const avgPrice = document.getElementById('avg-price');
        const categoriesCount = document.getElementById('categories-count');
        
        if (!totalProducts || !avgPrice || !categoriesCount) return;
        
        // Calculer les statistiques
        const total = products.length;
        
        const average = products.reduce((sum, product) => sum + product.price, 0) / total;
        
        const categories = new Set(products.map(product => product.category));
        
        // Mettre à jour l'affichage
        totalProducts.textContent = total;
        avgPrice.textContent = average.toFixed(2) + ' DH';
        categoriesCount.textContent = categories.size;
        
        // Mettre à jour le graphique si nécessaire
        updateCategoryChart(categories);
    }
    
    // Mise à jour du graphique de catégories
    function updateCategoryChart(categories) {
        const chartContainer = document.querySelector('.category-chart');
        if (!chartContainer) return;
        
        // Vider le container
        chartContainer.innerHTML = '';
        
        // Pour chaque catégorie, compter le nombre de produits
        const categoryCounts = {};
        categories.forEach(category => {
            categoryCounts[category] = products.filter(p => p.category === category).length;
        });
        
        // Calculer le pourcentage maximum pour l'échelle
        const totalProducts = products.length;
        
        // Créer les barres pour chaque catégorie
        Object.keys(categoryCounts).forEach(category => {
            const count = categoryCounts[category];
            const percentage = (count / totalProducts) * 100;
            
            const barContainer = document.createElement('div');
            barContainer.className = 'chart-bar-container';
            
            barContainer.innerHTML = `
                <div class="chart-label">${category}</div>
                <div class="chart-bar" style="width: ${percentage}%;">${count}</div>
            `;
            
            chartContainer.appendChild(barContainer);
        });
    }
    
    // Fonction pour ajouter des écouteurs aux boutons d'édition
    function addEditButtonListeners() {
        const editButtons = document.querySelectorAll('.edit-btn');
        
        editButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                openEditModal(productId);
            });
        });
    }
    
    // Fonction pour ajouter des écouteurs aux boutons de suppression
    function addDeleteButtonListeners() {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                openDeleteModal(productId);
            });
        });
    }
    
    // Fonction pour ouvrir la modal d'édition de produit
    function openEditModal(productId) {
        if (!productModal || !modalTitle) return;
        
        // Changer le titre de la modal
        modalTitle.textContent = 'Modifier le produit';
        
        // Trouver le produit par son ID
        const product = products.find(p => p.id === productId);
        
        if (product) {
            // Remplir le formulaire avec les données du produit
            productIdInput.value = product.id;
            productNameInput.value = product.name;
            productPriceInput.value = product.price;
            productCategoryInput.value = product.category;
            productImageInput.value = product.image;
            productShortDescInput.value = product.shortDescription;
            productDescInput.value = product.description;
            
            // Afficher la modal
            productModal.style.display = 'block';
        }
    }
    
    // Fonction pour ouvrir la modal d'ajout de produit
    function openAddModal() {
        if (!productModal || !modalTitle || !productForm) return;
        
        // Changer le titre de la modal
        modalTitle.textContent = 'Ajouter un nouveau produit';
        
        // Réinitialiser le formulaire
        productForm.reset();
        productIdInput.value = '';
        
        // Afficher la modal
        productModal.style.display = 'block';
    }
    
    // Fonction pour ouvrir la modal de confirmation de suppression
    function openDeleteModal(productId) {
        if (!deleteModal || !deleteProductId) return;
        
        // Stocker l'ID du produit à supprimer
        deleteProductId.value = productId;
        
        // Afficher la modal de confirmation
        deleteModal.style.display = 'block';
    }
    
    // Ajouter des écouteurs d'événements pour les boutons et formulaires
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            openAddModal();
        });
    }
    
    if (cancelProductBtn) {
        cancelProductBtn.addEventListener('click', function() {
            productModal.style.display = 'none';
        });
    }
    
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const productId = productIdInput.value.trim();
            const name = productNameInput.value.trim();
            const price = parseFloat(productPriceInput.value);
            const category = productCategoryInput.value.trim();
            const image = productImageInput.value.trim();
            const shortDescription = productShortDescInput.value.trim();
            const description = productDescInput.value.trim();
            
            // Validation simple des champs
            if (!name || isNaN(price) || !category || !image) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }
            
            if (productId) {
                // Mode édition - Mettre à jour le produit existant
                const index = products.findIndex(p => p.id === parseInt(productId));
                
                if (index !== -1) {
                    products[index] = {
                        ...products[index],
                        name,
                        price,
                        category,
                        image,
                        shortDescription,
                        description
                    };
                }
            } else {
                // Mode ajout - Créer un nouveau produit
                const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
                
                const newProduct = {
                    id: newId,
                    name,
                    price,
                    category,
                    image,
                    shortDescription,
                    description
                };
                
                products.push(newProduct);
            }
            
            // Sauvegarder les changements dans le localStorage si disponible
            if (localStorageAvailable) {
                try {
                    localStorage.setItem('products', JSON.stringify(products));
                    
                    // Dispatcher un événement personnalisé pour notifier les autres pages
                    const updateEvent = new CustomEvent('productsUpdated', {
                        detail: { products: products }
                    });
                    window.dispatchEvent(updateEvent);
                } catch (e) {
                    console.warn('Impossible de sauvegarder les produits dans localStorage');
                }
            }
            
            // Fermer la modal
            productModal.style.display = 'none';
            
            // Rafraîchir le tableau et les statistiques
            loadProductsTable();
            updateStats();
        });
    }
    
    // Événements pour la modal de suppression
    if (deleteCancelBtn) {
        deleteCancelBtn.addEventListener('click', function() {
            // Fermer la modal sans supprimer
            deleteModal.style.display = 'none';
        });
    }
    
    if (deleteConfirmBtn) {
        deleteConfirmBtn.addEventListener('click', function() {
            // Récupérer l'ID du produit à supprimer
            const productId = parseInt(deleteProductId.value);
            
            // Filtrer le produit
            products = products.filter(p => p.id !== productId);
            
            // Sauvegarder les changements si localStorage est disponible
            if (localStorageAvailable) {
                try {
                    localStorage.setItem('products', JSON.stringify(products));
                    
                    // Dispatcher un événement personnalisé pour notifier les autres pages
                    const updateEvent = new CustomEvent('productsUpdated', {
                        detail: { products: products }
                    });
                    window.dispatchEvent(updateEvent);
                } catch (e) {
                    console.warn('Impossible de sauvegarder les produits dans localStorage');
                }
            }
            
            // Fermer la modal
            deleteModal.style.display = 'none';
            
            // Rafraîchir le tableau et les statistiques
            loadProductsTable();
            updateStats();
        });
    }
    
    // Fermer les modals si l'utilisateur clique en dehors
    window.addEventListener('click', function(e) {
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
        
        if (e.target === deleteModal) {
            deleteModal.style.display = 'none';
        }
    });
    
    // Fermer les modals si l'utilisateur clique sur les boutons de fermeture
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Ajout de la fonctionnalité de filtrage et recherche
    const searchInput = document.getElementById('search-products');
    const categoryFilter = document.getElementById('admin-category-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterProducts();
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            filterProducts();
        });
    }
    
    function filterProducts() {
        if (!productsTableBody) return;
        
        const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
        const categoryValue = categoryFilter ? categoryFilter.value : 'all';
        
        // Filtrer les produits
        const filteredProducts = products.filter(product => {
            // Filtrer par recherche
            const matchesSearch = product.name.toLowerCase().includes(searchValue) || 
                               product.shortDescription.toLowerCase().includes(searchValue);
            
            // Filtrer par catégorie
            const matchesCategory = categoryValue === 'all' || product.category === categoryValue;
            
            return matchesSearch && matchesCategory;
        });
        
        // Vider le tableau
        productsTableBody.innerHTML = '';
        
        // Ajouter les produits filtrés
        filteredProducts.forEach(product => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price} €</td>
                <td>${product.category}</td>
                <td>
                    <button class="edit-btn" data-id="${product.id}">Modifier</button>
                    <button class="delete-btn" data-id="${product.id}">Supprimer</button>
                </td>
            `;
            
            productsTableBody.appendChild(row);
        });
        
        // Ajouter les écouteurs d'événements
        addEditButtonListeners();
        addDeleteButtonListeners();
    }
    
    // Charger le formulaire client avec les données stockées si disponibles
    if (localStorageAvailable) {
        const storedClientInfo = localStorage.getItem('clientInfo');
        if (storedClientInfo && clientDataTextarea) {
            clientDataTextarea.value = storedClientInfo;
        }
    }
    
    // Sauvegarde des paramètres
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs
            const shopName = document.getElementById('shop-name').value;
            const adminEmail = document.getElementById('admin-email').value;
            
            // Stocker les paramètres si localStorage est disponible
            if (localStorageAvailable) {
                const settings = {
                    shopName,
                    adminEmail
                };
                
                try {
                    localStorage.setItem('shopSettings', JSON.stringify(settings));
                    
                    // Dispatcher un événement pour notifier les autres pages
                    const settingsEvent = new CustomEvent('settingsUpdated', {
                        detail: { settings: settings }
                    });
                    window.dispatchEvent(settingsEvent);
                    
                    // Confirmer la sauvegarde
                    alert('Paramètres enregistrés avec succès!');
                } catch (e) {
                    console.warn('Impossible de sauvegarder les paramètres dans localStorage');
                    alert('Impossible de sauvegarder les paramètres. Votre navigateur peut restreindre l\'accès au stockage local lorsque les fichiers sont ouverts directement.');
                }
            } else {
                alert('Paramètres non enregistrés. Votre navigateur restreint l\'accès au stockage local. Pour un fonctionnement complet, utilisez un serveur web (comme Live Server).');
            }
        });
    }
    
    // Ajouter support pour le stockage d'événement pour la synchronisation entre onglets
    if (localStorageAvailable) {
        window.addEventListener('storage', function(e) {
            if (e.key === 'products') {
                // Recharger les produits car ils ont été mis à jour dans un autre onglet
                try {
                    products = JSON.parse(e.newValue);
                    loadProductsTable();
                    updateStats();
                } catch (e) {
                    console.error('Erreur lors du parsing des produits:', e);
                }
            } else if (e.key === 'shopSettings') {
                // Mettre à jour les paramètres de la boutique
                try {
                    const settings = JSON.parse(e.newValue);
                    if (document.getElementById('shop-name')) {
                        document.getElementById('shop-name').value = settings.shopName;
                    }
                    if (document.getElementById('admin-email')) {
                        document.getElementById('admin-email').value = settings.adminEmail;
                    }
                } catch (e) {
                    console.error('Erreur lors du parsing des paramètres:', e);
                }
            }
        });
    }
});

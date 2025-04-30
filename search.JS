document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les éléments DOM
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    // Récupérer les produits depuis le localStorage
    function getProducts() {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            return JSON.parse(storedProducts);
        }
        return [];
    }
    
    // Fonction de recherche
    function searchProducts() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        // Si le terme de recherche est vide, afficher tous les produits
        if (searchTerm === '') {
            displayAllProducts();
            return;
        }
        
        // Récupérer tous les produits
        const products = getProducts();
        
        // Filtrer les produits selon le terme de recherche
        const filteredProducts = products.filter(product => {
            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.shortDescription.toLowerCase().includes(searchTerm)
            );
        });
        
        // Afficher les produits filtrés
        displayFilteredProducts(filteredProducts, searchTerm);
    }
    
    // Afficher tous les produits (réutiliser la fonction existante)
    function displayAllProducts() {
        // Récupérer tous les produits
        const products = getProducts();
        
        // Créer un événement personnalisé pour déclencher l'affichage de tous les produits
        const event = new CustomEvent('productsUpdated', {
            detail: {
                products: products
            }
        });
        
        // Déclencher l'événement
        window.dispatchEvent(event);
    }
    
    // Afficher les produits filtrés
    function displayFilteredProducts(products, searchTerm) {
        const productsContainer = document.getElementById('products-container');
        
        // Cacher la vue détaillée si elle est ouverte
        const productDetailView = document.getElementById('product-detail-view');
        if (productDetailView) {
            productDetailView.style.display = 'none';
        }
        
        // Afficher la grille des produits
        productsContainer.style.display = 'grid';
        
        // Si aucun produit ne correspond, afficher un message
        if (products.length === 0) {
            productsContainer.innerHTML = `
                <div class="no-results">
                    <h3>Aucun résultat trouvé pour "${searchTerm}"</h3>
                    <p>Essayez avec un autre terme de recherche ou consultez toutes nos catégories.</p>
                </div>
            `;
            return;
        }
        
        // Créer un événement personnalisé pour déclencher l'affichage des produits filtrés
        const event = new CustomEvent('productsUpdated', {
            detail: {
                products: products
            }
        });
        
        // Déclencher l'événement
        window.dispatchEvent(event);
        
        // Afficher un message indiquant le nombre de résultats trouvés
        showSearchNotification(`${products.length} produit(s) trouvé(s) pour "${searchTerm}"`);
    }
    
    // Fonction pour afficher une notification de recherche
    function showSearchNotification(message) {
        // Vérifier si une notification existe déjà et la supprimer
        const existingNotification = document.querySelector('.search-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Créer un élément de notification
        const notification = document.createElement('div');
        notification.className = 'search-notification';
        notification.textContent = message;
        
        // Ajouter des styles en ligne pour la notification
        notification.style.backgroundColor = '#f8f8f8';
        notification.style.padding = '10px 15px';
        notification.style.marginBottom = '20px';
        notification.style.borderLeft = '4px solid #e91e63';
        notification.style.borderRadius = '0 4px 4px 0';
        
        // Insérer la notification avant le conteneur de produits
        const productsContainer = document.getElementById('products-container');
        productsContainer.parentNode.insertBefore(notification, productsContainer);
        
        // Supprimer la notification après 5 secondes
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
    
    // Événement pour le bouton de recherche
    searchButton.addEventListener('click', searchProducts);
    
    // Événement pour la touche Entrée dans le champ de recherche
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Initialiser la barre de recherche avec un placeholder dynamique
    function initializeSearchPlaceholder() {
        const products = getProducts();
        const categories = [...new Set(products.map(product => product.category))];
        
        // Liste de placeholders possibles
        const placeholders = [
            "Rechercher des chaussures...",
            "Cherchez par nom, catégorie...",
            "Trouvez votre paire parfaite..."
        ];
        
        // Ajouter des placeholders basés sur les catégories
        categories.forEach(category => {
            placeholders.push(`Rechercher des ${category.toLowerCase()}...`);
        });
        
        // Sélectionner un placeholder aléatoire
        const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
        searchInput.placeholder = randomPlaceholder;
    }
    
    // Initialiser le placeholder
    initializeSearchPlaceholder();
});


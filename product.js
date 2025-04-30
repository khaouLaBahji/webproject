// Définition des produits pour la boutique en ligne
const products = [
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
        category: "Bottes",
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

// Exporter les produits pour pouvoir les utiliser dans d'autres fichiers
export default products; 
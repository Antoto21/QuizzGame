const cacaoQuestions = [
    {
        questionText: "Quelle civilisation ancienne du Mexique utilisait les fèves de cacao comme monnaie d'échange ?",
        answerOptions: [
            "Aztèques",
            "Incas",
            "Mayas",
            "Romains"
        ],
        correctAnswerIndex: 0,
        feedback: "Les Aztèques utilisaient les fèves de cacao comme monnaie d'échange. Par exemple, 1 lapin valait 10 fèves de cacao et 1 esclave valait 100 fèves de cacao. Cette pratique montre l'importance économique et culturelle du cacao dans la civilisation aztèque."
    },
    {
        questionText: "Qui a été le premier Européen à goûter au cacao ?",
        answerOptions: [
            "Christophe Colomb",
            "Hernán Cortés",
            "Vasco de Gama",
            "Marco Polo"
        ],
        correctAnswerIndex: 0,
        feedback: "Christophe Colomb aurait été le premier Européen à goûter au cacao en 1502 sur l’île de Guanaja. Cependant, c'est Hernán Cortés qui a introduit le cacao en Europe après la conquête des Aztèques, où il est rapidement devenu populaire parmi l'aristocratie."
    },
    {
        questionText: "En quelle année la première cargaison de cacao est-elle arrivée en Espagne ?",
        answerOptions: [
            "1492",
            "1502",
            "1527",
            "1545"
        ],
        correctAnswerIndex: 2,
        feedback: "La première cargaison de cacao est arrivée en Espagne en 1527 depuis Veracruz. Cette importation a marqué le début de l'engouement européen pour le chocolat."
    },
    {
        questionText: "Qui a inventé le chocolat au lait en 1875 ?",
        answerOptions: [
            "Conrad Van Houten",
            "Rodolphe Lindt",
            "Daniel Peter",
            "Henri Nestlé"
        ],
        correctAnswerIndex: 2,
        feedback: "Daniel Peter a créé le chocolat au lait en 1875 grâce à la poudre de lait de Henri Nestlé. Cette innovation a permis de rendre le chocolat plus crémeux et doux, devenant rapidement un favori mondial."
    },
    {
        questionText: "Quelle est la durée de vie moyenne d'un cacaoyer ?",
        answerOptions: [
            "5 à 10 ans",
            "15 à 20 ans",
            "25 à 30 ans",
            "35 à 40 ans"
        ],
        correctAnswerIndex: 2,
        feedback: "Le cacaoyer peut vivre entre 25 et 30 ans et commence à produire des fruits entre 3 et 6 ans. La production maximale est atteinte après environ 10 ans de croissance."
    },
    {
        questionText: "Combien de fèves de cacao contient en moyenne une cabosse ?",
        answerOptions: [
            "10 à 20",
            "20 à 30",
            "30 à 40",
            "40 à 50"
        ],
        correctAnswerIndex: 2,
        feedback: "Une cabosse contient en moyenne entre 30 et 40 fèves de cacao. Ces fèves sont entourées de pulpe blanche sucrée, essentielle pour le processus de fermentation."
    },
    {
        questionText: "Quelle variété de cacao est la plus produite au monde ?",
        answerOptions: [
            "Criollo",
            "Forastero",
            "Trinitario",
            "Nacional"
        ],
        correctAnswerIndex: 1,
        feedback: "Le Forastero est le cacao le plus produit au monde, représentant près de 80% de la production mondiale. Il est robuste, peu sensible aux maladies, et facile à transporter, bien que son goût soit souvent plus amer."
    },
    {
        questionText: "Quel est le pourcentage de la production mondiale de cacao provenant de la Côte d'Ivoire ?",
        answerOptions: [
            "25%",
            "35%",
            "45%",
            "55%"
        ],
        correctAnswerIndex: 2,
        feedback: "La Côte d'Ivoire produit environ 45% du cacao mondial. Le climat et les conditions de culture favorables en font le principal producteur de cacao au monde."
    },
    {
        questionText: "Quel processus permet de développer les arômes complexes du cacao en réduisant l'amertume ?",
        answerOptions: [
            "Fermentation",
            "Séchage",
            "Torréfaction",
            "Conchage"
        ],
        correctAnswerIndex: 2,
        feedback: "La torréfaction développe les arômes complexes du cacao, réduit l'amertume et facilite l'extraction de la coque. Elle se fait à des températures comprises entre 120°C et 140°C, et la durée varie selon la taille et la variété des fèves."
    },
    {
        questionText: "Qu'est-ce que la liqueur de cacao ?",
        answerOptions: [
            "Un sirop à base de cacao",
            "Une pâte obtenue après broyage des nibs de cacao",
            "Un type de chocolat chaud",
            "Une boisson alcoolisée au cacao"
        ],
        correctAnswerIndex: 1,
        feedback: "La liqueur de cacao est une pâte obtenue après broyage des nibs de cacao. Elle est utilisée pour fabriquer du chocolat ou être pressée pour séparer le beurre de cacao du gâteau de cacao. Cette pâte est à la base de nombreux produits chocolatés."
    },
    {
        questionText: "Quelle invention de 1828 permet de produire du chocolat en poudre ?",
        answerOptions: [
            "La machine à concher",
            "La presse à cacao",
            "Le moulin à fèves",
            "La centrifugeuse à cacao"
        ],
        correctAnswerIndex: 1,
        feedback: "Conrad Van Houten a inventé la presse à cacao en 1828, permettant de produire du chocolat en poudre. Cette invention a révolutionné la manière dont le chocolat était consommé et utilisé en pâtisserie."
    },
    {
        questionText: "Quel est le terme utilisé pour désigner les petites fleurs du cacaoyer ?",
        answerOptions: [
            "Florettes",
            "Clochettes",
            "Myrtes",
            "Chatons"
        ],
        correctAnswerIndex: 1,
        feedback: "Les petites fleurs du cacaoyer, souvent blanches ou roses et inodores, sont appelées clochettes et poussent sur le tronc et les branches principales. Seulement 1% de ces fleurs se transforment en cabosses."
    },
    {
        questionText: "Quel procédé inventé en 1879 par Rodolphe Lindt améliore la texture du chocolat ?",
        answerOptions: [
            "Conchage",
            "Torréfaction",
            "Fermentation",
            "Pressage"
        ],
        correctAnswerIndex: 0,
        feedback: "Le conchage, inventé par Rodolphe Lindt en 1879, est un procédé de mélange et de brassage prolongé de la liqueur de cacao pour affiner sa texture et développer ses saveurs. Ce processus peut durer de plusieurs heures à plusieurs jours."
    },
    {
        questionText: "Quel fruit est étroitement lié au cacao et originaire de l'est de l'Amazonie ?",
        answerOptions: [
            "Le guarana",
            "Le cupuaçu",
            "L'açaï",
            "Le yerba maté"
        ],
        correctAnswerIndex: 1,
        feedback: "Le cupuaçu, également appelé 'copoazú' pour les Brésiliens, est un fruit étroitement lié au cacao et originaire de l'est de l'Amazonie. Sa pulpe est comestible et utilisée dans divers produits alimentaires."
    },
    {
        questionText: "Quelle étape de la transformation du cacao implique le séchage des fèves au soleil ?",
        answerOptions: [
            "Récolte",
            "Fermentation",
            "Séchage",
            "Tempérage"
        ],
        correctAnswerIndex: 2,
        feedback: "Après la fermentation, les fèves de cacao sont séchées au soleil pendant environ une semaine pour réduire leur teneur en humidité à environ 7%. Le séchage est crucial pour éviter la fermentation continue et la détérioration des fèves."
    },
    {
        questionText: "Quelle est la principale source de matière grasse dans le chocolat ?",
        answerOptions: [
            "Beurre de cacao",
            "Lait entier",
            "Huile de palme",
            "Crème"
        ],
        correctAnswerIndex: 0,
        feedback: "Le beurre de cacao est la principale source de matière grasse dans le chocolat. Il est extrait lors du pressage de la liqueur de cacao et confère au chocolat sa texture lisse et brillante."
    },
    {
        questionText: "Quel pays produit 45% du cacao mondial ?",
        answerOptions: [
            "Brésil",
            "Côte d'Ivoire",
            "Indonésie",
            "Ghana"
        ],
        correctAnswerIndex: 1,
        feedback: "La Côte d'Ivoire est le plus grand producteur de cacao au monde, représentant environ 45% de la production mondiale. Cette domination est due à des conditions climatiques favorables et à une longue tradition de culture du cacao."
    },
    {
        questionText: "Quelles sont les caractéristiques du cacao Criollo ?",
        answerOptions: [
            "Fèves violettes, goût amer",
            "Fèves grosses et claires, goût fin",
            "Fèves petites et noires, goût intense",
            "Fèves moyennes et rouges, goût sucré"
        ],
        correctAnswerIndex: 1,
        feedback: "Le Criollo, originaire d'Amérique centrale et du Mexique, produit des fèves grosses et claires avec un goût très fin. C'est un cacao très qualitatif mais fragile et sensible aux maladies, représentant seulement 1% de la production mondiale."
    },
    {
        questionText: "Quel chocolat contient de la poudre de fruit en plus du sucre et du beurre de cacao ?",
        answerOptions: [
            "Chocolat au lait",
            "Chocolat noir",
            "Chocolat blanc",
            "Chocolat aux fruits"
        ],
        correctAnswerIndex: 3,
        feedback: "Valrhona a lancé en 2017 le chocolat aux fruits, contenant de la poudre de fruit en plus du sucre et du beurre de cacao. Cette innovation permet de créer des chocolats avec des saveurs fruitées intenses et naturelles."
    },
    {
        questionText: "Quelle invention de Barry Callebaut dans les années 2000 a simplifié la mise au point du chocolat ?",
        answerOptions: [
            "Chocolat au lait",
            "Chocolat blond",
            "Beurre Mycrio",
            "Chocolat blanc"
        ],
        correctAnswerIndex: 2,
        feedback: "Le beurre Mycrio, créé par Barry Callebaut dans les années 2000, est un beurre de cacao en poudre lyophilisé. Il contient des molécules de beurre de cacao prétempérées, ce qui facilite grandement le processus de tempérage du chocolat, assurant une texture parfaite et une brillance optimale sans besoin de techniques complexes."
    }
];

if (typeof currentQuestions !== 'undefined') {
    currentQuestions = cacaoQuestions;
}

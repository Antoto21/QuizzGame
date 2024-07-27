const fruitsQuestions = [
    {
        questionText: "Quel type de fruits sont les raisins, groseilles et myrtilles ?",
        answerOptions: [
            "Baies",
            "Drupes",
            "Akènes",
            "Bonbons"
        ],
        correctAnswerIndex: 0,
        feedback: "Les raisins, groseilles et myrtilles sont des baies, des fruits charnus contenant plusieurs graines. Les baies sont souvent juteuses et sucrées, et peuvent être consommées fraîches ou utilisées dans des jus, des confitures, et des desserts."
    },
    {
        questionText: "Quel type de fruits sont les pêches, cerises et prunes ?",
        answerOptions: [
            "Baies",
            "Drupes",
            "Akènes",
            "Cailloux"
        ],
        correctAnswerIndex: 1,
        feedback: "Les pêches, cerises et prunes sont des drupes, des fruits charnus avec un noyau dur contenant une seule graine. Les drupes sont souvent sucrées et juteuses, avec une chair entourant un noyau central. Elles sont consommées fraîches, séchées, ou utilisées dans des confitures et des pâtisseries."
    },
    {
        questionText: "Quel type de fruits sont les noisettes, glands et tournesol ?",
        answerOptions: [
            "Baies",
            "Drupes",
            "Akènes",
            "Capsules"
        ],
        correctAnswerIndex: 2,
        feedback: "Les noisettes, glands et tournesol sont des akènes, des fruits secs à graine unique qui ne s'ouvrent pas à maturité. Les akènes sont souvent trouvés dans les fruits à coque et sont riches en nutriments comme les protéines et les graisses saines."
    },
    {
        questionText: "Quel type de fruits sont les pois, haricots et fèves ?",
        answerOptions: [
            "Baies",
            "Drupes",
            "Gousses",
            "Capsules"
        ],
        correctAnswerIndex: 2,
        feedback: "Les pois, haricots et fèves sont des gousses, des fruits secs qui s'ouvrent à maturité pour libérer leurs graines. Les gousses sont souvent utilisées comme légumes et sont riches en protéines et fibres."
    },
    {
        questionText: "Quel type de fruits sont les pavot, marrons et châtaignes ?",
        answerOptions: [
            "Baies",
            "Drupes",
            "Gousses",
            "Capsules"
        ],
        correctAnswerIndex: 3,
        feedback: "Les pavot, marrons et châtaignes sont des capsules, des fruits secs qui contiennent plusieurs graines et qui s'ouvrent à maturité. Les capsules sont souvent utilisées pour leurs graines comestibles ou médicinales."
    },
    {
        questionText: "Quel type de plantes sont les asperges, rhubarbe et céleri ?",
        answerOptions: [
            "Bonbons",
            "Plantes à tiges",
            "Drupes",
            "Akènes"
        ],
        correctAnswerIndex: 1,
        feedback: "Les asperges, rhubarbe et céleri sont des plantes à tiges, dont les tiges sont consommées pour leur teneur en fibres et nutriments. Ces plantes sont souvent utilisées dans les salades, les plats cuisinés, et les desserts."
    },
    {
        questionText: "Quels fruits sont des exemples de fruits tropicaux ?",
        answerOptions: [
            "Raisins, groseilles, myrtilles",
            "Pêches, cerises, prunes",
            "Ananas, mangues, papayes",
            "Noisettes, glands, tournesol"
        ],
        correctAnswerIndex: 2,
        feedback: "Les ananas, mangues et papayes sont des fruits tropicaux, provenant de régions tropicales et subtropicales. Ils sont connus pour leurs saveurs exotiques et leur richesse en vitamines, et sont souvent utilisés dans les jus, les salades de fruits, et les desserts."
    },
    {
        questionText: "Quels fruits sont des exemples d'agrumes ?",
        answerOptions: [
            "Oranges, citrons, pamplemousses",
            "Pêches, cerises, prunes",
            "Ananas, mangues, papayes",
            "Noisettes, glands, tournesol"
        ],
        correctAnswerIndex: 0,
        feedback: "Les oranges, citrons et pamplemousses sont des agrumes, des fruits riches en vitamine C et souvent acides. Les agrumes sont consommés frais, en jus, ou utilisés dans les desserts et les plats cuisinés pour leur saveur vive."
    },
    {
        questionText: "Comment sont obtenues les purées de fruits ?",
        answerOptions: [
            "En pressant et filtrant les fruits",
            "En déshydratant les fruits",
            "En écrasant les fruits charnus",
            "En les jetant au sol"
        ],
        correctAnswerIndex: 2,
        feedback: "Les purées de fruits sont obtenues en écrasant les fruits charnus. Elles sont ensuite additionnées ou non de sucre et conservées par congélation, surgélation ou appertisation. Les purées sont utilisées dans les desserts, les sauces, et comme bases pour les boissons."
    },
    {
        questionText: "Comment sont obtenues les pulpes de fruits ?",
        answerOptions: [
            "En pressant et filtrant les fruits",
            "En déshydratant les fruits",
            "En mixant et tamisant les fruits charnus",
            "En les peignant"
        ],
        correctAnswerIndex: 2,
        feedback: "Les pulpes de fruits sont obtenues en mixant puis tamisant la chair de fruits charnus. Elles sont conservées par les mêmes méthodes que les purées et sont employées dans les jus, les sauces, et les desserts."
    },
    {
        questionText: "Comment sont obtenus les jus de fruits ?",
        answerOptions: [
            "En pressant et filtrant les fruits sans ajouter d'eau",
            "En déshydratant les fruits",
            "En mixant et tamisant les fruits charnus",
            "En les hurlant très fort"
        ],
        correctAnswerIndex: 0,
        feedback: "Les jus de fruits sont obtenus après pression puis filtration de fruits charnus sans aucune addition d'eau. Ils sont consommés tels quels ou utilisés comme base pour des boissons et des recettes culinaires."
    },
    {
        questionText: "Comment sont obtenus les coulis de fruits ?",
        answerOptions: [
            "En pressant et filtrant les fruits",
            "En mixant et tamisant les fruits charnus",
            "En filtrant puis sucrant les fruits mixés",
            "En les câlinant"
        ],
        correctAnswerIndex: 2,
        feedback: "Les coulis sont obtenus à partir de jus de fruits mixés ou écrasés, filtrés puis sucrés à raison de 20 à 30%. Ils sont utilisés comme garniture pour les desserts, les glaces, et dans les pâtisseries."
    },
    {
        questionText: "Quel est l'avantage des fruits séchés ?",
        answerOptions: [
            "Augmenter la durée de conservation",
            "Préserver la couleur des fruits",
            "Réduire l'acidité des fruits",
            "Faciliter la fermentation"
        ],
        correctAnswerIndex: 0,
        feedback: "Les fruits séchés ont l'avantage d'augmenter la durée de conservation, de concentrer les saveurs et les nutriments. Ils sont souvent utilisés comme collations, dans les céréales, et les pâtisseries."
    },
    {
        questionText: "Quel est l'avantage des fruits congelés et surgelés ?",
        answerOptions: [
            "Augmenter la durée de conservation",
            "Réduire l'acidité des fruits",
            "Préserver la plupart des nutriments",
            "Les rendre invincibles"
        ],
        correctAnswerIndex: 2,
        feedback: "Les fruits congelés et surgelés préservent la plupart des nutriments et sont pratiques pour une utilisation hors saison. Ils sont souvent utilisés dans les smoothies, les desserts, et les plats cuisinés."
    },
    {
        questionText: "Quel est l'avantage des fruits en conserve en alcool ?",
        answerOptions: [
            "Augmenter la durée de conservation",
            "Réduire l'acidité des fruits",
            "Faciliter la fermentation",
            "Ajouter une saveur unique"
        ],
        correctAnswerIndex: 3,
        feedback: "Les fruits en conserve en alcool préservent les fruits tout en leur ajoutant une saveur unique et prolongent leur durée de conservation. Ils sont souvent utilisés dans les desserts et les plats gastronomiques."
    },
    {
        questionText: "Quelle est la fonction de la broméline dans les fruits ?",
        answerOptions: [
            "Décomposer les amidons en sucres simples",
            "Décomposer les protéines en peptides plus petits",
            "Catalyser l'oxydation des polyphénols",
            "Faire la vaisselle"
        ],
        correctAnswerIndex: 1,
        feedback: "La broméline est une enzyme protéolytique présente dans l'ananas qui décompose les protéines en peptides plus petits. Elle est souvent utilisée pour attendrir la viande et peut affecter la gélification des produits contenant de la gélatine."
    }
];

if (typeof currentQuestions !== 'undefined') {
    currentQuestions = fruitsQuestions;
}

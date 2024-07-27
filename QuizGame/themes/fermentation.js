const fermentationQuestions = [
    {
        questionText: "Quelle est l'équation chimique de la fermentation alcoolique réalisée par la levure boulangère ?",
        answerOptions: [
            "C6H12O6 → 2C2H5OH + 2CO2",
            "C6H12O6 → 2CH3COOH + 2CO2",
            "C12H22O11 + H2O → 2C6H12O6",
            "C6H12O6 → du pain magique"
        ],
        correctAnswerIndex: 0,
        feedback: "La fermentation alcoolique convertit les sucres simples en dioxyde de carbone (CO2) et en éthanol (alcool), ce qui permet de faire lever la pâte."
    },
    {
        questionText: "Quel agent est responsable de la fermentation lactique ?",
        answerOptions: [
            "Levure boulangère (Saccharomyces cerevisiae)",
            "Bactéries lactiques (Lactobacillus spp.)",
            "Levure chimique",
            "Petites fées des pains"
        ],
        correctAnswerIndex: 1,
        feedback: "Les bactéries lactiques convertissent les sucres en acide lactique, apportant une saveur légèrement acide et améliorant la conservation des produits fermentés."
    },
    {
        questionText: "Quel est le rôle des enzymes amylases dans la fermentation ?",
        answerOptions: [
            "Convertir les protéines en acides aminés",
            "Décomposer l'amidon en sucres simples",
            "Convertir le saccharose en glucose et fructose",
            "Faire la fête dans la pâte"
        ],
        correctAnswerIndex: 1,
        feedback: "Les amylases décomposent l'amidon en maltose et glucose, fournissant des sucres fermentescibles pour la levure."
    },
    {
        questionText: "Quelle enzyme est produite par la levure pour décomposer le saccharose en glucose et fructose ?",
        answerOptions: [
            "Amylase",
            "Invertase",
            "Protéase",
            "Magie de la pâtisserie"
        ],
        correctAnswerIndex: 1,
        feedback: "L'invertase décompose le saccharose en glucose et fructose, augmentant les sucres disponibles pour la fermentation."
    },
    {
        questionText: "Quel est l'objectif du dégazage lors du processus de fermentation en boulangerie ?",
        answerOptions: [
            "Augmenter la température de la pâte",
            "Introduire de l'oxygène dans la pâte",
            "Expulser l'excès de CO2",
            "Donner un petit massage à la pâte"
        ],
        correctAnswerIndex: 2,
        feedback: "Le dégazage permet d'expulser l'excès de CO2 pour uniformiser la pâte et améliorer sa texture."
    },
    {
        questionText: "Quel est le rôle du pétrissage dans le processus de fermentation ?",
        answerOptions: [
            "Développer le gluten et introduire de l'oxygène",
            "Réduire l'acidité de la pâte",
            "Décomposer les graisses en acides gras",
            "Faire danser la pâte"
        ],
        correctAnswerIndex: 0,
        feedback: "Le pétrissage développe le gluten et introduit de l'oxygène dans la pâte, favorisant l'activité de la levure."
    },
    {
        questionText: "À quelle température la première fermentation (pointage) est-elle généralement réalisée ?",
        answerOptions: [
            "10-15°C",
            "25-30°C",
            "35-40°C",
            "À la température d'une journée à la plage"
        ],
        correctAnswerIndex: 1,
        feedback: "La première fermentation se fait à une température de 25-30°C, favorisant l'activité optimale de la levure."
    },
    {
        questionText: "Quel facteur ralentit ou inhibe la fermentation en raison de ses propriétés hygroscopiques ?",
        answerOptions: [
            "Sucre",
            "Sel",
            "Eau",
            "Fée du pain"
        ],
        correctAnswerIndex: 1,
        feedback: "Le sel ralentit l'activité de la levure en attirant l'eau, privant ainsi la levure de l'humidité nécessaire."
    },
    {
        questionText: "Pourquoi l'alcool produit lors de la fermentation peut-il devenir toxique pour la levure ?",
        answerOptions: [
            "Il augmente l'acidité de la pâte",
            "Il inhibe l'activité des enzymes",
            "Il ralentit la croissance des levures",
            "Il donne la gueule de bois à la levure"
        ],
        correctAnswerIndex: 3,
        feedback: "À haute concentration, l'alcool peut devenir toxique pour la levure en perturbant sa membrane cellulaire, ralentissant ou arrêtant la fermentation."
    },
    {
        questionText: "Quel produit peut être ajouté pour favoriser la fermentation en fournissant une source de nourriture pour la levure ?",
        answerOptions: [
            "Jus de citron",
            "Sel",
            "Sucre",
            "Poudre de lutin magique"
        ],
        correctAnswerIndex: 2,
        feedback: "Le sucre fournit une source de nourriture pour la levure, accélérant ainsi la fermentation."
    }
];

currentQuestions = fermentationQuestions;
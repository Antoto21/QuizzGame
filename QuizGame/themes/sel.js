const selQuestions = [
    {
        questionText: "Quelles sont les deux principales sources naturelles de sel ?",
        answerOptions: [
            "Sel Gemme et Sel Marin",
            "Sel Gemme et Sel de Table",
            "Sel Marin et Sel de Table",
            "Sel de l'Himalaya et Sel de Mer"
        ],
        correctAnswerIndex: 0,
        feedback: "Le sel se trouve en abondance dans la nature sous deux formes principales : le sel gemme, provenant des mers asséchées depuis des millions d'années, et le sel marin, obtenu par évaporation lente de l'eau de mer."
    },
    {
        questionText: "Quel type de sel est utilisé pour un assaisonnement uniforme ?",
        answerOptions: [
            "Sel Fin",
            "Gros Sel",
            "Fleur de Sel",
            "Sel Magique"
        ],
        correctAnswerIndex: 0,
        feedback: "Le sel fin est utilisé pour un assaisonnement uniforme en raison de sa dissolution rapide. Il est souvent utilisé dans les recettes nécessitant une distribution homogène du sel."
    },
    {
        questionText: "Quel type de sel est riche en magnésium et oligo-éléments ?",
        answerOptions: [
            "Sel Fin",
            "Gros Sel",
            "Fleur de Sel",
            "Sel Gemme"
        ],
        correctAnswerIndex: 2,
        feedback: "La fleur de sel est composée de cristaux friables riches en magnésium et en oligo-éléments. Elle est souvent utilisée pour un assaisonnement final, offrant une expérience gustative variée."
    },
    {
        questionText: "Quelle propriété du sel aide à la conservation des aliments ?",
        answerOptions: [
            "Solubilité",
            "Hygroscopique",
            "Antiseptique",
            "Coloration"
        ],
        correctAnswerIndex: 1,
        feedback: "Le sel est hygroscopique, ce qui signifie qu'il attire et retient l'eau. Cela aide à la conservation des aliments en fixant l'humidité et en empêchant la croissance des bactéries."
    },
    {
        questionText: "Quel est le rôle du sel dans la texture des pâtes en pâtisserie ?",
        answerOptions: [
            "Fixer la saveur",
            "Améliorer la texture",
            "Coloration",
            "Réguler la fermentation"
        ],
        correctAnswerIndex: 1,
        feedback: "En pâtisserie, le sel renforce la texture et l'élasticité des pâtes, améliorant ainsi leur structure et leur consistance, rendant les produits finis plus agréables à manger."
    },
    {
        questionText: "Quelle quantité de sel est généralement utilisée par kilogramme de farine pour les pâtes levées ?",
        answerOptions: [
            "10g",
            "18g",
            "25g",
            "30g"
        ],
        correctAnswerIndex: 1,
        feedback: "En général, 18g de sel par kilogramme de farine sont utilisés pour les pâtes levées, les pâtes feuilletées et les babas. Cette quantité assure un goût optimal et une bonne structure des pâtes."
    },
    {
        questionText: "Quel type de sel est connu pour son goût fin et doux et est riche en fer ?",
        answerOptions: [
            "Sel Fin",
            "Sel Gris",
            "Sel Rose de l'Himalaya",
            "Sel à la fraise"
        ],
        correctAnswerIndex: 2,
        feedback: "Le sel rose de l'Himalaya est connu pour son goût fin et doux, et il est riche en fer et en nutriments. Il contient jusqu'à 84 nutriments bénéfiques pour la santé."
    },
    {
        questionText: "Quel type de sel contient des charbons actifs aux effets détoxifiants ?",
        answerOptions: [
            "Sel Fin",
            "Sel Gris",
            "Sel Rose de l'Himalaya",
            "Sel Noir d’Hawaï"
        ],
        correctAnswerIndex: 3,
        feedback: "Le sel noir d’Hawaï contient des charbons actifs qui ont des effets détoxifiants. Ce sel a un goût distinctif et est souvent utilisé pour des présentations culinaires spectaculaires."
    },
    {
        questionText: "Quelle propriété du sel permet de détruire les micro-organismes et de conserver la viande et le poisson ?",
        answerOptions: [
            "Solubilité",
            "Hygroscopique",
            "Antiseptique",
            "Pouvoir magique"
        ],
        correctAnswerIndex: 2,
        feedback: "Le sel a des propriétés antiseptiques, ce qui signifie qu'il peut affaiblir ou détruire les micro-organismes. Cela le rend utile pour la conservation de la viande et du poisson, empêchant ainsi leur dégradation."
    },
    {
        questionText: "Quel type de sel est non raffiné et riche en iode et magnésium ?",
        answerOptions: [
            "Sel Fin",
            "Sel Gris",
            "Sel Rose de l'Himalaya",
            "Sel Noir d’Hawaï"
        ],
        correctAnswerIndex: 1,
        feedback: "Le sel gris est un sel non raffiné, riche en iode et magnésium, ce qui le rend bénéfique pour la santé. Il est souvent utilisé dans les recettes pour son goût unique et ses propriétés nutritives."
    },
    {
        questionText: "Quel type de sel est souvent utilisé pour la décoration grâce à ses grains imposants et son goût croquant ?",
        answerOptions: [
            "Sel Fin",
            "Sel Gris",
            "Fleur de Sel",
            "Sel Gemme"
        ],
        correctAnswerIndex: 2,
        feedback: "La fleur de sel, avec ses grains imposants, offre un goût salé éparpillé et un croquant agréable. Elle est idéale pour la décoration des plats et pour ajouter une touche finale délicate."
    },
    {
        questionText: "Quel effet peut avoir une consommation excessive de sel sur la santé ?",
        answerOptions: [
            "Provoquer des troubles cardiovasculaires",
            "Améliorer la digestion",
            "Augmenter l'énergie",
            "Réduire le stress"
        ],
        correctAnswerIndex: 0,
        feedback: "Une consommation excessive de sel peut provoquer des troubles cardiovasculaires, y compris l'hypertension artérielle. Il est donc important de ne pas abuser du sel et de l'utiliser avec modération."
    },
    {
        questionText: "Comment le sel régule-t-il la fermentation en pâtisserie ?",
        answerOptions: [
            "En accélérant l'action des levures",
            "En retardant l'action des levures",
            "En augmentant la production de gaz carbonique",
            "En diminuant la production de gaz carbonique"
        ],
        correctAnswerIndex: 1,
        feedback: "Le sel régularise la fermentation en retardant légèrement l'action des levures. Cela permet une production régulière de gaz carbonique et améliore la texture des produits levés."
    },
    {
        questionText: "Quelle est la fonction principale du sel dans la fixation de la saveur ?",
        answerOptions: [
            "Masquer les saveurs",
            "Intensifier les saveurs",
            "Neutraliser les saveurs",
            "Rendre les saveurs invisibles"
        ],
        correctAnswerIndex: 1,
        feedback: "Le sel permet d'intensifier et de fixer les saveurs des aliments, rendant les plats plus savoureux et équilibrés. Il améliore la perception des goûts sucrés et salés."
    },
    {
        questionText: "Pourquoi est-il important de peser le sel lors de la préparation des recettes ?",
        answerOptions: [
            "Pour éviter de trop saler",
            "Pour ajouter de la couleur",
            "Pour améliorer la texture",
            "Pour faire joli"
        ],
        correctAnswerIndex: 0,
        feedback: "Peser le sel est crucial pour éviter de trop saler les plats. Un dosage précis permet de contrôler la salinité et de garantir un goût optimal."
    }
];

if (typeof currentQuestions !== 'undefined') {
    currentQuestions = selQuestions;
}

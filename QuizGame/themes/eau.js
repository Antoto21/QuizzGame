const eauQuestions = [
    {
        questionText: "Quelles sont les quatre réserves naturelles d'eau reliées entre elles ?",
        answerOptions: [
            "Océans, Glaciers, Eaux Terrestres, Atmosphère",
            "Océans, Rivières, Eaux Terrestres, Atmosphère",
            "Océans, Glaciers, Rivières, Atmosphère",
            "Océans, Glaciers, Eaux de Source, Atmosphère"
        ],
        correctAnswerIndex: 0,
        feedback: "L'eau est contenue dans quatre réserves naturelles reliées entre elles : les océans, les glaciers, les eaux terrestres et l’atmosphère, formant un cycle naturel incluant l’évaporation, les précipitations et l’écoulement."
    },
    {
        questionText: "Quel procédé mécanique est utilisé pour obtenir de l'eau potable ?",
        answerOptions: [
            "Filtration",
            "Stérilisation par ozone",
            "Précipitation de l'excès de calcaire",
            "Magie"
        ],
        correctAnswerIndex: 0,
        feedback: "La filtration est un procédé mécanique utilisé pour obtenir de l'eau potable. Elle permet d'éliminer les impuretés solides en suspension dans l'eau."
    },
    {
        questionText: "Quel est le degré hydrotimétrique (TH) de l'eau douce ?",
        answerOptions: [
            "Inférieur à 30",
            "Entre 30 et 70",
            "Supérieur à 70",
            "Très variable"
        ],
        correctAnswerIndex: 0,
        feedback: "L'eau douce est définie par un faible degré hydrotimétrique (TH), généralement inférieur à 30. Elle contient peu de sels minéraux dissous, notamment de calcium et de magnésium."
    },
    {
        questionText: "Quelle est l'utilisation principale de l'eau distillée en pâtisserie ?",
        answerOptions: [
            "Préparation de sirops ou de confiseries délicates",
            "Hydratation de la farine",
            "Ajout de saveur",
            "Nettoyage des ustensiles"
        ],
        correctAnswerIndex: 0,
        feedback: "L'eau distillée est utilisée principalement dans des environnements où la pureté de l’eau est cruciale, par exemple dans la préparation de sirops ou de confiseries délicates. Elle garantit l'absence d'interactions indésirables avec d'autres ingrédients."
    },
    {
        questionText: "Quel est le rôle de l'eau dans le développement des pâtes en cuisson ?",
        answerOptions: [
            "Hydratation des protéines de la farine",
            "Formation de vapeur pour développer la pâte",
            "Dissolution du sel",
            "Nettoyage des ustensiles"
        ],
        correctAnswerIndex: 1,
        feedback: "En cuisant, l'eau dégage de la vapeur, favorisant le développement des pâtes et contribuant à la formation de la croûte. Cette vapeur aide à fixer la structure des produits de pâtisserie pendant la cuisson."
    },
    {
        questionText: "Quelle propriété de l'eau contribue au moelleux des produits finis ?",
        answerOptions: [
            "Dureté",
            "pH",
            "Humidité",
            "Saveur"
        ],
        correctAnswerIndex: 2,
        feedback: "L'humidité apportée par l'eau contribue au moelleux des produits finis, notamment les gâteaux, les biscuits et les pains. Un taux d'humidité approprié est crucial pour obtenir une texture agréable et prévenir le dessèchement des produits."
    },
    {
        questionText: "Quelle est la densité de l'eau ?",
        answerOptions: [
            "0,5",
            "1",
            "1,5",
            "Variable selon la température"
        ],
        correctAnswerIndex: 1,
        feedback: "La densité de l’eau est de 1, ce qui signifie qu’un litre d’eau pèse 1000 g. Un décilitre d’eau pèse donc 100 g."
    },
    {
        questionText: "À quelle température l'eau se transforme-t-elle en glace à haute altitude (4000 m) ?",
        answerOptions: [
            "0°C",
            "-0,5°C",
            "-1°C",
            "Quand les poules auront des dents"
        ],
        correctAnswerIndex: 2,
        feedback: "À haute altitude, où la pression atmosphérique est plus basse, l'eau peut geler à une température légèrement inférieure à 0°C. À 4000 m, la température de congélation est approximativement autour de -1°C."
    },
    {
        questionText: "Qu'est-ce que l'activité de l'eau (Aw) ?",
        answerOptions: [
            "La quantité d’eau libre contenue dans un aliment",
            "Le cycle de l'eau dans la nature",
            "La densité de l'eau",
            "La capacité de l'eau à se transformer en glace"
        ],
        correctAnswerIndex: 0,
        feedback: "L’Aw représente la quantité d’eau libre contenue dans un aliment, qui est disponible pour être utilisée par les micro-organismes, les enzymes ou pour les réactions chimiques. Elle est directement liée à la sensibilité d’un aliment à la dégradation ou à la conservation."
    },
    {
        questionText: "Pourquoi l'eau dure peut-elle causer des dépôts de tartre sur les équipements ?",
        answerOptions: [
            "En raison de sa teneur élevée en sels de calcium et de magnésium",
            "Parce qu'elle est acide",
            "Parce qu'elle est pure",
            "Parce qu'elle contient du sel magique"
        ],
        correctAnswerIndex: 0,
        feedback: "L’eau dure a un TH compris entre 30 et 70 et est riche en sels de calcium et de magnésium. Cela peut causer des dépôts de tartre sur les équipements et altérer la qualité des produits de boulangerie."
    },
    {
        questionText: "Quel type d'eau est généralement impropre à tous les usages en pâtisserie sans traitement préalable ?",
        answerOptions: [
            "Eau Douce",
            "Eau Dure",
            "Eau Très Dure",
            "Eau de Source"
        ],
        correctAnswerIndex: 2,
        feedback: "L’eau très dure a un TH supérieur à 70 et contient une quantité très élevée de sels minéraux, principalement du calcium et du magnésium. Cette eau peut gravement affecter la texture et le goût des produits et accélérer l'usure des équipements pâtissiers en raison des dépôts calcaires."
    },
    {
        questionText: "Quel type d'eau est définie par un faible degré hydrotimétrique (TH) ?",
        answerOptions: [
            "Eau Douce",
            "Eau Dure",
            "Eau Minérale",
            "Eau de Source"
        ],
        correctAnswerIndex: 0,
        feedback: "L’eau douce est définie par un faible degré hydrotimétrique (TH), généralement inférieur à 30. Elle contient peu de sels minéraux dissous, notamment de calcium et de magnésium, et est idéale pour la plupart des usages en pâtisserie."
    },
    {
        questionText: "Quel type d'eau est utilisée principalement dans la préparation de sirops ou de confiseries délicates ?",
        answerOptions: [
            "Eau Minérale",
            "Eau Distillée",
            "Eau Dure",
            "Eau de Source"
        ],
        correctAnswerIndex: 1,
        feedback: "L’eau distillée est pure et n'a pas de goût distinct. Elle est utilisée principalement dans des environnements où la pureté de l’eau est cruciale, par exemple dans la préparation de sirops ou de confiseries délicates."
    },
    {
        questionText: "Pourquoi est-il crucial de maîtriser l'utilisation de l'eau en pâtisserie ?",
        answerOptions: [
            "Pour obtenir des produits de pâtisserie de haute qualité",
            "Pour économiser de l'eau",
            "Pour ajouter de la saveur",
            "Pour nettoyer les équipements"
        ],
        correctAnswerIndex: 0,
        feedback: "Une bonne maîtrise de l’utilisation de l’eau permet d’obtenir des produits de pâtisserie de haute qualité, équilibrés et savoureux. L'eau joue des rôles multiples, de l'hydratation des ingrédients secs à la régulation de la texture et du goût des produits finis."
    }
];

if (typeof currentQuestions !== 'undefined') {
    currentQuestions = eauQuestions;
}

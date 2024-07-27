const amidonQuestions = [
    {
        questionText: "Quelle est la principale différence entre l'amidon et la fécule ?",
        answerOptions: [
            "L'amidon est extrait de tubercules, tandis que la fécule est extraite de céréales",
            "L'amidon est utilisé pour épaissir, tandis que la fécule est utilisée pour gélifier",
            "L'amidon est extrait de céréales, tandis que la fécule est extraite de tubercules et de certaines racines",
            "L'amidon est sucré, tandis que la fécule est salée"
        ],
        correctAnswerIndex: 2,
        feedback: "La principale différence entre l'amidon et la fécule réside dans leur origine : l'amidon provient de céréales comme le maïs, le blé et le riz, tandis que la fécule est extraite de tubercules comme la pomme de terre et le manioc."
    },
    {
        questionText: "Quelle est la fonction principale de l'amylose dans l'amidon ?",
        answerOptions: [
            "Contribuer à la viscosité",
            "Contribuer à la formation de gels fermes",
            "Augmenter la saveur",
            "Apporter une couleur jaune"
        ],
        correctAnswerIndex: 1,
        feedback: "L'amylose, qui représente environ 20-30% de l'amidon, a une structure linéaire et contribue à la formation de gels fermes."
    },
    {
        questionText: "Quelle est la température de gélatinisation de l'amidon de maïs ?",
        answerOptions: [
            "52-64°C",
            "58-65°C",
            "62-72°C",
            "70-80°C"
        ],
        correctAnswerIndex: 2,
        feedback: "L'amidon de maïs gélatinise à une température comprise entre 62 et 72°C, ce qui entraîne l'absorption de l'eau par les granules d'amidon et leur gonflement."
    },
    {
        questionText: "Quel est le rôle de l'amylopectine dans l'amidon ?",
        answerOptions: [
            "Contribuer à la couleur",
            "Contribuer à la formation de gels fermes",
            "Contribuer à la viscosité et à la stabilité des gels",
            "Apporter une saveur sucrée"
        ],
        correctAnswerIndex: 2,
        feedback: "L'amylopectine, qui représente environ 70-80% de l'amidon, a une structure ramifiée et contribue à la viscosité et à la stabilité des gels."
    },
    {
        questionText: "Qu'est-ce que la rétrogradation de l'amidon ?",
        answerOptions: [
            "L'absorption de l'eau par les granules d'amidon",
            "La rupture des liaisons hydrogène dans l'amidon",
            "La reformations des liaisons hydrogène lors du refroidissement",
            "La transformation de l'amidon en sucre"
        ],
        correctAnswerIndex: 2,
        feedback: "La rétrogradation se produit lors du refroidissement, où les molécules d'amylose et d'amylopectine reforment des liaisons hydrogène, entraînant une texture plus ferme et parfois une expulsion d'eau (synérèse)."
    },
    {
        questionText: "Quelle capacité d'absorption d'eau a l'amidon de pomme de terre ?",
        answerOptions: [
            "3 à 4 fois son poids en eau",
            "5 à 6 fois son poids en eau",
            "7 à 8 fois son poids en eau",
            "10 fois son poids en eau"
        ],
        correctAnswerIndex: 2,
        feedback: "L'amidon de pomme de terre peut absorber jusqu'à 7 à 8 fois son poids en eau, ce qui lui permet de gonfler et de former des gels."
    },
    {
        questionText: "Quel est l'impact d'un amidon endommagé en pâtisserie ?",
        answerOptions: [
            "Il améliore la saveur",
            "Il augmente la capacité d'absorption d'eau",
            "Il rend la pâte plus collante et difficile à travailler",
            "Il allonge la durée de conservation"
        ],
        correctAnswerIndex: 1,
        feedback: "Un amidon endommagé peut absorber plus d'eau qu'un amidon non endommagé, ce qui peut affecter la texture des produits finis en rendant la pâte collante et difficile à travailler."
    },
    {
        questionText: "Quelle est la différence entre l'amidon extrait des céréales et celui des tubercules en termes d'absorption d'eau ?",
        answerOptions: [
            "Les amidons de céréales absorbent plus d'eau",
            "Les fécules absorbent plus d'eau",
            "Les amidons de céréales et de tubercules absorbent la même quantité d'eau",
            "Les amidons de céréales ne peuvent pas absorber d'eau"
        ],
        correctAnswerIndex: 1,
        feedback: "Les amidons de tubercules, comme la pomme de terre, peuvent absorber plus d'eau que les amidons de céréales, comme le maïs ou le blé."
    },
    {
        questionText: "Quels sont les principaux composants de l'amidon ?",
        answerOptions: [
            "Glucose et fructose",
            "Amylose et amylopectine",
            "Saccharose et lactose",
            "Protéines et fibres"
        ],
        correctAnswerIndex: 1,
        feedback: "L'amidon est composé de deux types de molécules : l'amylose, qui est linéaire, et l'amylopectine, qui est ramifiée."
    },
    {
        questionText: "Quelles sont les applications courantes de l'amidon en pâtisserie ?",
        answerOptions: [
            "Pour apporter de la saveur",
            "Pour épaissir, gélifier et stabiliser les préparations",
            "Pour colorer les préparations",
            "Pour sucrer les desserts"
        ],
        correctAnswerIndex: 1,
        feedback: "L'amidon est largement utilisé en pâtisserie pour ses propriétés épaississantes, gélifiantes et stabilisantes, ce qui est essentiel pour la texture, la structure et la consistance des préparations culinaires."
    },
    {
        questionText: "Qu'est-ce que l'amidon en termes de composition chimique ?",
        answerOptions: [
            "Un simple sucre composé de fructose",
            "Un complexe protéique",
            "Un sucre complexe composé de glucose",
            "Un lipide"
        ],
        correctAnswerIndex: 2,
        feedback: "L'amidon est un polysaccharide, un sucre complexe constitué de molécules de glucose. Il est stocké dans les plantes comme réserve d'énergie et joue un rôle essentiel dans la texture et la structure des préparations culinaires."
    }
];

currentQuestions = amidonQuestions;

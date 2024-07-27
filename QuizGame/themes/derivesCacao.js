const derivesCacaoQuestions = [
    {
        questionText: "Quel est le principal ingrédient du beurre de cacao ?",
        answerOptions: [
            "Matières grasses végétales",
            "Fibres",
            "Protéines",
            "Sucre"
        ],
        correctAnswerIndex: 0,
        feedback: "Le beurre de cacao est principalement constitué de matières grasses végétales. Il passe de l'état solide à l'état liquide à environ 36°C et devient ferme en dessous de cette température."
    },
    {
        questionText: "À quelle température le beurre de cacao est-il généralement chauffé pour la désodorisation ?",
        answerOptions: [
            "50-60°C",
            "70-80°C",
            "90-100°C",
            "110-120°C"
        ],
        correctAnswerIndex: 2,
        feedback: "Le beurre de cacao est chauffé à environ 90-100°C pour liquéfier le beurre et faciliter l'élimination des composés volatils responsables des odeurs indésirables."
    },
    {
        questionText: "Quelle est la durée de conservation du beurre de cacao dans de bonnes conditions ?",
        answerOptions: [
            "6 mois",
            "1 an",
            "2 ans",
            "3 ans"
        ],
        correctAnswerIndex: 1,
        feedback: "Le beurre de cacao se conserve bien pendant environ un an s'il est entreposé dans un endroit propre, sec et à l'abri des rayons solaires."
    },
    {
        questionText: "Quelle est l'une des utilisations principales du beurre de cacao en chocolaterie ?",
        answerOptions: [
            "Coloration des produits",
            "Gélification des préparations",
            "Fluidification de la couverture de chocolat",
            "Augmentation de l'acidité"
        ],
        correctAnswerIndex: 2,
        feedback: "Le beurre de cacao est souvent utilisé pour fluidifier la couverture de chocolat, rendant le chocolat plus facile à travailler et à couler."
    },
    {
        questionText: "Quel est le point de fusion de la principale molécule Beta du beurre de cacao ?",
        answerOptions: [
            "16/18°C",
            "22/24°C",
            "27/29°C",
            "34/36°C"
        ],
        correctAnswerIndex: 3,
        feedback: "La principale molécule Beta du beurre de cacao fond à une température de 34-36°C, ce qui est idéal pour obtenir une texture lisse et une brillance dans les produits chocolatés."
    },
    {
        questionText: "Quelle est la couleur typique de la poudre de cacao naturelle ?",
        answerOptions: [
            "Blanc cassé",
            "Marron à orange foncé",
            "Rouge foncé",
            "Noir"
        ],
        correctAnswerIndex: 1,
        feedback: "La poudre de cacao naturelle a une couleur allant de marron à orange foncé, contrairement à la poudre alcalinisée qui peut être rouge foncé ou très foncé."
    },
    {
        questionText: "Quelle est la teneur minimale en beurre de cacao pour le cacao maigre en poudre en France ?",
        answerOptions: [
            "5%",
            "8%",
            "12%",
            "20%"
        ],
        correctAnswerIndex: 1,
        feedback: "En France, la teneur minimale en beurre de cacao pour le cacao maigre en poudre est de 8%, assurant une qualité réglementée du produit."
    },
    {
        questionText: "Quel procédé modifie le pH de la poudre de cacao pour la rendre plus soluble ?",
        answerOptions: [
            "Fermentation",
            "Torréfaction",
            "Alcalinisation",
            "Dessiccation"
        ],
        correctAnswerIndex: 2,
        feedback: "L'alcalinisation consiste à traiter les grains de cacao avec une liqueur alcaline, modifiant le pH et rendant la poudre de cacao plus soluble et moins amère."
    },
    {
        questionText: "Quel ingrédient doit être diminué dans une recette de pâte battue lors de l'ajout de poudre de cacao ?",
        answerOptions: [
            "Sucre",
            "Farine",
            "Beurre",
            "Sel"
        ],
        correctAnswerIndex: 1,
        feedback: "Lors de l'ajout de poudre de cacao dans une pâte battue, il est conseillé de diminuer la quantité de farine pour équilibrer l'absorption d'eau et éviter une texture trop dense."
    },
    {
        questionText: "Quelle est la principale différence entre la pâte de cacao et le chocolat ?",
        answerOptions: [
            "La pâte de cacao ne contient pas de sucre ajouté",
            "La pâte de cacao est plus sucrée",
            "La pâte de cacao est moins grasse",
            "La pâte de cacao contient des additifs"
        ],
        correctAnswerIndex: 0,
        feedback: "La pâte de cacao, également appelée liqueur de cacao, ne contient pas de sucre ajouté, contrairement au chocolat qui est souvent mélangé avec du sucre et du beurre de cacao supplémentaire."
    },
    {
        questionText: "À quelle température idéale doit être conservée la pâte de cacao ?",
        answerOptions: [
            "5-10°C",
            "10-15°C",
            "15-20°C",
            "20-25°C"
        ],
        correctAnswerIndex: 2,
        feedback: "La pâte de cacao doit être conservée dans un endroit frais et sec, idéalement entre 15°C et 20°C, pour maintenir ses propriétés et éviter l'absorption d'odeurs étrangères."
    },
    {
        questionText: "Quel est le principal avantage nutritionnel du beurre de cacao ?",
        answerOptions: [
            "Riche en protéines",
            "Faible en calories",
            "Riche en antioxydants",
            "Haute teneur en sucre"
        ],
        correctAnswerIndex: 2,
        feedback: "Le beurre de cacao est riche en antioxydants, particulièrement en flavonoïdes, bénéfiques pour la santé cardiovasculaire."
    },
    {
        questionText: "Quelle étape de la fabrication du beurre de cacao implique l'utilisation de presses hydrauliques ?",
        answerOptions: [
            "Fermentation",
            "Torréfaction",
            "Pressage",
            "Concassage"
        ],
        correctAnswerIndex: 2,
        feedback: "La liqueur de cacao est pressée à l'aide de presses hydrauliques pour extraire le beurre de cacao, laissant derrière elle un résidu solide appelé gâteau de cacao."
    },
    {
        questionText: "Quel type de beurre de cacao est traité pour modifier son pH ?",
        answerOptions: [
            "Beurre de cacao naturel",
            "Beurre de cacao alcalinisé",
            "Beurre de cacao grand cru",
            "Beurre de cacao désodorisé"
        ],
        correctAnswerIndex: 1,
        feedback: "Le beurre de cacao alcalinisé est traité pour modifier son pH, ce qui est utilisé pour des applications spécifiques en pâtisserie et chocolaterie."
    },
    {
        questionText: "Quel est le résidu solide laissé après l'extraction du beurre de cacao ?",
        answerOptions: [
            "Pâte de cacao",
            "Tourteau de cacao",
            "Nibs de cacao",
            "Fèves de cacao"
        ],
        correctAnswerIndex: 1,
        feedback: "Le résidu solide laissé après l'extraction du beurre de cacao est appelé tourteau de cacao, qui est ensuite broyé pour obtenir de la poudre de cacao."
    },
    {
        questionText: "Quel type de beurre de cacao est mélangé pour obtenir des propriétés spécifiques ?",
        answerOptions: [
            "Beurre de cacao naturel",
            "Beurre de cacao alcalinisé",
            "Beurre de cacao grand cru",
            "Beurre de cacao désodorisé"
        ],
        correctAnswerIndex: 2,
        feedback: "Le beurre de cacao grand cru est un mélange de beurres de cacao provenant de différentes origines pour obtenir des propriétés physiques et gustatives spécifiques."
    },
    {
        questionText: "Quel composant du beurre de cacao fond à la plus basse température ?",
        answerOptions: [
            "Gamma",
            "Alpha",
            "Beta''",
            "Beta'"
        ],
        correctAnswerIndex: 0,
        feedback: "La molécule Gamma du beurre de cacao a le point de fusion le plus bas, fondant à environ 16/18°C. C'est l'une des nombreuses molécules qui composent le beurre de cacao."
    },
    {
        questionText: "Quel processus est utilisé pour stabiliser les cristaux du beurre de cacao ?",
        answerOptions: [
            "Fermentation",
            "Tempérage",
            "Torréfaction",
            "Dessiccation"
        ],
        correctAnswerIndex: 1,
        feedback: "Le tempérage est utilisé pour stabiliser les cristaux du beurre de cacao. Ce processus consiste à chauffer et refroidir le beurre de cacao de manière contrôlée pour obtenir une structure cristalline stable."
    },
    {
        questionText: "Quel ingrédient est souvent utilisé pour rouler les truffes en chocolat ?",
        answerOptions: [
            "Sucre glace",
            "Poudre de cacao",
            "Noix de coco râpée",
            "Farine"
        ],
        correctAnswerIndex: 1,
        feedback: "La poudre de cacao est couramment utilisée pour rouler les truffes en chocolat, leur donnant une finition classique et une saveur chocolatée intense."
    },
    {
        questionText: "Quel ingrédient du beurre de cacao est tempéré dans le Mycrio ?",
        answerOptions: [
            "Gamma",
            "Beta",
            "Alpha",
            "Zulu"
        ],
        correctAnswerIndex: 1,
        feedback: "Le beurre Mycrio, créé par Barry Callebaut, est un beurre de cacao en poudre lyophilisé contenant des molécules de beurre de cacao prétempérées, ce qui facilite le processus de tempérage du chocolat."
    }
];

if (typeof currentQuestions !== 'undefined') {
    currentQuestions = derivesCacaoQuestions;
}

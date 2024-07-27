const laitQuestions = [
    {
        questionText: 'Quels sont les types de lait couramment utilisés en pâtisserie et leurs matières grasses respectives ?',
        answerOptions: [
            'Lait entier (3.5%), lait demi-écrémé (1.5%), lait écrémé (0.1%)',
            'Lait entier (4.5%), lait demi-écrémé (2.5%), lait écrémé (1.1%)',
            'Lait entier (3.5%), lait demi-écrémé (2.0%), lait écrémé (0.5%)',
            'Lait magique (0%)'
        ],
        correctAnswerIndex: 0,
        feedback: 'Les types de lait couramment utilisés en pâtisserie sont le lait entier (3.5% de matières grasses), le lait demi-écrémé (1.5% de matières grasses), et le lait écrémé (0.1% de matières grasses).'
    },
    {
        questionText: 'Quelle est la composition principale du lait de vache en termes de pourcentage d\'eau et de lactose ?',
        answerOptions: [
            'Eau: 87%, Lactose: 4%',
            'Eau: 80%, Lactose: 5%',
            'Eau: 90%, Lactose: 3%',
            'Eau: 50%, Lactose: 50%'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le lait de vache se compose principalement de 87% d\'eau et de 4% de lactose, ce qui contribue à sa teneur en glucides et à sa saveur sucrée.'
    },
    {
        questionText: 'Quels sont les avantages de l\'utilisation du lait pasteurisé par rapport au lait cru ?',
        answerOptions: [
            'Le lait pasteurisé est plus nutritif',
            'Le lait pasteurisé a une meilleure durée de conservation',
            'Le lait pasteurisé a une texture plus crémeuse',
            'Le lait pasteurisé fait moins de bruit en bouillant'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le lait pasteurisé est chauffé à 72°C pendant 15 secondes, ce qui permet de détruire les bactéries pathogènes et d\'augmenter la durée de conservation du lait par rapport au lait cru.'
    },
    {
        questionText: 'Comment le lait en poudre est-il fabriqué ?',
        answerOptions: [
            'Par fermentation du lait',
            'Par évaporation totale de l\'eau',
            'Par évaporation totale de l\'eau avec les méthodes spray et Hatmaker',
            'En chantant des berceuses aux vaches'
        ],
        correctAnswerIndex: 2,
        feedback: 'Le lait en poudre est fabriqué par évaporation totale de l\'eau du lait, suivie de la pulvérisation du lait concentré dans une chambre de séchage (méthodes spray et Hatmaker) pour obtenir des particules sèches.'
    },
    {
        questionText: 'Pourquoi le lait est-il utilisé dans les pâtes en pâtisserie ?',
        answerOptions: [
            'Pour ajouter de la couleur',
            'Pour hydrater les ingrédients secs et donner une texture lisse',
            'Pour augmenter la teneur en sucre',
            'Pour réduire le coût des ingrédients'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le lait est utilisé dans les pâtes en pâtisserie pour hydrater les ingrédients secs et donner une texture lisse aux préparations.'
    },
    {
        questionText: 'Quels sont les principaux constituants du lait de vache ?',
        answerOptions: [
            'Protéines, lipides, glucides, minéraux et vitamines',
            'Fibres, lipides, protéines, vitamines et minéraux',
            'Glucides, lipides, protéines, fibres et vitamines',
            'Protéines, glucides, éclats de rire, minéraux et vitamines'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le lait de vache est composé de protéines (caséines), de lipides (globules gras), de glucides (lactose), de matières minérales (calcium, phosphore) et de vitamines.'
    },
    {
        questionText: 'Quelles sont les méthodes de conservation du lait ?',
        answerOptions: [
            'Réfrigération, fermentation, distillation',
            'Pasteurisation (72°C pendant 15 secondes), stérilisation UHT (135-150°C pendant 2-5 secondes), évaporation',
            'Congélation, séchage à l\'air, ajout de conservateurs',
            'Conservation dans une boîte magique'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les méthodes de conservation du lait incluent la pasteurisation (chauffé à 72°C pendant 15 secondes), la stérilisation UHT (chauffé à 135-150°C pendant 2 à 5 secondes) et l\'évaporation pour produire du lait concentré ou en poudre.'
    },
    {
        questionText: 'Quels sont les bienfaits nutritionnels du lait ?',
        answerOptions: [
            'Il est riche en fibres et en antioxydants',
            'Il fournit des protéines, du calcium et des vitamines',
            'Il est faible en calories et en sucre',
            'Il aide à la digestion et au transit intestinal'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le lait est une source importante de protéines essentielles pour la croissance, de calcium crucial pour la santé des os et des dents, et de diverses vitamines qui contribuent au bon fonctionnement du corps.'
    },
    {
        questionText: 'Comment le lait cru doit-il être conservé pour une utilisation en pâtisserie ?',
        answerOptions: [
            'À température ambiante',
            'Réfrigéré immédiatement à 4°C',
            'Congelé à -18°C',
            'Conservé sous vide'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le lait cru doit être réfrigéré immédiatement à 4°C pour limiter la croissance bactérienne et assurer une conservation optimale de 2 à 3 jours.'
    }
];

currentQuestions = laitQuestions;

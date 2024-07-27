const cremeQuestions = [
    {
        questionText: 'Quelle est la composition typique de la crème ?',
        answerOptions: [
            'Eau : 70%, Matières grasses : 20%, Protides : 5%, Glucides : 2%, Éléments minéraux : 3%',
            'Eau : 63,5%, Matières grasses : 30 à 35%, Protides : 2%, Glucides : 3%, Éléments minéraux : 1,5%',
            'Eau : 60%, Matières grasses : 30%, Protides : 4%, Glucides : 5%, Éléments minéraux : 1%',
            'Eau : 50%, Matières grasses : 40%, Protides : 5%, Glucides : 5%, Éléments minéraux : 0%'
        ],
        correctAnswerIndex: 1,
        feedback: 'La composition typique de la crème est 63,5% d\'eau, 30 à 35% de matières grasses, 2% de protides, 3% de glucides et 1,5% d\'éléments minéraux. Ces composants jouent des rôles cruciaux dans les propriétés fonctionnelles de la crème.'
    },
    {
        questionText: 'Quel est le rôle principal des matières grasses dans la crème ?',
        answerOptions: [
            'Ajouter de la couleur',
            'Apporter de la richesse et de l\'onctuosité',
            'Réduire les calories',
            'Faire de la crème magique'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les matières grasses apportent de la richesse et de l\'onctuosité aux préparations. Elles jouent également un rôle d\'émulsifiant et permettent l\'aération et le foisonnement des crèmes fouettées.'
    },
    {
        questionText: 'Quelle méthode n\'est pas utilisée pour l\'écrémage du lait ?',
        answerOptions: [
            'Écrémage par évaporation',
            'Écrémage par décantation',
            'Écrémage par centrifugation',
            'Écrémage par magie'
        ],
        correctAnswerIndex: 0,
        feedback: 'Les méthodes courantes d\'écrémage du lait sont la décantation et la centrifugation. L\'évaporation n\'est pas une méthode utilisée pour séparer la crème du lait.'
    },
    {
        questionText: 'Quel est l\'avantage principal de la pasteurisation de la crème ?',
        answerOptions: [
            'Garantir la sécurité sanitaire',
            'Augmenter la teneur en matières grasses',
            'Ajouter des vitamines',
            'Faire des bulles'
        ],
        correctAnswerIndex: 0,
        feedback: 'La pasteurisation de la crème garantit la sécurité sanitaire en détruisant les bactéries pathogènes. Cela permet de prolonger la durée de conservation sans altérer la qualité gustative de la crème.'
    },
    {
        questionText: 'Quelle est la température optimale pour le foisonnement de la crème ?',
        answerOptions: [
            '0-2°C',
            '10-15°C',
            '4-7°C',
            '20-25°C'
        ],
        correctAnswerIndex: 2,
        feedback: 'Pour un foisonnement réussi, la crème doit être bien froide, idéalement entre 4°C et 7°C. Cette température permet une meilleure incorporation et stabilisation de l\'air.'
    },
    {
        questionText: 'Quel type de crème ne convient pas pour la chantilly en raison de sa faible teneur en matières grasses ?',
        answerOptions: [
            'Crème fleurette',
            'Crème fraîche',
            'Crème légère',
            'Crème double'
        ],
        correctAnswerIndex: 2,
        feedback: 'La crème légère, avec une teneur en matières grasses entre 12 et 21 %, ne convient pas pour la chantilly car elle ne permet pas de foisonner correctement.'
    },
    {
        questionText: 'Quelle est la durée de conservation d\'une crème UHT non ouverte ?',
        answerOptions: [
            '1 mois',
            '2 mois',
            '4 mois',
            '8 mois'
        ],
        correctAnswerIndex: 2,
        feedback: 'La crème UHT (Ultra Haute Température) a une durée de conservation de 4 mois lorsqu\'elle n\'est pas ouverte, grâce à son traitement à haute température qui détruit les microbes sans altérer le goût.'
    },
    {
        questionText: 'Quels sont les principaux constituants des protides dans la crème ?',
        answerOptions: [
            'Glucides et lipides',
            'Caséines et protéines du lactosérum',
            'Lactose et sucres',
            'Vitamines et minéraux'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les protides de la crème sont principalement constitués de caséines et de protéines du lactosérum, qui contribuent à la structure et à la stabilisation des préparations.'
    },
    {
        questionText: 'Quel est l\'effet de l\'homogénéisation sur la crème ?',
        answerOptions: [
            'Diviser les globules gras en particules plus petites et uniformes',
            'Ajouter des vitamines',
            'Diminuer la durée de conservation',
            'Faire des bulles'
        ],
        correctAnswerIndex: 0,
        feedback: 'L\'homogénéisation divise les globules gras en particules plus petites et uniformes, améliorant ainsi la texture et la stabilité de la crème et empêchant la séparation des matières grasses.'
    },
    {
        questionText: 'Quelle est la méthode de traitement thermique utilisée pour la crème UHT ?',
        answerOptions: [
            'Pasteurisation lente',
            'Pasteurisation rapide',
            'Stérilisation à ultra-haute température',
            'Écrémage à haute température'
        ],
        correctAnswerIndex: 2,
        feedback: 'La crème UHT est traitée par stérilisation à ultra-haute température, chauffée brièvement à environ 150°C pendant 2-3 secondes, puis refroidie rapidement, ce qui permet une conservation à long terme sans altération du goût.'
    },
    {
        questionText: 'Quel est le rôle principal de l\'eau dans la crème ?',
        answerOptions: [
            'Ajouter de la saveur',
            'Hydrater les ingrédients secs',
            'Réduire la teneur en matières grasses',
            'Faire des bulles'
        ],
        correctAnswerIndex: 1,
        feedback: 'L\'eau constitue la majeure partie de la crème et sert de solvant pour les autres composants. En pâtisserie, elle hydrate les ingrédients secs, contribue à la consistance et participe aux réactions chimiques pendant la cuisson.'
    },
    {
        questionText: 'Quelle est la méthode de pasteurisation rapide de la crème ?',
        answerOptions: [
            'Chauffage à 63°C pendant 30 minutes',
            'Chauffage à 72°C pendant 15 secondes',
            'Chauffage à 100°C pendant 5 minutes',
            'Écrémage à haute vitesse'
        ],
        correctAnswerIndex: 1,
        feedback: 'La pasteurisation rapide, ou HTST (High Temperature Short Time), consiste à chauffer la crème à environ 72°C pendant 15 secondes, ce qui permet de détruire les bactéries pathogènes tout en préservant la qualité de la crème.'
    },
    {
        questionText: 'Quel est l\'effet de la fermentation lactique sur la crème ?',
        answerOptions: [
            'Augmenter la teneur en matières grasses',
            'Épaissir la texture et abaisser le pH',
            'Ajouter des vitamines',
            'Faire des bulles'
        ],
        correctAnswerIndex: 1,
        feedback: 'La fermentation lactique, réalisée en ajoutant des ferments lactiques à la crème, produit de l\'acide lactique, ce qui abaisse le pH de la crème et épaissit sa texture. Cette étape est souvent utilisée pour la crème fraîche épaisse.'
    },
    {
        questionText: 'Pourquoi est-il important de réfrigérer la crème avant le foisonnement ?',
        answerOptions: [
            'Pour augmenter la teneur en matières grasses',
            'Pour réduire le volume',
            'Pour améliorer la texture et la stabilité',
            'Pour la rendre magique'
        ],
        correctAnswerIndex: 2,
        feedback: 'Réfrigérer la crème avant le foisonnement améliore la texture et la stabilité en permettant une meilleure incorporation et stabilisation de l\'air. Une crème bien froide (4°C à 7°C) foisonne mieux et produit une texture plus légère et aérée.'
    },
    {
        questionText: 'Pourquoi est-il important de ne pas battre la crème trop longtemps lors du foisonnement ?',
        answerOptions: [
            'Pour augmenter la teneur en matières grasses',
            'Pour éviter la formation de beurre',
            'Pour ajouter des vitamines',
            'Pour faire des bulles'
        ],
        correctAnswerIndex: 1,
        feedback: 'Battre la crème trop longtemps peut entraîner la formation de beurre. Pour obtenir une texture légère et aérée, il est crucial de trouver le juste milieu et de s\'arrêter de battre lorsque la crème atteint des pics fermes mais souples.'
    }
];

currentQuestions = cremeQuestions;

const bleQuestions = [
    {
        questionText: 'Quelle est la principale utilisation du blé tendre (Triticum aestivum) ?',
        answerOptions: [
            'Pour la production de farine destinée à la boulangerie et à la pâtisserie',
            'Pour la production de semoule',
            'Pour l\'alimentation du bétail',
            'Pour la production de biocarburants'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le blé tendre, riche en gluten, est principalement utilisé pour produire de la farine pour la boulangerie et la pâtisserie en raison de sa capacité à bien lever.'
    },
    {
        questionText: 'Quelle est la teneur en amidon dans le grain de blé ?',
        answerOptions: [
            '70%',
            '50%',
            '30%',
            '90%'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le grain de blé contient environ 70% d\'amidon, qui est le principal glucide important pour la fermentation et la structure des produits finis.'
    },
    {
        questionText: 'Quelle est la température optimale pour la germination du blé ?',
        answerOptions: [
            '5-10°C',
            '12-25°C',
            '25-35°C',
            '0-5°C'
        ],
        correctAnswerIndex: 1,
        feedback: 'La température optimale pour la germination du blé se situe entre 12 et 25°C, ce qui favorise l\'activation des enzymes et la croissance initiale.'
    },
    {
        questionText: 'Quelle partie du grain de blé est riche en fibres ?',
        answerOptions: [
            'Les enveloppes',
            'L\'amande farineuse',
            'Le germe',
            'L\'endocarpe'
        ],
        correctAnswerIndex: 0,
        feedback: 'Les enveloppes du grain de blé, représentant 12 à 15% de sa masse, sont riches en fibres et protègent le grain.'
    },
    {
        questionText: 'Quels sont les principaux sous-produits de la mouture du blé ?',
        answerOptions: [
            'Farine, sons, remoulage, germes',
            'Farine, biocarburants, amidon, gluten',
            'Farine, pain, bières, paille',
            'Farine, huile, protéines, sucre'
        ],
        correctAnswerIndex: 0,
        feedback: 'Les principaux sous-produits de la mouture du blé sont la farine (75 à 78%), les sons (10 à 12%), le remoulage (8%) et les germes (1%).'
    },
    {
        questionText: 'Quelle variété de blé est principalement utilisée pour la production de semoule ?',
        answerOptions: [
            'Blé tendre',
            'Blé dur',
            'Blé mitadin',
            'Blé magique'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le blé dur (Triticum durum) est principalement utilisé pour la production de semoule, transformée en pâtes alimentaires grâce à sa teneur élevée en protéines et en gluten.'
    },
    {
        questionText: 'Quels sont les éléments nécessaires à la germination du blé ?',
        answerOptions: [
            'Eau, chaleur, nourriture, air',
            'Lumière, froid, oxygène, humidité',
            'Électricité, minéraux, CO2, chaleur',
            'Eau, sucre, vitamines, air'
        ],
        correctAnswerIndex: 0,
        feedback: 'La germination du blé nécessite de l\'eau, de la chaleur (température optimale entre 12 et 25°C), des réserves nutritives et de l\'oxygène.'
    },
    {
        questionText: 'Quelles vitamines sont principalement présentes dans le grain de blé ?',
        answerOptions: [
            'Vitamines A, C, D',
            'Vitamines B1, B2, PP, E',
            'Vitamines K, B6, B12',
            'Vitamines D, E, K'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le grain de blé est riche en vitamines B1, B2, PP et E, principalement présentes dans les enveloppes et le germe.'
    },
    {
        questionText: 'Quelle est la part de l\'amande farineuse dans le grain de blé ?',
        answerOptions: [
            '12 à 15%',
            '82 à 84%',
            '3 à 5%',
            '60 à 70%'
        ],
        correctAnswerIndex: 1,
        feedback: 'L\'amande farineuse constitue 82 à 84% du grain de blé et est riche en amidon et en protéines (gluten).'
    },
    {
        questionText: 'Pourquoi est-il important de stocker le blé dans des locaux bien aérés, secs et frais ?',
        answerOptions: [
            'Pour éviter l\'altération rapide de la farine',
            'Pour améliorer la qualité nutritionnelle',
            'Pour accélérer la germination',
            'Pour réduire les coûts de stockage'
        ],
        correctAnswerIndex: 0,
        feedback: 'Il est crucial de stocker le blé dans des locaux bien aérés, secs et frais pour éviter l\'altération rapide de la farine et prévenir la multiplication des parasites.'
    }
];

currentQuestions = bleQuestions;

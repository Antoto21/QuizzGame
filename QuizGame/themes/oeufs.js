const oeufsQuestions = [
    {
        questionText: 'Quel pourcentage de l\'œuf est constitué d\'eau ?',
        answerOptions: [
            '50%',
            '60%',
            '75%',
            '80%'
        ],
        correctAnswerIndex: 2,
        feedback: 'L\'œuf est constitué à 75% d\'eau, ce qui en fait un ingrédient important pour l\'hydratation des produits de pâtisserie.'
    },
    {
        questionText: 'Quelle est la principale fonction de la coquille d\'œuf ?',
        answerOptions: [
            'Fournir des nutriments',
            'Protéger le contenu interne de l\'œuf',
            'Ajouter de la saveur',
            'Faire des bijoux en coquille d\'œuf'
        ],
        correctAnswerIndex: 1,
        feedback: 'La coquille d\'œuf, constituée principalement de carbonate de calcium, protège le contenu interne de l\'œuf et permet les échanges gazeux grâce à ses pores.'
    },
    {
        questionText: 'Quelle est la température de coagulation du blanc d\'œuf ?',
        answerOptions: [
            '50-55°C',
            '61-70°C',
            '75-80°C',
            '100°C'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le blanc d\'œuf commence à coaguler à environ 61°C et est complètement cuit entre 65°C et 70°C.'
    },
    {
        questionText: 'Quels sont les principaux composants du jaune d\'œuf ?',
        answerOptions: [
            'Eau et protéines seulement',
            'Eau, protéines, lipides',
            'Glucides et minéraux seulement',
            'Un trésor caché'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le jaune d\'œuf est composé d\'eau, de protéines, de lipides, de glucides et de minéraux, ce qui lui confère ses propriétés émulsifiantes et de coagulation.'
    },
    {
        questionText: 'Quel est le rôle de la lécithine dans le jaune d\'œuf ?',
        answerOptions: [
            'Augmenter la saveur',
            'Stabiliser les émulsions',
            'Colorer les produits',
            'Attirer les poules'
        ],
        correctAnswerIndex: 1,
        feedback: 'La lécithine, présente dans le jaune d\'œuf, est un phospholipide crucial pour ses propriétés émulsifiantes, permettant de stabiliser les émulsions comme dans les mayonnaises et les mousses.'
    },
    {
        questionText: 'Quelle est la fonction principale des blancs d\'œufs en pâtisserie ?',
        answerOptions: [
            'Ajouter de la couleur',
            'Créer des mousses et des meringues',
            'Ajouter des lipides',
            'Rendre les gâteaux invisibles'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les blancs d\'œufs sont utilisés en pâtisserie pour créer des mousses et des meringues légères, grâce à leur capacité à coaguler et à piéger l\'air.'
    },
    {
        questionText: 'Quel est le pourcentage de protéines dans le blanc d\'œuf ?',
        answerOptions: [
            '5%',
            '10%',
            '15%',
            '20%'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le blanc d\'œuf contient environ 10% de protéines, principalement l\'ovalbumine, l\'ovotransferrine, l\'ovomucoïde et le lysozyme.'
    },
    {
        questionText: 'Pourquoi est-il important d\'utiliser des œufs à température ambiante en pâtisserie ?',
        answerOptions: [
            'Ils se fouettent mieux et s\'incorporent plus facilement',
            'Ils sont plus savoureux',
            'Ils sont plus colorés',
            'Ils sont plus lourds'
        ],
        correctAnswerIndex: 0,
        feedback: 'Les œufs à température ambiante se fouettent mieux et s\'incorporent plus facilement dans les autres ingrédients, ce qui est essentiel pour obtenir une texture homogène.'
    },
    {
        questionText: 'Qu\'est-ce que la coagulation des protéines des œufs apporte aux crèmes et aux sauces ?',
        answerOptions: [
            'De la structure',
            'De la couleur',
            'Du sucré',
            'De la musique'
        ],
        correctAnswerIndex: 0,
        feedback: 'La coagulation des protéines des œufs apporte de la structure aux crèmes et aux sauces, permettant d\'épaissir les mélanges liquides en crèmes onctueuses.'
    },
    {
        questionText: 'Quel type d\'élevage correspond au code 0 sur les œufs ?',
        answerOptions: [
            'Œufs de production biologique',
            'Œufs de poules élevées en cage',
            'Œufs de poules élevées au sol',
            'Œufs de poules élevées en plein air'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le code 0 sur les œufs indique qu\'ils sont issus de production biologique, où les poules ont accès à des parcours extérieurs et sont nourries avec une alimentation biologique sans OGM.'
    },
    {
        questionText: 'À quelle température les jaunes d\'œufs commencent-ils à épaissir ?',
        answerOptions: [
            '50°C',
            '68°C',
            '75°C',
            '100°C'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les jaunes d\'œufs commencent à épaissir à environ 68°C et sont complètement cuits entre 70°C et 75°C, ce qui est crucial pour obtenir la texture souhaitée dans les crèmes et les sauces.'
    },
    {
        questionText: 'Quelle est la principale fonction des blancs d\'œufs dans les meringues ?',
        answerOptions: [
            'Ajouter de la saveur',
            'Piéger l\'air pour créer une structure légère',
            'Colorer les meringues',
            'Les rendre invisibles'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les blancs d\'œufs fouettés piègent l\'air, créant une structure légère et stable, essentielle pour obtenir des meringues croquantes ou moelleuses.'
    },
    {
        questionText: 'Ques-qui fait coaguler l \'œufs ?',
        answerOptions: [
            'Alcool',
            'Sel',
            'Sucre',
            'La force'
        ],
        correctAnswerIndex: 0,
        feedback: 'La chaleur est le principal agent qui coagule les protéines de l\'œuf. Les acides et l\'alcool peuvent également coaguler les protéines de l\'œuf. Le sucre et le sel ne coagulent pas les œufs, mais peuvent les déshydrater en attirant l\'eau.'
    },
    {
        questionText: 'Quels sont les types d\'ovoproduits couramment utilisés en pâtisserie ?',
        answerOptions: [
            'Œufs en chocolat, œufs en plastique',
            'Œufs liquides, œufs déshydratés, œufs surgelés',
            'Œufs colorés, œufs parfumés',
            'Œufs dorés, œufs argentés'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les ovoproduits couramment utilisés en pâtisserie comprennent les œufs liquides (blancs, jaunes ou entiers), les œufs déshydratés et les œufs surgelés, offrant des options pratiques pour la préparation.'
    },
    {
        questionText: 'Qu\'est-ce que le foisonnement des blancs d\'œufs ?',
        answerOptions: [
            'L\'incorporation de sucre en fouettant les blancs pour créer une mousse sucrée',
            'La cuisson des blancs à haute température',
            'La dissolution des blancs dans l\'eau',
            'L\'incorporation d\'air en fouettant les blancs pour créer une mousse légère et stable'
        ],
        correctAnswerIndex: 3,
        feedback: 'Le foisonnement des blancs d\'œufs implique l\'incorporation d\'air en les fouettant, ce qui crée une mousse légère et stable. Les protéines du blanc d\'œuf, principalement l\'ovalbumine, se dénaturent et forment un réseau qui entoure et stabilise ces bulles d\'air. L\'ajout de sucre pendant le fouettage aide à stabiliser les bulles d\'air, créant ainsi une mousse plus ferme et stable, essentielle pour les meringues, les soufflés et les génoises.'
    }
];

currentQuestions = oeufsQuestions;

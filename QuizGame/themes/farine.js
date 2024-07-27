const farineQuestions = [
    {
        questionText: 'Quelle est la principale composition de la farine ?',
        answerOptions: [
            'Lipides : 70-75%',
            'Amidon : 70-75%',
            'Protéines : 70-75%',
            'Eau : 70-75%'
        ],
        correctAnswerIndex: 1,
        feedback: 'La farine est principalement composée d\'amidon (70-75%), qui joue un rôle crucial dans la fermentation, la gélatinisation et la texture finale des produits cuits.'
    },
    {
        questionText: 'Quels minéraux sont essentiels dans la farine pour l\'activation enzymatique ?',
        answerOptions: [
            'Calcium, Sodium',
            'Phosphore, Magnésium, Fer',
            'Zinc, Cuivre',
            'Or, Argent'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les minéraux tels que le phosphore, le magnésium et le fer sont essentiels dans la farine pour l\'activation de certaines enzymes jouant un rôle dans la fermentation et la maturation de la pâte.'
    },
    {
        questionText: 'Quel type de farine est idéal pour les pâtisseries fines comme les viennoiseries ?',
        answerOptions: [
            'Farine T80',
            'Farine T45',
            'Farine T150',
            'Farine de blé dur'
        ],
        correctAnswerIndex: 1,
        feedback: 'La farine T45, contenant environ 9% de protéines, est très fine et blanche, idéale pour les pâtisseries fines et les viennoiseries.'
    },
    {
        questionText: 'Quel est le rôle des lipides dans la farine ?',
        answerOptions: [
            'Ajouter de la couleur',
            'Lubrification et amélioration de la texture',
            'Réduire les calories',
            'Faire des bulles'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les lipides dans la farine lubrifient les protéines de gluten, rendant la pâte plus extensible et plus facile à manipuler. Ils contribuent également à la tendreté des produits de boulangerie.'
    },
    {
        questionText: 'Quel processus est crucial pour séparer l\'amande farineuse de l\'enveloppe et du germe lors de la mouture ?',
        answerOptions: [
            'Broyage',
            'Nettoyage',
            'Conditionnement',
            'Tamisage'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le broyage est le processus crucial pour séparer l\'amande farineuse de l\'enveloppe et du germe, libérant ainsi la farine.'
    },
    {
        questionText: 'Quelle est la fonction principale de l\'amidon dans la farine lors de la cuisson ?',
        answerOptions: [
            'Ajouter de la saveur',
            'Réduire les calories',
            'Gélatinisation',
            'Faire des bulles'
        ],
        correctAnswerIndex: 2,
        feedback: 'L\'amidon dans la farine absorbe l\'eau et gélatinise lors de la cuisson, formant une structure gelée qui donne de la rigidité et de la texture aux produits de boulangerie.'
    },
    {
        questionText: 'Quelle est la principale vitamine antioxydante présente dans la farine ?',
        answerOptions: [
            'Vitamine B1',
            'Vitamine B2',
            'Vitamine E',
            'Vitamine B6'
        ],
        correctAnswerIndex: 2,
        feedback: 'La vitamine E présente dans la farine agit comme un antioxydant, protégeant les graisses de l\'oxydation. Cela aide à prolonger la durée de conservation de la farine en évitant le rancissement des lipides.'
    },
    {
        questionText: 'Quel processus de mouture utilise des cylindres lisses pour affiner la farine ?',
        answerOptions: [
            'Broyage',
            'Claquage',
            'Convertissage',
            'Tamisage'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le claquage utilise des cylindres lisses pour réduire les semoules (fragments de l’amande) et affiner la farine, ce qui permet d\'obtenir une texture plus fine et homogène.'
    },
    {
        questionText: 'Quelle farine contient la plus haute teneur en son et en germe ?',
        answerOptions: [
            'Farine T55',
            'Farine T80',
            'Farine T150',
            'Farine de blé dur'
        ],
        correctAnswerIndex: 2,
        feedback: 'La farine T150 est la plus complète et contient toutes les parties du grain, y compris une haute teneur en son et en germe. Le son est riche en fibres, tandis que le germe est une source précieuse de vitamines et de minéraux, ce qui rend la farine T150 très nutritive mais aussi plus périssable.'
    },
    {
        questionText: 'Pourquoi est-il déconseillé d\'utiliser une farine forte en protéines pour les biscuits secs ?',
        answerOptions: [
            'Pour ajouter des vitamines',
            'Pour obtenir une texture plus friable et moins élastique',
            'Pour réduire les calories',
            'Pour faire des bulles'
        ],
        correctAnswerIndex: 1,
        feedback: 'Une farine faible en protéines permet d\'obtenir une texture plus friable et moins élastique, idéale pour les biscuits secs. Une teneur élevée en protéines favoriserait la formation de gluten, rendant les biscuits plus durs et moins friables.'
    },
    {
        questionText: 'Quel type de farine est utilisé pour les pains complets nécessitant plus de fibres ?',
        answerOptions: [
            'Farine T45',
            'Farine T55',
            'Farine T110',
            'Farine de blé dur'
        ],
        correctAnswerIndex: 2,
        feedback: 'La farine T110, semi-complète, contient plus de son et de germe que les farines plus raffinées. Elle est utilisée pour les pains complets et les recettes riches en fibres, apportant des nutriments supplémentaires et une texture plus dense.'
    },
    {
        questionText: 'Quels sont les types de protéines présents dans la farine ?',
        answerOptions: [
            'Gliadine et gluténine',
            'Albumine et globuline',
            'Collagène et élastine',
            'Kératine et myosine'
        ],
        correctAnswerIndex: 0,
        feedback: 'Les protéines présentes dans la farine, principalement la gliadine et la gluténine, sont responsables de la formation du gluten, qui donne à la pâte sa structure et son élasticité.'
    },
    {
        questionText: 'À quoi sert la mesure du taux de cendre dans l\'évaluation de la farine ?',
        answerOptions: [
            'À déterminer la teneur en minéraux et le degré de raffinage de la farine',
            'À mesurer la capacité d\'absorption d\'eau',
            'À évaluer la couleur de la farine',
            'À calculer la quantité de protéines'
        ],
        correctAnswerIndex: 0,
        feedback: 'La mesure du taux de cendre dans la farine permet de déterminer la teneur en minéraux et le degré de raffinage de la farine. Un taux de cendre élevé indique une farine moins raffinée, contenant plus de minéraux et de particules de son, tandis qu\'un taux de cendre bas indique une farine plus raffinée, avec moins de minéraux et de son.'
    },
    {
        questionText: 'Quel est le rôle principal du gluten dans la farine ?',
        answerOptions: [
            'Ajouter de la saveur',
            'Former une structure élastique et retenir les gaz de fermentation',
            'Réduire les calories',
            'Faire des bulles'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le gluten, formé par la gliadine et la gluténine dans la farine, crée une structure élastique qui retient les gaz de fermentation, permettant à la pâte de lever et de prendre du volume.'
    }
];

currentQuestions = farineQuestions;

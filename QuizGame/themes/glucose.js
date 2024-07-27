const glucoseQuestions = [
    {
        questionText: 'Qu\'est-ce que le glucose ?',
        answerOptions: [
            'Un type de protéine',
            'Un sirop épais et transparent obtenu par hydrolyse acide de l\'amidon',
            'Un type de lipide',
            'Un composé minéral'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le glucose est un sirop épais et transparent obtenu par hydrolyse acide de l\'amidon, principalement du maïs. Son pouvoir sucrant est estimé à 0,63 de celui du saccharose.'
    },
    {
        questionText: 'Quelle est la principale source d\'amidon utilisée pour produire du glucose ?',
        answerOptions: [
            'Blé',
            'Maïs',
            'Riz',
            'Pommes de terre'
        ],
        correctAnswerIndex: 1,
        feedback: 'La principale source d\'amidon utilisée pour produire du glucose est le maïs. L\'hydrolyse acide de l\'amidon de maïs permet d\'obtenir du sirop de glucose.'
    },
    {
        questionText: 'Qu\'est-ce que le Dextrose Equivalent (D.E.) mesure ?',
        answerOptions: [
            'La teneur en lipides',
            'Le degré d\'hydrolyse du sirop de glucose',
            'La couleur du glucose',
            'La température de caramélisation'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le Dextrose Equivalent (D.E.) mesure le degré d\'hydrolyse du sirop de glucose. Un D.E. élevé indique une décomposition plus complète des chaînes d\'amidon en glucose.'
    },
    {
        questionText: 'Quel est le pouvoir sucrant du glucose par rapport au saccharose ?',
        answerOptions: [
            '1,5 fois plus sucré',
            '0,63 de celui du saccharose',
            'Égal',
            '2 fois plus sucré'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le pouvoir sucrant du glucose est estimé à 0,63 de celui du saccharose. Cela signifie qu\'il est moins sucré que le saccharose.'
    },
    {
        questionText: 'Quelle propriété du glucose aide à la conservation des produits ?',
        answerOptions: [
            'Sa couleur',
            'Sa capacité à absorber l\'humidité (hygroscopicité)',
            'Son goût',
            'Son point de fusion'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le glucose est hygroscopique, ce qui signifie qu\'il absorbe l\'humidité. Cette propriété aide à prolonger la conservation des produits en retardant la dessiccation.'
    },
    {
        questionText: 'Comment le glucose contribue-t-il à la fabrication de glaces ?',
        answerOptions: [
            'Il stabilise les glaces pendant leur congélation',
            'Il augmente la teneur en protéines',
            'Il modifie la couleur des glaces',
            'Il augmente le pouvoir sucrant'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le glucose stabilise les glaces pendant leur congélation, ce qui aide à maintenir leur texture lisse et empêche la formation de gros cristaux de glace.'
    },
    {
        questionText: 'Quel est l\'effet du glucose sur la recristallisation du sucre dans les préparations sucrées ?',
        answerOptions: [
            'Il augmente la recristallisation',
            'Il n\'a aucun effet',
            'Il empêche la recristallisation du sucre',
            'Il ralentit la cristallisation'
        ],
        correctAnswerIndex: 2,
        feedback: 'Le glucose empêche la recristallisation du sucre dans les préparations sucrées, assurant une texture lisse et stable.'
    },
    {
        questionText: 'Quel type de glucose est principalement utilisé en confiserie ?',
        answerOptions: [
            'Glucose anhydre',
            'Glucose liquide',
            'Glucose hydraté',
            'Glucose séché au soleil par les lutins'
        ],
        correctAnswerIndex: 2,
        feedback: 'Le glucose hydraté, qui contient de l\'eau de cristallisation, est principalement utilisé en confiserie pour ses propriétés anti-cristallisantes et sa capacité à améliorer la texture des bonbons et autres confiseries.'
    },
    {
        questionText: 'Quelle est la différence entre le glucose anhydre et le glucose hydraté ?',
        answerOptions: [
            'Leur goût',
            'Leur pouvoir sucrant',
            'Leur utilisation',
            'La présence d\'eau de cristallisation'
        ],
        correctAnswerIndex: 3,
        feedback: 'Le glucose anhydre ne contient pas d\'eau, tandis que le glucose hydraté contient de l\'eau de cristallisation, ce qui affecte leur utilisation en confiserie et pâtisserie.'
    },
    {
        questionText: 'Quelle est la réaction du glucose lorsqu\'il est chauffé, en particulier sous forme cristallisée ?',
        answerOptions: [
            'Il laisse une sensation de fraîcheur sur la langue',
            'Il devient amer',
            'Il perd sa douceur',
            'Il ne réagit pas'
        ],
        correctAnswerIndex: 0,
        feedback: 'Lorsqu\'il est chauffé et dissous, le glucose sous forme cristallisée laisse une sensation de fraîcheur sur la langue, ce qui est une caractéristique unique.'
    },
    {
        questionText: 'Quelle est la température de caramélisation du glucose anhydre ?',
        answerOptions: [
            '120°C',
            '140°C',
            '160°C',
            '180°C'
        ],
        correctAnswerIndex: 2,
        feedback: 'Le glucose anhydre a un point de caramélisation à 160°C, où il commence à brunir et à développer des arômes complexes.'
    },
    {
        questionText: 'Pourquoi le glucose est-il utilisé dans les ganaches ?',
        answerOptions: [
            'Pour augmenter le pouvoir sucrant',
            'Pour abaisser la viscosité et améliorer la texture',
            'Pour colorer la ganache',
            'Pour ajouter des protéines'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le glucose est utilisé dans les ganaches pour abaisser la viscosité et améliorer la texture, rendant la ganache plus lisse et plus facile à manipuler.'
    },
    {
        questionText: 'Comment le glucose aide-t-il à stabiliser les produits de confiserie ?',
        answerOptions: [
            'En réduisant l\'activité de l\'eau (Aw)',
            'En augmentant la teneur en protéines',
            'En modifiant la couleur',
            'En augmentant la teneur en lipides'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le glucose aide à stabiliser les produits de confiserie en réduisant l\'activité de l\'eau (Aw), ce qui améliore la conservation en inhibant la croissance microbienne.'
    },
    {
        questionText: 'Quel est le rôle du glucose dans les réactions de Maillard ?',
        answerOptions: [
            'Il ne participe pas',
            'Il contribue à la coloration et au brunissement des produits',
            'Il empêche les réactions de Maillard',
            'Il augmente la teneur en protéines'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le glucose participe aux réactions de Maillard, contribuant à la coloration et au brunissement des produits lors de la cuisson.'
    },
    {
        questionText: 'Quel est le pouvoir anti-cristallisant (PAC) du glucose ?',
        answerOptions: [
            '100',
            '150',
            '190',
            '200'
        ],
        correctAnswerIndex: 2,
        feedback: 'Le glucose a un pouvoir anti-cristallisant (PAC) de 190, ce qui signifie qu\'il est très efficace pour empêcher la formation de cristaux de sucre, assurant ainsi une texture lisse et stable dans les produits sucrés.'
    }
];

currentQuestions = glucoseQuestions;

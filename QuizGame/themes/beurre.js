const beurreQuestions = [
    {
        questionText: 'Quelle est la teneur en matières grasses du beurre ?',
        answerOptions: [
            '70%',
            '82%',
            '65%',
            '50%'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le beurre contient 82% de matières grasses, ce qui lui confère sa texture et son onctuosité caractéristiques.'
    },
    {
        questionText: 'Quels acides gras sont principalement responsables de la fermeté du beurre ?',
        answerOptions: [
            'Acides gras polyinsaturés',
            'Acides gras saturés',
            'Acides gras mono-insaturés',
            'Acides gras magiques'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les acides gras saturés, principalement sous forme d\'acide palmitique et stéarique, sont responsables de la fermeté du beurre à température ambiante.'
    },
    {
        questionText: 'Quel est le rôle principal des phospholipides dans le beurre ?',
        answerOptions: [
            'Ajouter du goût',
            'Agir comme émulsifiants naturels',
            'Réduire les calories',
            'Faire des bulles'
        ],
        correctAnswerIndex: 1,
        feedback: 'Les phospholipides présents en petites quantités dans le beurre agissent comme des émulsifiants naturels, stabilisant les émulsions eau-dans-huile.'
    },
    {
        questionText: 'Quel est le point de fusion du beurre ?',
        answerOptions: [
            '15-20°C',
            '40-45°C',
            '28-35°C',
            '50-60°C'
        ],
        correctAnswerIndex: 2,
        feedback: 'Le point de fusion du beurre se situe entre 28 et 35°C, dépendant de la proportion d\'acides gras saturés et insaturés.'
    },
    {
        questionText: 'Combien de litres de lait entier sont nécessaires pour produire 1 kg de beurre ?',
        answerOptions: [
            '10 litres',
            '15 litres',
            '22 litres',
            '5 litres'
        ],
        correctAnswerIndex: 2,
        feedback: 'Environ 22 litres de lait entier sont nécessaires pour produire 1 kg de beurre, en raison de la nécessité de séparer la crème du lait.'
    },
    {
        questionText: 'Quel type de beurre contient une grande quantité d\'acides gras insaturés et a une texture plutôt molle ?',
        answerOptions: [
            'Beurre gras',
            'Beurre sec',
            'Beurre fractionné',
            'Beurre magique'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le beurre gras contient une grande quantité d\'acides gras insaturés, ce qui lui donne un point de fusion bas (30-32°C) et une texture plutôt molle.'
    },
    {
        questionText: 'Quel type de beurre est idéal pour les pâtes feuilletées et les croissants en raison de sa texture très ferme ?',
        answerOptions: [
            'Beurre gras',
            'Beurre sec',
            'Beurre fractionné',
            'Beurre enchanté'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le beurre sec, avec un point de fusion élevé (supérieur à 32°C) et une texture très ferme, est idéal pour les pâtes feuilletées et les croissants.'
    },
    {
        questionText: 'Quel est l\'avantage du beurre clarifié par rapport au beurre non clarifié ?',
        answerOptions: [
            'Ajoute des vitamines',
            'A un point de fumée plus élevé',
            'Réduit les calories',
            'Fait des bulles'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le beurre clarifié a un point de fumée plus élevé (environ 250°C) comparé au beurre non clarifié (environ 150°C), ce qui le rend plus stable pour la cuisson à haute température.'
    },
    {
        questionText: 'Quel est le rôle principal de l\'eau dans le beurre ?',
        answerOptions: [
            'Former une émulsion et influencer la texture',
            'Ajouter de la saveur',
            'Réduire la teneur en matières grasses',
            'Faire des bulles'
        ],
        correctAnswerIndex: 0,
        feedback: 'L\'eau dans le beurre est dispersée sous forme de petites gouttelettes, formant une émulsion qui contribue à l\'hydratation des ingrédients et influence la texture finale des produits de pâtisserie.'
    },
    {
        questionText: 'Quels sont les principaux types de protéines dans le beurre ?',
        answerOptions: [
            'Caséine, lactalbumine et lactoglobuline',
            'Glucides et lipides',
            'Lactose et sucres',
            'Vitamines et minéraux'
        ],
        correctAnswerIndex: 0,
        feedback: 'Les principales protéines dans le beurre sont la caséine, la lactalbumine et la lactoglobuline, qui participent à la structure et peuvent influencer les réactions de brunissement et de saveur pendant la cuisson.'
    },
    {
        questionText: 'Quelle vitamine dans le beurre est importante pour la vision et le système immunitaire ?',
        answerOptions: [
            'Vitamine C',
            'Vitamine A',
            'Vitamine B12',
            'Vitamine magique'
        ],
        correctAnswerIndex: 1,
        feedback: 'La vitamine A présente dans le beurre est essentielle pour la vision, le système immunitaire et la reproduction.'
    },
    {
        questionText: 'Quel type de beurre est particulièrement utilisé pour les crèmes en chocolaterie en raison de sa faible quantité d\'eau ?',
        answerOptions: [
            'Beurre concentré',
            'Beurre sec',
            'Beurre fractionné',
            'Beurre flottant'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le beurre concentré, avec un taux de matières grasses de 96,7% à 99,9% et une faible quantité d\'eau, est particulièrement utilisé en chocolaterie pour les crèmes.'
    },
    {
        questionText: 'Quel est le point de fumée du beurre non clarifié ?',
        answerOptions: [
            '100°C',
            '200°C',
            '150°C',
            '250°C'
        ],
        correctAnswerIndex: 2,
        feedback: 'Le point de fumée du beurre non clarifié est d\'environ 150°C, au-delà duquel il commence à se décomposer et à libérer des composés volatils et des toxines.'
    },
    {
        questionText: 'Quel type de beurre est obtenu à partir de lait ou de crème non pasteurisée et est fragile bactériologiquement ?',
        answerOptions: [
            'Beurre gras',
            'Beurre sec',
            'Beurre cru',
            'Beurre enchanté'
        ],
        correctAnswerIndex: 2,
        feedback: 'Le beurre cru, obtenu à partir de lait ou de crème non pasteurisée, a d\'excellentes qualités organoleptiques mais est fragile bactériologiquement.'
    },
    {
        questionText: 'Pourquoi le beurre est-il important dans les pâtes feuilletées ?',
        answerOptions: [
            'Pour ajouter des vitamines',
            'Pour créer des fines couches de pâte séparées par des couches de beurre',
            'Pour réduire les calories',
            'Pour faire des bulles'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le beurre de tourage est essentiel dans les pâtes feuilletées pour créer des fines couches de pâte séparées par des couches de beurre. Le beurre ajoute une couche imperméable entre la pâte, et grâce à cela, l\'humidité pousse la détrempe, ce qui crée le feuilletage. En fondant pendant la cuisson, le beurre libère également des arômes riches et savoureux.'
    }
];

currentQuestions = beurreQuestions;

const huilesQuestions = [
    {
        questionText: "Quelle est la différence principale entre les huiles fluides et les huiles concrètes ?",
        answerOptions: [
            "Les huiles fluides sont solides à température ambiante, tandis que les huiles concrètes sont liquides",
            "Les huiles fluides sont liquides à température ambiante, tandis que les huiles concrètes sont solides ou pâteuses",
            "Les huiles fluides se mélangent à l'eau, tandis que les huiles concrètes ne se mélangent pas à l'eau",
            "Les huiles fluides ont un goût sucré, tandis que les huiles concrètes ont un goût salé"
        ],
        correctAnswerIndex: 1,
        feedback: "Les huiles fluides restent liquides à température ambiante (environ 15°C), comme l'huile d'olive ou l'huile de tournesol. Les huiles concrètes, comme l'huile de coco ou le beurre de cacao, sont solides ou pâteuses à cette même température."
    },
    {
        questionText: "Quelle étape du processus de fabrication des huiles consiste à broyer les graines ou les fruits ?",
        answerOptions: [
            "Stockage",
            "Trituration",
            "Extraction",
            "Conditionnement"
        ],
        correctAnswerIndex: 1,
        feedback: "La trituration est l'étape où les graines ou les fruits sont broyés pour en extraire une pâte, libérant ainsi l'huile contenue dans les cellules."
    },
    {
        questionText: "Quel type d'huile est obtenue par pression à froid ?",
        answerOptions: [
            "Huile extra vierge",
            "Huile de noyaux",
            "Huile raffinée",
            "Huile magique"
        ],
        correctAnswerIndex: 0,
        feedback: "L'huile extra vierge est obtenue par pression à froid, sans aucun traitement chimique, conservant ainsi ses propriétés nutritionnelles et organoleptiques."
    },
    {
        questionText: "Quelle méthode d'extraction utilise un solvant pour dissoudre l'huile des graines broyées ?",
        answerOptions: [
            "Pression à froid",
            "Pression à chaud",
            "Dissolution",
            "Centrifugation"
        ],
        correctAnswerIndex: 2,
        feedback: "La dissolution utilise un solvant, comme l'hexane, pour dissoudre l'huile des graines broyées, suivie d'une distillation pour récupérer le solvant et l'huile."
    },
    {
        questionText: "Qu'est-ce que la démucilagination dans le processus de raffinage des huiles ?",
        answerOptions: [
            "Élimination des acides gras libres",
            "Élimination des gommes et mucilages",
            "Élimination des phospholipides",
            "Élimination des pigments colorants"
        ],
        correctAnswerIndex: 1,
        feedback: "La démucilagination est l'étape du raffinage où les gommes et mucilages sont éliminés pour améliorer la qualité de l'huile."
    },
    {
        questionText: "Quelle est la proportion moyenne de triglycérides dans les huiles alimentaires ?",
        answerOptions: [
            "50%",
            "120%",
            "90%",
            "99%"
        ],
        correctAnswerIndex: 3,
        feedback: "Les huiles alimentaires sont composées en moyenne de 99% de triglycérides, le reste étant principalement constitué de lécithines et de vitamine E."
    },
    {
        questionText: "Quel type d'acides gras confère de la stabilité et de la solidité aux huiles ?",
        answerOptions: [
            "Acides gras saturés",
            "Acides gras monoinsaturés",
            "Acides gras polyinsaturés",
            "Acides gras rigolos"
        ],
        correctAnswerIndex: 0,
        feedback: "Les acides gras saturés confèrent de la stabilité et de la solidité aux huiles, les rendant souvent solides à température ambiante (environ 15°C)."
    },
    {
        questionText: "Quelle huile est connue pour ses propriétés antimicrobiennes et est riche en acide laurique ?",
        answerOptions: [
            "Huile d'olive",
            "Huile de tournesol",
            "Huile de coco",
            "Huile de colza"
        ],
        correctAnswerIndex: 2,
        feedback: "L'huile de coco est riche en acide laurique, qui a des propriétés antimicrobiennes et un point de fusion relativement bas, ce qui la rend liquide à température ambiante (environ 15°C)."
    },
    {
        questionText: "Quel acide gras est le principal composant de l'huile d'olive et de l'huile de colza ?",
        answerOptions: [
            "Acide palmitique",
            "Acide stéarique",
            "Acide oléique",
            "Acide linoléique"
        ],
        correctAnswerIndex: 2,
        feedback: "L'acide oléique est le principal acide gras de l'huile d'olive et de l'huile de colza, améliorant leur fluidité et étant bénéfique pour la santé cardiovasculaire."
    },
    {
        questionText: "Quelle est la fonction principale des huiles fluides en pâtisserie ?",
        answerOptions: [
            "Fournir de la structure et de la stabilité",
            "Apporter de la souplesse et de la tendreté",
            "Améliorer la friabilité et la texture croquante",
            "Les huiles fluides rendent la pâte invisible"
        ],
        correctAnswerIndex: 1,
        feedback: "Les huiles fluides en pâtisserie apportent de la souplesse et de la tendreté aux produits de boulangerie, contribuant à leur texture et humidité."
    },
    {
        questionText: "Quelle est la caractéristique des huiles concrètes à température ambiante (environ 15°C) ?",
        answerOptions: [
            "Elles sont liquides",
            "Elles sont solides ou pâteuses",
            "Elles se mélangent à l'eau",
            "Elles s'évaporent"
        ],
        correctAnswerIndex: 1,
        feedback: "Les huiles concrètes sont solides ou pâteuses à température ambiante (environ 15°C), ce qui les rend idéales pour les pâtes feuilletées, sablées et les biscuits."
    },
    {
        questionText: "Quel est le rôle des acides gras polyinsaturés dans les huiles alimentaires ?",
        answerOptions: [
            "Augmenter la solidité",
            "Améliorer la fluidité",
            "Essentiels pour l'organisme",
            "Les acides gras polyinsaturés dansent le tango"
        ],
        correctAnswerIndex: 2,
        feedback: "Les acides gras polyinsaturés sont essentiels pour l'organisme, jouant un rôle dans la fonction cellulaire et étant présents dans des huiles comme le soja et le tournesol."
    },
    {
        questionText: "Quelle huile contient une grande proportion d'acides gras saturés à chaînes moyennes, comme l'acide laurique ?",
        answerOptions: [
            "Huile d'olive",
            "Huile de tournesol",
            "Huile de coco",
            "Huile de sésame"
        ],
        correctAnswerIndex: 2,
        feedback: "L'huile de coco contient une grande proportion d'acides gras saturés à chaînes moyennes, comme l'acide laurique, ce qui lui donne un point de fusion plus bas et des propriétés antimicrobiennes."
    },
    {
        questionText: "Quel type d'acide gras est bénéfique pour la santé cardiovasculaire et se trouve dans l'huile d'olive ?",
        answerOptions: [
            "Acide palmitique",
            "Acide oléique",
            "Acide starwarsique",
            "Acide linolénique"
        ],
        correctAnswerIndex: 1,
        feedback: "L'acide oléique, présent dans l'huile d'olive, est bénéfique pour la santé cardiovasculaire en améliorant la fluidité des huiles."
    },
    {
        questionText: "Quel procédé de raffinage des huiles permet d'éliminer les composés volatils responsables des odeurs désagréables ?",
        answerOptions: [
            "Décoloration",
            "Dégommage",
            "Désodorisation",
            "Magie noire"
        ],
        correctAnswerIndex: 2,
        feedback: "La désodorisation est un procédé de raffinage qui élimine les composés volatils responsables des odeurs désagréables par distillation à la vapeur, améliorant ainsi la qualité de l'huile."
    }
];

currentQuestions = huilesQuestions;
const levuresQuestions = [
    {
        questionText: 'Quel est le type de levure le plus couramment utilisé en boulangerie ?',
        answerOptions: [
            'Levure chimique',
            'Levure boulangère (Saccharomyces cerevisiae)',
            'Levure instantanée',
            'Levure sèche active'
        ],
        correctAnswerIndex: 1,
        feedback: 'La levure boulangère, principalement Saccharomyces cerevisiae, est la plus couramment utilisée en boulangerie pour faire lever les pâtes grâce à la fermentation alcoolique.'
    },
    {
        questionText: 'Quel est le type de levure qui doit être conservé au réfrigérateur ?',
        answerOptions: [
            'Levure chimique',
            'Levure instantanée',
            'Levure sèche active',
            'Levure fraîche'
        ],
        correctAnswerIndex: 3,
        feedback: 'La levure fraîche se présente sous forme de blocs humides et doit être conservée au réfrigérateur entre 1°C et 4°C pour maintenir son activité.'
    },
    {
        questionText: 'Quelle est la température optimale pour activer la levure boulangère fraîche ?',
        answerOptions: [
            '50°C',
            '30-35°C',
            '25-30°C',
            '40-45°C'
        ],
        correctAnswerIndex: 2,
        feedback: 'La levure boulangère fraîche doit être activée dans de l\'eau tiède à une température de 25-30°C pour éviter de tuer les cellules tout en activant leur activité fermentaire.'
    },
    {
        questionText: 'Quelle est la composition de la levure boulangère en termes de pourcentage d\'eau ?',
        answerOptions: [
            '50%',
            '60%',
            '70%',
            '80%'
        ],
        correctAnswerIndex: 2,
        feedback: 'La levure boulangère est composée à 70% d\'eau, ce qui est essentiel pour maintenir la viabilité des cellules de levure et leur activité métabolique.'
    },
    {
        questionText: 'Quel est le rôle principal de la levure boulangère dans la pâte à pain ?',
        answerOptions: [
            'Ajouter de la couleur',
            'Produire du dioxyde de carbone (CO2) et de l\'alcool',
            'Réduire les calories',
            'Améliorer la saveur'
        ],
        correctAnswerIndex: 1,
        feedback: 'La levure boulangère fermente les sucres présents dans la pâte, produisant du dioxyde de carbone (CO2) et de l\'alcool, ce qui crée des bulles de gaz qui font lever la pâte.'
    },
    {
        questionText: 'Quel facteur ralentit l\'activité de la levure boulangère ?',
        answerOptions: [
            'Température élevée',
            'Présence de sel',
            'Hydratation excessive',
            'Absence de sucre'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le sel ralentit l\'activité de la levure boulangère grâce à ses propriétés hygroscopiques, qui privent la levure de l\'eau nécessaire à son activité.'
    },
    {
        questionText: 'À quoi sert le processus de fermentation dans la fabrication de la levure boulangère ?',
        answerOptions: [
            'Maximiser la croissance des cellules de levure',
            'Ajouter de la saveur',
            'Réduire la teneur en glucides',
            'Améliorer la couleur'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le processus de fermentation est crucial pour maximiser la croissance des cellules de levure en fournissant un milieu riche en nutriments et en contrôlant les conditions de température, de pH et d\'oxygène.'
    },
    {
        questionText: 'Quelle est la différence principale entre la levure chimique et la levure boulangère ?',
        answerOptions: [
            'La levure chimique est vivante',
            'La levure boulangère nécessite un temps de fermentation',
            'La levure boulangère agit immédiatement',
            'La levure chimique produit de l\'alcool'
        ],
        correctAnswerIndex: 1,
        feedback: 'La levure boulangère nécessite un temps de fermentation pour lever la pâte, tandis que la levure chimique agit immédiatement une fois hydratée et chauffée.'
    },
    {
        questionText: 'Quelle est la composition de la levure chimique ?',
        answerOptions: [
            'Eau, Glucides, Protides',
            'Bicarbonate de sodium, acide, amidon',
            'Lipides, Minéraux, Vitamines',
            'Glucides, Protides, Minéraux'
        ],
        correctAnswerIndex: 1,
        feedback: 'La levure chimique est composée de bicarbonate de sodium, d\'un acide (comme le tartrate monopotassique ou le phosphate acide de calcium) et d\'amidon pour stabiliser le mélange.'
    },
    {
        questionText: 'Pourquoi est-il important de ne pas exposer la levure boulangère à des températures supérieures à 50°C ?',
        answerOptions: [
            'Pour ajouter de la saveur',
            'Pour réduire la teneur en glucides',
            'Pour éviter de tuer les cellules de levure',
            'Pour améliorer la couleur'
        ],
        correctAnswerIndex: 2,
        feedback: 'Exposer la levure boulangère à des températures supérieures à 50°C tue les cellules de levure, arrêtant ainsi le processus de fermentation nécessaire pour faire lever la pâte.'
    },
    {
        questionText: 'Quels sont les principaux types de levure boulangère ?',
        answerOptions: [
            'Levure fraîche, levure sèche active, levure instantanée',
            'Levure chimique, levure sèche active, levure fraîche',
            'Levure déshydratée, levure chimique, levure de bière',
            'Levure de bière, levure chimique, levure instantanée'
        ],
        correctAnswerIndex: 0,
        feedback: 'Les principaux types de levure boulangère sont la levure fraîche, la levure sèche active et la levure instantanée, chacune ayant des caractéristiques et des utilisations spécifiques.'
    },
    {
        questionText: 'Quelle est la méthode correcte pour utiliser la levure sèche active ?',
        answerOptions: [
            'Mélanger directement avec la farine',
            'Réhydrater dans de l\'eau tiède avec un peu de sucre',
            'Ajouter directement au sel',
            'Utiliser sans réhydratation'
        ],
        correctAnswerIndex: 1,
        feedback: 'La levure sèche active doit être réhydratée dans de l\'eau tiède (environ 40°C) avec un peu de sucre pour s\'activer avant d\'être ajoutée à la pâte.'
    },
    {
        questionText: 'Quel est le rôle du bicarbonate de sodium dans la levure chimique ?',
        answerOptions: [
            'Agir comme un agent de conservation',
            'Produire du dioxyde de carbone (CO2) lors de la réaction acide-base',
            'Améliorer la saveur',
            'Stabiliser le mélange'
        ],
        correctAnswerIndex: 1,
        feedback: 'Le bicarbonate de sodium dans la levure chimique réagit avec l\'acide pour produire du dioxyde de carbone (CO2), créant des bulles qui font lever la pâte.'
    },
    {
        questionText: 'Quelle est la différence principale entre la levure chimique avec et sans diphosphate ?',
        answerOptions: [
            'La levure avec diphosphate ne produit pas de CO2',
            'La levure sans diphosphate est plus rapide',
            'La levure avec diphosphate a une double action de levée',
            'La levure sans diphosphate doit être réfrigérée'
        ],
        correctAnswerIndex: 2,
        feedback: 'La levure chimique avec diphosphate a une double action de levée : elle libère du dioxyde de carbone (CO2) une première fois lorsqu\'elle est hydratée et une deuxième fois lorsqu\'elle est chauffée. La levure chimique sans diphosphate, quant à elle, réagit principalement à la chaleur et n\'a pas cette double action.'
    },
    {
        questionText: 'Quel est l\'effet du sucre sur l\'activité de la levure boulangère ?',
        answerOptions: [
            'Accélère l\'activité à faible concentration, la ralentit à haute concentration',
            'La tue complètement',
            'N\'a aucun effet',
            'La remplace'
        ],
        correctAnswerIndex: 0,
        feedback: 'Le sucre accélère l\'activité de la levure boulangère à faible concentration en fournissant une source de nourriture. À des concentrations élevées (au-delà de 50g par kg de farine), il ralentit l\'activité de la levure en raison de ses propriétés hygroscopiques.'
    }
];

currentQuestions = levuresQuestions;

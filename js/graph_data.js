const graphData = {
    // 4SYSLEG
    sysleg1: {
        type: 'doughnut',
        labels: ['Bon', 'Mauvais', 'Aucun Avis Émis'],
        data: [31, 13, 19,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39']
    },
    sysleg2: {
        type: 'bar',
        labels: ['Acaricides', 'Favorise les auxilaires', 'Fongicides','Insecticides','Molluscicides'],
        data: [2, 2, 20,30,5,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B','#618a4f']
    },
    sysleg3: {
        type: 'polarArea',
        labels: ['Macro-organisme', 'Médiateurs-chimiques', 'Micro-organismes','Substances Naturelles'],
        data: [16, 6, 20, 21, ],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // BIORECO
    BioRECO1: {
        type: 'doughnut',
        labels: ['Bon', 'Mauvais', 'Aucun Avis Émis'],
        data: [24, 6, 6,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39',]
    },
    BioRECO2: {
        type: 'bar',
        labels: ['Insecticides','Ticides'],
        data: [35, 1,],
        colors: ['#4CAF50', '#8BC34A']
    },
    BioRECO3: {
        type: 'polarArea',
        labels: ['Macro-organisme', 'Médiateurs chimiques', 'Micro organismes','Substances naturelles'],
        data: [6, 6, 6, 18, ],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // BREIZLEG
    BREIZLEG1: {
        type: 'doughnut',
        labels: ['Bon', 'Aucun Avis Émis'],
        data: [1, 1,],
        colors: ['#4CAF50', '#8BC34A']
    },
    BREIZLEG2: {
        type: 'bar',
        labels: ['Insecticides','Fongicides'],
        data: [1, 1,],
        colors: ['#4CAF50', '#8BC34A']
    },
    BREIZLEG3: {
        type: 'polarArea',
        labels: ['Micro organismes','Substances naturelles'],
        data: [1, 1,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)']
    },

    // CanécoH
    Canécoh1: {
        type: 'doughnut',
        labels: ['Aucun Avis Émis'],
        data: [1,],
        colors: ['#4CAF50']
    },
    Canécoh2: {
        type: 'bar',
        labels: ['Nématicides'],
        data: [1,],
        colors: ['#4CAF50']
    },
    Canécoh3: {
        type: 'polarArea',
        labels: ['Substances naturelles'],
        data: [1,],
        colors: ['rgba(76, 175, 80, 0.5)']
    },

     // Cap red
     Capred1: {
        type: 'doughnut',
        labels: ['Bon', 'Mauvais', 'Aucun Avis émis', 'Mitigé'],
        data: [11, 1, 1, 1,],
        colors: ['#4CAF50', '#8BC34A','#CDDC39','#618a4f']
    },
    
    Capred2: {
        type: 'bar',
        labels: ['Acaricides','Fongicides','Insecticides'],
        data: [1, 5, 8,],
        colors: ['#4CAF50', '#8BC34A','#CDDC39',]
    },

    Capred3: {
        type: 'polarArea',
        labels: ['Médiateurs chimiques','Substances naturelles'],
        data: [5, 9],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)'] 
    },

    // cors'expé
    corsexpé1: {
        type: 'doughnut',
        labels: ['Bon', 'Mauvais', 'Aucun Avis émis'],
        data: [3, 1, 2,],
        colors: ['#4CAF50', '#8BC34A','#CDDC39']
    },
    
    corsexpé2: {
        type: 'bar',
        labels: ['Fongicides','Insecticides'],
        data: [1, 5,],
        colors: ['#4CAF50', '#8BC34A']
    },

    corsexpé3: {
        type: 'polarArea',
        labels: ['Macro-organismes','Médiateurs chimiques','Substances naturelles'],
        data: [4, 1, 1,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)']
    },

    // DEPHY CAROTTE
    DEPHYCAROTTE1: {
        type: 'doughnut',
        labels: ['Bon','Aucun Avis émis'],
        data: [3, 3,],
        colors: ['#4CAF50', '#8BC34A']
    },
    
    DEPHYCAROTTE2: {
        type: 'bar',
        labels: ['Insecticides','Nématicides'],
        data: [2, 4,],
        colors: ['#4CAF50', '#8BC34A']
    },

    DEPHYCAROTTE3: {
        type: 'polarArea',
        labels: ['Macro-organismes','Substances naturelles'],
        data: [3, 3,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // DEPHYexpNPDC
    DEPHYexpNPDC1: {
        type: 'doughnut',
        labels: ['Bon'],
        data: [11,],
        colors: ['#4CAF50']
    },
    
    DEPHYexpNPDC2: {
        type: 'bar',
        labels: ['Fongicides','Herbicides','Insecticides','Molluscicides'],
        data: [1, 3, 3, 4,],
        colors: ['#4CAF50', '#8BC34A','#CDDC39']
    },

    DEPHYexpNPDC3: {
        type: 'polarArea',
        labels: ['Micro-organisme','Macro-organismes','Substances naturelles'],
        data: [3, 1, 7,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)']
    },

    // DEPHYfraise
    DEPHYfraise1: {
        type: 'doughnut',
        labels: ['Bon', 'Mauvais','Mitigé','Aucun Avis Émis'],
        data: [22, 11, 4, 1,],
        colors: ['#4CAF50', '#8BC34A','#CDDC39','#618a4f']    
    },
    
    DEPHYfraise2: {
        type: 'bar',
        labels: ['Acaricide','Fongicides','Insecticides'],
        data: [9, 8, 24,],
        colors: ['#4CAF50', '#8BC34A','#CDDC39']
    },

    DEPHYfraise3: {
        type: 'polarArea',
        labels: ['Micro-organisme','Macro-organismes','Substances naturelles'],
        data: [1, 31, 9,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39'] 
    },

    // DEPHY Serre
    DEPHY_Serre1: {
        type: 'doughnut',
        labels: ['Bon', 'Mauvais', 'Mitigé'],
        data: [29, 5, 9,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39']
    },
    DEPHY_Serre2: {
        type: 'bar',
        labels: ['Acaricides','Fongicides','Insecticides'],
        data: [5, 12, 26,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39']
    },
    DEPHY_Serre3: {
        type: 'polarArea',
        labels: ['Macro-organisme', 'Médiateurs-chimiques', 'Micro-organismes','Substances Naturelles'],
        data: [24, 2, 6, 11, ],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // ECOLEG
    ECOLEG1: {
        type: 'doughnut',
        labels: ['Bon'],
        data: [2,],
        colors: ['#4CAF50']
    },
    ECOLEG2: {
        type: 'bar',
        labels: ['Herbicides','Fongicides'],
        data: [1, 1,],
        colors: ['#4CAF50', '#8BC34A']
    },
    ECOLEG3: {
        type: 'polarArea',
        labels: ['Substances Naturelles'],
        data: [2,],
        colors: ['rgba(76, 175, 80, 0.5)']
    },

    // ECO_pêche
    ECO_pêche1: {
        type: 'doughnut',
        labels: ['Bon','Mitigé'],
        data: [9, 1,],
        colors: ['#4CAF50', '#8BC34A']
    },
    ECO_pêche2: {
        type: 'bar',
        labels: ['Fongicides','Insecticides'],
        data: [2, 8,],
        colors: ['#4CAF50', '#8BC34A']
    },
    ECO_pêche3: {
        type: 'polarArea',
        labels: ['Macro-organisme', 'Médiateurs-chimiques', 'Micro-organismes','Substances Naturelles'],
        data: [4, 2, 4, ],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)']
    },

    // EcoViti Alsace
    EcoViti_Alsace1: {
        type: 'doughnut',
        labels: ['Bon','Mitigé'],
        data: [15, 2,],
        colors: ['#4CAF50', '#8BC34A']
    },
    EcoViti_Alsace2: {
        type: 'bar',
        labels: ['Fongicides','Insecticides'],
        data: [12, 5,],
        colors: ['#4CAF50', '#8BC34A']
    },
    EcoViti_Alsace3: {
        type: 'polarArea',
        labels: ['Médiateurs-chimiques', 'Micro-organismes','Substances Naturelles'],
        data: [1, 1, 15,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)']
    },

    // EcoViti Aquitaine
    EcoViti_Aquitaine1: {
        type: 'doughnut',
        labels: ['Bon'],
        data: [4,],
        colors: ['#4CAF50']
    },
    EcoViti_Aquitaine2: {
        type: 'bar',
        labels: ['Fongicides'],
        data: [4,],
        colors: ['#4CAF50']
    },
    EcoViti_Aquitaine3: {
        type: 'polarArea',
        labels: ['Substances Naturelles'],
        data: [4,],
        colors: ['rgba(76, 175, 80, 0.5)']
    },

    // EcoViti Arc Méditerranéen
    EcoViti_AM1: {
        type: 'doughnut',
        labels: ['Bon'],
        data: [5,],
        colors: ['#4CAF50']
    },
    EcoViti_AM2: {
        type: 'bar',
        labels: ['Fongicides','Insecticides'],
        data: [2, 3,],
        colors: ['#4CAF50', '#8BC34A']
    },
    EcoViti_AM3: {
        type: 'polarArea',
        labels: ['Médiateurs-chimiques', 'Micro-organismes','Substances Naturelles'],
        data: [2, 1, 2,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)']
    },

     // EcoViti Val de Loire-Centre
     EcoViti_VLC1: {
        type: 'doughnut',
        labels: ['Bon', 'Auncun Avis Émis'],
        data: [3, 1,],
        colors: ['#4CAF50', '#8BC34A']
    },
    EcoViti_VLC2: {
        type: 'bar',
        labels: ['Fongicides','Insecticides'],
        data: [2, 2],
        colors: ['#4CAF50', '#8BC34A']
    },
    EcoViti_VLC3: {
        type: 'polarArea',
        labels: ['Macro-organisme', 'Médiateurs-chimiques', 'Micro-organismes','Substances Naturelles'],
        data: [1, 1, 1, 1, ],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // EXPE Ecophyto Lorrain
    EXPE_Ecophyto_L1: {
        type: 'doughnut',
        labels: ['Bon', 'Aucun avis Émis'],
        data: [4, 1,],
        colors: ['#4CAF50', '#8BC34A']
    },
    EXPE_Ecophyto_L2: {
        type: 'bar',
        labels: ['Fongicides','Insecticides', 'Molluscicides'],
        data: [3, 1, 1,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39']
    },
    EXPE_Ecophyto_L3: {
        type: 'polarArea',
        labels: ['Micro-organismes','Substances Naturelles'],
        data: [3, 2,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)']
    },
    
    // EXPE Ecophyto Pomme
    EXPE_Ecophyto_P1: {
        type: 'doughnut',
        labels: ['Mitigé'],
        data: [1,],
        colors: ['#4CAF50']
    },
    EXPE_Ecophyto_P2: {
        type: 'bar',
        labels: ['Insecticides'],
        data: [1,],
        colors: ['#4CAF50']
    },
    EXPE_Ecophyto_P3: {
        type: 'polarArea',
        labels: ['Macro-organismes'],
        data: [1,],
        colors: ['rgba(76, 175, 80, 0.5)']
    },

    // EXPE systèmes GC Berry
    EXPE_GC_Berry1: {
        type: 'doughnut',
        labels: ['Bon'],
        data: [4,],
        colors: ['#4CAF50', '#8BC34A']
    },
    EXPE_GC_Berry2: {
        type: 'bar',
        labels: ['Fongicides','Molluscicides'],
        data: [2, 2,],
        colors: ['#4CAF50', '#8BC34A']
    },
    EXPE_GC_Berry3: {
        type: 'polarArea',
        labels: ['Micro-organismes','Substances Naturelles'],
        data: [2, 2,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)']
    },

    // GEDUBAT
    GEDUBAT1: {
        type: 'doughnut',
        labels: ['Bon', 'Mitigé','Mauvais', 'Aucun avis Émis'],
        data: [13, 9, 1, 4,],
        colors: ['#4CAF50', '#8BC34A','#CDDC39','#FFEB3B']
    },
    GEDUBAT2: {
        type: 'bar',
        labels: ['Fongicides','insecticides','Molluscicides','Nématicides','(Vides)'],
        data: [17, 7, 3, 4, 1,],
        colors: ['#4CAF50', '#8BC34A']
    },
    GEDUBAT3: {
        type: 'polarArea',
        labels: ['Macro-organismes','Médiateurs-chimiques','Micro-organismes','Substances Naturelles'],
        data: [8, 1, 10, 14,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },
    
    // HORTIFLOR
    HORTIFLOR1: {
        type: 'doughnut',
        labels: ['Bon',],
        data: [5,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39','#FFEB3B']
    },
    HORTIFLOR2: {
        type: 'bar',
        labels: ['Fongicides',],
        data: [5,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B','#618a4f']
    },
    HORTIFLOR3: {
        type: 'polarArea',
        labels: ['Substances naturelles'],
        data: [5],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // HORTIPEPI
    HORTIPEPI1: {
        type: 'doughnut',
        labels: ['Bon','Mitigé',],
        data: [17,3,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39','#FFEB3B']
    },
    HORTIPEPI2: {
        type: 'bar',
        labels: ['Insecticides','Fongicides','Acaricides',],
        data: [14, 3,3],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B','#618a4f']
    },
    HORTIPEPI3: {
        type: 'polarArea',
        labels: ['Micro-organismes','Macro-organismes','Substances naturelles'],
        data: [4,15,1],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },
    
    // HORTIPOT
    HORTIPOT1: {
        type: 'doughnut',
        labels: ['Bon','Aucun avis émis','Mitigé','Mauvais'],
        data: [18,1,4,1,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39','#FFEB3B']
    },
    HORTIPOT2: {
        type: 'bar',
        labels: ['Fongicides','Insecticides','Favorise les auxilaires'],
        data: [4, 19,2],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B','#618a4f']
    },
    HORTIPOT3: {
        type: 'polarArea',
        labels: ['Micro-organismes'],
        data: [4,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // INNOViPEST
    INNOViPEST1: {
        type: 'doughnut',
        labels: ['Bon','Mitigé'],
        data: [4,1,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39']
    },
    INNOViPEST2: {
        type: 'bar',
        labels: ['Fongicides','Insecticides',],
        data: [2, 3,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B','#618a4f']
    },
    INNOViPEST3: {
        type: 'polarArea',
        labels: ['Substances Naturelles','Micro-organismes'],
        data: [4,1],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // Otelho
    Otelho1: {
        type: 'doughnut',
        labels: ['Bon','Aucun Avis émis'],
        data: [5, 3,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39']
    },
    Otelho2: {
        type: 'bar',
        labels: ['Fongicides','Insecticides','Acaricides'],
        data: [1, 15,1,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B','#618a4f']
    },
    Otelho3: {
        type: 'polarArea',
        labels: ['Substances Naturelles',],
        data: [1,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // PHYTO-SOL
    PHYTO_SOL1: {
        type: 'doughnut',
        labels: ['Bon','Aucun Avis émis'],
        data: [8, 1,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39']
    },
    PHYTO_SOL2: {
        type: 'bar',
        labels: ['Fongicides','Insecticides','Nématicides'],
        data: [1, 7,1,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B','#618a4f']
    },
    PHYTO_SOL3: {
        type: 'polarArea',
        labels: ['Substances Naturelles',],
        data: [9, ],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // Rés0Pest 
    Rés0Pest1: {
        type: 'doughnut',
        labels: ['Bon', 'Aucun Avis émis', 'Mitigé'],
        data: [6,2,1],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39']
    },
    Rés0Pest2: {
        type: 'bar',
        labels: [ 'Fongicides','Insecticides',],
        data: [2,7],
        colors: ['#4CAF50', '#8BC34A', ]
    },
    Rés0Pest3: {
        type: 'polarArea',
        labels: ['Macro-organisme', 'Micro-organismes','Substances Naturelles'],
        data: [4, 4, 1,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // RESCAM
    RESCAM1: {
        type: 'doughnut',
        labels: ['Bon', 'Aucun Avis émis'],
        data: [10, 5,],
        colors: ['#4CAF50', '#8BC34A',]
    },
    RESCAM2: {
        type: 'bar',
        labels: ['Favorise les auxilaires', 'Fongicides','Insecticides','Bactéricides'],
        data: [3,1,9,2,],
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B',]
    },
    RESCAM3: {
        type: 'polarArea',
        labels: ['Médiateurs-chimiques', 'Micro-organismes','Substances Naturelles'],
        data: [3, 3, 9,],
        colors: ['rgba(76, 175, 80, 0.5)','rgba(139, 195, 74, 0.5)','rgba(205, 220, 57, 0.5)', 'rgba(255, 235, 59, 0.5)']
    },

    // Reseau PI 
    Reseau_PI1 : {
        type: 'doughnut',
        labels: ['Bon',],
        data: [1,],
        colors: ['#4CAF50', ]
    },
    Reseau_PI2: {
        type: 'bar',
        labels: ['Insecticides',],
        data: [1,],
        colors: ['#4CAF50',]
    },
    Reseau_PI3: {
        type: 'polarArea',
        labels: ['Macro-organisme', ],
        data: [1, ],
        colors: ['rgba(76, 175, 80, 0.5)',]
    },

    // SGC Bretagne
    SGC_Bretagne1: {
        type: 'doughnut',
        labels: ['Bon',],
        data: [1,],
        colors: ['#4CAF50',]
    },

    SGC_Bretagne2: {
        type: 'bar',
        labels: ['Fongicides',],
        data: [1,],
        colors: ['#4CAF50', '#8BC34A']
    },

    SGC_Bretagne3: {
        type: 'polarArea',
        labels: ['Micro-organismes',],
        data: [1,],
        colors: ['rgba(76, 175, 80, 0.5)',] 
    },

    // System-Eco-Puissance4
    System_Eco_Puissance41: {
        type: 'doughnut',
        labels: ['Bon','Mitigé'],
        data: [3, 1,],
        colors: ['#4CAF50', '#8BC34A']
    },

    System_Eco_Puissance42: {
        type: 'bar',
        labels: ['Insecticides','Mollucicides'],
        data: [3, 1,],
        colors: ['#4CAF50', '#8BC34A']
    },

    System_Eco_Puissance43: {
        type: 'polarArea',
        labels: ['Macro-organismes','Substances naturelles'],
        data: [2, 2,],
        colors: ['rgba(76, 175, 80, 0.5)', 'rgba(139, 195, 74, 0.5)'] 
    },
};


let modalChart;

function createChart(ctx, type, labels, data, colors) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: type !== 'bar'  
            }
        }
    };

    return new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors
            }]
        },
        options: options
    });
}

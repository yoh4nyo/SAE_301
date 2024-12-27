// Générer les graphiques dans les cards
document.querySelectorAll('.card').forEach(card => {
    const graphId = card.dataset.graph;
    const canvas = card.querySelector('canvas');
    const { type, labels, data, colors } = graphData[graphId];
    createChart(canvas.getContext('2d'), type, labels, data, colors);
});

// Gestion des filtres
document.querySelectorAll('.sidebar ul li').forEach(filter => {
    filter.addEventListener('click', () => {
        const filterType = filter.dataset.filter;
        document.querySelectorAll('.card').forEach(card => {
            if (filterType === 'all' || card.classList.contains(filterType)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Gestion du modal
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalGraph = document.getElementById('modalGraph').getContext('2d');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const graphId = card.dataset.graph;
        const { type, labels, data, colors } = graphData[graphId];

        if (modalChart) {
            modalChart.destroy();
        }

        modalChart = createChart(modalGraph, type, labels, data, colors);

        // Afficher le modal
        modal.classList.add('show');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
});



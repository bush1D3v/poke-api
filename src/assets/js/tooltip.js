window.onload = () => { tooltip() }

const tooltip = () => {
    tippy(document.querySelectorAll('.tooltip'), {
        content: 'Clique para exibir os detalhes!',
        animation: 'shift-away-extreme',
    });
}

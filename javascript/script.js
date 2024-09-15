document.addEventListener('DOMContentLoaded', function() {
    const resultadoPartida = document.getElementById('resultadoPartida');
    const resultado = document.querySelector('.resultado');
    
    // Exemplo de resultado da última partida (pode ser modificado dinamicamente)
    const ultimaPartida = {
        status: 'vitoria',  // Pode ser 'vitoria' ou 'derrota'
        placar: 'Chaves 3 - 0 Chelsea'
    };

    // Aplica classes e texto baseado no resultado
    if (ultimaPartida.status === 'vitoria') {
        resultado.textContent = 'Vitória!';
        resultado.classList.add('vitoria');
        resultadoPartida.classList.add('vitoria');
    } else {
        resultado.textContent = 'Derrota';
        resultado.classList.add('derrota');
    }

    // Atualiza o placar
    document.querySelector('.placar').textContent = ultimaPartida.placar;
});

document.addEventListener('DOMContentLoaded', function() {
    const meses = document.querySelectorAll('.mes');
    const prevButton = document.getElementById('prevMonth');
    const nextButton = document.getElementById('nextMonth');

    let currentMonth = 0;

    function mostrarMes(index) {
        meses.forEach((mes, i) => {
            mes.style.display = i === index ? 'block' : 'none';
        });
    }

    function atualizarNavegacao() {
        // Desativa os botões nas extremidades
        prevButton.style.display = currentMonth === 0 ? 'none' : 'block';
        nextButton.style.display = currentMonth === meses.length - 1 ? 'none' : 'block';
    }

    prevButton.addEventListener('click', () => {
        if (currentMonth > 0) {
            currentMonth--;
            mostrarMes(currentMonth);
            atualizarNavegacao();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentMonth < meses.length - 1) {
            currentMonth++;
            mostrarMes(currentMonth);
            atualizarNavegacao();
        }
    });

    // Inicializa a primeira visualização
    mostrarMes(currentMonth);
    atualizarNavegacao();
});



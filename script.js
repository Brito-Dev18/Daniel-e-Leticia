// Data de início do relacionamento
const startDate = new Date('2022-12-18T00:00:00'); // Data ajustada para o início do relacionamento

function showTimePage() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('timePage').style.display = 'flex';
    updateTime();
    setInterval(updateTime, 1000);
}

function showMainPage() {
    document.getElementById('mainPage').style.display = 'flex';
    document.getElementById('timePage').style.display = 'none';
}

function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('years').innerText = `${years} anos`;
    document.getElementById('months').innerText = `${months} meses`;
    document.getElementById('days').innerText = `${days} dias`;
    document.getElementById('hours').innerText = `${hours} horas`;
    document.getElementById('minutes').innerText = `${minutes} minutos`;
    document.getElementById('seconds').innerText = `${seconds} segundos`;
}

// Adiciona a chamada inicial para updateTime quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    showTimePage();
});

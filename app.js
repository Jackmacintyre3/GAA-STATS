<<<<<<< HEAD
document.getElementById('statsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const player = document.getElementById('player').value;
    const score = document.getElementById('score').value;
    const statsList = document.getElementById('statsList');

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Player: ${player}, Score: ${score}`));
    statsList.appendChild(li);

    document.getElementById('player').value = '';
    document.getElementById('score').value = '';

    saveStats(player, score);
});

function saveStats(player, score) {
    const stats = JSON.parse(localStorage.getItem('stats')) || [];
    stats.push({ player, score });
    localStorage.setItem('stats', JSON.stringify(stats));
}

function loadStats() {
    const stats = JSON.parse(localStorage.getItem('stats')) || [];
    const statsList = document.getElementById('statsList');
    stats.forEach(stat => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Player: ${stat.player}, Score: ${stat.score}`));
        statsList.appendChild(li);
    });
}

window.onload = loadStats;
=======
document.getElementById('statsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const player = document.getElementById('player').value;
    const score = document.getElementById('score').value;
    const statsList = document.getElementById('statsList');

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Player: ${player}, Score: ${score}`));
    statsList.appendChild(li);

    document.getElementById('player').value = '';
    document.getElementById('score').value = '';

    saveStats(player, score);
});

function saveStats(player, score) {
    const stats = JSON.parse(localStorage.getItem('stats')) || [];
    stats.push({ player, score });
    localStorage.setItem('stats', JSON.stringify(stats));
}

function loadStats() {
    const stats = JSON.parse(localStorage.getItem('stats')) || [];
    const statsList = document.getElementById('statsList');
    stats.forEach(stat => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Player: ${stat.player}, Score: ${stat.score}`));
        statsList.appendChild(li);
    });
}

window.onload = loadStats;
>>>>>>> 70fdc697b3df63649ffb22e2af893805ac8ecb0a

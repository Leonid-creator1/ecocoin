document.addEventListener('DOMContentLoaded', () => {
    // Фейковый график токена
    const chart = document.getElementById('ecoChart');
    const data = [30, 60, 120, 90, 10];
    
    data.forEach(value => {
        const bar = document.createElement('div');
        bar.style.height = `${value}px`;
        bar.style.width = '40px';
        bar.style.backgroundColor = '#2ecc71';
        chart.appendChild(bar);
    });

    // Кнопка "Когда мамонты на луне?"
    document.getElementById('moonBtn').addEventListener('click', () => {
        alert('Мамонты уже там! (но это не точно) 🦣🚀');
    });

    // ICO-таймер (24 часа)
    let timeLeft = 86400;
    const timer = setInterval(() => {
        timeLeft--;
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        document.getElementById('countdown').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('icoTimer').innerHTML = '<p>ICO завершено! (но можно ещё дать денег)</p>';
        }
    }, 1000);

    // Фейковый чат
    const chatMessages = [
        "Где белая бумага?",
        "Когда листинг на бирже?",
        "Мамонты — это новый биткоин!",
        "Я вложил 100к, жду луню!",
        "Это скам?",
        "Нет, это революция!"
    ];

    const chatBox = document.getElementById('chatBox');

    setInterval(() => {
        const randomMessage = chatMessages[Math.floor(Math.random() * chatMessages.length)];
        const newMessage = document.createElement('div');
        newMessage.textContent = `Аноним: ${randomMessage}`;
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 3000);
});
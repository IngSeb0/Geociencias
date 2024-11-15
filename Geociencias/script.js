function calcularEficiencia() {
    const profundidad = document.getElementById('profundidad').value;
    const temperatura = document.getElementById('temperatura').value;
    const resultado = `Con una profundidad de ${profundidad} m y una temperatura de ${temperatura} °C, se estima un ahorro energético del ${(profundidad / temperatura).toFixed(2)}%.`;
    document.getElementById('resultado-simulador').innerText = resultado;
}

function calcularAhorro() {
    const consumoActual = document.getElementById('consumo-actual').value;
    if (consumoActual) {
        const ahorro = consumoActual * 0.3; // Suponiendo un 30% de ahorro
        document.getElementById('resultado-calculadora').innerText = `Podrías ahorrar aproximadamente ${ahorro.toFixed(2)} kWh al año con un sistema geotermal.`;
    } else {
        alert('Por favor, ingresa tu consumo actual.');
    }
}

function randomRGB () {
    const r = Math(Math.random() * 256)
    const g = Math(Math.random() * 256)
    const b = Math(Math.random() * 256)
    return `rgb(${r}, ${b}, ${b})` 
}

const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function(){
    for (let letter of letters)
    {
        letter.computedStyleMap.color = randomRGB();
    }
}, 1000);
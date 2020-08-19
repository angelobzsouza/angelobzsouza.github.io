const contagem = document.getElementById("contagem")
const qavtb = document.getElementById("quando-a-vontade-bater")
const redeGlobo = document.getElementById("rede-globo")
const newYearDate = new Date('2020-08-18 21:28:00')
const button = document.getElementById("start")
let stopRedeGlobo = false;

window.addEventListener('load', () => {
    const qavtbPlayling = false;
    contagemPlayling = false
    startCountdown()
    playLoopRedeGlobo();
    startMusiceXSecondsBefore(contagem, 13, contagemPlayling);
    startMusiceXSecondsBefore(qavtb, 45, qavtbPlayling);
})

const startCountdown = () => {
    const h1 = document.getElementById("countdown")
    setInterval(() => {
        let time = calculateTimeDifference(newYearDate, new Date())
        h1.innerHTML = time.toFixed(2) + " s"
    }, 100);
}

const startMusiceXSecondsBefore = (music, seconds, playing) => {
    setInterval(() => {
        if (calculateTimeDifference(newYearDate, new Date()) < seconds && !playing) {
            playing = true;
            stopRedeGlobo = true;
            redeGlobo.pause();
            music.play();
        }
    }, 1)
}

const playLoopRedeGlobo = () => {
    setInterval(() => {
        if (!isPlaying(redeGlobo) && !stopRedeGlobo) redeGlobo.play()
    }, 1)
}

const calculateTimeDifference = (endDate, startDate) => {
    return (endDate.getTime() - startDate.getTime()) / 1000;
}

const isPlaying = (audio) => {
    return (audio.duration > 0 && !audio.paused) ? true : false; 
}
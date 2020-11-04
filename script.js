const contagem = document.getElementById("contagem")
const qavtb = document.getElementById("quando-a-vontade-bater")
const redeGlobo = document.getElementById("rede-globo")
const newYearDate = new Date('2021-01-01 00:00:00')
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

const zeroPad = (num, places) => String(num).padStart(places, '0')

const startCountdown = () => {
    const h1 = document.getElementById("countdown")
    setInterval(() => {
        let [days, hours, minutes, seconds] = calculateTimeDifferenceFormatted(newYearDate, new Date())
        h1.innerHTML = `Faltam ${days} dias e ${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)} horas`
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
    return (endDate.getTime() - startDate.getTime()) / 1000
}

const calculateTimeDifferenceFormatted = (endDate, startDate) => {
    const difference = endDate.getTime() - startDate.getTime()
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return [days, hours, minutes, seconds]
}

const isPlaying = (audio) => {
    return (audio.duration > 0 && !audio.paused) ? true : false; 
}
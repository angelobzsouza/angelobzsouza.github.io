const newYearDate = new Date('2021-02-04 16:25:00')
let stopLoopMusic = false;

window.addEventListener('load', () => {
    const loopMusic = document.getElementById("rede-globo")
    const video = document.getElementById("video")
    const contagem = document.getElementById("contagem")

    startCountdown()
    playLoopRedeGlobo(loopMusic);
    startVideoXSecondsBefore(video, 311, playing = false, contagem, loopMusic);
})

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

const zeroPad = (num, places) => String(num).padStart(places, '0')

const startCountdown = () => {
    const h1 = document.getElementById("countdown")
    setInterval(() => {
        let [days, hours, minutes, seconds] = calculateTimeDifferenceFormatted(newYearDate, new Date())
        h1.innerHTML = `Faltam ${days} dias e ${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)} horas`
    }, 100);
}

const isPlaying = (audio) => {
    return (audio.duration > 0 && !audio.paused) ? true : false; 
}

const playLoopRedeGlobo = (music) => {
    setInterval(() => {
        if (!isPlaying(music) && !stopLoopMusic) music.play()
    }, 1)
}

const startVideoXSecondsBefore = (video, seconds, playing, contagem, loopMusic) => {
    setInterval(() => {
        if (calculateTimeDifference(newYearDate, new Date()) < seconds && !playing) {
            video.style.display = "block";
            contagem.style.display = "none";
            playing = true;
            stopLoopMusic = true;
            loopMusic.pause();
            video.play();
        }
    }, 1)
}
window.onload = () => {
    main()
}

const contagem = document.getElementById("contagem")
const qavtb = document.getElementById("quando-a-vontade-bater")
const redeGlobo = document.getElementById("rede-globo")
const newYearDate = new Date('2020-08-18 20:40:00')
let stopRedeGlobo = false;

const main = () => {
    const qavtbPlayling = false;
    contagemPlayling = false
    playLoopRedeGlobo();
    startMusiceXSecondsBefore(contagem, 13, contagemPlayling);
    startMusiceXSecondsBefore(qavtb, 45, qavtbPlayling);
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
    console.log(audio.duration, audio.paused)
    return (audio.duration > 0 && !audio.paused) ? true : false; 
}
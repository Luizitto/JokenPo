const letsgo = document.querySelector('.letsgo')
const scoreUser = document.querySelector('#scoreUser')
const scoreMachine = document.querySelector('#scoreMachine')
const backgroundAudio = document.querySelector('#background-audio')
const audioToggle = document.querySelector('#audioToggle')

let userScore = 0
let machineScore = 0

const setAudioButtonText = () => {
    if (!audioToggle) return
    audioToggle.textContent = backgroundAudio && !backgroundAudio.paused ? 'Pausar som' : 'Ouvir trilha sonora'
}

if (audioToggle && backgroundAudio) {
    audioToggle.addEventListener('click', () => {
        if (backgroundAudio.paused) {
            backgroundAudio.play().then(setAudioButtonText).catch(() => {})
        } else {
            backgroundAudio.pause()
            setAudioButtonText()
        }
    })
}

const tryAutoPlayAudio = () => {
    if (backgroundAudio && backgroundAudio.paused) {
        backgroundAudio.play().then(setAudioButtonText).catch(() => {})
    }
}

const playhuman = (humanChoice) => {

    tryAutoPlayAudio()
    playgame(humanChoice, playmachine())

}

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}




const playmachine = () => {

    const machineChoice = ['rock', 'paper', 'scissors']
    const Number = Math.floor(Math.random() * 3)

    return machineChoice[Number]

}


const playgame = (human, machine) => {

    if (human === machine) {
        letsgo.innerHTML = 'Empatou !! 😒'
    } else if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS || human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER || human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) {
        letsgo.innerHTML = 'Voce Ganhou !! 😁'

        userScore++
        scoreUser.innerHTML = userScore


    } else {
        letsgo.innerHTML = 'Voce Perdeu !! ☹️'
        machineScore++
        scoreMachine.innerHTML = machineScore
    }

    console.log(' User: ' + human + ' Pc: ' + machine)
}



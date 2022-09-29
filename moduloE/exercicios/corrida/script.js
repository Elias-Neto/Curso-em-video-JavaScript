function startTrackRunning() {
  let penguinTrackRunning = document.getElementById('penguinTrackRunning')
  let snakeTrackRunning = document.getElementById('snakeTrackRunning')
  let elephantTrackRunning = document.getElementById('elephantTrackRunning')

  penguinTrackRunning.innerHTML = ''
  snakeTrackRunning.innerHTML = ''
  elephantTrackRunning.innerHTML = ''

  let randonNumber1
  let randonNumber2
  let randonNumber3

  function randonNumberGenerate() {
    randonNumber1 = Math.floor(Math.random() * 10 + 1)
    randonNumber2 = Math.floor(Math.random() * 10 + 1)
    randonNumber3 = Math.floor(Math.random() * 10 + 1)
  }

  randonNumberGenerate()

  while (
    randonNumber1 == randonNumber2 ||
    randonNumber1 == randonNumber3 ||
    randonNumber2 == randonNumber3
  ) {
    randonNumberGenerate()
  }

  let i1 = 0
  let i2 = 0
  let i3 = 0

  let intervalVelocities = [800, 850, 750, 600, 650, 500, 550, 450, 400]
  let randomIndex1 = Math.floor(Math.random() * intervalVelocities.length)
  let randomIndex2 = Math.floor(Math.random() * intervalVelocities.length)
  let randomIndex3 = Math.floor(Math.random() * intervalVelocities.length)

  let penguinInterval = setInterval(function () {
    if (i1 >= randonNumber1) {
      clearInterval(penguinInterval)
      end()
    } else {
      i1++
      penguinTrackRunning.innerHTML += `🐧💨`
    }
  }, intervalVelocities[randomIndex1])

  let snakeInterval = setInterval(function () {
    if (i2 >= randonNumber2) {
      clearInterval(snakeInterval)
      end()
    } else {
      i2++
      snakeTrackRunning.innerHTML += `🐍💨`
    }
  }, intervalVelocities[randomIndex2])

  let elephantInterval = setInterval(function () {
    if (i3 >= randonNumber3) {
      clearInterval(elephantInterval)
      end()
    } else {
      i3++
      elephantTrackRunning.innerHTML += `🐘💨`
    }
  }, intervalVelocities[randomIndex3])

  let winner

  if (randonNumber1 > randonNumber2 && randonNumber1 > randonNumber3) {
    winner = 'penguin'
  } else if (randonNumber2 > randonNumber1 && randonNumber2 > randonNumber3) {
    winner = 'snake'
  } else if (randonNumber3 > randonNumber1 && randonNumber3 > randonNumber1) {
    winner = 'elephant'
  }

  let select = document.getElementById('guess')
  let optionSelected = select.options[select.selectedIndex].value

  let guessResult = document.getElementById('guessResult')
  guessResult.style.display = 'none'

  let j = 0
  function end() {
    j++
    if (j == 3) {
      if (winner == optionSelected) {
        guessResult.style.display = 'inherit'
        guessResult.style.background = 'gold'
        guessResult.style.color = 'black'
        guessResult.innerHTML = `<p>Parabéns! Você <strong>ACERTOU</strong> o palpite! 😎</p>`
      } else {
        guessResult.style.display = 'inherit'
        guessResult.style.background = 'crimson'
        guessResult.style.color = 'white'
        guessResult.innerHTML = `<p>Que pena! Você <strong>ERROU</strong> o palpite! 🤡</p>`
      }
    }
  }
}

let outputDiv = document.getElementById('outputDiv')
let number = document.getElementById('addedNumber')
let selectNumberList = document.getElementById('numberList')
let numberList = []

function between1and100(n) {
  if (n >= 1 && n <= 100) {
    return true
  } else {
    return false
  }
}

function inNumberList(n) {
  if (numberList.indexOf(Number(n)) != -1) {
    return true
    console.log('oi')
  } else {
    return false
  }
}

function addNumber() {
  if (between1and100(number.value) && !inNumberList(number.value)) {
    numberList.push(Number(number.value))

    let option = document.createElement('option')
    option.text = `Número ${number.value} adicionado`

    selectNumberList.appendChild(option)

    outputDiv.innerHTML = ''
  } else {
    alert('[ERRO] Número inválido ou já está na lista!')
  }

  number.value = ''
  number.focus()
}

function verifyNumbers() {
  if (numberList.length == 0) {
    alert('[ERRO] Adicione números antes de finalizar!')
  } else {

    let bigger = numberList[0]
    let smaller = numberList[0]
    let sum = 0

    for (let i in numberList) {
      sum += numberList[i]
      
      if (numberList[i] > bigger) {
        bigger = numberList[i]
      } else {
        smaller = numberList[i]
      }
    }
    
    let average = sum/numberList.length

    outputDiv.innerHTML = ''
    outputDiv.innerHTML += `<p>Ao todo foram adicionados ${numberList.length} números</p>`
    outputDiv.innerHTML += `<p>O maior número adicionado foi ${bigger}</p>`
    outputDiv.innerHTML += `<p>O menor número adicionado foi ${smaller}</p>`
    outputDiv.innerHTML += `<p>A soma de todos os números adicionados é igual a ${sum}</p>`
    outputDiv.innerHTML += `<p>A média de todos os números adicionados é igual a ${average.toFixed(2)}`
  }
}
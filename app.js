const note1 = document.getElementById('note1')
const note2 = document.getElementById('note2')
const note3 = document.getElementById('note3')

const finalNote = document.getElementById('necessary-approx')
const recuperation = document.getElementById('recuperation')
const necessary = document.getElementById('necessary')
const honors = document.getElementById('honors')

const btnCalculate = document.getElementById('calculate')

btnCalculate.addEventListener('click', calculate)

note2.addEventListener('keydown', necessaryNote)



function calculate() {

    let firstNote = (note1.value)*0.3 
    let secondNote = (note2.value)*0.3 
    let thirdNote = (note3.value)*0.4

    let final = (firstNote+secondNote+thirdNote)

    finalNote.textContent = final
}


function necessaryNote(){

    let firstNote = (note1.value)*0.3
    let secondNote = (note2.value)*0.3 

    let pass = 0
    let honor = 0

    let recovery = (2.1 - (firstNote+secondNote))

    recuperation.textContent = "necesita " + recovery/0.4 + " para recuperar"
}
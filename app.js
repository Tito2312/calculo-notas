const note1 = document.getElementById('note1')
const note2 = document.getElementById('note2')
const note3 = document.getElementById('note3')

const finalNote = document.getElementById('necessary-approx')
const recuperation = document.getElementById('recuperation')
const necessary = document.getElementById('necessary')
const honors = document.getElementById('honors')

const btnCalculate = document.getElementById('calculate')

btnCalculate.addEventListener('click', calculate)

note2.addEventListener('keyup', necessaryNote)



function calculate() {

    let firstNote = (note1.value)*0.3 
    let secondNote = (note2.value)*0.3 
    let thirdNote = (note3.value)*0.4

    if (note1.value) {
        
    }

    let final = (firstNote+secondNote+thirdNote)

    finalNote.textContent = final.toFixed(2)
    }


function necessaryNote(){

    let firstNote = (note1.value)*0.3
    let secondNote = (note2.value)*0.3 

    
    let recovery = (2.1 - (firstNote+secondNote))
    let pass = (3.5 - (firstNote+secondNote))
    let honor = (4.6 - (firstNote+secondNote))

    recuperation.textContent = "necesita " + (recovery/0.4).toFixed(2) + " para recuperar"
    necessary.textContent = "necesita "+ (pass/0.4).toFixed(2) + " para pasar"
    honors.textContent = "necesita "+ (honor/0.4).toFixed(2) + " para pasar con honores"
}
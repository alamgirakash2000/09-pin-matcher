'use strict'

// To generate and show the pin
function generatePin(){
    var pin=1000+ Math.floor(Math.random()*9000)
    displayGenerated.value= pin
    submitBtn.removeAttribute('disabled')
    leftTries=3
    displayGuessed.value=''
    document.getElementById("left-tries").className='action-left d-block'
    document.getElementById("notMatchedMessage").className='notify d-none'
    document.getElementById("matchedMessage").className ='notify d-none'
    document.getElementById("left-tries").innerText=`${leftTries} try left`
}

// Show and set the guessed pin
function getSetPin(e){
    if((e.target.classList.contains('button')) && !(e.target.classList.contains('extra'))){
        displayGuessed.value+=e.target.innerText
    }
}

// Function for the clicking of the submit button
function submitFunction(){
    if(displayGenerated.value===""){
        alert('Generate a pin first')
    }else if(displayGuessed.value === displayGenerated.value){
        document.getElementById("left-tries").className='action-left d-none'
        document.getElementById("notMatchedMessage").className='notify d-none'
        document.getElementById("matchedMessage").className ='notify d-block'
    }else{
        document.getElementById("left-tries").className='action-left d-block'
        document.getElementById("notMatchedMessage").className='notify d-block'
        document.getElementById("matchedMessage").className ='notify d-none'

        leftTries-=1
        if(leftTries===0){
            submitBtn.setAttribute('disabled', true)
        }
        document.getElementById("left-tries").innerText=`${leftTries} try left`
    }
}
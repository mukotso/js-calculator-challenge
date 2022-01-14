let results = document.getElementById('results');
results.value = "0";

const buttons = document.getElementById('buttons');



buttons.addEventListener('click', event => {
    //get the clicked button class objects
    var clickedButtonClass = event.target.classList;
    //case 1 number clicked is an operator
    //check if class operators is contained in the object
    if (clickedButtonClass.contains('operators')) {
        // call substr and pass position of string
        var lastItem = results.value.substr(results.value.length - 1);
        //disable clicking an operator onload
        if (results.value == "0") {
            return
        } 
        //check if the last clicked item was an operator and you are clicking an operator again
        else if (lastItem === "*" || lastItem === "-" || lastItem === "+" || lastItem === "/") {
            //remove the existing operator and try to replace
            results.value = results.value.slice(0, -1);
            //call the operatorButton Clicked to add the new operator as normal
            operatorButtonClicked(event);
        } else {
            operatorButtonClicked(event);
            return
        }

    }
    // case 2  option clicked is a number
    //check if class numbers is contained in the object
    else if (clickedButtonClass.contains('numbers')) {
        //strings position
        var lastItem = results.value.substr(results.value.length - 1);
        //avoid duplicate decimal points
        if(clickedButtonClass.contains('point') && lastItem === "."){
            return
        }else{
            numberButtonClicked(event);
            return
        }
    }
    //if both statement are false
    else {
        return
    }
});


function numberButtonClicked(event) {
    var buttonValue = event.target.innerText;
    //if results contain 0 reset 
    if (results.value == "0") {
        results.value = "";
    }
    results.value += buttonValue;

}

function operatorButtonClicked(event) {
    let buttonValue = event.target.innerText;
    var lastItem = results.value.substr(results.value.length - 1);
    if (lastItem === "*" || lastItem === "-" || lastItem === "+" || lastItem === "/") {
        return
    }
    //if clear is clicked
    //clear
    if (buttonValue == 'CLEAR') {
        results.value = "0";
    } else if (buttonValue == '=') {
        results.value = eval(results.value);
    } else if (buttonValue == 'DEL') {
        //slice where to start and end
        //last element is not included
        results.value = results.value.slice(0,-1);
        //check if all items removed reset to zero
        if (!results.value) results.value = "0";
    } else {
        results.value += buttonValue;
    }



}
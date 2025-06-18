let n1, n2, n3, n4, n5;

while (!n1) {
    n1 = prompt('What is the first student name?');
}
while (!n2) {
    n2 = prompt('What is the second student name?');
}
while (!n3) {
    n3 = prompt('What is the third student name?');
}
while (!n4) {
    n4 = prompt('What is the fourth student name?');
}
while (!n5) {
    n5 = prompt('What is the fifth student name?');
}

function validateInput(value) {
    if (value < 0 || value > 100) {
        alert("Marks should be between 0 and 100.");
        return false;
    }
    return true;
}

function checkEmptyFields() {

    for (let i = 1; i <= 5; i++) {
        let a = document.getElementById(`a${i}`).value;
        let b = document.getElementById(`b${i}`).value;
        let c = document.getElementById(`c${i}`).value;
        let d = document.getElementById(`d${i}`).value;

        if (a === "" || b === "" || c === "" || d === "") {
            alert("Please fill all input fields before submitting.");
            return false;
        }
    }
    return true;
}

function getCGPA(average) {
    if (average >= 80) {
        return 4.00;
    } else if (average >= 75) {
        return 3.75;
    } else if (average >= 70) {
        return 3.50;
    } else if (average >= 65) {
        return 3.25;
    } else if (average >= 60) {
        return 3.00;
    } else if (average >= 55) {
        return 2.75;
    } else if (average >= 50) {
        return 2.50;
    } else if (average >= 45) {
        return 2.00;
    } else if (average >= 40) {
        return 1.75;
    } else {
        return 0.00;
    }
}

function changeInputColor(inputElement, value) {
    if (value >= 90) {
        inputElement.style.color = "#00ff00";
        inputElement.style.border = "2px solid rgb(0, 255, 0)";
    } else if (value < 40) {
        inputElement.style.color = "red"; 
        inputElement.style.border = "2px solid red";
    } else {
        inputElement.style.color = "";
    }
}

function Process() {
   
    if (!checkEmptyFields()) {
        return;
    }

    for (let i = 1; i <= 5; i++) {
        let a = parseFloat(document.getElementById(`a${i}`).value) || 0;
        let b = parseFloat(document.getElementById(`b${i}`).value) || 0;
        let c = parseFloat(document.getElementById(`c${i}`).value) || 0;
        let d = parseFloat(document.getElementById(`d${i}`).value) || 0;

        
        if (!validateInput(a) || !validateInput(b) || !validateInput(c) || !validateInput(d)) {
            return;
        }

        changeInputColor(document.getElementById(`a${i}`), a);
        changeInputColor(document.getElementById(`b${i}`), b);
        changeInputColor(document.getElementById(`c${i}`), c);
        changeInputColor(document.getElementById(`d${i}`), d);

        let total = a + b + c + d;
        let average = total / 4;
        let cgpa = getCGPA(average);  

        document.getElementById(`x${i}`).value = total;
        document.getElementById(`y${i}`).value = average.toFixed(2);
        document.getElementById(`z${i}`).value = cgpa.toFixed(2);  

        document.getElementById(`x${i}`).readOnly = true;
        document.getElementById(`y${i}`).readOnly = true;
        document.getElementById(`z${i}`).readOnly = true;
    }


    let hiddenCols = document.querySelectorAll(".hidden-column");
    hiddenCols.forEach(col => { col.style.display = "table-cell"; });
}

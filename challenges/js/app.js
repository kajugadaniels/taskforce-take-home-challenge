// Function to open a specific tab
function openChallenge(evt, challengeName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(challengeName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default open tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});

// Solution 1: Array Manipulation
function subarraySum(arr, target) {
    let currentSum = 0;
    let prefixSums = new Map();
    prefixSums.set(0, 1);

    for (let num of arr) {
        currentSum += num;
        if (prefixSums.has(currentSum - target)) {
            return true;
        }
        if (prefixSums.has(currentSum)) {
            prefixSums.set(currentSum, prefixSums.get(currentSum) + 1);
        } else {
            prefixSums.set(currentSum, 1);
        }
    }
    return false;
}

// Function to get user input for Array Manipulation and display the result
function checkSubarraySum() {
    const arrayInput = document.getElementById("arrayInput").value;
    const targetInput = document.getElementById("targetInput").value;
    const arr = arrayInput.split(',').map(Number);
    const target = Number(targetInput);
    const result = subarraySum(arr, target);
    document.getElementById("arrayResult").innerText = "Result: " + result;
}

// Solution 2: String Transformation (Always reverse the string)
function transformString(str) {
    return str.split('').reverse().join('');
}

// Function to get user input for String Transformation and display the result
function transformUserString() {
    const userInput = document.getElementById("stringInput").value;
    const result = transformString(userInput);
    document.getElementById("stringResult").innerText = "Transformed String: " + result;
}

let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = ""; // empty string di h jisme hum apna result store karenge , jise input me dikange

let arr = Array.from(buttons); // array , all buttons de dega 
arr.forEach(button => {     // forEach loop arr be chalegi , buttons per nhi chalti
    button.addEventListener("click", (e) => {          // jab bhi koi button per click karega toh kya hoga , jab bhi click karenge toh ( e ) pass hota rahega , jab click kare toh vo value aa jani chahiye
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";   // string empty 
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){   // value me se last digt minus kar dega 
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{    // mean AC dabane per value fir se zero ho jayegi 
            string +=e.target.innerHTML;
            input.value = string;
        }
    })
})
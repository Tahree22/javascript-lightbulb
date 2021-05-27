//  alert("Click the switch to turn on the light");

let buttonClick = document.querySelector("#switchBtn");
let onBulb = document.querySelector(".onBulb");
let switchState = false;


buttonClick.addEventListener("click", btnSwitch)

function btnSwitch(){
    let switchInput = document.querySelector("#inputNum").value;
    document.querySelector("#inputNum").value = "";
    if(switchInput){
        let i = 1;
        let interval = setInterval(()=>{
            onBulb.style.display = "block"
            setTimeout(()=>{
                onBulb.style.display = "none"
            }, 2000)
            i++
            if(i > switchInput) clearInterval(interval)
            console.log(i);
        }, 3000)
    } else{ if (switchState){
            switchState = false;
            onBulb.style.display = "block";
        } else {
            switchState = true;
            onBulb.style.display = "none";
        }
    }
    } 








let keys = document.querySelectorAll("#keyboard>div")
    let bag=""
    for(let i=0;i<keys.length;i++){
        keys[i].addEventListener("click",myCal)
    }
    function myCal(){
        let target = event.target.innerText
        if(target == "C"){
            document.querySelector("#display").innerText = ""
            bag =""
        }
        else if (target == "="){
            console.log(eval(bag))
            let res = eval(bag)
            document.querySelector("#display").innerText = res
        }
        else{
            bag=bag+target
        document.querySelector("#display").innerText = bag
        } 
    }

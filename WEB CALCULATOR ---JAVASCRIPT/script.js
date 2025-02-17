console.log("Welcome to my Calculator")

let input = ""
let box = document.querySelector('.box')
let history=document.querySelector('.unorderedlist')

document.querySelectorAll('.btn').forEach((e) => {
    e.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            try {
                let data=input
                input = eval(input)                
                let list=document.createElement('li')
                list.className='list-item'
                list.innerHTML=data+"="+input
                history.append(list)

            } catch (error) {
                console.log("Please give a valid Input")
                input="Invalid Input"
            }         
        }
        else if (e.target.innerHTML === "C") {
            input = " "
        }
        else if (e.target.innerHTML === "⇐") {
            let arr = Array.from(input)
            let newarr = arr.slice(0, -1)
            input = newarr.join("")
        }
        else if (e.target.innerHTML === "∓") {
            input = 0-input
        }
        else {

            input = input + e.target.innerHTML
        }

        box.innerHTML = input

    })

})




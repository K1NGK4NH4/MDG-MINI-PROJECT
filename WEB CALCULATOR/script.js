console.log("Welcome to my OG Calculator")

let input = ""
let box = document.querySelector('.box')
let history = document.querySelector('.unorderedlist')
let historyButton = document.querySelector('.history-btn');
let historyPanel = document.querySelector('.history');
let calculator = document.querySelector('.calculator')


document.querySelectorAll('.btn').forEach((e) => {
    e.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            try {
                //It will input to the display window
                let data = input
                input = eval(input)

                if (data !== input) {

                    let list = document.createElement('li')
                    list.className = 'list-item'
                    list.innerHTML = data + "=" + input

                    history.append(list)

                    //delete button for the elements in history panel

                    let delbtn = document.createElement('button')
                    delbtn.className = "btn-delete"
                    delbtn.innerHTML = "✕"
                    list.append(delbtn)
                    delbtn.addEventListener('click', (e) => {
                        delbtn.parentElement.remove()

                    })
                }
            } catch (error) {
                console.log("Please give a valid Input")
                input = "Invalid Input"
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
            input = 0 - input
        }
        else {

            input = input + e.target.innerHTML
        }

        box.innerHTML = input

    })

})

//toggle the classes in each click
historyButton.addEventListener('click', () => {
    historyPanel.classList.toggle('show');
    calculator.classList.toggle('dim');
});


//History-Reset button
document.querySelector('.reset').addEventListener('click', () => {
    history.innerHTML = ""
})



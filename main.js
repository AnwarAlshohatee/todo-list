let counter = 1;

document.querySelector('#button').addEventListener('click', addListItem);
document.querySelector('#clear').addEventListener('click', clearList);



function addListItem(){
    let inputValue = document.querySelector('#inputValue').value

    if (inputValue.trim() !== "") {
        const parent = document.querySelector('#listSection')

        const newListSection = document.createElement('section');
        newListSection.classList.add(`list-item`)
        newListSection.classList.add('section-format')

        const newInput = document.createElement('input');
        newInput.type = 'checkbox'
        newInput.classList.add('checkbox')


        const newParagraph = document.createElement('p')
        newParagraph.textContent = inputValue;
        newParagraph.classList.add('paragraph')

        const newButton = document.createElement('button')
        newButton.textContent = 'Delete';
        newButton.classList.add(`deleteBtn`)
        newButton.addEventListener('click', () => {
            newListSection.remove()
        })

        parent.append(newListSection)
        newListSection.append(newInput, newParagraph, newButton)

        counter++;

        document.querySelector('#inputValue').value = ''
    } else {
    // The input is empty.
    alert("Please enter a value before continuing.");
    }
}

function clearList(){
    document.querySelector('#listSection').innerHTML = ''
}


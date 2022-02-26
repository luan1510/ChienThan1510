let button = document.querySelectorAll('input[type="button"]')

for (let index = 0; index < button.length; index++) {
    button[index].addEventListener('click', function() {
        let parent = this.parentElement.parentElement
        console.log(parent)
        parent.remove()
    })
}
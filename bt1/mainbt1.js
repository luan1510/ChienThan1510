let a = document.querySelector('#show_search_advance')

a.onclick = function show_seach_advance() {
    let category = document.querySelector('#search_advance')

    let text = a.innerHTML
    console.log(text)
    if (text === 'Tìm kiếm nâng cao') {
        category.style.display = "table-row"
        a.innerHTML = 'Bỏ tìm kiếm nâng cao'
    } else {
        category.style.display = "none"
        a.innerHTML = 'Tìm kiếm nâng cao'
    }
    return false
}
document.getElementById('button_add').onclick = function() {
    let title = document.getElementById('title').value
    if (title == '') {
        alert('bạn chưa nhập tiêu đề')
    } else {
        var html = '<div>' + title + '</div>'
        document.getElementById('result').innerHTML = html
    }
}
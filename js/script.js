let textarea = document.getElementById('text')

textarea.addEventListener('input', function () {
    let txt = this.value
    document.getElementById('letter').innerHTML = txt.length

    let word = txt.trim().split(' ')
    let wordArray = word.filter(function (e) {
        return e != "";
    })
    document.getElementById('word').innerHTML = wordArray.length

    let space = txt.split(" ")
    let spaceArray = space.filter(function (e) {
        return e == "";
    })
    document.getElementById('space').innerHTML = spaceArray.length
})

let textarea = document.getElementById('text')

textarea.addEventListener('input', function () {

    // To count Letters
    let txt = this.value
    document.getElementById('letter').innerHTML = txt.length

    // To count Words
    let word = txt.trim().split(/\s+/)
    let wordArray = word.filter(function (e) {
        return e != "";
    })
    document.getElementById('word').innerHTML = wordArray.length



    // To count Spaces
    let space = txt.split(" ")
    let spaceArray = space.filter(function (e) {
        return e == ""
    })
    document.getElementById('space').innerHTML = spaceArray.length

    // To count Special Characters
})

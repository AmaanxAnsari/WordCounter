let textarea = document.getElementById('text')

textarea.addEventListener('input', function () {

    // To count Letters
    let txt = this.value
    let exp = /[a-zA-Z0-9]/g
    let letterCount = (txt.match(exp) || []).length
    document.getElementById('letter').innerHTML = letterCount

    // To count Words
    let word = txt.trim().split(/\s+/)
    let wordArray = word.filter(function (e) {
        return e != "";
    })
    document.getElementById('word').innerHTML = wordArray.length



    // To count Spaces
    let space = txt.split(" ").length - 1
    document.getElementById('space').innerHTML = space

    // To count Special Characters
    let special = this.value
    let regex = /[^\w\s]/g;
    let specialCount = (special.match(regex) || []).length
    document.getElementById('special').innerHTML = specialCount

})

let textarea = document.getElementById('text')

textarea.addEventListener('input', function () {

    // To count Letters
    let txt = this.value
    let exp = /[\w]/g
    let letterCount = (txt.match(exp) || []).length
    document.getElementById('letter').innerHTML = letterCount

    //To count Vowels
    let vow = this.value
    let regexVowels = /[aeiou]/gi
    let vowelsCount = (vow.match(regexVowels) || []).length
    document.getElementById('vowels').innerHTML = vowelsCount

    //To count Consonents
    let con = this.value
    let regexConsonents = /[^aeiou?!@#$%^&*0-9(){}['":;/<,>`=+_.-\s]/gi
    let consonentsCount = (con.match(regexConsonents) || []).length
    document.getElementById('consonents').innerHTML = consonentsCount

    // To count Words
    let word = this.value.trim().split(/\s+/)
    let wordArray = word.filter(function (e) {
        return e != "";
    })
    document.getElementById('word').innerHTML = wordArray.length

    // To count Spaces
    let space = txt.split(" ").length - 1
    document.getElementById('space').innerHTML = space

    //To count Numbers
    let num = this.value
    let regexNumber = /[\d]/g
    let numberCount = (num.match(regexNumber) || []).length
    document.getElementById('number').innerHTML = numberCount

    // To count Special Characters
    let special = this.value
    let regex = /[^\w\s]/g;
    let specialCount = (special.match(regex) || []).length
    document.getElementById('special').innerHTML = specialCount

})

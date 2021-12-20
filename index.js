class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^-\w\s'-]/gi,'')
  }
  static titleize(string) {
    const wordArr = string.split(' ')
    const resultArr = []
    resultArr.push(this.capitalize(wordArr[0]))
    const exeptanceList = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i=1; i< wordArr.length; i++) {
      if (exeptanceList.includes(wordArr[i])){
        resultArr.push(wordArr[i])
      } else {
        resultArr.push(this.capitalize(wordArr[i]))
      }
    }
    return resultArr.join(" ")
  }
}

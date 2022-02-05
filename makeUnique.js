// Write your solution below:
console.log('=====Make Unique String=====')

let string = 'iwanttoclimbamountain'

const uniqueString = (str) => {
    let strArr = str.split('')

    for(let j = 0; j < strArr.length-1; j++){
        for(let i = j+1; i < strArr.length; i++){            
            if(strArr[i] === strArr[j]){
                strArr.splice(i,1)
                i = i-1
            }
        }
    }
    str = strArr.join('')
    return str
}
console.log(uniqueString(string))
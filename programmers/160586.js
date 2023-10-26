function findSmallestElement(arr) {
  return arr.length === 0 ? -1 : Math.min(...arr);
}

function solution(keymap, targets) {
    var answer = [];
    const tempList = [];
    for(let i=0; i< targets.length; i++){
        const target = targets[i].split("")
        const tempTargetList =[]

        for(let j=0; j< target.length; j++){
            const tempTargetIndex = []
            for(let k=0; k < keymap.length; k++){
                const index = keymap[k].indexOf(target[j])
                index >= 0 && tempTargetIndex.push(index + 1)
            }
            tempTargetList.push(findSmallestElement(tempTargetIndex))
        }
        tempList.push(tempTargetList)
    }
    
    
    tempList.forEach((item, index) => {
        console.log(item)
        if(item.indexOf(-1) >= 0){
            answer.push(-1)
        } else {
            answer.push(item.reduce((acc, cur) => {
                return acc + cur
            }, 0))
        }
    })
    return answer;
}

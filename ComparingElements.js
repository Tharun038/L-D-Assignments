//Comparing elements in array

function compare(myArr){
    for(let i=0; i<myArr.length; i++){
        for(let j=i+1; j<myArr.length; j++){
            if(myArr[i]==myArr[j]){
                console.log("same")
            }else {
                console.log("different")
            }
        }
    }
}

arr=[1,1,2,3]
compare(arr)
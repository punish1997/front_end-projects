let arr = [2,1,3,5,6,7,8,9]
let even =[]
let odd =[]
for(let i=0;i<arr.length;i++){
    let b=arr[i]
    if(b%2==0){
        even.push(b)
    }
    else{
        odd.push(b)
    }


    console.log(even)
    console.log(odd)


}
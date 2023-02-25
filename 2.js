const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err,data)=>{
    if(err){
        console.error(err);
        return
    }

    let n = +data.split(' ')[0];
    let k = +data.split(' ')[1];
    let result = 0;
    let dp = [0,1,1];
    let sum = 1;
    let inc = 0;

    for(let i = 3; i <= k; i++){
        sum = sum*2;
        dp[i] = sum; 
    }
    console.log(dp)

    if(n >= k){     
        for(let i = k+1; i <= n; i++){
            dp[i] = dp[i-1]*2 - dp[inc];
            inc++;
        }
    } 

    if(k === 1){
        result = n;
    }else{
        result = dp[n];
    }
    

    fs.writeFile('output.txt', result.toString(), err =>{
        if(err){        
            console.error(err);
            return
        }
    })
})
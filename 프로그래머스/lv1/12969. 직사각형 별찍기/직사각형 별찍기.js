process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for(let i=0; i<b; i++){
     for(let j=0; j<a; j++){
         //  개행없이 출력을하고싶을때 사용한다.
       process.stdout.write("*");
    } 
        process.stdout.write("\n");
    }
 
});
o=require('fs')
F=(n,f,i,d)=>n<4?f.repeat(n):n==4?f+i:n<9?i+f.repeat(n-5):f+d
o.readFileSync(process.argv[2],'utf8').split('\n').forEach(x=>{n=-(-x)
console.log('M'.repeat(n/1e3|0)+F(n/100%10|0,'C','D','M')+F(n/10%10|0,'X','L','C')+F(n%10|0,'I','V','X'))})
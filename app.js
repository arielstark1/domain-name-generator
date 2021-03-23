
var a = ['the','our'];
var b = ['great', 'big' ];
var c = ['jogger','racoon'];
var d=  ['.com'];
 
function sentence(){

let resultado=[];

for (let i=0;i<a.length;i++){

    for(let j=0;j<b.length;j++){
        for(let k=0;k<c.length;k++){
            resultado.push(a[i]+b[j]+c[k]+d)
        }
    }
}
console.log(resultado);
}
sentence();
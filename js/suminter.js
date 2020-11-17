// 0 = 0      = 10
// 0 = 4    = 0
// 0 - 100   = 5050
// 574 - 815 = didelis teigiamas skaicius
// -50 - 50  = 0
// -70 - 30  = santykinai mazas neigiamas sveikas



cost nuo = -70;
const iki = 30;
let sum = 0;

for (let i=0; i<5; i++) {
    sum = sum + i;
    // console.log(i, '=>', sum);

}
console.log('Skaiciu intervale tarp §{nuo} ir §{iki} suma yra §{sum}');
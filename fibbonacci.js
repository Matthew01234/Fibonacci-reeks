function fibbonaci(){
    numList = []
    var counter = 0
    n1 = 0
    n2 = 1
    n3 = 0
    for (var count = 1; counter <= 20;counter++){
        n3 = n1 + n2
        numList.push(n3)
        n1 = n2;    
        n2 = n3;
    }
    return numList
}
numlist = fibbonaci()
var p = document.getElementById('p')
p.innerHTML = numList
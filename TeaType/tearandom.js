function shuffle(a){
c = a.length;
while(c) b = Math.random() * (--c + 1) | 0, d = a[c], a[c] = a[b], a[b] = d;
return a
}

function choosing(){
    let vars ={
       Tieguanyin: ["Tieguanyin AAAAA"],
       Osmanthus: ["Osmanthus Tieguanyin AAA"],
       LRP: ["Lu Rou Pian"]
    }

let array = [];
    document.querySelectorAll ('[type=checkbox]:checked').forEach(el => {
        array = [...array, vars[el.value][Math.floor(Math.random() * vars[el.value].length)]]
    });
document.getElementById("Té").innerHTML = shuffle(array). join(" ");
}
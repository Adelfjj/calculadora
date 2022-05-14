let tdButton = document.querySelectorAll('td');
let visor = document.getElementById('entradas');
let total = document.getElementById('total');

const startUser = () =>{
    for(const td of tdButton){
        td.addEventListener('click',handleClick);
    };
};

const handleClick = (e) =>{
    const tdClick = e.target;
    INSERIR_VISOR(tdClick);
};

const INSERIR_VISOR = (btn) =>{
    var numClick = btn.textContent;
    var textVisor = visor.textContent;
    switch(numClick){
        case "<":
            document.getElementById('entradas').textContent = textVisor.substring(0,textVisor.length -1);
            break;
        case "c":
            visor.textContent = "";
            total.textContent = "0";
            break;
        case "=":
            let conta = eval(visor.textContent);
            if(conta.toString().length > 11){
                total.style.fontSize = "18px";
            }
            total.textContent = conta;
            break;
        default:
            visor.textContent += numClick;
    };
   
};

const APAGAR = () =>{
    
};
startUser();
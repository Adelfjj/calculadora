let tdButton = document.querySelectorAll('td');
let visor = document.getElementById('entradas');
let total = document.getElementById('total');
let cktoggle = document.getElementById('toggle');
var contagem = 0;

cktoggle.addEventListener('change', e =>{

    if(e.target.checked){
        document.body.style.setProperty("--main-color","#9db3ee");
        document.body.style.setProperty("--num-color","#f9f9f9");
        document.body.style.setProperty("--opr-color","#fdffff");
        document.body.style.setProperty("--font-color","black");
        
    }else{
        document.body.style.setProperty("--main-color","#172d68");
        document.body.style.setProperty("--num-color","#0b1946");
        document.body.style.setProperty("--opr-color","#0b163b");
        document.body.style.setProperty("--font-color","white");
    }
});

const EventoClick = () =>{
    for(const td of tdButton){
        td.addEventListener('click',CLICADO);
    };
};

const CLICADO = (e) =>{
    OPCOES(e.target);
};

const OPCOES = (tdClick) =>{
    let numClick = tdClick.textContent;
    switch(numClick){
        case "\253":
            APAGAR();
            break;
        case "C":
            ZERAR();
            break;
        case "=":
            CALCULAR();
            break;
        default:
         EXIBIR(numClick);
    };
};

const ZERAR = () =>{
    visor.textContent = "";
    total.textContent = "0";
    total.style.fontSize = "28px";
    contagem = 0;
};

const APAGAR = () =>{
    var textVisor = visor.textContent;
    document.getElementById('entradas').textContent = textVisor.substring(0,textVisor.length -1);
};
const CALCULAR = () => {
    if(visor.textContent && contagem != 1){
        let conta = eval(visor.textContent);
        ALTERARFONT(conta);
        total.textContent = conta;
    }
};

const ALTERARFONT = (conta) => {
    conta.toString().length > 11 ? 
        total.style.fontSize = "15px" :
        total.style.fontSize = "28px"
};

const EXIBIR = (numClick) =>{
    if(isNaN(numClick)){
        if(contagem == 0){
        contagem = 1;
        visor.textContent += numClick;
        }
    }
    else{
        contagem = 0;
        visor.textContent += numClick;
    }
};

EventoClick();
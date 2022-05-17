let tdButton = document.querySelectorAll('td');
let visor = document.getElementById('entradas');
let total = document.getElementById('total');
let cktoggle = document.getElementById('toggle');


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

const startUser = () =>{
    for(const td of tdButton){
        td.addEventListener('click',handleClick);
    };
};

const handleClick = (e) =>{
    INSERIR_VISOR(e.target);
};

const INSERIR_VISOR = (tdClick) =>{
    let numClick = tdClick.textContent;
    switch(numClick){
        case "\253":
            APAGAR();
            break;
        case "c":
            ZERAR();
            break;
        case "=":
            CALCULAR();
            break;
        default:
         visor.textContent += numClick;
         ENUMERO(numClick);
    };
};

const ZERAR = () =>{
    visor.textContent = "";
    total.textContent = "0";
};

const APAGAR = () =>{
    var textVisor = visor.textContent;
    document.getElementById('entradas').textContent = textVisor.substring(0,textVisor.length -1);
};
const CALCULAR = () => {
    if(visor.textContent){
        let conta = eval(visor.textContent.replace("x","*"));
        if(conta.toString().length > 11){
            total.style.fontSize = "18px";
        }
        total.textContent = conta;
    }
};

const ENUMERO = (numClick) =>{
    if(isNaN(numClick)){
        console.log(numClick);
    }
}
startUser();
let temp = "";
let token_arr = [];


function bruh(){

    const check = [" ", ";", "="];
    const expressions = document.getElementById("inputStr").textContent;
    let expChar;
    const lexeme_arr = [];
    let quoteChk = false;

    for(let i = 0; i < expressions.length; i++){

        expChar = expressions.charAt(i);
        temp+=expChar;
        
        if(expChar == '"') quoteChk = !quoteChk; //toggle boolean

        if(quoteChk == false){
            if(expressions.charAt(i+1) == ";" || expressions.charAt(i+1) == "=" )
                addToList(lexeme_arr, temp);
            else if(check.includes(expChar))
                addToList(lexeme_arr, temp);
        }
    }
    const result = lexeme_arr.filter(e => e); //remove empty strings
    print(result);
    getToken(result);
}

function getToken(arr){
    document.getElementById("token").textContent = "";
    let dict = {};
    const dataType = ['byte','short','int','long','float','double','boolean','char','String'];
    const operator_arith = ['+','-','*','/','%'];
    //const operator_unary = ['++','--', '!'];
    const operator_asst = ['=','+=','-='];
    //const operator_rel = ['==','!=','<','>','<=','>='];
    //const operator_lg = ['&&', '||'];
    const delimeter = ';';

    for(let i = 0; i < arr.length; i++){
        
        if(dataType.includes(arr[i])){
            printToken("<data_type>");
        }
        else if(operator_asst.includes(arr[i])){
            printToken("<assignment_operator>");
        }
        else if(delimeter == arr[i]){
            printToken("<delimeter>");
        }
        else if(hasQuotes(arr[i]) || onlyNum(arr[i])){
            printToken("<value>");
        }
        else
            printToken("<identifier>");
        
    }

}

function onlyNum(s) {
    return /^(\d+.)*(\d+)$/.test(s);
  }

function hasQuotes(s) {
    return /['||"]/.test(s);
}
function addToList(arr, s){
    arr.push(s.trim());
    temp="";
}

function print(s){
    document.getElementById("outputStr").textContent = s;
}

function printToken(s){
    document.getElementById("token").textContent += s;
}
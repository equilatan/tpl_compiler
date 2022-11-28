let temp = "";
let token_arr = [];
let result = [];

function lexical_declaration(){

    const check = [" ", ";", "=", "+", "-", "/", '*', '"'];
    const expressions = document.getElementById("inputStr").value;
    let expChar;
    let quoteChk = false;
    lexeme_arr = [];
    result = [];
    
    for(let i = 0; i < expressions.length; i++){

        expChar = expressions.charAt(i); 
        temp+=expChar;
        
        if(expChar == '"') quoteChk = !quoteChk; //toggle boolean

        if(i == expressions.length-1){
            addToList(lexeme_arr, temp);
        }
        else if(quoteChk == false){
            if(check.includes(expressions.charAt(i+1)) || check.includes(expressions.charAt(i)))
                addToList(lexeme_arr, temp);
        }
        
        
    }
    result = lexeme_arr.filter(e => e); //remove empty strings
    print(result);
    getToken(result);
}

function getToken(arr){
    document.getElementById("token").textContent = "";
    const dataType = ['byte','short','int','long','float','double','boolean','char','String'];
    const operator_arith = ['+','-','*','/','%'];
    //const operator_unary = ['++','--', '!'];
    const operator_asst = ['=','+=','-='];
    //const operator_rel = ['==','!=','<','>','<=','>='];
    //const operator_lg = ['&&', '||'];
    const delimeter = ';';
    token_arr = [];
    for(let i = 0; i < arr.length; i++){
        
        if(dataType.includes(arr[i])){
            token_arr.push("<data_type>");
        }
        else if(operator_arith.includes(arr[i])){
            token_arr.push("<arithmetic_operator>");
        }
        else if(operator_asst.includes(arr[i])){
            token_arr.push("<assignment_operator>");
        }
        else if(delimeter == arr[i]){
            token_arr.push("<delimiter>");
        }
        else if(hasQuotes(arr[i]) || onlyNum(arr[i])){ 
            token_arr.push("<value>");
        }
        else
            token_arr.push("<identifier>");
        
    }

    printToken(token_arr);
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
    document.getElementById("token").textContent = s;
}
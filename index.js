var ResultFiesd = $(".result");

function insertNumber(number){
    var existingNumber = ResultFiesd.val();
    ResultFiesd.val(existingNumber + number);
}
function clearResult(){
    ResultFiesd.val('');
}
function calculate(){
    var result = eval(ResultFiesd.val());
    ResultFiesd.val(result);
}
function deleteNumber(){
    var present = ResultFiesd.val();
    ResultFiesd.val(present.slice(0, -1));
}
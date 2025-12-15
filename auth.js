// simple obfuscated password system
(function(){

    const encoded = [
        "c2Vj", // sec
        "cmV0", // ret
        "MTIz"  // 123
    ];

    function getPass(){
        return atob(encoded[0]) + atob(encoded[1]) + atob(encoded[2]);
    }

    window.checkPassword = function(input){
        return input === getPass();
    }

})();

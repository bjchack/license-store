(function(){

    // PASSWORD = secret123
    const data = [
        "c2Vj", // sec
        "cmV0", // ret
        "MTIz"  // 123
    ];

    function build(){
        return atob(data[0]) + atob(data[1]) + atob(data[2]);
    }

    window.checkPassword = function(input){
        return input === build();
    };

})();

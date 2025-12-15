(function(){
    const p = ["c2Vj","cmV0","MTIz"]; // sec + ret + 123

    function build(){
        return atob(p[0]) + atob(p[1]) + atob(p[2]);
    }

    window.checkPassword = function(input){
        return input === build();
    };
})();

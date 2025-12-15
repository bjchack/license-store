(function(){

    // PASSWORD 1 = secret123
    const p1 = ["c2Vj","cmV0","MTIz"]; // sec + ret + 123

    // PASSWORD 2 = bjc2025
    const p2 = "YmpjMjAyNQ=="; // bjc2025

    function build1(){ return atob(p1[0]) + atob(p1[1]) + atob(p1[2]); }
    function build2(){ return atob(p2); }

    window.checkPassword = function(input){
        return input === build1() || input === build2();
    };

})();

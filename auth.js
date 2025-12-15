(function(){

    // LIST OF ALLOWED PASSWORDS
    const list = [
        "c2VjcmV0MTIz", // secret123
        "YmpjMjAyNQ==", // bjc2025
        "bW92aWVhcHA="  // movieapp
    ];

    function decode(v){
        return atob(v);
    }

    window.checkPassword = function(input){
        for(let i=0;i<list.length;i++){
            if(input === decode(list[i])){
                return true;
            }
        }
        return false;
    };

})();

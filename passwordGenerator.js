document.addEventListener("DOMContentLoaded", function() {
    let alpha_lower = "abcdefghijklmnopqrstuvwxyz";
    let alpha_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let spcl_char = "!@#$%^&*()_+?><:;[],.=-"
    let num = "0123456789"
    let passwordHere = document.getElementById("passwordIsHere")
    passwordHere.style.display = "none"

    console.log(document.getElementById("lower"))

    let clickFuc = document.getElementById("submit");
    clickFuc.addEventListener("click" , (e) => {
        e.preventDefault();
        let randomA = document.getElementById("lower").value;
        let randomB = document.getElementById("upper").value;
        let randomC = document.getElementById("spcl").value;
        let randomD = document.getElementById("num").value;

        if(randomA === "" && randomB === "" && randomC === "" && randomD === "") { 
            alert("Fields can't be empty")
            return;
        }

        if(((randomA > 0 && randomA <= 30) && (randomB === "" || randomB !== null) && (randomC === "" || randomC !== null) && (randomD === 0 || randomD !== null)) || ((randomB > 0 && randomB <= 30) && (randomA === "" || randomA !== null) && (randomC === "" || randomC !== null) && (randomD === 0 || randomD !== null)) || ((randomC > 0 && randomC <= 30) && (randomB === "" || randomB !== null) && (randomA === "" || randomA !== null) && (randomD === 0 || randomD !== null)) || ((randomD > 0 && randomD <= 30) && (randomB === "" || randomB !== null) && (randomC === "" || randomC !== null) && (randomA === 0 || randomA !== null))) {

        let a = "", b = "", c = "", d = "";

        for( let x = 0; x < randomA; x++){
            a += alpha_lower.charAt(Math.random()*alpha_lower.length);
        }
        for( let x = 0; x < randomB; x++){
            b += alpha_upper.charAt(Math.random()*alpha_upper.length);
        }
        for( let x = 0; x < randomC; x++){
            c += spcl_char.charAt(Math.random()*spcl_char.length);
        }
        for( let x = 0; x < randomD; x++){
            d += num.charAt(Math.random()*num.length);
        }
        let password = b + a + d + c;
        document.getElementById("pw").innerHTML = null;
        document.getElementById("pw").innerHTML = password;
        passwordHere.style.display = "block"
        } else {
            alert("Error !! Range lies between 1 to 30")
        }
    });

    let genRan = document.getElementById("genRandom");
    genRan.addEventListener("click" , (e) => {
        e.preventDefault();
        let randomA = Math.random()*10;
        let randomB = Math.random()*10;
        let randomC = Math.random()*5;
        let randomD = Math.random()*8;

        let a = "", b = "", c = "", d = "";
        
        for( let x = 0; x < randomA; x++){
            a += alpha_lower.charAt(Math.random()*alpha_lower.length);
        }
        for( let x = 0; x < randomB; x++){
            b += alpha_upper.charAt(Math.random()*alpha_upper.length);
        }
        for( let x = 0; x < randomC; x++){
            c += spcl_char.charAt(Math.random()*spcl_char.length);
        }
        for( let x = 0; x < randomD; x++){
            d += num.charAt(Math.random()*num.length);
        }
        let password = b + a + d + c;
        document.getElementById("pw").innerHTML = null;
        document.getElementById("pw").innerHTML = password;
        passwordHere.style.display = "block"
    });

    let copyIcon = document.getElementById("copy")
    let copiedIcon = document.getElementById("copied")
    
    copiedIcon.style.display = "none"

    copyIcon.addEventListener("click", function(){
        const range = document.createRange()
        range.selectNode(document.getElementById("pw"))

        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)

        document.execCommand("copy")

        copiedIcon.style.display = "block"
        copyIcon.style.display = "none"
        setTimeout(() => {
            copyIcon.style.display = "block"
            copiedIcon.style.display = "none"
            window.getSelection().removeAllRanges()
        }, 1500)
    })
});


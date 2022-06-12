// button -- part
const imgdnn = document.getElementsByClassName("night-day-mode")
const dayandnightBtn = document.getElementById("dnnbtn");
const passgenBtn = document.getElementById("passgen");
const bckgrimgb = document.getElementsByTagName("body")
const bckgrimgm = document.getElementsByClassName("modal-content")
const allgreenbtn = document.getElementsByClassName("gigatest2")
let img123 = 'url("moon.png")'
let img234 = 'url("sun.png")'

const language1Btn = document.getElementById("language1");
const language2Btn = document.getElementById("language2");
const language3Btn = document.getElementById("language3");
const language4Btn = document.getElementById("language4");
const language5Btn = document.getElementById("language5");
const language6Btn = document.getElementById("language6");

// pass -- part
let checkiftherespass = ['', '', '', ''];
let realpass = [];
let yourcharset = [];
let passlenreal = document.getElementById("passlen");
let numericGen = [];
// language  --- part


let inputlanguage = [`abcdefghijklmnopqrstuvwxyz`];
let language1 = `abcdefghijklmnopqrstuvwxyz`;
let language2 = `абвгдежзийклмнопрстуфхцчшщъыьэюя`;
let language3 = `abcdefghijklmnopqrstuvwxyzçéâêîôûàèìòùëïü`;
let language4 = `abcdefghijklmnopqrstuvwxyzäöüß`;
let language5 = `abcdefghijklmnopqrstuvwxyzæøå`;
let language6 = `abcçdefgğhıijklmnoöprsştuüvyz`;


// buttons -- logic

dayandnightBtn.addEventListener("click", function() {
    if ( imgdnn[0].style.backgroundImage === img123) {
        imgdnn[0].style.backgroundImage = "url('sun.png')";
        bckgrimgb[0].style.backgroundImage = "url('bckimg.png')";
        bckgrimgm[0].style.backgroundImage = "url('bckimg.png')"
    }  else if( imgdnn[0].style.backgroundImage === img234) {
        imgdnn[0].style.backgroundImage = "url('moon.png')";
        bckgrimgb[0].style.backgroundImage = "url('dark.jpg')";
        bckgrimgm[0].style.backgroundImage = "url('dark.jpg')"
    }
      })



passgenBtn.addEventListener("click", function() {
    if (realpass.length === 0 && yourcharset.length === 0) {
        putoutpass ();
        Nmbonly();
    }  else {
        realpass.splice(0, realpass.length);
        numericGen = ["1234567890"]
        putoutpass ();
        Nmbonly();
    } 
});


language1Btn.addEventListener("click", function() { 
    enablelanguage1 ()
    stylebuttons ()
    document.getElementById("language1").style.borderColor = "red"
    document.getElementById("language1").style.width = "30px"
    document.getElementById("language1").style.height = "30px"
    }
)

language2Btn.addEventListener("click", function() {
    enablelanguage2 ()
    stylebuttons ()
    document.getElementById("language2").style.borderColor = "red"
    document.getElementById("language2").style.width = "30px"
    document.getElementById("language2").style.height = "30px"
}
)

language3Btn.addEventListener("click", function() {
    enablelanguage3 ()
    stylebuttons ()
    document.getElementById("language3").style.borderColor = "red"
    document.getElementById("language3").style.width = "30px"
    document.getElementById("language3").style.height = "30px"
}
)

language4Btn.addEventListener("click", function() {
    enablelanguage4 ()
    stylebuttons ()
    document.getElementById("language4").style.borderColor = "red"
    document.getElementById("language4").style.width = "30px"
    document.getElementById("language4").style.height = "30px"
}
)

language5Btn.addEventListener("click", function() {
    enablelanguage5 ()
    stylebuttons ()
    document.getElementById("language5").style.borderColor = "red"
    document.getElementById("language5").style.width = "30px"
    document.getElementById("language5").style.height = "30px"
}
)

language6Btn.addEventListener("click", function() {
    enablelanguage6 ()
    stylebuttons ()
    document.getElementById("language6").style.borderColor = "red"
    document.getElementById("language6").style.width = "30px"
    document.getElementById("language6").style.height = "30px"
}
)


// function -- part

function enablelanguage1() {
    if ( inputlanguage.length > 0) {
        inputlanguage.pop()
        inputlanguage.push(language1)
    } 
}

function enablelanguage2() {
    if ( inputlanguage.length > 0) {
        inputlanguage.pop()
        inputlanguage.push(language2)
    }
}

function enablelanguage3() {
    if ( inputlanguage.length > 0) {
        inputlanguage.pop()
        inputlanguage.push(language3)
    }
}

function enablelanguage4() {
    if ( inputlanguage.length > 0) {
        inputlanguage.pop()
        inputlanguage.push(language4)
    }
}

function enablelanguage5() {
    if ( inputlanguage.length > 0) {
        inputlanguage.pop()
        inputlanguage.push(language5)
    }
}

function enablelanguage6() {
    if ( inputlanguage.length > 0) {
        inputlanguage.pop()
        inputlanguage.push(language6)
    }
}

function Nmbonly() {
         if (Number.isFinite(Number(passlenreal.value)) === false) {
        //alert("Please, enter only Numbers!");
        changespan ()
        setTimeout (changespan2, 2000)
        return false;
     }        
     }

function Nmbonly1() {
        if (Number.isFinite(Number(passlenreal.value)) === false) {
       alert("Please, enter only Numbers!");
      // changespan ()
      // setTimeout (changespan2, 2000)
      // return false;
    }        
    }

function password_generator( len ) {
    let inptL = JSON.stringify(inputlanguage);
    let length = (len)?(len):(yourcharset);
    let numeric = JSON.stringify(numericGen);
    let punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = "";
    let character = "";
    while( password.length<length ) {
        entity1 = Math.ceil(inptL.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = inptL.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substring(0,yourcharset); 
};

function putoutpass() { 
    password_generator();
    let testvar =  password_generator();
    realpass.push(testvar);
    document.getElementById("input-el1").value = realpass[0];
    password_generator();
    let testvar1 =  password_generator();
    realpass.push(testvar1);
    document.getElementById("input-el2").value = realpass[1];
    password_generator();
    let testvar2 =  password_generator();
    realpass.push(testvar2);
    document.getElementById("input-el3").value = realpass[2];
    password_generator();
    let testvar3 =  password_generator();
    realpass.push(testvar3);
    document.getElementById("input-el4").value = realpass[3];
};


function passcopie1() {
    document.querySelector("#input-el1").value = realpass[0]
}

function passcopie2() {
    document.querySelector("#input-el2").value = realpass[1]
}

function passcopie3() {
    document.querySelector("#input-el3").value = realpass[2]
}

function passcopie4() {
    document.querySelector("#input-el4").value = realpass[3]
}

function stylebuttons () {
    for (let i= 0; i < allgreenbtn.length; i++)  {
    allgreenbtn[i].style.borderColor = "green";
    allgreenbtn[i].style.width = "26px";
    allgreenbtn[i].style.height = "26px";
    }
}

function changespan () {
    let modal1 = document.querySelector('.modal')
    modal1.style.display = 'block';
}

function changespan2 () {
    let modal1 = document.querySelector('.modal')
    modal1.style.display = 'none';
}

// Events - part

addEventListener("change", function () {
    if (yourcharset.length === 0) {
       yourcharset.push(passlenreal.value);
   }
   else if (yourcharset.length > 0) {
       yourcharset.splice(0, yourcharset.length)
       yourcharset.push(passlenreal.value)
   }   
   else if (passlenreal.value > 0) {
       passlenreal.splice(0, passlenreal.value);
   }
});

document.getElementById("input-el1").onclick = function() {
    if (JSON.stringify(realpass) !== JSON.stringify(checkiftherespass) && realpass.length === checkiftherespass.length) { 
    this.select();
    document.execCommand('copy');
    document.querySelector("#input-el1").value = "Copied"
    setTimeout(passcopie1, 1500)
    } else return false
  };

  document.getElementById("input-el2").onclick = function() {
    if (JSON.stringify(realpass) !== JSON.stringify(checkiftherespass) && realpass.length === checkiftherespass.length) { 
    this.select();
    document.execCommand('copy');
    document.querySelector("#input-el2").value = "Copied"
    setTimeout(passcopie2, 1500)
    } else return false
  };

  document.getElementById("input-el3").onclick = function() {
    if (JSON.stringify(realpass) !== JSON.stringify(checkiftherespass) && realpass.length === checkiftherespass.length) { 
    this.select();
    document.execCommand('copy');
    document.querySelector("#input-el3").value = "Copied"
    setTimeout(passcopie3, 1500)
    } else return false
  };


  document.getElementById("input-el4").onclick = function() {
    if (JSON.stringify(realpass) !== JSON.stringify(checkiftherespass) && realpass.length === checkiftherespass.length) { 
    this.select();
    document.execCommand('copy');
    document.querySelector("#input-el4").value = "Copied"
    setTimeout(passcopie4, 1500)
    // alert(`The chosen password ${window.getSelection().toString()} is copied`);
    } else return false
  };


//// -------- TESTING STUFF --------

// Btnmouse open - close
const mousemoveDIVpc = document.getElementById("mousemovepass")
const mousemoveDIVmob = document.getElementById("phoneContent")

function openmouseDiv () {
    let modal12 = document.querySelector('.modal12')
    modal12.style.display = 'block';
    numericGen = [];
}

function hidemouseDIV () {
    let modal12 = document.querySelector('.modal12')
    modal12.style.display = 'none';
    Removetrackmousemovement ();
    JSON.stringify(Xtrack);
    JSON.stringify(Ytrack);
    numericGen.push(Xtrack, Ytrack);
    JSON.stringify(numericGen);
    putoutpass();
    resetMousepass ();
}

mousemoveDIVpc.addEventListener("click", function () {
   if ( Number.isFinite(Number(passlenreal.value)) === false) {
    console.log("HELP")
    return false;
   } else realpass.splice(0, realpass.length);
        openmouseDiv ();
        Addtrackmousemovement ();
        setTimeout( hidemouseDIV, 5000);

})

mousemoveDIVmob.addEventListener("click", function () {
    if ( Number.isFinite(Number(passlenreal.value)) === false) {
     console.log("HELP")
     return false;
    } else realpass.splice(0, realpass.length);
         openmouseDiv ();
         Addtrackmousemovement ();
         setTimeout( hidemouseDIV, 5000);
 
 })

/// tracking x and y when mouse is moved 



 let Xtrack = [];
 let Ytrack = [];


let callingtolog = (event) => {
    Xtrack.push(event.clientX)
    Ytrack.push(event.clientY)
   }


function Addtrackmousemovement () {
    document.addEventListener("mousemove", callingtolog)
}

function Removetrackmousemovement () {
    document.removeEventListener("mousemove", callingtolog)

}

function resetMousepass () {
            Xtrack = [];
            Ytrack = []; 
            numericGen = [];
}

function mobilePC () {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        mousemoveDIVmob.style.display = "block"
        mousemoveDIVpc.style.display = "none"
        return true;
      } else {
        mousemoveDIVpc.style.display = "block"
        mousemoveDIVmob.style.display = "none"
        return false; }
}

let passgenBtn = document.getElementById("passgen");
let realpass = [];
let yourcharset = [];
let passlenreal = document.getElementById("passlen");

/*function Nmbonly(event) {
    let numonlyTrue = event.which || event.keyCode;
    if (numonlyTrue > 31 && (numonlyTrue < 48 || numonlyTrue > 57)) {
        alert("Only Numbers allowed!");
        return false;
     }
return true;
}*/

function Nmbonly(event) {
    if ( event.keyCode == 190 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {

if(event.keyCode == 190){
    if($(this).val().indexOf('.')!=-1){
          event.preventDefault();
        }

    }
return;
}
else {

if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {

    event.preventDefault();
    }
}
};

addEventListener("change", function() {
    if (yourcharset.length === 0) {
        yourcharset.push(passlenreal.value) 
        }
    else if (yourcharset.length > 0) {
        yourcharset.splice(0, yourcharset.length)
        yourcharset.push(passlenreal.value)
    }
});

function password_generator( len ) {
    let length = (len)?(len):(yourcharset);
    let string = "abcdefghijklmnopqrstuvwxyz";
    let numeric = '0123456789';
    let punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = "";
    let character = "";
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
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

passgenBtn.addEventListener("click", function() {
    if (realpass.length === 0 && yourcharset.length === 0) {
        putoutpass ();
    }  else {
        realpass.splice(0, realpass.length);
        putoutpass ();
    } 
});

let checkiftherespass = ['', '', '', ''];

document.getElementById("input-el1").onclick = function() {
    if (JSON.stringify(realpass) !== JSON.stringify(checkiftherespass)) { 
    this.select();
    document.execCommand('copy');
    alert(`The choosen password ${window.getSelection().toString()} is coppied`);
    } else return false
  };

  document.getElementById("input-el2").onclick = function() {
    if (JSON.stringify(realpass) !== JSON.stringify(checkiftherespass)) { 
    this.select();
    document.execCommand('copy');
    alert(`The choosen password ${window.getSelection().toString()} is coppied`);
    } else return false
  };

  document.getElementById("input-el3").onclick = function() {
    if (JSON.stringify(realpass) !== JSON.stringify(checkiftherespass)) { 
    this.select();
    document.execCommand('copy');
    alert(`The choosen password ${window.getSelection().toString()} is coppied`);
    } else return false
  };

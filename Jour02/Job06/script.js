let konami = "";

function konamiCode(event) {
    
    const touches = event.key;
    const fond = document.body;

    konami += touches;

    if(konami == "konami"){
        alert('Code Konami autorisé');
        fond.style.backgroundColor = '#0084FA';
        konami = "";

    }else if(konami.length > 6){
        alert('Code Refusé');
        fond.style.backgroundColor = 'white';
        konami = "";
    }

}

document.addEventListener('keydown', konamiCode);
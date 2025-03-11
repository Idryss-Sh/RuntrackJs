function colorpourcentage(){

    window.addEventListener('scroll', function() {
        const footer = document.getElementById('footer'); // Récupère l'élément footer
    
        if (window.scrollY > 1500 ) {
            footer.style.backgroundColor = 'rgb(255, 58, 58)';
        }else {
            footer.style.backgroundColor = 'rgb(255, 221, 221)';
        }
    });
    


}

colorpourcentage();
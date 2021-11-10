const shareButton = document.getElementById('share_button');
const shareSection = document.querySelector('.active_share');


shareButton.addEventListener('click', function(){
    if(shareSection.classList.contains('remove-container')){
        shareSection.classList.remove('remove-container');
        shareSection.classList.add('show-container');
        shareButton.classList.add('change-bg');
        document.getElementById('share-icon').style.color = 'white';
    }
    else if(shareSection.classList.contains('show-container')){
        shareSection.classList.remove('show-container');
        shareSection.classList.add('remove-container');
        shareButton.classList.remove('change-bg')
        document.getElementById('share-icon').style.color = 'hsl(217, 19%, 35%)';
    }
})

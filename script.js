const stuff = document.querySelector('.counter')
const curtain = document.querySelector('.curtain')
const muse= document.querySelector('audio')

let count = 0 

function lemath()
{    
    count++;
    stuff.textContent =  count+'%';
	if(count>=101){
		count=undefined
		stuff.style.display='none'
	}
}

function begin()
{
    lemath();
	muse.play()
	curtain.classList.add('animate')
    setTimeout(begin, 80);
}


    

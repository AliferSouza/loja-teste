const navigator = document.querySelector('.navigation')

document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigator.classList.toggle('active');
}

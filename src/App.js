import { Context } from './components/Context.js'


const navigator = document.querySelector('.navigation')

document.querySelector('.toggle').onclick = function () {
    this.classList.toggle('active');
    navigator.classList.toggle('active');
}

           

//Mover o Menu quando em tela grande

const el = document.querySelector(".navigation");

let isResizing = false;

el.addEventListener("mousedown", mousedown);

function mousedown(e) {
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
        if (!isResizing) {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            const rect = el.getBoundingClientRect();

            el.style.left = rect.left - newX + "px";
            el.style.top = rect.top - newY + "px";

            prevX = e.clientX;
            prevY = e.clientY;
        }
    }

    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
}





const App = {
    start() {
        Context.render()
    }

}




export { App }


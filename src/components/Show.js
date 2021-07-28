const Show = {
    renderCards(posts) {
       let output = ''
        for (let post of posts) {
            output += `<div class="card">
            <img src="${post.src}" width="70" height="70">
            <h2>${post.Titulo}</h2>
            <br>
            <br>
            <a class="btn" href="${post.Link}">Adquirir</a>
        </div>`
        }
        document.querySelector('.conteiner-cards').innerHTML = output
    },
    carCards(cCards) {
        let output = ''
        for (let cCard of cCards) {
            output += ` <div class="rect-card">
            <img src="${cCard.src}" width="90" height="90">
            <div class="box-info">
                <h2>${cCard.Titulo}</h2>
                <br>
                <br>            
                <a class="btn-car" href="${cCard.Link}">Adquerir</a>
            </div>
        </div>
    `
        }
        document.querySelector('.rectangle-cards').innerHTML = output
    }
}

export {Show}

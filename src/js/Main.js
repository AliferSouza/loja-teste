import { Show } from './Show.js';


const Main = {       
    render() {
        const url = `dados.json`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.cards)
                Show.renderCards(data.Cards);
                Show.carCards(data.cCards);

            }).catch(e => {
                console.log("ERRO" + e)
            })

          
    }
}

export { Main }
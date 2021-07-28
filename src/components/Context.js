import { Header } from './Header.js';
import { Show } from './Show.js';
const Context = { 
  render() {

    const url = `dados.json`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                Show.renderCards(data.Cards);
                Show.carCards(data.cCards);

            }).catch(e => {
                console.log("ERRO" + e)
            })

            Header.render({}); 
    
  }
}
export { Context }
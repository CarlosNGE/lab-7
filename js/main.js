document.addEventListener("DOMContentLoaded", init);

function init() {

const randomeCard = () =>{
    let randome = Math.floor(Math.random()* 12549);

    //Fetching randome Yu-Gi-Oh Cards
    fetch ("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        .then(response => response.json())
        .then(cards => {
            

            const nameCard = document.createElement("h2");
            nameCard.textContent = cards.data[randome].name;

            const descCard = document.createElement("p");
            descCard.textContent = cards.data[randome].desc;

            let imgCard = document.createElement("img");
            imgCard.src = cards.data[randome].card_images[0].image_url;

            const cardElement = document.getElementById("yugiohcard");
            cardElement.innerHTML = "";
            
            cardElement.appendChild(nameCard);
            cardElement.appendChild(descCard);
            cardElement.appendChild(imgCard);

            console.log(cards.data[0].name);

        })
        .catch(err => {
            console.error(err.message);
        });

};

document.getElementById("cardButton").addEventListener("click", randomeCard);

}



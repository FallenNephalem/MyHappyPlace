import {show_cards_battle} from "./cards_battle_logic.js"

var card_path = "Assets/sprites/cards/"
var opponent_hand = []


export class CardsPoolManager {
    #cards = [
        "2Б.jpg", "2К.jpg", "2П.jpg", "2Ч.jpg",
        "3Б.jpg", "3К.jpg", "3П.jpg", "3Ч.jpg", 
        "4Б.jpg", "4К.jpg", "4П.jpg", "4Ч.jpg", 
        "5Б.jpg", "5К.jpg", "5П.jpg", "5Ч.jpg", 
        "6Б.jpg", "6П.jpg", "6Ч.jpg", "6К.jpg",
        "7Б.jpg", "7К.jpg", "7П.jpg", "7Ч.jpg", 
        "8Б.jpg", "8К.jpg", "8П.jpg", "8Ч.jpg", 
        "9Б.jpg", "9К.jpg", "9П.jpg", "9Ч.jpg",
        "10Б.jpg", "10К.jpg", "10П.jpg", "10Ч.jpg",
        "JБ.jpg", "JК.jpg", "JП.jpg", "JЧ.jpg", 
        "QБ.jpg", "QК.jpg", "QП.jpg", "QЧ.jpg",
        "KБ.jpg", "KК.jpg", "KП.jpg", "KЧ.jpg",
        "AБ.jpg", "AК.jpg", "AП.jpg", "AЧ.jpg",
        "JOKER_RED.jpg", "JOKER_BLACK.jpg",
    ];

    #draw_random_card() {
        let randomIndex = Math.floor(Math.random() * this.#cards.length);
        let card_name = this.#cards.splice(randomIndex, 1)[0];
        return card_name
    }

    generate_random_card() {
        let card_name = this.#draw_random_card()
    
        let card_image = `<img src="Assets/sprites/cards/${card_name}" alt="">`;
        let card = document.createElement("div");
        let layer_text;
        let cards_manager = this;
        card.classList.add("card_wrapper");
        card.innerHTML = card_image;
        card.addEventListener("mouseenter", function() {
            let enlargedCard = document.createElement("div");
            enlargedCard.classList.add("enlarged-card");
            enlargedCard.textContent = cards_manager.textContent;
            enlargedCard.style.display = "block";
            layer_text = document.getElementById("dark_layer_text");
            if (layer_text) {
                layer_text.innerHTML = "";
                let showed_card = card.cloneNode(true);
                showed_card.style.height = "40%";
                layer_text.appendChild(showed_card);
            }

        });
    
        card.addEventListener("mouseleave", function() {
            layer_text = document.getElementById("dark_layer_text");
            if (layer_text) {
                layer_text.innerHTML = "";
            }
        });

        card.addEventListener("click", function() {
            let first_go = true
            if (first_go) {
                show_cards_battle(card, cards_manager);
                console.log(card);
                console.log(card.clientWidth, card.clientHeight);
                // let stub = card.cloneNode(true);
                // stub.style.display = "none";
                let header = document.getElementsByTagName("header")[0];
                // header.prepend(stub);
            }

            // cards_manager.add_stub(card.clientWidth, card.clientHeight);
            // cards_manager.generate_player_card();
        });

        return card
    }
    generate_player_hand() {
        for (let i = 0; i < 5; i++) {
            this.generate_player_card();
        }
    }

    generate_player_card() {
        let header = document.getElementsByTagName("header")[0];
        header.prepend(this.generate_random_card());
    }

    generate_opponent_hand() {
        for (let i = 0; i < 5; i++) {
            opponent_hand.append(this.#draw_random_card())
        }
    }
    get_opponent_card() {
        let selected_card = opponent_hand.splice(Math.floor(Math.random() * 5), 1);
        opponent_hand.append(this.#draw_random_card())
        return selected_card
    }

    // add_stub(width, height) {
    //     let stub = document.createElement("div");
    //     stub.style.width = `20wh`;
    //     stub.style.height = `20vh`;
    //     let header = document.getElementsByTagName("header")[0];
    //     header.prepend(stub);
    // }
}
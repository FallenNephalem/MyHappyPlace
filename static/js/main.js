import {CardsPoolManager} from "./card_generator_engine.js"

function start_game(start_button, cards_manager) {
    set_washer_start_position(start_button);
    show_players_cards(cards_manager);
}

function set_washer_start_position(start_button) {
    start_button.parentNode.parentNode.remove();
    let washer = document.createElement("img");
    washer.src = "Assets/sprites/шайба.png";
    let washer_container = document.createElement("div");
    washer_container.classList.add("washer_start_position");
    washer_container.style.zIndex = 1;
    washer_container.appendChild(washer);
    let gridItem = document.querySelector('.grid_child');
    let computedStyle = window.getComputedStyle(gridItem);
    washer.style.maxWidth = computedStyle.getPropertyValue("width");
    washer.style.maxHeight = computedStyle.getPropertyValue("height");
    document.getElementsByTagName("body")[0].appendChild(washer_container);
}

function show_players_cards(cards_manager) {
    let header = document.getElementsByTagName("header")[0]
    let card = header.getElementsByClassName("card_wrapper")[0]
    let darkening_layer = document.createElement("div");
    darkening_layer.id = "dark_layer";
    darkening_layer.style.position = "absolute";
    darkening_layer.style.zIndex = 2;
    darkening_layer.style.backgroundColor = "rgba(0,0,0,0.5)";
    darkening_layer.style.height = "100%";
    darkening_layer.style.width = `${window.screen.width-card.clientWidth}px`;
    darkening_layer.style.left = `${parseFloat(card.clientWidth)}px`;


    let layer_text = document.createElement("h1");
    layer_text.id = "dark_layer_text";
    layer_text.innerText = "Это ваши карты. Наведите на одну из них.";
    layer_text.style.color = "#FFFFFF";
    layer_text.style.zIndex = 3;

    let main_left = document.getElementsByTagName("main")[0].getBoundingClientRect().left;

    layer_text.style.width = `${main_left-card.clientWidth}px`;
    layer_text.style.height = "100%";
    layer_text.style.padding = "0.3em";
    layer_text.style.display = "flex";
    layer_text.style.justifyContent = "center";
    layer_text.style.alignItems = "center";
    darkening_layer.appendChild(layer_text);
    document.getElementsByTagName("body")[0].appendChild(darkening_layer);
    
    cards = header.querySelectorAll(".card_wrapper");
    var cards = header.querySelectorAll(".card_wrapper");
    
}


let cards_manager = new CardsPoolManager();
cards_manager.generate_player_hand();

let runGameButton = document.getElementById("run_game_image");
runGameButton.addEventListener("click", function() {
    start_game(runGameButton, cards_manager);
})
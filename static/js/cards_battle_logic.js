export function show_cards_battle(card, cards_manager) {
    let header = document.getElementsByTagName("header")[0];
    let gameCanvas = document.getElementById("gameCanvas");
    let selectedCardsContainer = document.createElement("div");
    selectedCardsContainer.style.width = `${gameCanvas.clientWidth}px`;
    selectedCardsContainer.style.height = `${gameCanvas.clientHeight}px`;
    selectedCardsContainer.style.position = "absolute";
    selectedCardsContainer.style.zIndex = 5;
    selectedCardsContainer.style.left = `calc(50vw - ${gameCanvas.clientWidth}px/2)`;
    selectedCardsContainer.style.top = `calc(50vh - ${gameCanvas.clientHeight}px/2)`;
    document.getElementsByTagName("body")[0].appendChild(selectedCardsContainer);
    let dark_layer = document.getElementById("dark_layer");
    let battle_container = document.createElement("div");
    battle_container.style.height = "100%";
    battle_container.style.display = "flex";
    battle_container.style.justifyContent = "space-around";
    battle_container.style.alignItems = "center";
    card.style.width = "30%";
    card.style.height = "auto";
    battle_container.appendChild(card);
    let opponent_card = cards_manager.generate_random_card();
    opponent_card.style.width = "30%";
    opponent_card.style.height = "auto";
    
    battle_container.appendChild(opponent_card);
    document.getElementsByTagName("body")[0].appendChild(dark_layer);
    dark_layer.innerHTML = "";
    dark_layer.style.width = "100%";
    dark_layer.style.left = "0";
    selectedCardsContainer.appendChild(battle_container);

}

export function compare_cards(card, cards_manager) {
    
}
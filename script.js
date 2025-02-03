document.addEventListener("DOMContentLoaded", () => {
    console.log("Page chargée !");
    
    // Appliquer l'effet slide-in après le chargement
    setTimeout(() => {
        document.querySelectorAll(".slide-in").forEach(el => {
            el.style.animationDelay = "0.3s";
        });
    }, 300);
});

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Ajout au panier
function addToCart(productName) {
    let cartList = document.getElementById("cart-items");
    let listItem = document.createElement("li");
    listItem.textContent = productName;
    cartList.appendChild(listItem);
}
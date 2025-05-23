let inputing = document.getElementById('inputing');
let mostranding = document.getElementById('mostranding');

inputing.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        mostranding.innerText = inputing.value;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const compatibilityForm = document.getElementById("compatibility-form");
    const compatibilityResult = document.getElementById("compatibility-result");

    compatibilityForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtiene las especificaciones ingresadas por el usuario
        const cpu = document.getElementById("cpu").value;
        const gpu = document.getElementById("gpu").value;
        const ram = parseInt(document.getElementById("ram").value);
        const selectedGame = document.getElementById("game").value;

        // Lógica para verificar la compatibilidad con el juego seleccionado
        const isCompatible = verificarCompatibilidad(selectedGame, cpu, gpu, ram);

        // Muestra el resultado de compatibilidad
        if (isCompatible) {
            compatibilityResult.textContent = "¡Tu PC es compatible con el juego!";
        } else {
            compatibilityResult.textContent = "Tu PC no cumple con los requisitos del juego.";
        }
    });

    // Función para verificar la compatibilidad con el juego (agrega tus propias lógicas)
    function verificarCompatibilidad(juego, cpu, gpu, ram) {
        // Aquí puedes agregar tus propias lógicas para verificar la compatibilidad con cada juego
        // Por ejemplo, puedes comparar las especificaciones con los requisitos del juego y retornar true o false.
        // Aquí un ejemplo simple:
        if (juego === "spider-man-remastered" && cpu === "Intel i5" && gpu === "NVIDIA GTX 1060" && ram >= 8) {
            return true;
        } else if (juego === "csgo 2" && cpu === "Intel i7" && gpu === "NVIDIA RTX 2070" && ram >= 16) {
            return true;
        } else if (juego === "Cyberpunk2077" && cpu === "Intel i9" && gpu === "NVIDIA RTX 3080" && ram >= 32) {
            return true;
        } else {
            return false;
        }
    }
});

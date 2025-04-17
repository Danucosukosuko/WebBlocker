//Blocker 14.5.2023
//  ____  _            _               __ _  _   _____  ___   ___ ___  ____  
// |  _ \| |          | |             /_ | || | | ____||__ \ / _ \__ \|___ \ 
// | |_) | | ___   ___| | _____ _ __   | | || |_| |__     ) | | | | ) | __) |
// |  _ <| |/ _ \ / __| |/ / _ \ '__|  | |__   _|___ \   / /| | | |/ / |__ < 
// | |_) | | (_) | (__|   <  __/ |     | |  | |_ ___) | / /_| |_| / /_ ___) |
// |____/|_|\___/ \___|_|\_\___|_|     |_|  |_(_)____(_)____|\___/____|____/ 
                                                                           
                                                                           

(function() {
    'use strict';

    // El puerto 8881 de 127.0.0.1 también será bloqueado, por que fue el puerto de testeos

    // Obtener una referencia al elemento body
    const body = document.body;

    // Esta siguiente línea es el contenido de la web una vez borrada.
    const webcontent = "<h1>No se puede acceder al sitio webb. Posibles causas: El sitio web se ha considerado inseguro o tiene virus.</h1><h1>Te recomendamos que vuelvas a tu página anterior</h1><h1>Si quiere contribuir a alguna web, vete a esta URL: https://github.com/Danucosukosuko/WebBlocker</h1><img src='https://w7.pngwing.com/pngs/571/181/png-transparent-warning-sign-safety-alerte-angle-triangle-warning-sign.png' style='width: 512px; height: 256px;'>";

    // Guardar el contenido original de la web en una cookie
    document.cookie = "webcontent=" + encodeURIComponent(body.innerHTML) + "; path=/";

    // Establecer el contenido de la web
    body.innerHTML = webcontent;

    // Cambiar el título de la página
    document.title = "ACCESO DENEGADO";

    // Agregar un enlace para restaurar el contenido original de la web
    const restoreLink = document.createElement("a");
    restoreLink.href = "#";
    restoreLink.innerHTML = "Haga clic si quiere mostrar la web bloqueada. (BETA)";
    restoreLink.onclick = function() {
        // Pedir credenciales de sudo
        const password = prompt("Por favor, ingrese la contraseña de sudo:");
        if (password === "2025") {
            // Obtener el contenido de la cookie y establecerlo como el nuevo contenido de la web
            const decodedContent = decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)webcontent\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
            body.innerHTML = decodedContent;
            // Borrar la cookie
            document.cookie = "webcontent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } else {
            alert("Contraseña incorrecta.");
        }
        return false;
    };
    body.appendChild(restoreLink);
})();

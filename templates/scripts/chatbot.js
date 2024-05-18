document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const optionsContainer = document.getElementById('options');

    const conversations = {
        start: {
            message: "Bienvenido a la NOTARÍA TUCCIO, ¿en qué podemos ayudar?",
            options: [
                { text: "¿Qué servicios ofrece la notaría?", next: "servicios" },
                { text: "¿Qué documentos necesito llevar para un proceso", next: "abilities" },
                { text: "¿Cuánto tiempo tarda un proceso", next: "servicios" }
            ]
        },
        servicios: {
            message: "Puede ver información detallada de cada servicio en la pagina de servicios",
            options: [
                { text: "ir a la sección", next: "abilities" },
                { text: "Volver", next: "start" }
            ]
        },
        name: {
            message: "respuesta generica en mantenimiento",
            options: [
                { text: "¿Qué más puedes hacer?", next: "abilities" },
                { text: "Volver", next: "start" }
            ]
        },
        abilities: {
            message: "respuesta generica en mantenimiento",
            options: [
                { text: "¿Quien eres?", next: "name" },
                { text: "Volver", next: "start" }
            ]
        },
        goodbye: {
            message: "respuesta generica en mantenimiento",
            options: []
        }
    };

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function showOptions(options) {
        optionsContainer.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = option.text;
            button.onclick = () => {
                addMessage(option.text, 'user');
                setTimeout(() => {
                    handleConversation(option.next);
                }, 500);
            };
            optionsContainer.appendChild(button);
        });
    }

    function handleConversation(step) {
        const conversation = conversations[step];
        addMessage(conversation.message, 'bot');
        if (conversation.options.length > 0) {
            showOptions(conversation.options);
        } else {
            optionsContainer.innerHTML = '';
        }
    }

    handleConversation('start');
});

function abrir_chat() {
    var caja_chat = document.getElementById("contenedor_chat");
    var boton_chat = document.getElementById("abrir_chat");

    caja_chat.style.display = "flex";
    boton_chat.style.display = "none";
}
function cerrar_chat() {
    var caja_chat = document.getElementById("contenedor_chat");
    var boton_chat = document.getElementById("abrir_chat");

    caja_chat.style.display = "none";
    boton_chat.style.display = "flex";
}
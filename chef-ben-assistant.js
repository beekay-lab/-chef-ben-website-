document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("cbAiToggle");
    const box = document.getElementById("cbAiBox");
    const input = document.getElementById("cbAiInput");
    const send = document.getElementById("cbAiSend");
    const messages = document.getElementById("cbAiMsg");

    if (!toggle || !box || !input || !send || !messages) {
        console.error("Chef Ben Assistant: required elements not found.");
        return;
    }

    toggle.addEventListener("click", function () {
        box.style.display = box.style.display === "block" ? "none" : "block";
        if (box.style.display === "block") input.focus();
    });

    function getAnswer(question) {
        const q = question.toLowerCase();

        if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
            return "Hello! Welcome to Chef Ben. How can I help you today?";
        }

        if (q.includes("private chef") || q.includes("personal chef")) {
            return "Chef Ben offers private chef services for homes, Airbnb stays, private dinners and special occasions.";
        }

        if (q.includes("catering") || q.includes("event") || q.includes("wedding") || q.includes("corporate")) {
            return "Chef Ben provides catering for weddings, events, corporate functions, celebrations and private occasions.";
        }

        if (q.includes("book") || q.includes("booking") || q.includes("hire") || q.includes("reservation")) {
            return "You can book Chef Ben by completing the Book Chef Ben form on this website. Your enquiry will be sent directly to Chef Ben on WhatsApp.";
        }

        if (q.includes("ktn") || q.includes("pika")) {
            return "Chef Ben has been featured on KTN's Pika. You can also watch the Chef Ben videos on this website.";
        }

        if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("charge")) {
            return "Chef Ben's pricing depends on the service, number of guests, location and event requirements. Please send a booking enquiry for a quotation.";
        }

        if (q.includes("food") || q.includes("menu") || q.includes("cuisine") || q.includes("cook")) {
            return "Chef Ben can discuss your preferred menu, cuisine and event requirements. Use the booking form to send your details.";
        }

        if (q.includes("contact") || q.includes("whatsapp") || q.includes("phone")) {
            return "You can contact Chef Ben through WhatsApp using the Book Chef Ben form on this website.";
        }

        return "I can help with Chef Ben's private chef services, catering, weddings, events, bookings, pricing enquiries and KTN feature. What would you like to know?";
    }

    function addMessage(text, type) {
        const message = document.createElement("div");
        message.className = "cb-msg " + type;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }

    function sendMessage() {
        const question = input.value.trim();

        if (!question) return;

        addMessage(question, "cb-user");
        input.value = "";

        setTimeout(function () {
            addMessage(getAnswer(question), "cb-bot");
        }, 250);
    }

    send.addEventListener("click", sendMessage);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

    console.log("Chef Ben Assistant loaded successfully.");
});

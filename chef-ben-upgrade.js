(function () {

    /* Chef Ben official WhatsApp number */
    const whatsappNumber = "254729582460";

    /* ---------------- BOOKING FORM ---------------- */

    const bookingForm = document.getElementById("chefBenBookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("cbName").value.trim();
            const phone = document.getElementById("cbPhone").value.trim();
            const email = document.getElementById("cbEmail").value.trim();
            const date = document.getElementById("cbDate").value;
            const service = document.getElementById("cbService").value;
            const guests = document.getElementById("cbGuests").value;
            const location = document.getElementById("cbLocation").value.trim();
            const message = document.getElementById("cbMessage").value.trim();

            const text =
`CHEF BEN WEBSITE BOOKING ENQUIRY

Name: ${name}
Phone / WhatsApp: ${phone}
Email: ${email || "Not provided"}
Service: ${service}
Event Date: ${date || "Not specified"}
Number of Guests: ${guests || "Not specified"}
Location: ${location || "Not specified"}

Event Details:
${message || "No additional details provided."}`;

            const url =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(text);

            window.open(url, "_blank");
        });
    }

    /* ---------------- CHEF BEN ASSISTANT ---------------- */

    const toggle = document.getElementById("cbAiToggle");
    const box = document.getElementById("cbAiBox");
    const input = document.getElementById("cbAiInput");
    const send = document.getElementById("cbAiSend");
    const messages = document.getElementById("cbAiMessages");

    if (!toggle || !box || !input || !send || !messages) return;

    toggle.addEventListener("click", function () {
        box.style.display =
            box.style.display === "block" ? "none" : "block";

        if (box.style.display === "block") input.focus();
    });

    function addMessage(text, type) {

        const div = document.createElement("div");

        div.className =
            "cb-ai-message " +
            (type === "user" ? "cb-ai-user" : "cb-ai-bot");

        div.textContent = text;

        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function answer(question) {

        const q = question.toLowerCase();

        if (q.includes("private chef") ||
            q.includes("personal chef") ||
            q.includes("home chef")) {

            return "Chef Ben offers Private Chef services, bringing personalized culinary experiences to homes, private events and special occasions.";
        }

        if (q.includes("catering") ||
            q.includes("event") ||
            q.includes("wedding")) {

            return "Chef Ben provides catering for events and special occasions. Use the Book Chef Ben form to send your requirements.";
        }

        if (q.includes("book") ||
            q.includes("booking") ||
            q.includes("reserve")) {

            return "You can book Chef Ben using the booking form on this website. Your enquiry will be prepared and sent directly to Chef Ben's WhatsApp.";
        }

        if (q.includes("ktn") ||
            q.includes("pika") ||
            q.includes("tv") ||
            q.includes("television")) {

            return "Chef Ben has been featured on KTN's Pika cooking programme. You can also watch his featured videos on this website.";
        }

        if (q.includes("price") ||
            q.includes("cost") ||
            q.includes("charge") ||
            q.includes("how much")) {

            return "Chef Ben's pricing depends on the service, event requirements, guest numbers, location and menu. Please submit a booking enquiry so Chef Ben can review your requirements.";
        }

        if (q.includes("menu") ||
            q.includes("food") ||
            q.includes("cuisine")) {

            return "Chef Ben can discuss a menu based on your occasion, guests and culinary preferences. Send a booking enquiry to get started.";
        }

        if (q.includes("hello") ||
            q.includes("hi") ||
            q.includes("hey")) {

            return "Hello! 👋 How can I help you with Chef Ben's services today?";
        }

        return "I can help you with Chef Ben's Private Chef services, catering, bookings, menus and KTN/Pika feature. What would you like to know?";
    }

    function sendQuestion() {

        const question = input.value.trim();

        if (!question) return;

        addMessage(question, "user");
        input.value = "";

        setTimeout(function () {
            addMessage(answer(question), "bot");
        }, 200);
    }

    send.addEventListener("click", sendQuestion);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendQuestion();
        }
    });

})();

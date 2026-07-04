const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                "Accept": "application/json"
            }
        });

        const result = await response.text();
        console.log("Status:", response.status);
        console.log("Response:", result);

        if (response.ok) {
            status.textContent = "✅ Message sent successfully!";
            status.style.color = "green";
            form.reset();
        } else {
            status.textContent = result;
            status.style.color = "red";
        }
    } catch (error) {
        console.error(error);
        status.textContent = "❌ Something went wrong.";
    }
});
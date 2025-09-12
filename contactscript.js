document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");
  // 
  const toastLiveExample = document.getElementById('liveToast');
  const toastBody = document.getElementById('toastcontent');
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Step 1: Build JSON object
    let jsonData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      message: messageInput.value.trim()
    };

    // Step 2: Send JSON to Formspree
    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(jsonData)
      });

      if (response.ok) {
        // alert("✅ Message sent successfully!");

        const userName = nameInput.value.trim() || "Guest";
        toastBody.textContent = `Hello ${userName}, your message was sent!`;

        toastBootstrap.show();
        console.log("✅ Toast should show now");
        form.reset();
      } else {

        // alert("❌ Error: Unable to send message.");
        toastBody.textContent = `❌ Error: Unable to send message.`;
        toastBootstrap.show();
        console.log("✅ Toast should show now");
      }
    } catch (error) {
      // alert("⚠️ Network error. Please try again later.");
      toastBody.textContent = `⚠️ Network error. Please try again later.`;
      toastBootstrap.show();
      console.log("✅ Toast should show now");
    }
  });
});

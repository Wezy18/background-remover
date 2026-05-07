const imageInput = document.getElementById("imageInput");
const removeBtn = document.getElementById("removeBtn");
const resultImage = document.getElementById("resultImage");
const downloadLink = document.getElementById("downloadLink");
const imageBtn = document.getElementById("imageBtn");

imageBtn.addEventListener("click", () => {
  imageInput.click();
});

removeBtn.addEventListener("click", async () => {
  const file = imageInput.files[0];

  if (!file) {
    alert("Please select an image first.");
    return;
  }

  try {
    removeBtn.textContent = "Removing...";

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      "https://background-remover-999520341103.us-central1.run.app/remove-bg",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to remove background.");
    }

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    resultImage.src = imageUrl;
    resultImage.style.display = "block";

    downloadLink.href = imageUrl;
    downloadLink.style.display = "inline-block";
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    removeBtn.textContent = "Remove Background";
  }
});
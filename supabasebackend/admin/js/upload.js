const uploadForm = document.getElementById("uploadForm");
const mediaFile = document.getElementById("mediaFile");
const uploadStatus = document.getElementById("uploadStatus");

uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const file = mediaFile.files[0];

  if (!file) {
    uploadStatus.textContent = "Please choose a file.";
    return;
  }

  // Decide whether it's a photo or video
  const folder = file.type.startsWith("image/") ? "photos" : "videos";

    const filePath = `${folder}/${Date.now()}_${file.name}`;
    

  uploadStatus.textContent = "Uploading...";

  const { error } = await supabaseClient.storage
    .from("church-media")
    .upload(filePath, file);

  if (error) {
    console.log(error);
    console.log(JSON.stringify(error, null, 2));
    alert(JSON.stringify(error, null, 2));
    uploadStatus.textContent = error.message;
    return;
  }

  uploadStatus.textContent = "✅ Upload successful!";
  uploadForm.reset();
});
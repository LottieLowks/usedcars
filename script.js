// basic helpers for "Apply" behavior and last-updated text
function openApply(vehicle){
  // open the Google Form (easy option) and prefill the vehicle name if your form supports it
  // Replace the URL below with your Google Form link.
  const formURL = "https://forms.gle/PUT-YOUR-GOOGLE-FORM-LINK-HERE";
  window.open(formURL, "_blank");
}

// add last updated date
document.addEventListener("DOMContentLoaded", () => {
  const d = new Date().toLocaleDateString();
  const ids = ["update-date","update-date-inv","update-date-about"];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.innerText = "Last updated: " + d;
  });
});


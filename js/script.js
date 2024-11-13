function copyText(textAreaId) {
  var text = document.getElementById(textAreaId).value;
  if (text.trim() === "") {
    alert("Write something first.");
  } else {
    navigator.clipboard.writeText(text).then(function() {
      alert("Text copied successfully!");
    }).catch(function(err) {
      console.error("Could not copy text: ", err);
    });
  }
}

function sendText(textAreaId) {
  var text = document.getElementById(textAreaId).value;
  if (text.trim() === "") {
    alert("Write something first.");
  } else {
    alert("Text sent successfully!");
  }
}
// -------------------------------------------------------------------------------------------------- //
document.getElementById('sendButton').addEventListener('mouseleave', function() {
  var btn = document.getElementById('sendButton');
  var tooltip = bootstrap.Tooltip.getInstance(btn);
  if (tooltip) {
    tooltip.hide();
  }
  btn.setAttribute("data-bs-original-title", "send to clipboard");
  new bootstrap.Tooltip(btn);
});

document.getElementById('copyButton').addEventListener('mouseleave', function() {
  var btn = document.getElementById('copyButton');
  var tooltip = bootstrap.Tooltip.getInstance(btn);
  if (tooltip) {
    tooltip.hide();
  }
  btn.setAttribute("data-bs-original-title", "copy to clipboard");
  new bootstrap.Tooltip(btn);
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
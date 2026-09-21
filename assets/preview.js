function preview() {
  const content = `
    <html>
    <head>
    <style>${document.getElementById("css").value}</style>
    </head>
    <body>
    ${document.getElementById("html").value}
    </body>
    </html>
  `;
  document.getElementById("output").srcdoc = content;
}
html.addEventListener("input", preview);
css.addEventListener("input", preview);
(() => {
  const $canvas = document.querySelector("#black-hole");
  if (!$canvas.getContext) return;

  const ctx = $canvas.getContext("2d");
  const radgrad = ctx.createRadialGradient(200, 200, 0, 200, 200, 90);
  radgrad.addColorStop(0, "#fff");
  radgrad.addColorStop(0.6, "#F1EEE4");
  radgrad.addColorStop(0.65, "#E7E3D0");
  radgrad.addColorStop(0.7, "#F1EDDC");
  radgrad.addColorStop(0.8, "#EFD29C");
  radgrad.addColorStop(0.85, "#D6AF7C");
  radgrad.addColorStop(1, "#C88342");

  ctx.beginPath();
  ctx.arc(200, 200, 176 / 2, 0, Math.PI * 2);
  ctx.strokeStyle = "#BD7131";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(200, 200, 172 / 2, 0, Math.PI * 2);
  ctx.fillStyle = radgrad;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(200, 200, 112 / 2, 0, 2 * Math.PI, true);
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(200, 200, 118 / 2, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 8;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(200, 200, 84 / 2, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 5;
  ctx.stroke();

  // ctx.beginPath();
  // ctx.ellipse(200, 200, 180, 50, Math.PI * 0.86, 0, Math.PI * 2);
  // ctx.fillStyle = "#fff";
  // ctx.fill();
})();

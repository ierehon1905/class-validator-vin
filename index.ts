console.log("Hello");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");

const spikes = Array.from(
  document.getElementsByClassName("spike")
) as HTMLDivElement[];

for (const spike of spikes) {
  spike.style.width = (Math.random() + 1) * 10 + "px";
  spike.style.height = Math.random() * 100 + "px";

  //   spike.style.top = Math.random() * 100 + "%";
  spike.style.top = "100%";
  spike.style.left = Math.random() * 100 + "%";
  spike.style.transformOrigin = "top center";
  const deg = Math.random() > 0.5 ? 0 : 90;

  //   spike.style.transform = "translate(-50%, -50%) rotate(" + deg + "deg)";
}

// Make the DIV element draggable:
dragElement(lower);
let pos3 = 0,
  pos4 = 0;

function dragElement(elmnt) {
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e: MouseEvent) {
    e = e;
    e.preventDefault();
    // get the mouse cursor position at startup:
    const { x, y } = e.currentTarget.getBoundingClientRect();

    pos3 = e.clientX - x;
    pos4 = e.clientY - y;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: DragEvent) {
    e.preventDefault();

    elmnt.style.transform =
      "translate(" + (e.clientX - pos3) + "px," + (e.clientY - pos4) + "px)";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const RAD = 200;

function updateSpikes() {
  const { x, y, width, height } = lower.getBoundingClientRect();
  const {
    y: uY,
    height: uHeight,
    x: uX,
    width: uWidth,
  } = upper.getBoundingClientRect();
  //   console.log({ height });

  //   let scale = 10 / (y - (uY + height));
  const d =
    Math.abs(y - 20 - (uY + uHeight + 20)) +
    Math.abs(x + width / 2 - uX - uWidth / 2);
  let scale = Math.exp(-Math.pow(d / 200, 2));
  scale = Math.min(Math.max(0, scale), 1);
  //   console.log({ scale });

  for (const spike of spikes) {
    spike.style.transform = ` scaleY(${scale})`;
  }
}

const autoMove: FrameRequestCallback = (time) => {
  requestAnimationFrame(autoMove);
  const t = time / 1000;
  lower.style.transform =
    "translate(calc(50vw - 50% + " +
    RAD * Math.cos(t) +
    "px),calc(50vh - 50% + " +
    RAD * Math.sin(t) +
    "px))";
};

// autoMove(0);

const autoJump: FrameRequestCallback = (time) => {
  requestAnimationFrame(autoJump);
  updateSpikes();
  const t = time / 600;
  lower.style.transform =
    "translate(calc(50vw - 50%), calc(50vh - 50% + 250px + " +
    100 * Math.cos(t) +
    "px))";
};
// autoJump(0);

const justScale: FrameRequestCallback = (time) => {
  requestAnimationFrame(justScale);
  updateSpikes();
};
justScale(0);

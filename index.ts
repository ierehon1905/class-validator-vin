console.log("Hello");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");

// Make the DIV element draggable:
dragElement(lower);

function dragElement(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
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

autoMove(0);

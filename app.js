// ═══════════════════════════════════════════════════════════════════════════
// ★ CONFIGURATION — edit this section only
// ═══════════════════════════════════════════════════════════════════════════

const BRAND_COLORS = [
  "#f6d1cb",
  "#f0ce5b",
  "#3351c6",
  "#c2221b",
  "#1c7b1c",
  "#d77326",
  "#FFFFFF",
];

// Dark ink default — also offered as a text colour option
const DEFAULT_TEXT_COLOR = "#2c2420";

const FACE_OPTIONS = [
  { id: "fair",     src: "images/face-fair.png",     color: "#FDDBB4", label: "Fair"     },
  { id: "honey",    src: "images/face-honey.png",    color: "#C47B3A", label: "Honey"    },
  { id: "chestnut", src: "images/face-chestnut.png", color: "#4A2C0A", label: "Chestnut" },
];

const HAIR_COLORS = [
  { id: "black",  color: "#000000", label: "Black"  },
  { id: "brown",  color: "#8F5A28", label: "Brown"  },
  { id: "blonde", color: "#F5D532", label: "Blonde" },
  { id: "grey",   color: "#AAAAAA", label: "Grey"   },
  { id: "red",    color: "#B93A1A", label: "Red"    },
];

const HAIR_OPTIONS = [
  { id: "h1",  color: "black",  src: "images/hair-black-1.png",  label: "Style 1" },
  { id: "h2",  color: "black",  src: "images/hair-black-2.png",  label: "Style 2" },
  { id: "h3",  color: "black",  src: "images/hair-black-3.png",  label: "Style 3" },
  { id: "h4",  color: "black",  src: "images/hair-black-4.png",  label: "Style 4" },
  { id: "h5",  color: "black",  src: "images/hair-black-5.png",  label: "Style 5" },
  { id: "h6",  color: "black",  src: "images/hair-black-6.png",  label: "Style 6" },
  { id: "h7",  color: "brown",  src: "images/hair-brown-1.png",  label: "Style 1" },
  { id: "h8",  color: "brown",  src: "images/hair-brown-2.png",  label: "Style 2" },
  { id: "h9",  color: "brown",  src: "images/hair-brown-3.png",  label: "Style 3" },
  { id: "h10", color: "brown",  src: "images/hair-brown-4.png",  label: "Style 4" },
  { id: "h11", color: "brown",  src: "images/hair-brown-5.png",  label: "Style 5" },
  { id: "h12", color: "brown",  src: "images/hair-brown-6.png",  label: "Style 6" },
  { id: "h13", color: "blonde", src: "images/hair-blonde-1.png", label: "Style 1" },
  { id: "h14", color: "blonde", src: "images/hair-blonde-2.png", label: "Style 2" },
  { id: "h15", color: "blonde", src: "images/hair-blonde-3.png", label: "Style 3" },
  { id: "h16", color: "blonde", src: "images/hair-blonde-4.png", label: "Style 4" },
  { id: "h17", color: "blonde", src: "images/hair-blonde-5.png", label: "Style 5" },
  { id: "h18", color: "blonde", src: "images/hair-blonde-6.png", label: "Style 6" },
  { id: "h19", color: "grey",   src: "images/hair-grey-1.png",   label: "Style 1" },
  { id: "h20", color: "grey",   src: "images/hair-grey-2.png",   label: "Style 2" },
  { id: "h21", color: "grey",   src: "images/hair-grey-3.png",   label: "Style 3" },
  { id: "h22", color: "grey",   src: "images/hair-grey-4.png",   label: "Style 4" },
  { id: "h23", color: "grey",   src: "images/hair-grey-5.png",   label: "Style 5" },
  { id: "h24", color: "grey",   src: "images/hair-grey-6.png",   label: "Style 6" },
  { id: "h25", color: "red",    src: "images/hair-red-1.png",    label: "Style 1" },
  { id: "h26", color: "red",    src: "images/hair-red-2.png",    label: "Style 2" },
  { id: "h27", color: "red",    src: "images/hair-red-3.png",    label: "Style 3" },
  { id: "h28", color: "red",    src: "images/hair-red-4.png",    label: "Style 4" },
  { id: "h29", color: "red",    src: "images/hair-red-5.png",    label: "Style 5" },
  { id: "h30", color: "red",    src: "images/hair-red-6.png",    label: "Style 6" },
];

const CLOTHES_OPTIONS = [
  { id: "c1",  src: "images/outfit-1.png",  label: "Outfit 1"  },
  { id: "c2",  src: "images/outfit-2.png",  label: "Outfit 2"  },
  { id: "c3",  src: "images/outfit-3.png",  label: "Outfit 3"  },
  { id: "c4",  src: "images/outfit-4.png",  label: "Outfit 4"  },
  { id: "c5",  src: "images/outfit-5.png",  label: "Outfit 5"  },
  { id: "c6",  src: "images/outfit-6.png",  label: "Outfit 6"  },
  { id: "c7",  src: "images/outfit-7.png",  label: "Outfit 7"  },
  { id: "c8",  src: "images/outfit-8.png",  label: "Outfit 8"  },
  { id: "c9",  src: "images/outfit-9.png",  label: "Outfit 9"  },
  { id: "c10", src: "images/outfit-10.png", label: "Outfit 10" },
  { id: "c11", src: "images/outfit-11.png", label: "Outfit 11" },
  { id: "c12", src: "images/outfit-12.png", label: "Outfit 12" },
];

const ACCESSORY_OPTIONS = [
  { id: "a1",   src: "images/acc-1.png",  label: "Style 1" },
  { id: "a2",   src: "images/acc-2.png",  label: "Style 2" },
  { id: "none", src: null,                label: "None"    },
];

// ★ Print canvas size — portrait 2:3 at 150dpi, A5 (148×210mm)
// 148mm × 210mm at 150dpi = 874 × 1240 px
const PRINT_W = 874;
const PRINT_H = 1240;

// ═══════════════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════════════
const state = {
  bgColor:    BRAND_COLORS[0],
  face:       FACE_OPTIONS[0].id,
  hairColor:  HAIR_COLORS[0].id,
  hair:       HAIR_OPTIONS[0].id,
  clothes:    CLOTHES_OPTIONS[0].id,
  accessory:  "none",
  recipient:  "",
  message:    "",
  textColor:  DEFAULT_TEXT_COLOR,
};

// ═══════════════════════════════════════════════════════════════════════════
// DOM REFS
// ═══════════════════════════════════════════════════════════════════════════
const portraitWrap    = document.getElementById("portrait-wrap");
const layerFace       = document.getElementById("layer-face");
const layerClothes    = document.getElementById("layer-clothes");
const layerHair       = document.getElementById("layer-hair");
const layerAcc        = document.getElementById("layer-acc");
const recipientText   = document.getElementById("recipient-text");
const messageText     = document.getElementById("message-text");
const recipientInput  = document.getElementById("recipient-input");
const messageInput    = document.getElementById("message-input");
const saveBtn         = document.getElementById("save-btn");
const resetBtn        = document.getElementById("reset-btn");

// ═══════════════════════════════════════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════════════════════════════════════
function render() {
  // Background
  portraitWrap.style.background = state.bgColor;

  // Face
  const face = FACE_OPTIONS.find(f => f.id === state.face);
  if (face?.src) { layerFace.src = face.src; layerFace.style.display = "block"; }

  // Clothes
  const clothes = CLOTHES_OPTIONS.find(c => c.id === state.clothes);
  if (clothes?.src) { layerClothes.src = clothes.src; layerClothes.style.display = "block"; }
  else { layerClothes.style.display = "none"; }

  // Hair
  const hair = HAIR_OPTIONS.find(h => h.id === state.hair);
  if (hair?.src) { layerHair.src = hair.src; layerHair.style.display = "block"; }
  else { layerHair.style.display = "none"; }

  // Accessory
  const acc = ACCESSORY_OPTIONS.find(a => a.id === state.accessory);
  if (state.accessory !== "none" && acc?.src) { layerAcc.src = acc.src; layerAcc.style.display = "block"; }
  else { layerAcc.style.display = "none"; }

  // Text colour
  recipientText.setAttribute("fill", state.textColor);
  messageText.setAttribute("fill", state.textColor);

  // Recipient name — Lora, 16px preview (scales to canvas at print time)
  const recipientVal = state.recipient ? state.recipient.toUpperCase() : "";
  recipientText.textContent = recipientVal;

  // Shrink recipient to fit if needed
  setTimeout(() => {
    const w = portraitWrap.offsetWidth;
    const h = portraitWrap.offsetHeight;
    if (!w || !h) return;
    const maxWidth = Math.round(w * 0.82);
    let rSize = Math.round(h * 0.022); // ~16px equivalent at preview scale
    recipientText.setAttribute("font-size", rSize);
    recipientText.removeAttribute("textLength");
    while (recipientText.getComputedTextLength() > maxWidth && rSize > 8) {
      rSize -= 1;
      recipientText.setAttribute("font-size", rSize);
    }
  }, 50);

  // Message — De Lionist, starts large, shrinks to fit
  const msgVal = state.message || "";
  messageText.textContent = msgVal;

  setTimeout(() => {
    const w = portraitWrap.offsetWidth;
    const h = portraitWrap.offsetHeight;
    if (!w || !h) return;
    const maxWidth = Math.round(w * 0.82);
    let mSize = Math.round(h * 0.09); // proportional to 64px on 877px canvas
    messageText.setAttribute("font-size", mSize);
    messageText.removeAttribute("textLength");
    const minSize = Math.round(h * 0.045); // proportional to 32px
    while (messageText.getComputedTextLength() > maxWidth && mSize > minSize) {
      mSize -= 1;
      messageText.setAttribute("font-size", mSize);
    }
  }, 50);
}

// ═══════════════════════════════════════════════════════════════════════════
// BUILD THUMB GRID
// ═══════════════════════════════════════════════════════════════════════════
function buildThumbGrid(containerId, options, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "thumb-btn" + (opt.id === "none" ? " none-btn" : "");
    btn.dataset.id = opt.id;
    updateThumbStyle(btn, opt.id, getSelected());

    if (opt.id === "none") {
      const x = document.createElement("span");
      x.style.cssText = "font-size:22px;opacity:0.3";
      x.textContent = "✕";
      btn.appendChild(x);
    } else if (opt.src) {
      const img = document.createElement("img");
      img.alt = opt.label;
      img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block";
      img.onerror = () => { img.replaceWith(makePlaceholderLabel(opt.label)); };
      img.src = opt.src;
      btn.appendChild(img);
    } else {
      btn.appendChild(makePlaceholderLabel(opt.label));
    }

    btn.addEventListener("click", () => {
      onSelect(opt.id);
      render();
      container.querySelectorAll(".thumb-btn").forEach(b => {
        updateThumbStyle(b, b.dataset.id, getSelected());
      });
    });
    container.appendChild(btn);
  });
}

function makePlaceholderLabel(label) {
  const span = document.createElement("span");
  span.className = "thumb-label";
  span.textContent = label;
  return span;
}

function updateThumbStyle(btn, id, selected) {
  const isSelected = id === selected;
  btn.classList.toggle("selected", isSelected);
  btn.style.borderColor = isSelected ? "#9a8a78" : "#e8ddd0";
  btn.style.borderWidth  = isSelected ? "3px" : "2px";
  btn.style.boxShadow    = isSelected ? "none" : "0 2px 8px rgba(0,0,0,0.07)";
}

// ═══════════════════════════════════════════════════════════════════════════
// SPECIALISED BUILDERS
// ═══════════════════════════════════════════════════════════════════════════

function buildFaceGrid(containerId, options, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "face-btn" + (getSelected() === opt.id ? " selected" : "");
    btn.dataset.id = opt.id;
    if (opt.src) {
      const img = document.createElement("img");
      img.src = opt.src; img.alt = opt.label;
      img.onerror = () => { btn.style.background = opt.color; };
      btn.appendChild(img);
    } else {
      btn.style.background = opt.color;
    }
    const tick = document.createElement("div");
    tick.className = "thumb-tick";
    tick.style.display = getSelected() === opt.id ? "flex" : "none";
    btn.appendChild(tick);
    btn.addEventListener("click", () => {
      onSelect(opt.id); render();
      container.querySelectorAll(".face-btn").forEach(b => {
        const isSel = b.dataset.id === getSelected();
        b.classList.toggle("selected", isSel);
        b.querySelector(".thumb-tick").style.display = isSel ? "flex" : "none";
      });
    });
    container.appendChild(btn);
  });
}

function buildHairColorRow(containerId, options, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "haircolor-btn" + (getSelected() === opt.id ? " selected" : "");
    btn.dataset.id = opt.id;
    btn.style.background = opt.color;
    if (opt.color === "#000000") btn.style.border = "2px solid #555";
    btn.title = opt.label;
    btn.addEventListener("click", () => {
      onSelect(opt.id);
      container.querySelectorAll(".haircolor-btn").forEach(b => {
        b.classList.toggle("selected", b.dataset.id === getSelected());
      });
    });
    container.appendChild(btn);
  });
}

function buildTextColorRow(containerId, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  // Dark ink default + brand colours
  const allColors = [DEFAULT_TEXT_COLOR, ...BRAND_COLORS];
  allColors.forEach(color => {
    const btn = document.createElement("button");
    btn.className = "namecolor-btn" + (getSelected() === color ? " selected" : "");
    btn.dataset.color = color;
    btn.textContent = "A";
    btn.style.color = color;
    if (color === "#FFFFFF") btn.style.textShadow = "0 0 0 1px #ddd";
    btn.addEventListener("click", () => {
      onSelect(color); render();
      container.querySelectorAll(".namecolor-btn").forEach(b => {
        b.classList.toggle("selected", b.dataset.color === getSelected());
      });
    });
    container.appendChild(btn);
  });
}

function buildBgColorGrid(containerId, colors, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  colors.forEach(color => {
    const btn = document.createElement("button");
    btn.className = "bgcolor-btn" + (getSelected() === color ? " selected" : "");
    btn.dataset.color = color;
    btn.style.background = color;
    if (color === "#FFFFFF") btn.style.borderColor = "#ddd";
    btn.addEventListener("click", () => {
      onSelect(color); render();
      container.querySelectorAll(".bgcolor-btn").forEach(b => {
        b.classList.toggle("selected", b.dataset.color === getSelected());
      });
    });
    container.appendChild(btn);
  });
}

function buildFilteredHairGrid() {
  const filtered = HAIR_OPTIONS.filter(h => h.color === state.hairColor);
  buildThumbGrid("hair-grid", filtered, () => state.hair, v => { state.hair = v; });
  render();
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════
async function exportCard() {
  saveBtn.disabled = true;
  saveBtn.textContent = "Getting ready…";

  try {
    // Fonts are already embedded in the page via @font-face — wait for them to be ready
    await document.fonts.ready;

    const canvas = document.createElement("canvas");
    canvas.width  = PRINT_W;
    canvas.height = PRINT_H;
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = state.bgColor;
    ctx.fillRect(0, 0, PRINT_W, PRINT_H);

    const drawImage = (src) => new Promise((resolve) => {
      if (!src) return resolve();
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload  = () => { ctx.drawImage(img, 0, 0, PRINT_W, PRINT_H); resolve(); };
      img.onerror = () => resolve();
      img.src = src;
    });

    const face    = FACE_OPTIONS.find(f => f.id === state.face);
    const clothes = CLOTHES_OPTIONS.find(c => c.id === state.clothes);
    const hair    = HAIR_OPTIONS.find(h => h.id === state.hair);
    const acc     = ACCESSORY_OPTIONS.find(a => a.id === state.accessory);

    await drawImage(clothes?.src);
    await drawImage(face?.src);
    await drawImage(hair?.src);
    if (state.accessory !== "none") await drawImage(acc?.src);

    const maxWidth = PRINT_W * 0.82;
    ctx.textAlign    = "center";
    ctx.fillStyle    = state.textColor;

    // Recipient name — Lora 22px, all caps, letter-spacing 2px (matches portrait customiser)
    if (state.recipient.trim()) {
      const nameStr = state.recipient.toUpperCase();
      ctx.font = "400 22px Lora, Georgia, serif";
      ctx.letterSpacing = "2px";
      ctx.textBaseline = "alphabetic";
      ctx.fillText(nameStr, PRINT_W / 2, PRINT_H * 0.76 + 42);
      ctx.letterSpacing = "0px";
    }

    // Message — De Lionist, 64px shrinking to 32px (matches portrait customiser)
    if (state.message.trim()) {
      const msgStr = state.message;
      let fontSize = 64;
      ctx.font = fontSize + "px \"De Lionist\", Georgia, serif";
      while (ctx.measureText(msgStr).width > maxWidth && fontSize > 32) {
        fontSize -= 2;
        ctx.font = fontSize + "px \"De Lionist\", Georgia, serif";
      }
      ctx.textBaseline = "alphabetic";
      ctx.fillText(msgStr, PRINT_W / 2, PRINT_H * 0.855 + 42);
    }

    const fileName = (state.recipient.trim() || "card") + ".png";
    const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
    const file = new File([blob], fileName, { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: "My Card" });
        showMessage("✅ Shared! Check AirDrop on your Mac.", "success");
        return;
      } catch (err) {
        if (err.name === "AbortError") return;
      }
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = fileName; a.click();
    URL.revokeObjectURL(url);
    showMessage("📥 Saved! Open Safari to use AirDrop.", "info");

  } catch (err) {
    showMessage("Something went wrong. Please try again.", "error");
    console.error(err);
  } finally {
    saveBtn.disabled = false;
    saveBtn.innerHTML = "⬆️ Save & AirDrop";
  }
}

// ── Toast ──────────────────────────────────────────────────────────────────
function showMessage(text, type) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();
  const colors = { success: "#2AA84A", info: "#3B6FE8", error: "#E84040" };
  const toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = text;
  toast.style.cssText = `
    position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
    background: ${colors[type] || colors.info}; color: white;
    font-family: inherit; font-weight: 800; font-size: 14px;
    padding: 14px 24px; border-radius: 40px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.2);
    z-index: 9999; white-space: nowrap; animation: fadeIn 0.2s ease;
  `;
  const style = document.createElement("style");
  style.textContent = `@keyframes fadeIn { from { opacity:0; transform:translateX(-50%) translateY(10px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }`;
  document.head.appendChild(style);
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// ═══════════════════════════════════════════════════════════════════════════
// SERVICE WORKER
// ═══════════════════════════════════════════════════════════════════════════
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

// ═══════════════════════════════════════════════════════════════════════════
// RESET
// ═══════════════════════════════════════════════════════════════════════════
function resetApp() {
  state.bgColor   = BRAND_COLORS[0];
  state.face      = FACE_OPTIONS[0].id;
  state.hairColor = HAIR_COLORS[0].id;
  state.hair      = HAIR_OPTIONS[0].id;
  state.clothes   = CLOTHES_OPTIONS[0].id;
  state.accessory = "none";
  state.recipient = "";
  state.message   = "";
  state.textColor = DEFAULT_TEXT_COLOR;
  recipientInput.value = "";
  messageInput.value   = "";
  init();
}

// ═══════════════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════════════
function init() {
  buildFaceGrid("skin-swatches", FACE_OPTIONS,
    () => state.face, v => { state.face = v; });

  buildHairColorRow("hair-color-swatches", HAIR_COLORS,
    () => state.hairColor, v => {
      state.hairColor = v;
      const first = HAIR_OPTIONS.find(h => h.color === v);
      if (first) state.hair = first.id;
      buildFilteredHairGrid();
    });

  buildTextColorRow("name-swatches",
    () => state.textColor, v => { state.textColor = v; });

  buildBgColorGrid("bg-swatches", BRAND_COLORS,
    () => state.bgColor, v => { state.bgColor = v; });

  buildFilteredHairGrid();

  buildThumbGrid("clothes-grid", CLOTHES_OPTIONS,
    () => state.clothes, v => { state.clothes = v; });

  buildThumbGrid("acc-grid", ACCESSORY_OPTIONS,
    () => state.accessory, v => { state.accessory = v; });

  // Recipient name input
  recipientInput.value = state.recipient;
  recipientInput.addEventListener("input", () => {
    state.recipient = recipientInput.value;
    render();
  });

  // Message input
  messageInput.value = state.message;
  messageInput.addEventListener("input", () => {
    state.message = messageInput.value;
    render();
  });

  saveBtn.addEventListener("click", exportCard);
  resetBtn.addEventListener("click", resetApp);

  render();
}

init();

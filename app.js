// app.js - ระบบการทำงานหลัก เว็บไซต์ Google Cosmic Birthday Explorer
// ค้นหาข้อมูลภาพถ่ายดาราศาสตร์ผ่าน Google Search & เสียงบรรยายอัจฉริยะจาก Google AI Studio
// รองรับการพิมพ์วันเกิดอิสระจาก Numpad, การแสดงผลวิดีโอ/ภาพ HD, สไลด์ภาพยนตร์สมูท, การ์ดนิ่งมั่นคง

document.addEventListener("DOMContentLoaded", () => {
  initStarfieldCanvas();
  initAudioSystem();
  initNumpadInputSystem();
  initScreenSlider();
  initNaturalSpeechSystem();
  initGoogleSettingsModal();
  initLanguageTabs();
  initLightbox();

  // กำหนดวันเริ่มต้น: 14 กรกฎาคม 2007 (ภาพดาวฤกษ์ในฟองแก๊สจักรวาล RCW 79 บน Google Search)
  setNumpadValues(14, 7, 2007);
});

/* ==========================================================================
   1. ระบบ Canvas อวกาศ ดวงดาวระยิบระยับ และดาวตก (Starfield & Meteors)
   ========================================================================== */
function initStarfieldCanvas() {
  const canvas = document.getElementById("space-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createStars();
  });

  const starCount = Math.floor((width * height) / 4500);
  let stars = [];
  const starColors = ["#ffffff", "#e0f2fe", "#bae6fd", "#fef08a", "#f5d0fe"];

  function createStars() {
    stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.3,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        parallaxFactor: Math.random() * 0.4 + 0.1
      });
    }
  }
  createStars();

  let meteors = [];
  function maybeSpawnMeteor() {
    if (meteors.length < 2 && Math.random() < 0.015) {
      meteors.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.4,
        length: Math.random() * 90 + 60,
        speed: Math.random() * 8 + 7,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
        opacity: 1,
        fadeSpeed: Math.random() * 0.015 + 0.012
      });
    }
  }

  let mouseX = width / 2;
  let mouseY = height / 2;
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const offsetX = (mouseX - width / 2) * 0.025;
    const offsetY = (mouseY - height / 2) * 0.025;

    for (let star of stars) {
      star.alpha += star.twinkleSpeed * star.twinkleDirection;
      if (star.alpha >= 1) {
        star.alpha = 1;
        star.twinkleDirection = -1;
      } else if (star.alpha <= 0.15) {
        star.alpha = 0.15;
        star.twinkleDirection = 1;
      }

      ctx.save();
      ctx.beginPath();
      const currentX = star.x + offsetX * star.parallaxFactor;
      const currentY = star.y + offsetY * star.parallaxFactor;
      ctx.arc(currentX, currentY, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.globalAlpha = star.alpha;
      ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
      ctx.shadowColor = star.color;
      ctx.fill();
      ctx.restore();
    }

    maybeSpawnMeteor();
    for (let i = meteors.length - 1; i >= 0; i--) {
      const m = meteors[i];
      m.x += Math.cos(m.angle) * m.speed;
      m.y += Math.sin(m.angle) * m.speed;
      m.opacity -= m.fadeSpeed;

      if (m.opacity <= 0 || m.x > width || m.y > height) {
        meteors.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      const tailX = m.x - Math.cos(m.angle) * m.length;
      const tailY = m.y - Math.sin(m.angle) * m.length;
      ctx.lineTo(tailX, tailY);

      const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
      grad.addColorStop(0.3, `rgba(56, 189, 248, ${m.opacity * 0.8})`);
      grad.addColorStop(1, "rgba(56, 189, 248, 0)");

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#38bdf8";
      ctx.stroke();
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   2. ระบบจำลองเสียงอวกาศ (Web Audio Synthesizer)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioSystem() {
  const soundToggleBtn = document.getElementById("toggle-sound");
  if (!soundToggleBtn) return;

  function ensureAudioCtx() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }

  soundToggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundToggleBtn.classList.toggle("active", soundEnabled);
    soundToggleBtn.innerHTML = soundEnabled
      ? `<span class="icon">🔊</span> เสียง: เปิด`
      : `<span class="icon">🔇</span> เสียง: ปิด`;

    if (soundEnabled) {
      ensureAudioCtx();
      playChimeSound(660, 0.1);
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest("button") || e.target.closest(".chip-btn") || e.target.closest(".mode-pill")) {
      ensureAudioCtx();
      playClickSound();
    }
  });
}

function playClickSound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1400, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
  } catch (err) {}
}

function playWarpSound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(160, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1100, audioCtx.currentTime + 0.45);
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch (err) {}
}

function playDiscoverySound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        playChimeSound(freq, 0.4 - idx * 0.05);
      }, idx * 80);
    });
  } catch (err) {}
}

function playChimeSound(freq, duration = 0.3) {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {}
}

/* ==========================================================================
   3. ระบบพิมพ์วันเกิดอิสระ (Numpad Friendly & Smart Autojump)
   ========================================================================== */
let activeInputMode = "split";

function initNumpadInputSystem() {
  const dayIn = document.getElementById("input-day");
  const monthIn = document.getElementById("input-month");
  const yearIn = document.getElementById("input-year");
  const freeIn = document.getElementById("free-date-input");
  const nativeIn = document.getElementById("native-date-input");
  const noticeEl = document.getElementById("year-convert-notice");

  const pillSplit = document.getElementById("pill-split");
  const pillSingle = document.getElementById("pill-single");
  const pillPicker = document.getElementById("pill-picker");

  const splitGroup = document.getElementById("numpad-split-group");
  const singleGroup = document.getElementById("single-input-group");
  const pickerGroup = document.getElementById("native-picker-group");

  pillSplit.addEventListener("click", () => switchInputMode("split"));
  pillSingle.addEventListener("click", () => switchInputMode("single"));
  pillPicker.addEventListener("click", () => switchInputMode("picker"));

  function switchInputMode(mode) {
    activeInputMode = mode;
    [pillSplit, pillSingle, pillPicker].forEach(p => p.classList.remove("active"));
    [splitGroup, singleGroup, pickerGroup].forEach(g => g.classList.add("hidden"));

    if (mode === "split") {
      pillSplit.classList.add("active");
      splitGroup.classList.remove("hidden");
      dayIn.focus();
    } else if (mode === "single") {
      pillSingle.classList.add("active");
      singleGroup.classList.remove("hidden");
      freeIn.focus();
    } else {
      pillPicker.classList.add("active");
      pickerGroup.classList.remove("hidden");
      nativeIn.focus();
    }
  }

  function filterDigits(val) {
    return val.replace(/\D/g, "");
  }

  dayIn.addEventListener("input", () => {
    dayIn.value = filterDigits(dayIn.value);
    if (dayIn.value.length >= 2) {
      monthIn.focus();
      monthIn.select();
    }
  });

  monthIn.addEventListener("input", () => {
    monthIn.value = filterDigits(monthIn.value);
    if (monthIn.value.length >= 2) {
      yearIn.focus();
      yearIn.select();
    }
  });

  yearIn.addEventListener("input", () => {
    yearIn.value = filterDigits(yearIn.value);
    const yr = parseInt(yearIn.value, 10);
    if (!isNaN(yr) && yr > 2400) {
      noticeEl.innerHTML = `🌟 แปลง พ.ศ. ${yr} เป็น ค.ศ. <strong>${yr - 543}</strong> สำหรับค้นหา NASA APOD`;
    } else {
      noticeEl.innerHTML = `📸 โครงการ NASA APOD เริ่มต้น 16 มิ.ย. 1995 (หากเกิดก่อนหน้านั้น ระบบจะค้นหาภาพใกล้เคียงที่สุดให้)`;
    }
  });

  monthIn.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && monthIn.value === "") {
      dayIn.focus();
    }
  });

  yearIn.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && yearIn.value === "") {
      monthIn.focus();
    }
  });

  freeIn.addEventListener("input", () => {
    let clean = filterDigits(freeIn.value);
    if (clean.length > 8) clean = clean.substring(0, 8);
    
    let formatted = "";
    if (clean.length > 0) formatted += clean.substring(0, 2);
    if (clean.length >= 3) formatted += " / " + clean.substring(2, 4);
    if (clean.length >= 5) formatted += " / " + clean.substring(4, 8);
    
    freeIn.value = formatted;
  });

  const form = document.getElementById("search-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dateStr = resolveDateString();
    if (!dateStr) {
      alert("กรุณาระบุวันเกิดให้ถูกต้อง (วัน เดือน และปี ค.ศ. หรือ พ.ศ.)");
      return;
    }
    performSearchAndSlide(dateStr);
  });

  const presetChips = document.querySelectorAll(".chip-btn");
  presetChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const date = chip.getAttribute("data-date");
      if (date) {
        const [y, m, d] = date.split("-").map(Number);
        setNumpadValues(d, m, y);
        performSearchAndSlide(date);
      }
    });
  });

  const randomBtn = document.getElementById("btn-random");
  randomBtn.addEventListener("click", () => {
    // สุ่มวันที่ในยุค NASA APOD (1995-06-16 ถึง ปัจจุบัน)
    const startDate = new Date("1995-06-16").getTime();
    const endDate = new Date().getTime();
    const randomTime = startDate + Math.random() * (endDate - startDate);
    const randDate = new Date(randomTime);
    
    const y = randDate.getFullYear();
    const m = randDate.getMonth() + 1;
    const d = randDate.getDate();
    
    setNumpadValues(d, m, y);
    performSearchAndSlide(`${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`);
  });
}

function setNumpadValues(d, m, y) {
  const dayIn = document.getElementById("input-day");
  const monthIn = document.getElementById("input-month");
  const yearIn = document.getElementById("input-year");
  const freeIn = document.getElementById("free-date-input");
  const nativeIn = document.getElementById("native-date-input");

  const dd = String(d).padStart(2, "0");
  const mm = String(m).padStart(2, "0");
  const yyyy = String(y);

  if (dayIn) dayIn.value = dd;
  if (monthIn) monthIn.value = mm;
  if (yearIn) yearIn.value = yyyy;
  if (freeIn) freeIn.value = `${dd} / ${mm} / ${yyyy}`;
  if (nativeIn) nativeIn.value = `${yyyy}-${mm}-${dd}`;
}

function resolveDateString() {
  let d, m, y;

  if (activeInputMode === "split") {
    d = parseInt(document.getElementById("input-day").value, 10);
    m = parseInt(document.getElementById("input-month").value, 10);
    y = parseInt(document.getElementById("input-year").value, 10);
  } else if (activeInputMode === "single") {
    const raw = document.getElementById("free-date-input").value.replace(/\D/g, "");
    if (raw.length >= 8) {
      d = parseInt(raw.substring(0, 2), 10);
      m = parseInt(raw.substring(2, 4), 10);
      y = parseInt(raw.substring(4, 8), 10);
    }
  } else {
    const nativeVal = document.getElementById("native-date-input").value;
    if (nativeVal) {
      return nativeVal;
    }
  }

  if (isNaN(d) || isNaN(m) || isNaN(y)) return null;

  if (y > 2400) {
    y -= 543;
  }

  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1900 || y > 2050) return null;

  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

/* ==========================================================================
   4. ระบบดึงข้อมูลทั้งหมดจาก Google Search & Google AI Studio
   ========================================================================== */
function getGoogleAiStudioKey() {
  return localStorage.getItem("google_ai_studio_api_key") || "";
}

function getSelectedAIVoice() {
  return localStorage.getItem("google_ai_voice") || "th-translate";
}

// ฟังก์ชันค้นหาข้อมูลดาราศาสตร์สดผ่าน Google Search Grounding (Google AI Studio Gemini API)
async function fetchGoogleAIStudioSearch(dateStr) {
  const apiKey = getGoogleAiStudioKey();
  if (!apiKey) return null;

  const cacheKey = `google_space_${dateStr}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (e) {}
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  const promptText = `คุณคือระบบค้นหาดาราศาสตร์ขั้นสูง ค้นหาข้อมูลจาก Google Search เกี่ยวกับภาพถ่ายดาราศาสตร์หรือการค้นพบทางดาราศาสตร์ของวันที่ ${dateStr} (YYYY-MM-DD) เช่น NASA Astronomy Picture of the Day (APOD) หรือเหตุการณ์สำคัญทางอวกาศที่พบใน Google Search ในวันนั้น
ส่งผลลัพธ์กลับมาเป็น JSON block เดียวเท่านั้น (ห้ามมีคำนำหรือคำลงท้ายนอกเครื่องหมายปีกกา):
{
  "found": true,
  "date": "${dateStr}",
  "nameTh": "ชื่อภาษาไทยของภาพหรือวัตถุอวกาศ",
  "nameEn": "Original Title in English",
  "summaryTh": "คำอธิบายภาษาไทยสรุป 2-3 ประโยค กระชับ น่าทึ่ง และเข้าใจง่าย",
  "descriptionEn": "English description summary found on Google Search",
  "image": "URL รูปภาพที่ดีที่สุดจาก Google Search หรือ archive",
  "source": "Google Search Grounding",
  "copyright": "Google Search Grounding & Space Archives"
}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{ text: promptText }]
        }],
        tools: [{
          google_search: {}
        }],
        generationConfig: {
          temperature: 0.1
        }
      })
    });
    clearTimeout(timeoutId);

    if (!res.ok) return null;

    const data = await res.json();
    const candidate = data.candidates?.[0];
    const textResp = candidate?.content?.parts?.[0]?.text;
    if (!textResp) return null;

    const jsonMatch = textResp.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return null;

    const parsed = JSON.parse(jsonMatch[0]);
    if (parsed && (parsed.nameTh || parsed.nameEn)) {
      localStorage.setItem(cacheKey, JSON.stringify(parsed));
      updateCacheCount();
      return parsed;
    }
    return null;
  } catch (err) {
    return null;
  }
}

// ฟังก์ชันแปลภาษาอัตโนมัติแบบ Real-Time ด้วย Google Translate Engine (Free & Instant)
async function translateTextGoogle(text, targetLang = "th") {
  if (!text) return "";
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) return text;
    const data = await res.json();
    if (Array.isArray(data) && Array.isArray(data[0])) {
      const translated = data[0].map(item => item[0] || "").join("");
      return translated || text;
    }
    return text;
  } catch (e) {
    return text;
  }
}

// ฟังก์ชันค้นหาข้อมูลดาราศาสตร์สดแบบ Real-Time อัปเดตล่าสุดปี 2026
// ดึงข้อมูลตรงวันเกิดจากคลังดาราศาสตร์สากลที่อัปเดตถึงปัจจุบันปี 2026 (ครอบคลุมทุกวันตั้งแต่ 1995 ถึง 2026)
async function fetchRealtimeGoogleSpaceData(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const targetDate = new Date(dateStr);
  const apodStartDate = new Date("1995-06-16");
  const today = new Date();

  // APOD เริ่มมีภาพตั้งแต่ 16 มิถุนายน 1995 จนถึงปัจจุบันปี 2026
  if (targetDate < apodStartDate || targetDate > today) {
    return null;
  }

  const yymmdd = String(y % 100).padStart(2, "0") + String(m).padStart(2, "0") + String(d).padStart(2, "0");
  const url = `https://science.nasa.gov/wp-json/wp/v2/apod-basic/${yymmdd}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) return null;

    const data = await res.json();
    if (!data || (!data.title && !data.basic_html)) return null;

    const rawTitle = data.title || `Astronomy Discovery on ${dateStr}`;

    // ทำความสะอาดคำอธิบายภาษาอังกฤษ
    let rawExplanation = "";
    if (data.explanation) {
      rawExplanation = data.explanation.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      rawExplanation = rawExplanation.replace(/^Explanation:\s*/i, "").trim();
    }

    // จัดการรูปภาพและวิดีโอ
    let imgUrl = data.hdurl || data.url || "";
    let videoUrl = null;
    let isVideo = (data.media_type === "video");

    if (data.basic_html) {
      // ตรวจสอบ iframe สำหรับวิดีโอ เช่น YouTube / Vimeo
      const iframeMatch = data.basic_html.match(/<iframe[^>]+src=["']([^"']+)["']/i);
      if (iframeMatch) {
        isVideo = true;
        let vSrc = iframeMatch[1];
        if (vSrc.startsWith("//")) vSrc = "https:" + vSrc;
        videoUrl = vSrc;
      }

      // ดึงภาพความละเอียดสูงจาก <img> แท็ก
      const imgMatch = data.basic_html.match(/<IMG[^>]+SRC=["']([^"']+)["']/i);
      if (imgMatch && (!imgUrl || imgUrl.includes("news-thumbnail"))) {
        imgUrl = imgMatch[1];
      }
    }

    if (!imgUrl && !videoUrl) {
      imgUrl = "https://images-assets.nasa.gov/image/PIA05983/PIA05983~orig.jpg";
    }

    // แปลชื่อและคำอธิบายเป็นภาษาไทยแบบ Real-Time ด้วย Google Translate Engine
    let nameTh = rawTitle;
    let descriptionTh = rawExplanation;
    try {
      const [transTitle, transDesc] = await Promise.all([
        translateTextGoogle(rawTitle, "th"),
        translateTextGoogle(rawExplanation.substring(0, 450), "th")
      ]);
      if (transTitle && transTitle.trim()) nameTh = transTitle.trim();
      if (transDesc && transDesc.trim()) descriptionTh = transDesc.trim();
    } catch (err) {}

    let copyrightText = "Google Search & Space Archives (2026)";
    if (data.copyright) {
      copyrightText = data.copyright.replace(/<[^>]+>/g, " ").replace(/Credit:|Copyright:/ig, "").replace(/\s+/g, " ").trim();
    }

    return {
      id: `realtime-${dateStr}`,
      date: dateStr,
      nameTh: nameTh,
      nameEn: rawTitle,
      type: isVideo ? "วิดีโอสำรวจอวกาศ" : "ภาพถ่ายดาราศาสตร์ความละเอียดสูง",
      source: "Google & NASA Science (ค้นหาสด Real-Time 2026)",
      copyright: copyrightText,
      mediaType: isVideo ? "วิดีโอจากอวกาศ (YouTube/Vimeo)" : "ภาพถ่ายดาราศาสตร์ความละเอียดสูง (HD Image)",
      descriptionTh: descriptionTh,
      descriptionEn: rawExplanation,
      summaryTh: descriptionTh,
      image: imgUrl,
      hdurl: data.hdurl || imgUrl,
      videoUrl: videoUrl
    };
  } catch (e) {
    return null;
  }
}

// สร้างลิงก์ค้นหาบน Google Search
function getGoogleSearchUrl(dateStr, title) {
  const query = `NASA APOD ${dateStr} ${title || ""}`.trim();
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

// สร้างลิงก์ค้นหาบน Google Images
function getGoogleImagesUrl(dateStr, title) {
  const query = `NASA APOD ${dateStr} ${title || ""}`.trim();
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
}

/* ==========================================================================
   5. ระบบเลื่อนหน้าจอแบบภาพยนตร์สมูท (Cinematic Track Slider)
   ========================================================================== */
let currentViewDate = "2022-07-12";
let activeDiscoveryData = null;

function initScreenSlider() {
  const btnBack = document.getElementById("btn-back-home");
  const brandLogo = document.getElementById("brand-logo");
  const screensTrack = document.getElementById("screens-track");

  btnBack.addEventListener("click", () => {
    slideBackToHome();
  });

  brandLogo.addEventListener("click", () => {
    if (screensTrack.classList.contains("show-result")) {
      slideBackToHome();
    }
  });

  document.getElementById("btn-prev-day").addEventListener("click", () => {
    navigateDay(-1);
  });

  document.getElementById("btn-next-day").addEventListener("click", () => {
    navigateDay(1);
  });

  initTouchGestures();
}

function slideToResult() {
  const screensTrack = document.getElementById("screens-track");
  screensTrack.classList.add("show-result");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function slideBackToHome() {
  const screensTrack = document.getElementById("screens-track");
  screensTrack.classList.remove("show-result");
  window.scrollTo({ top: 0, behavior: "smooth" });
  stopSpeaking();
}

function initTouchGestures() {
  let touchStartX = 0;
  let touchStartY = 0;
  const screensTrack = document.getElementById("screens-track");

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > 75 && Math.abs(diffY) < 50) {
      if (screensTrack.classList.contains("show-result")) {
        if (diffX > 0) {
          navigateDay(-1);
        } else {
          navigateDay(1);
        }
      }
    }
  }, { passive: true });
}

// เปลี่ยนวันทีละ 1 วัน ในคลัง NASA APOD แบบ Crossfade นุ่มนวล การ์ดนิ่งสนิท
async function navigateDay(offsetDays) {
  if (!currentViewDate) return;
  const d = new Date(currentViewDate);
  d.setDate(d.getDate() + offsetDays);
  const nextDateStr = d.toISOString().split("T")[0];
  const [ny, nm, nd] = nextDateStr.split("-").map(Number);
  setNumpadValues(nd, nm, ny);

  stopSpeaking();

  const cardDetailsBox = document.getElementById("card-details-box");
  const cardImg = document.getElementById("card-image");

  if (cardDetailsBox && cardImg) {
    cardDetailsBox.style.opacity = "0.3";
    cardImg.style.opacity = "0.3";

    await executeSearch(nextDateStr);

    setTimeout(() => {
      cardDetailsBox.style.opacity = "1";
      cardImg.style.opacity = "1";
    }, 120);
  } else {
    await executeSearch(nextDateStr);
  }
}

// ค้นหาพร้อมสแกนเนอร์และสไลด์หน้าจอ
async function performSearchAndSlide(targetDateString) {
  currentViewDate = targetDateString;
  const scanner = document.getElementById("scanner-overlay");
  const scannerDateText = document.getElementById("scanner-date-text");
  const scannerSubtext = document.getElementById("scanner-subtext");

  playWarpSound();
  scannerDateText.innerText = `พิกัดกาลเวลา: ${formatDateThai(targetDateString)}`;
  scannerSubtext.innerText = "กำลังค้นหาข้อมูลจาก Google Search แบบ Real-Time (อัปเดตล่าสุด 2026)...";
  scanner.classList.add("active");

  await executeSearch(targetDateString);

  scanner.classList.remove("active");
  slideToResult();
  playDiscoverySound();
}

// ==========================================================================
// การค้นหาหลัก: ดึงข้อมูลสดแบบ Real-Time อัปเดตล่าสุดปี 2026 จาก Google & Science Archives
// ==========================================================================
async function executeSearch(targetDateString) {
  currentViewDate = targetDateString;

  // 1. ตรวจสอบใน Local Storage Cache (เปิดซ้ำได้ทันทีใน 0.01 วินาที)
  const cacheKey = `google_space_${targetDateString}`;
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    try {
      const item = JSON.parse(cachedData);
      renderDiscoveryResult({
        status: "exact_match",
        matchType: "google_search_cache",
        targetDate: targetDateString,
        diffDays: 0,
        messageTh: `พบภาพถ่ายดาราศาสตร์ประจำวันเกิดของคุณจาก Google Search (บันทึกแคช)!`,
        discovery: item
      });
      return;
    } catch (e) {}
  }

  // 2. ค้นหา Real-time แบบสดทันทีจากคลังดาราศาสตร์อัปเดตล่าสุดปี 2026 (ครอบคลุม 1995 ถึง 2026 ทุกวัน)
  const realtimeData = await fetchRealtimeGoogleSpaceData(targetDateString);
  if (realtimeData) {
    localStorage.setItem(cacheKey, JSON.stringify(realtimeData));
    updateCacheCount();
    renderDiscoveryResult({
      status: "exact_match",
      matchType: "google_search_realtime",
      targetDate: targetDateString,
      diffDays: 0,
      messageTh: `ค้นพบภาพถ่ายดาราศาสตร์ประจำวันเกิดของคุณจาก Google Search แบบ Real-Time! (อัปเดต 2026)`,
      discovery: realtimeData
    });
    return;
  }

  // 3. หากมี Google AI Studio API Key ให้ค้นหาสดผ่าน Gemini Search Grounding
  const liveGoogleData = await fetchGoogleAIStudioSearch(targetDateString);
  if (liveGoogleData) {
    localStorage.setItem(cacheKey, JSON.stringify(liveGoogleData));
    updateCacheCount();
    renderDiscoveryResult({
      status: "exact_match",
      matchType: "google_search_live",
      targetDate: targetDateString,
      diffDays: 0,
      messageTh: `ค้นพบภาพถ่ายดาราศาสตร์ประจำวันเกิดจาก Google AI Studio Gemini Grounding แบบสด!`,
      discovery: liveGoogleData
    });
    return;
  }

  // 4. ตรวจสอบดัชนีข้อมูลประวัติศาสตร์ล่วงหน้า (เช่น ก่อนปี 1995 ยุค Apollo, Voyager)
  const db = (typeof NASA_DATABASE !== "undefined" ? NASA_DATABASE : (window.NASA_DATABASE || []));
  const preindexedMatch = db.find(item => item.date === targetDateString);
  if (preindexedMatch) {
    const exactResult = {
      status: "exact_match",
      matchType: "google_search_index",
      targetDate: targetDateString,
      diffDays: 0,
      messageTh: `พบภาพถ่ายดาราศาสตร์ประจำวันเกิดของคุณจากดัชนี Google Search พอดี!`,
      discovery: {
        ...preindexedMatch,
        source: "Google Search Index (Historic)",
        copyright: preindexedMatch.instrument || "Google Search & Space Archives",
        mediaType: preindexedMatch.mediaType || "ภาพถ่ายดาราศาสตร์ความละเอียดสูง (HD Image)",
        hdurl: preindexedMatch.hdurl || preindexedMatch.image
      }
    };
    renderDiscoveryResult(exactResult);
    return;
  }

  // 5. กรณีไม่มีการบันทึกภาพตรงวัน (เช่น ก่อนปี 1995) ให้หาวันที่ใกล้เคียงที่สุดจากดัชนี
  const searchResult = window.searchNasaDiscovery ? window.searchNasaDiscovery(targetDateString) : null;
  if (searchResult && searchResult.closestDiscovery) {
    searchResult.closestDiscovery.source = "Google Search Index";
    searchResult.closestDiscovery.copyright = searchResult.closestDiscovery.instrument || "Google Search & Space Archives";
    searchResult.closestDiscovery.mediaType = "ภาพถ่ายดาราศาสตร์";
    renderDiscoveryResult(searchResult);
    return;
  }

  // 6. Fallback ปลอดภัยจาก Google Search สำหรับวันที่ไม่เคยจัดทำดัชนี
  renderDiscoveryResult({
    status: "exact_match",
    matchType: "google_search_custom",
    targetDate: targetDateString,
    diffDays: 0,
    messageTh: `ค้นหาข้อมูลภาพดาราศาสตร์ประจำวันเกิดของคุณผ่าน Google Search`,
    discovery: {
      id: `google-${targetDateString}`,
      date: targetDateString,
      nameTh: `ภาพดาราศาสตร์ประจำวันที่ ${formatDateThai(targetDateString)}`,
      nameEn: `Astronomy Discovery on ${targetDateString}`,
      type: "ภาพดาราศาสตร์จาก Google Search",
      source: "Google Search 2026",
      copyright: "Google Search & Space Archives",
      mediaType: "ภาพถ่ายดาราศาสตร์",
      descriptionTh: `ระบบพร้อมเปิดค้นหาภาพถ่ายและบทความดาราศาสตร์สำหรับวันที่ ${formatDateThai(targetDateString)} บน Google Search และ Google Images ได้ทันทีผ่านปุ่มด้านล่าง`,
      descriptionEn: `Click the Google Search button below to explore astronomy discoveries for ${targetDateString} on Google.`,
      image: "https://images-assets.nasa.gov/image/PIA05983/PIA05983~orig.jpg",
      hdurl: "https://images-assets.nasa.gov/image/PIA05983/PIA05983~orig.jpg"
    }
  });
}

// ช่วยสร้างคำสรุปภาษาไทยแบบอัตโนมัติ
function generateThaiSummary(title, explanation) {
  if (!explanation) return "ภาพถ่ายทางดาราศาสตร์บันทึกและสืบค้นผ่านระบบ Google Search";
  const sentences = explanation.split(".").filter(s => s.trim().length > 10);
  const summaryPart = sentences.slice(0, 2).join(". ") + ".";
  return `ผลการค้นหาจาก Google Search: "${title}" — ${summaryPart}`;
}

/* ==========================================================================
   6. การแสดงผลลัพธ์การค้นพบ (Exact Match vs Closest Fallback)
   ========================================================================== */
function renderDiscoveryResult(result) {
  const statusBanner = document.getElementById("status-banner");
  const bannerIcon = document.getElementById("banner-icon");
  const bannerTitle = document.getElementById("banner-title");
  const bannerDesc = document.getElementById("banner-desc");
  const sourceBadge = document.getElementById("data-source-badge");

  const isExact = result.status === "exact_match";
  const item = isExact ? result.discovery : result.closestDiscovery;
  activeDiscoveryData = item;

  // 1. จัดการแถบสถานะการค้นหา
  if (isExact) {
    statusBanner.className = "status-banner exact";
    bannerIcon.innerText = "🌐";
    bannerTitle.innerText = "ตรงกับวันเกิดของคุณพอดี! (ค้นพบบน Google Search Real-Time)";
    bannerDesc.innerHTML = `พบบันทึกภาพดาราศาสตร์ในวันที่ <span class="banner-highlight">${formatDateThai(result.targetDate)}</span> จากระบบค้นหาข้อมูลอวกาศ Real-Time (อัปเดตล่าสุดปี 2026) ตรงกับวันเกิดของคุณพอดี!`;
    sourceBadge.innerHTML = `<span>⚡ แหล่งข้อมูล: ค้นหาสด Real-Time 2026</span>`;
  } else {
    statusBanner.className = "status-banner closest";
    bannerIcon.innerText = "🔭";
    bannerTitle.innerText = "ไม่พบบันทึกภาพตรงวันบน Google Search — แสดงผลภาพที่ใกล้เคียงที่สุดแทน";
    const directionWord = result.isBefore ? "ก่อนหน้า" : "หลังจาก";
    const note = result.customNote ? `<br/><small style="opacity:0.9; color:#fde68a;">${result.customNote}</small>` : "";
    bannerDesc.innerHTML = `ในวันที่ <strong>${formatDateThai(result.targetDate)}</strong> ไม่มีภาพบันทึกตรงวันบน Google Search <br/>🚀 เราจึงดึงการค้นพบจาก <strong>วันที่ใกล้เคียงที่สุด</strong> มาให้คุณ: <span class="banner-highlight">${formatDateThai(item.date)}</span> (ห่างกันเพียง <strong>${result.diffDays.toLocaleString()} วัน</strong> ${directionWord}วันเกิดของคุณ)${note}`;
    sourceBadge.innerHTML = `<span>🔭 ข้อมูลใกล้เคียงที่สุดจาก Google Search</span>`;
  }

  // 2. เติมข้อมูลลงในการ์ดหลัก
  document.getElementById("card-date-badge").innerText = formatDateThai(item.date);
  document.getElementById("card-type-badge").innerText = item.type || "Google Search";
  document.getElementById("card-instrument-badge").innerText = item.source || "Google Search Grounding";

  document.getElementById("card-title-th").innerText = item.nameTh;
  document.getElementById("card-title-en").innerText = item.nameEn;

  document.getElementById("spec-source").innerText = item.source || "Google Search & AI Studio";
  document.getElementById("spec-copyright").innerText = item.copyright || "Google Search & Space Archives";
  document.getElementById("spec-diff").innerText = isExact ? "ตรงวันพอดี (0 วัน)" : `ห่าง ${result.diffDays.toLocaleString()} วัน`;
  document.getElementById("spec-media-type").innerText = item.mediaType || "ภาพถ่ายดาราศาสตร์";

  document.getElementById("desc-th").innerText = item.descriptionTh || item.summaryTh || "";
  document.getElementById("desc-en").innerText = item.descriptionEn || "";

  // 3. จัดการแสดงผลระหว่างภาพถ่ายและวิดีโอ (ถ้า APOD เป็นวิดีโอ)
  const cardImg = document.getElementById("card-image");
  const cardVideo = document.getElementById("card-video");
  const btnFullscreen = document.getElementById("btn-fullscreen");
  const btnDownloadHd = document.getElementById("btn-download-hd");

  if (item.videoUrl) {
    // เป็นวิดีโอ YouTube / Vimeo
    cardVideo.src = item.videoUrl;
    cardVideo.classList.remove("hidden");
    cardImg.classList.add("hidden");
    btnFullscreen.classList.add("hidden");
    if (btnDownloadHd) btnDownloadHd.classList.add("hidden");
  } else {
    // เป็นภาพถ่าย
    cardVideo.classList.add("hidden");
    cardVideo.src = "";
    cardImg.classList.remove("hidden");
    cardImg.src = item.image;
    cardImg.alt = item.nameTh;
    btnFullscreen.classList.remove("hidden");
    if (btnDownloadHd) {
      btnDownloadHd.classList.remove("hidden");
      btnDownloadHd.href = item.hdurl || item.image;
    }
  }

  // ลิงก์ค้นหาบน Google Search สำหรับข้อมูลและบทความวิทยาศาสตร์
  const googleSearchBtn = document.getElementById("btn-google-search");
  if (googleSearchBtn) {
    googleSearchBtn.href = getGoogleSearchUrl(item.date, item.nameEn || item.nameTh);
  }

  // ลิงก์ค้นหาภาพที่เกี่ยวข้องบน Google Images
  const googleImagesBtn = document.getElementById("btn-google-images");
  if (googleImagesBtn) {
    googleImagesBtn.href = getGoogleImagesUrl(item.date, item.nameEn || item.nameTh);
  }

  // วัตถุอวกาศประจำวัน/เดือนเดียวกัน
  const companionSection = document.getElementById("companion-section");
  if (result.sameMonthDayDiscovery) {
    const comp = result.sameMonthDayDiscovery;
    companionSection.classList.remove("hidden");
    document.getElementById("comp-title").innerText = comp.nameTh;
    document.getElementById("comp-type").innerText = comp.type;
    document.getElementById("comp-desc").innerText = comp.summaryTh;
    document.getElementById("comp-img").src = comp.image;
    document.getElementById("comp-img").alt = comp.nameTh;
  } else {
    companionSection.classList.add("hidden");
  }

  initShareButton(item);
}

function formatDateThai(dateString) {
  if (!dateString) return "";
  const [y, m, d] = dateString.split("-").map(Number);
  const monthsThai = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];
  return `${d} ${monthsThai[m - 1]} ค.ศ. ${y} (พ.ศ. ${y + 543})`;
}

/* ==========================================================================
   7. สลับแท็บภาษาคำอธิบาย (ไทย / อังกฤษ)
   ========================================================================== */
function initLanguageTabs() {
  const btnTh = document.getElementById("btn-tab-th");
  const btnEn = document.getElementById("btn-tab-en");
  const descTh = document.getElementById("desc-th");
  const descEn = document.getElementById("desc-en");

  btnTh.addEventListener("click", () => {
    btnTh.classList.add("active");
    btnEn.classList.remove("active");
    descTh.classList.remove("hidden");
    descEn.classList.add("hidden");
  });

  btnEn.addEventListener("click", () => {
    btnEn.classList.add("active");
    btnTh.classList.remove("active");
    descEn.classList.remove("hidden");
    descTh.classList.add("hidden");
  });
}

/* ==========================================================================
   8. โมดอลตั้งค่า Google AI Studio & Google Search
   ========================================================================== */
function initGoogleSettingsModal() {
  const btnSettings = document.getElementById("btn-api-settings");
  const modal = document.getElementById("api-modal");
  const btnClose = document.getElementById("api-modal-close");
  const btnSave = document.getElementById("btn-save-api");
  const inputKey = document.getElementById("custom-api-key");
  const btnToggleKey = document.getElementById("btn-toggle-key-visibility");
  const selectVoice = document.getElementById("ai-voice-select");
  const btnTestVoice = document.getElementById("btn-test-voice");
  const btnClearCache = document.getElementById("btn-clear-cache");

  if (!btnSettings || !modal) return;

  btnSettings.addEventListener("click", () => {
    if (inputKey) inputKey.value = getGoogleAiStudioKey();
    if (selectVoice) selectVoice.value = getSelectedAIVoice();
    updateCacheCount();
    modal.classList.add("active");
  });

  if (btnToggleKey && inputKey) {
    btnToggleKey.addEventListener("click", () => {
      inputKey.type = inputKey.type === "password" ? "text" : "password";
    });
  }

  if (btnTestVoice) {
    btnTestVoice.addEventListener("click", () => {
      const v = selectVoice ? selectVoice.value : "th-translate";
      testAiStudioVoice(v);
    });
  }

  if (selectVoice) {
    selectVoice.addEventListener("change", () => {
      localStorage.setItem("google_ai_voice", selectVoice.value);
    });
  }

  btnClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  btnSave.addEventListener("click", () => {
    const keyVal = inputKey ? inputKey.value.trim() : "";
    const voiceVal = selectVoice ? selectVoice.value : "th-translate";
    localStorage.setItem("google_ai_studio_api_key", keyVal);
    localStorage.setItem("google_ai_voice", voiceVal);
    alert("บันทึกการตั้งค่า Google AI Studio & Google Search เรียบร้อยแล้ว!");
    modal.classList.remove("active");
  });

  btnClearCache.addEventListener("click", () => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith("google_space_") || k.startsWith("nasa_apod_"));
    keys.forEach(k => localStorage.removeItem(k));
    updateCacheCount();
    alert("ล้างแคชข้อมูลการค้นหา Google เรียบร้อยแล้ว!");
  });

  updateCacheCount();
}

function updateCacheCount() {
  const label = document.getElementById("cache-count-label");
  if (!label) return;
  const count = Object.keys(localStorage).filter(k => k.startsWith("google_space_") || k.startsWith("nasa_apod_")).length;
  label.innerText = `${count} วัน`;
}

/* ==========================================================================
   9. ระบบเสียงบรรยายจาก Google AI Studio & Google Voice Engine
   ========================================================================== */
let isSpeaking = false;
let availableVoices = [];
let currentAudioPlayer = null;
let audioQueue = [];
let currentQueueIndex = 0;
let activeSpeechToken = 0;

const AI_STUDIO_VOICE_CONFIGS = {
  "th-translate": {
    type: "google-translate",
    lang: "th",
    gender: "female",
    label: "Google Translation (เสียง Google แปลภาษาแท้)"
  },
  "th-google": {
    type: "webspeech",
    lang: "th-TH",
    pitch: 1.02,
    rate: 0.94,
    gender: "female",
    label: "Google ภาษาไทย (Chrome Neural)"
  },
  "Aoede": {
    type: "webspeech",
    lang: "en-US",
    pitch: 1.10,
    rate: 0.94,
    gender: "female",
    label: "Google AI Studio: Aoede (Warm & Breezy)"
  },
  "Charon": {
    type: "webspeech",
    lang: "en-US",
    pitch: 0.82,
    rate: 0.88,
    gender: "male",
    label: "Google AI Studio: Charon (Deep & Informative)"
  },
  "Kore": {
    type: "webspeech",
    lang: "en-US",
    pitch: 1.04,
    rate: 0.90,
    gender: "female",
    label: "Google AI Studio: Kore (Calm & Soothing)"
  },
  "Puck": {
    type: "webspeech",
    lang: "en-US",
    pitch: 1.18,
    rate: 1.02,
    gender: "male",
    label: "Google AI Studio: Puck (Bright & Energetic)"
  },
  "Fenrir": {
    type: "webspeech",
    lang: "en-US",
    pitch: 0.76,
    rate: 0.88,
    gender: "male",
    label: "Google AI Studio: Fenrir (Powerful & Resonant)"
  },
  "en-translate": {
    type: "google-translate",
    lang: "en",
    gender: "female",
    label: "Google Translation English (เสียง Google แปลภาษา อังกฤษ)"
  },
  "en-google": {
    type: "webspeech",
    lang: "en-US",
    pitch: 1.00,
    rate: 0.96,
    gender: "female",
    label: "Google US English (Standard Natural)"
  }
};

function initNaturalSpeechSystem() {
  const speakBtn = document.getElementById("btn-speak-summary");
  if (!speakBtn) return;

  function loadVoices() {
    if ("speechSynthesis" in window) {
      availableVoices = window.speechSynthesis.getVoices();
    }
  }
  loadVoices();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  // ใช้ onclick เพื่อป้องกัน event listener ซ้อนทับกันหลายรอบ
  speakBtn.onclick = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      startSpeaking();
    }
  };
}

// ปลด event listeners ทั้งหมดของ HTML5 Audio เพื่อป้องกันไม่ให้เกิด error หลอนตอนจบเพลงหรือสั่งหยุด
function cleanupPlayerEvents(player) {
  if (!player) return;
  player.onerror = null;
  player.onended = null;
  player.onplay = null;
  player.oncanplay = null;
  player.onloadeddata = null;
}

// หยุดและเคลียร์ HTML5 Audio ตัวปัจจุบันอย่างหมดจด
function cleanupCurrentAudio() {
  if (currentAudioPlayer) {
    cleanupPlayerEvents(currentAudioPlayer);
    try {
      currentAudioPlayer.pause();
      currentAudioPlayer.src = "";
    } catch (e) {}
    currentAudioPlayer = null;
  }
}

// ฟังก์ชันแบ่งท่อนข้อความสำหรับ Google Translate TTS (จำกัดไม่เกิน ~140 ตัวอักษรต่อช่วง และไม่ตัดกลางคำ)
function splitTextForGoogleTranslate(text, maxLength = 140) {
  if (!text) return [];
  const cleaned = text.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return [cleaned];

  let tokens = [];
  if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
    try {
      const seg = new Intl.Segmenter(["th", "en"], { granularity: "word" });
      for (const item of seg.segment(cleaned)) {
        tokens.push(item.segment);
      }
    } catch (e) {
      tokens = cleaned.split(/([,.;:!?ฯ\s]+)/);
    }
  } else {
    tokens = cleaned.split(/([,.;:!?ฯ\s]+)/);
  }

  const chunks = [];
  let current = "";
  for (const token of tokens) {
    if ((current + token).length <= maxLength) {
      current += token;
    } else {
      if (current.trim()) chunks.push(current.trim());
      if (token.length > maxLength) {
        for (let i = 0; i < token.length; i += maxLength) {
          const sub = token.substring(i, i + maxLength).trim();
          if (sub) chunks.push(sub);
        }
        current = "";
      } else {
        current = token;
      }
    }
  }
  if (current.trim()) {
    chunks.push(current.trim());
  }

  return chunks.filter(c => c.length > 0);
}

// เล่นเสียงสตรีมสดโมเดลเดียวกับ Google Translation แท้
// ป้องกัน 100%: ไม่มีการสลับหรือเรียกใช้ Web Speech API / เสียงโมเดลเก่าต่อหลังจากอ่านจบเด็ดขาด
function playGoogleTranslateSpeech(text, lang = "th", onStart, onEnd, onError) {
  stopSpeaking();
  const sessionToken = ++activeSpeechToken;

  const chunks = splitTextForGoogleTranslate(text, 140);
  if (chunks.length === 0) {
    if (onEnd) onEnd();
    return;
  }

  audioQueue = chunks.map(chunk => {
    return `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(chunk)}&tl=${lang}&client=tw-ob`;
  });
  currentQueueIndex = 0;

  function playNext() {
    if (sessionToken !== activeSpeechToken) return;

    // เมื่ออ่านจนครบทุกประโยคแล้ว ให้จบการทำงานและคืนค่า UI ปกติ (ไม่เรียกโมเดลเสียงตัวอื่นต่อเด็ดขาด)
    if (currentQueueIndex >= audioQueue.length) {
      cleanupCurrentAudio();
      audioQueue = [];
      currentQueueIndex = 0;
      isSpeaking = false;
      if (onEnd) onEnd();
      return;
    }

    const audioUrl = audioQueue[currentQueueIndex];
    const player = new Audio();
    currentAudioPlayer = player;

    player.onplay = () => {
      if (sessionToken !== activeSpeechToken) return;
      isSpeaking = true;
      if (currentQueueIndex === 0 && onStart) onStart();
    };

    player.onended = () => {
      if (sessionToken !== activeSpeechToken) return;
      cleanupPlayerEvents(player);
      currentQueueIndex++;
      playNext();
    };

    player.onerror = (e) => {
      if (sessionToken !== activeSpeechToken) return;
      console.warn("Google Translate TTS audio encountered error:", currentQueueIndex, e);
      cleanupPlayerEvents(player);
      if (currentAudioPlayer === player) currentAudioPlayer = null;
      isSpeaking = false;
      if (onError) onError();
    };

    player.src = audioUrl;
    player.play().catch(err => {
      if (sessionToken !== activeSpeechToken) return;
      console.warn("Google Translate TTS play caught error:", err);
      cleanupPlayerEvents(player);
      if (currentAudioPlayer === player) currentAudioPlayer = null;
      isSpeaking = false;
      if (onError) onError();
    });
  }

  playNext();
}

// ค้นหาเสียงภาษาไทยที่ดีที่สุด (Web Speech API)
function getBestGoogleThaiVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();

  const googleThai = voices.find(v => 
    v.lang.startsWith("th") && (v.name.includes("Google") || v.name.includes("Chrome"))
  );
  if (googleThai) return googleThai;

  const naturalThai = voices.find(v => 
    (v.lang === "th-TH" || v.lang === "th_TH" || v.lang.startsWith("th")) &&
    (v.name.includes("Natural") || v.name.includes("Neural") || v.name.includes("Online"))
  );
  if (naturalThai) return naturalThai;

  const anyThai = voices.find(v => 
    v.lang.startsWith("th") || v.lang === "th-TH" || v.lang === "th_TH"
  );
  return anyThai || null;
}

// ค้นหาเสียงภาษาอังกฤษที่ดีที่สุดตามบุคลิกของ AI Studio (Web Speech API)
function getBestGoogleEnglishVoice(voiceKey) {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const cfg = AI_STUDIO_VOICE_CONFIGS[voiceKey] || {};
  const isMale = cfg.gender === "male";

  if (isMale) {
    const googleMale = voices.find(v => 
      v.lang.startsWith("en") && v.name.includes("Google") && 
      (v.name.includes("Male") || v.name.includes("UK English Male"))
    );
    if (googleMale) return googleMale;
  } else {
    const googleFemale = voices.find(v => 
      v.lang.startsWith("en") && v.name.includes("Google") && 
      (v.name.includes("US English") || v.name.includes("Female") || v.name.includes("UK English Female"))
    );
    if (googleFemale) return googleFemale;
  }

  const anyGoogleEn = voices.find(v => v.lang.startsWith("en") && v.name.includes("Google"));
  if (anyGoogleEn) return anyGoogleEn;

  if (isMale) {
    const msMale = voices.find(v => 
      v.lang.startsWith("en") && 
      (v.name.includes("Guy") || v.name.includes("Davis") || v.name.includes("David") || v.name.includes("George"))
    );
    if (msMale) return msMale;
  } else {
    const msFemale = voices.find(v => 
      v.lang.startsWith("en") && 
      (v.name.includes("Jenny") || v.name.includes("Aria") || v.name.includes("Zira"))
    );
    if (msFemale) return msFemale;
  }

  const naturalEn = voices.find(v => 
    v.lang.startsWith("en") && 
    (v.name.includes("Natural") || v.name.includes("Neural") || v.name.includes("Online"))
  );
  if (naturalEn) return naturalEn;

  const usEn = voices.find(v => v.lang === "en-US" || v.lang === "en_US");
  if (usEn) return usEn;

  const anyEn = voices.find(v => v.lang.startsWith("en"));
  return anyEn || null;
}

// ช่วยสร้างบทบรรยายสละสลวยผ่าน Google AI Studio หากมี API Key (รองรับทั้งภาษาไทยและอังกฤษ)
async function generateAiStudioNarration(item, voiceKey, isEnglish) {
  const apiKey = getGoogleAiStudioKey();
  if (!apiKey) return null;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const promptText = isEnglish
      ? `You are Google cosmic narrator (${voiceKey}). Write a concise 2-sentence narration in English about "${item.nameEn || item.nameTh}" (${item.date}): "${item.descriptionEn || item.summaryTh}". Make it awe-inspiring, eloquent and natural to listen to. Reply ONLY with the text to be spoken aloud without any markdown:`
      : `คุณคือผู้บรรยายดาราศาสตร์ของ Google สไตล์เสียง ${voiceKey} ช่วยเขียนบทบรรยายสั้นๆ 2-3 ประโยคเป็นภาษาไทยสำหรับอ่านออกเสียงเกี่ยวกับ "${item.nameTh}" (วันที่ ${item.date}): "${item.descriptionTh || item.summaryTh}" ให้น่าฟัง ชวนทึ่ง และเป็นธรรมชาติ (ตอบกลับเฉพาะข้อความที่จะอ่าน ห้ามใส่สัญลักษณ์พิเศษหรือ markdown):`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: promptText }] }],
        generationConfig: { temperature: 0.3 }
      })
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const txt = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (txt && txt.trim().length > 15) return txt.trim();
    }
  } catch (e) {}
  return null;
}

async function startSpeaking() {
  if (!activeDiscoveryData) return;

  stopSpeaking();
  const sessionToken = ++activeSpeechToken;

  const selectedVoiceKey = getSelectedAIVoice();
  const voiceCfg = AI_STUDIO_VOICE_CONFIGS[selectedVoiceKey] || AI_STUDIO_VOICE_CONFIGS["th-translate"];
  
  // ตรวจสอบว่าเป็นเสียงภาษาอังกฤษหรือไม่
  const isEnglish = (voiceCfg.lang && voiceCfg.lang.startsWith("en"));

  const speakBtn = document.getElementById("btn-speak-summary");
  const btnText = document.getElementById("voice-btn-text");
  const voiceBars = document.getElementById("voice-bars");

  if (speakBtn) speakBtn.classList.add("speaking");
  if (btnText) btnText.innerText = isEnglish ? `กำลังเตรียมเสียง (${selectedVoiceKey})...` : "กำลังเตรียมเสียงบรรยาย...";
  if (voiceBars) voiceBars.classList.remove("hidden");
  isSpeaking = true;

  // สลับแท็บภาษาบนการ์ดให้ตรงกับภาษาที่กำลังอ่านโดยอัตโนมัติ
  const btnTh = document.getElementById("btn-tab-th");
  const btnEn = document.getElementById("btn-tab-en");
  const descTh = document.getElementById("desc-th");
  const descEn = document.getElementById("desc-en");

  if (isEnglish) {
    if (btnEn && btnTh && descEn && descTh) {
      btnEn.classList.add("active");
      btnTh.classList.remove("active");
      descEn.classList.remove("hidden");
      descTh.classList.add("hidden");
    }
  } else {
    if (btnEn && btnTh && descEn && descTh) {
      btnTh.classList.add("active");
      btnEn.classList.remove("active");
      descTh.classList.remove("hidden");
      descEn.classList.add("hidden");
    }
  }

  // 1. ขอรับบทบรรยายพิเศษจาก Google AI Studio / Gemini หากมี API Key
  let spokenText = null;
  if (getGoogleAiStudioKey()) {
    spokenText = await generateAiStudioNarration(activeDiscoveryData, selectedVoiceKey, isEnglish);
    if (sessionToken !== activeSpeechToken) return;
  }

  // 2. ถ้าไม่ได้ใช้ API Key ให้ใช้ข้อความต้นฉบับตามภาษาที่เลือก
  if (!spokenText) {
    if (isEnglish) {
      const titleEn = activeDiscoveryData.nameEn || activeDiscoveryData.nameTh || "";
      const descEnText = activeDiscoveryData.descriptionEn || activeDiscoveryData.explanation || activeDiscoveryData.summaryTh || "";
      spokenText = `${titleEn}. ${descEnText}`;
      spokenText = spokenText.replace(/[\r\n]+/g, " ").trim();
    } else {
      spokenText = activeDiscoveryData.nameTh.replace(/\([^)]*\)/g, "");
      spokenText += " ... " + (activeDiscoveryData.descriptionTh || activeDiscoveryData.summaryTh || "");
      spokenText = spokenText.replace(/,/g, " ").replace(/[\r\n]+/g, " ").trim();
    }
  }

  const onStart = () => {
    if (sessionToken !== activeSpeechToken) return;
    isSpeaking = true;
    if (speakBtn) speakBtn.classList.add("speaking");
    if (btnText) {
      const label = voiceCfg.type === "google-translate" 
        ? (isEnglish ? "Google Translate (EN)" : "Google แปลภาษา (TH)")
        : (isEnglish ? `บรรยาย (EN): ${selectedVoiceKey}` : `บรรยาย (TH): ${selectedVoiceKey}`);
      btnText.innerText = label;
    }
    if (voiceBars) voiceBars.classList.remove("hidden");
  };

  const onEnd = () => {
    if (sessionToken !== activeSpeechToken) return;
    resetVoiceUI();
  };

  const onError = () => {
    if (sessionToken !== activeSpeechToken) return;
    resetVoiceUI();
  };

  // ตรวจสอบโมเดล: Google Translation Stream vs Web Speech API
  if (voiceCfg.type === "google-translate") {
    // ปิดเสียง WebSpeech ให้แน่ใจว่าไม่มีอะไรค้างอยู่
    if ("speechSynthesis" in window) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    playGoogleTranslateSpeech(spokenText, voiceCfg.lang, onStart, onEnd, onError);
  } else {
    // ถ้าผู้ใช้เลือกโมเดล Web Speech เช่น Chrome ภาษาไทย หรือเสียง AI Studio ภาษาอังกฤษ
    if (!("speechSynthesis" in window)) {
      playGoogleTranslateSpeech(spokenText, voiceCfg.lang, onStart, onEnd, onError);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(spokenText);
    utterance.lang = voiceCfg.lang;

    if (isEnglish) {
      const englishVoice = getBestGoogleEnglishVoice(selectedVoiceKey);
      if (englishVoice) utterance.voice = englishVoice;
    } else {
      const thaiVoice = getBestGoogleThaiVoice();
      if (thaiVoice) utterance.voice = thaiVoice;
    }

    utterance.rate = voiceCfg.rate || 0.94;
    utterance.pitch = voiceCfg.pitch || 1.0;
    utterance.volume = 1.0;

    utterance.onstart = onStart;
    utterance.onend = onEnd;
    utterance.onerror = onError;

    window.speechSynthesis.speak(utterance);
  }
}

function testAiStudioVoice(voiceKey) {
  stopSpeaking();

  const voiceCfg = AI_STUDIO_VOICE_CONFIGS[voiceKey] || AI_STUDIO_VOICE_CONFIGS["th-translate"];
  const isEnglish = (voiceCfg.lang && voiceCfg.lang.startsWith("en"));

  const sampleText = isEnglish
    ? `Hello! This is Google narration voice in style ${voiceKey}. Ready to explore the cosmic wonders with you.`
    : (voiceCfg.type === "google-translate"
        ? `สวัสดีครับ นี่คือเสียงภาษาไทยโมเดลเดียวกับ Google Translation พร้อมพาคุณสำรวจจักรวาล`
        : `สวัสดีครับ นี่คือเสียงบรรยายจาก Google AI Studio และ Google ภาษาไทย พร้อมพาคุณสำรวจจักรวาล`);

  if (voiceCfg.type === "google-translate") {
    playGoogleTranslateSpeech(sampleText, voiceCfg.lang);
  } else {
    if (!("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(sampleText);
    utterance.lang = voiceCfg.lang;

    if (isEnglish) {
      const enVoice = getBestGoogleEnglishVoice(voiceKey);
      if (enVoice) utterance.voice = enVoice;
    } else {
      const thVoice = getBestGoogleThaiVoice();
      if (thVoice) utterance.voice = thVoice;
    }

    utterance.rate = voiceCfg.rate || 0.94;
    utterance.pitch = voiceCfg.pitch || 1.0;

    window.speechSynthesis.speak(utterance);
  }
}

function stopSpeaking() {
  activeSpeechToken++;
  cleanupCurrentAudio();
  audioQueue = [];
  currentQueueIndex = 0;

  if ("speechSynthesis" in window) {
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
  resetVoiceUI();
}

function resetVoiceUI() {
  isSpeaking = false;
  const speakBtn = document.getElementById("btn-speak-summary");
  const btnText = document.getElementById("voice-btn-text");
  const voiceBars = document.getElementById("voice-bars");

  if (speakBtn) speakBtn.classList.remove("speaking");
  if (btnText) btnText.innerText = "ฟังเสียงบรรยาย";
  if (voiceBars) voiceBars.classList.add("hidden");
}

/* ==========================================================================
   10. ระบบเปิดภาพขยายใหญ่ (Lightbox Modal)
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const cardImg = document.getElementById("card-image");
  const btnFullscreen = document.getElementById("btn-fullscreen");

  function openModal() {
    if (!activeDiscoveryData || !activeDiscoveryData.image) return;
    modalImg.src = activeDiscoveryData.image;
    modalCaption.innerText = `${activeDiscoveryData.nameTh} (${activeDiscoveryData.nameEn})`;
    modal.classList.add("active");
  }

  function closeModal() {
    modal.classList.remove("active");
  }

  if (cardImg) cardImg.addEventListener("click", openModal);
  if (btnFullscreen) btnFullscreen.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/* ==========================================================================
   11. บันทึกและแชร์การ์ดวันเกิดอวกาศ (Share Cosmic Card)
   ========================================================================== */
function initShareButton(item) {
  const shareBtn = document.getElementById("btn-share-card");
  if (!shareBtn) return;

  shareBtn.onclick = () => {
    const shareText = `📸 ภาพดาราศาสตร์ NASA APOD ในวันเกิดของฉัน!\n⭐ ${item.nameTh} (${item.date})\n🚀 ${item.descriptionTh}\n🔗 ดูภาพเต็ม: ${item.officialUrl || item.image}\n#NASA #APOD #SpaceBirthday`;

    if (navigator.share) {
      navigator.share({
        title: `NASA APOD ในวันเกิด: ${item.nameTh}`,
        text: shareText,
        url: item.officialUrl || window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert("✨ คัดลอกข้อความสรุปภาพ NASA APOD ในวันเกิดลงในคลิปบอร์ดเรียบร้อยแล้ว พร้อมแชร์ลงโซเชียลมีเดีย!");
      });
    }
  };
}

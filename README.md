# 🌌 Google Cosmic Birthday Explorer (NASA APOD 2026 Real-Time)

เว็บไซต์ค้นหาภาพถ่ายดาราศาสตร์และวัตถุอวกาศประจำวันเกิดของคุณแบบ **Real-Time** ย้อนหลังได้ทุกวันตั้งแต่ 16 มิถุนายน 1995 จนถึงปัจจุบันปี 2026 พร้อมระบบแปลภาษาไทยอัตโนมัติและเสียงบรรยายอัจฉริยะจาก **Google Translation & Google AI Studio**

---

## ✨ จุดเด่นและฟีเจอร์หลัก (Features)

1. **ค้นหาภาพอวกาศแบบ Real-Time อัปเดตล่าสุดปี 2026**:
   - เชื่อมต่อกับระบบคลังดาราศาสตร์สากล NASA Science REST API ดึงภาพจริงของวันเกิดได้ทุกวัน (1995 - 2026)
   - ไม่ว่าคุณจะเกิดวันไหน ก็ได้ภาพดาราศาสตร์ประจำวันเกิดจริงแบบ Real-Time 100%
2. **ระบบแปลภาษาไทยอัตโนมัติ (Google Translate Engine)**:
   - แปลชื่อและคำบรรยายทางวิทยาศาสตร์เป็นภาษาไทยทันที พร้อมปุ่มสลับอ่านต้นฉบับภาษาอังกฤษ
3. **ระบบเสียงบรรยายอัจฉริยะ (AI Voice Narration)**:
   - เสียงภาษาไทยแท้จาก **Google Translation Audio Engine** ฟังเพลินเป็นธรรมชาติ
   - รองรับเสียงภาษาอังกฤษสไตล์ **Google AI Studio** (Aoede, Charon, Kore, Puck, Fenrir)
4. **รองรับทั้งภาพ HD และวิดีโอ**:
   - รองรับการแสดงผลทั้งภาพถ่ายความละเอียดสูงจากกล้องอวกาศ (James Webb, Hubble, Spitzer) และวิดีโออวกาศ YouTube
   - ปุ่มดาวน์โหลดภาพ HD และปุ่มค้นหาข้อมูลเพิ่มเติมบน Google Search / Google Images
5. **UI ท่องอวกาศล้ำสมัย (Cinematic Space Experience)**:
   - Canvas ดาวระยิบระยับ ดาวตกพาดผ่านท้องฟ้า และระบบเสียง Web Audio Synthesizer
   - ดีไซน์การ์ดนิ่งเสถียร (Stationary Card) พร้อมสไลด์หน้าจอนุ่มนวล รองรับทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์

---

## 🚀 โครงสร้างไฟล์ (Project Files)

- `index.html` : หน้าเว็บหลัก โครงสร้างหน้าจอค้นหาและผลลัพธ์
- `styles.css` : สไตล์การตกแต่ง ธีมอวกาศ Futuristic Glassmorphism
- `app.js` : ระบบการทำงานหลัก, การค้นหา Real-Time, แปลภาษา และระบบเสียง
- `nasa-data.js` : ดัชนีข้อมูลประวัติศาสตร์อวกาศและวัตถุท้องฟ้าในระบบสุริยะ

---

## 🌐 การติดตั้งและเปิดใช้งานบน GitHub Pages

โปรเจกต์นี้สร้างขึ้นด้วย **Pure Frontend (HTML, CSS, Vanilla JavaScript)** จึงสามารถรันบน **GitHub Pages** ได้ทันที 100% โดยไม่ต้องมีเซิร์ฟเวอร์หรือ Build step:

1. สร้าง Repository ใหม่บน GitHub (เช่น `cosmic-birthday`) และตั้งเป็น **Public**
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้น GitHub
3. ไปที่แท็บ **Settings** > **Pages**
4. ในส่วน **Build and deployment** > เลือก Source เป็น **Deploy from a branch** > เลือก Branch `main` โฟลเดอร์ `/ (root)` แล้วกด **Save**
5. รอประมาณ 30 วินาที จะได้รับลิงก์เว็บไซต์จริงสำหรับแชร์ เช่น `https://<username>.github.io/cosmic-birthday/`

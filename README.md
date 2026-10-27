# Beam Monsicha — Portfolio Website

เว็บไซต์พอร์ตโฟลิโอหลายหน้า โทนสีชมพู ใช้ฟอนต์ Kanit + DM Sans (ดีไซน์เดิมของคุณ) เป็น HTML/CSS/JavaScript ล้วน ไม่ต้อง build

## หน้าในเว็บไซต์
- `index.html` — หน้าแรก (Hero, ริบบิ้นทักษะ, ผลงานเด่น, ใบรับรอง)
- `about.html` — เกี่ยวกับฉัน ทักษะ การศึกษา ภาษา
- `projects.html` — 5 โปรเจกต์ พร้อมภาพจริงและลิงก์เว็บ
- `experience.html` — ประสบการณ์ทำงาน และตัวอย่างคลิปคอนเทนต์
- `certificates.html` — ใบรับรอง Cisco และเกียรติบัตร *(หน้าใหม่)*

## ก่อนอัปโหลดขึ้น GitHub — ตรวจ 3 จุดนี้
1. **GitHub username**: เปิด `contact.html` ค้นหา `YOUR-USERNAME` แล้วแทนที่ด้วย username จริง (มี 2 ที่)
2. **รูปโปรไฟล์**: ใส่ไว้แล้วที่ `assets/img/profile.jpg` ถ้าอยากเปลี่ยนรูป ให้วางไฟล์ชื่อเดิมทับได้เลย
3. **ข้อมูลติดต่อ**: ตอนนี้ใส่อีเมล monsicha.beamz@gmail.com ไว้ ส่วนเบอร์โทรไม่ได้ใส่ เพราะเว็บบน GitHub Pages เป็นสาธารณะและค้นหาเจอได้ ถ้าต้องการใส่ ให้เพิ่มบล็อก `contact-item` ใน `contact.html`

## เผยแพร่ด้วย GitHub Pages
1. สร้าง repository ใหม่บน GitHub แบบ Public เช่น `beam-portfolio`
2. อัปโหลดไฟล์และโฟลเดอร์ **ทั้งหมดที่อยู่ในโฟลเดอร์นี้** (ไม่ใช่ไฟล์ ZIP)
3. ไปที่ **Settings → Pages**
4. ที่ Build and deployment เลือก **Deploy from a branch** → branch `main` → folder `/ (root)` → Save
5. รอสักครู่ เว็บจะอยู่ที่ `https://USERNAME.github.io/beam-portfolio/`

## แก้ไขเนื้อหาภายหลัง
- ข้อความ: แก้ในไฟล์ `.html` ของแต่ละหน้าได้โดยตรง
- สีและฟอนต์: อยู่ที่ตัวแปรบนสุดของ `assets/css/style.css`
- ภาพผลงาน: `assets/img/projects/`  ใบรับรอง: `assets/img/certs/`  คลิป: `assets/img/clips/`
- ลูกเล่น (เลื่อนแล้วเผยตัว, ตัวเลขนับขึ้น, Lightbox) อยู่ใน `assets/js/main.js` และปิดอัตโนมัติถ้าผู้ใช้ตั้งค่าลดการเคลื่อนไหว

Google Fonts โหลดจากอินเทอร์เน็ต ส่วนอื่นอยู่ในโฟลเดอร์เดียวกันทั้งหมด

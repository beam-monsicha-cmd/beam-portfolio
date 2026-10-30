# Beam Monsicha — Portfolio Website

เว็บไซต์พอร์ตโฟลิโอหลายหน้า HTML/CSS/JavaScript ล้วน ไม่ต้อง build

## โครงสร้างไฟล์ (สำคัญ: ต้องอยู่ตามนี้)
```
index.html  about.html  projects.html  experience.html  certificates.html  contact.html
assets/
  css/style.css
  js/main.js
  img/  profile.jpg  og-cover.jpg
        certs/  projects/  clips/
  Resume_Monsicha.pdf   <- เพิ่มเอง (ดูด้านล่าง)
```
`main.js` ต้องอยู่ที่ `assets/js/main.js` และ `style.css` ที่ `assets/css/style.css` ไม่ใช่ที่โฟลเดอร์นอกสุด

## เพิ่มปุ่มดาวน์โหลดเรซูเม่
ส่งออกเรซูเม่จาก Canva เป็น PDF ตั้งชื่อ `Resume_Monsicha.pdf` แล้วใส่ในโฟลเดอร์ `assets/`
ปุ่ม Resume ในหน้าแรกและหน้า Contact จะปรากฏเองเมื่อมีไฟล์ (ถ้ายังไม่มีไฟล์ ปุ่มจะซ่อนอยู่)

## สลับภาษา TH / EN
ปุ่ม TH | EN อยู่มุมขวาบนของทุกหน้า ระบบจำภาษาที่ผู้เข้าชมเลือกไว้ และเปิดภาษาอังกฤษตรง ๆ ได้ด้วยลิงก์ `...?lang=en`
ข้อความแต่ละส่วนอยู่ในแท็ก `<t-th>` (ไทย) และ `<t-en>` (อังกฤษ) ถ้าจะแก้ข้อความ ให้แก้ทั้งสองภาษาให้ตรงกัน

## อัปโหลดขึ้น GitHub
1. แตกไฟล์ ZIP
2. ใน repository กด **Add file → Upload files** แล้วลากไฟล์และโฟลเดอร์ **ที่อยู่ข้างใน** มาวาง (ไม่ใช่ไฟล์ ZIP)
3. กด **Commit changes** รอ 1–3 นาที แล้วรีเฟรชแรง ๆ (Ctrl+Shift+R)

## แก้ไขภายหลัง
- ข้อความ: แก้ในไฟล์ `.html` ของแต่ละหน้า
- สีและฟอนต์: ตัวแปรบนสุดของ `assets/css/style.css`
- ภาพ: `assets/img/projects/` (ผลงาน), `certs/` (ใบรับรอง), `clips/` (คลิป)
- รูปพรีวิวตอนแชร์ลิงก์: `assets/img/og-cover.jpg` (ถ้าเปลี่ยนชื่อ repository ให้แก้ลิงก์ og:image ในทุกหน้า)

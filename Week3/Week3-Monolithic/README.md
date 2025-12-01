# Task Board - Monolithic Architecture

## Monolithic Architecture
Monolithic Architecture คือ สถาปัตยกรรมซอฟต์แวร์ที่รวมทุกฟังก์ชันการทำงาน เช่น ส่วนติดต่อผู้ใช้ (User Interface), ตรรกะทางธุรกิจ (Business Logic) และฐานข้อมูล (Database) ไว้ใน โค้ดเบสเดียว (Single Codebase) และ แพ็กเกจเดียว ซึ่งทำให้พัฒนาและปรับขนาดแอปพลิเคชันในภาพรวมง่ายในช่วงแรก 

## Features
- View all tasks
- Create new task
- Delete task
- Change status Todo/ In Progress/ Done

## Setup
```bash
npm install
npm start
```

## Examples
- Main Index
  
  <img width="1919" height="891" alt="Screenshot 2025-12-01 165228" src="" />

- ดูงานทั้งหมด
  
  <img width="1419" height="507" alt="Screenshot 2025-12-01 165253" src="" />

- สร้างงานใหม่

  <img width="1426" height="517" alt="Screenshot 2025-12-01 165305" src="" />

  สร้าง

  <img width="650" height="224" alt="Screenshot 2025-12-01 165352" src="" />

  แสดงให้คุณเห็นที่นี่

  <img width="462" height="518" alt="Screenshot 2025-12-01 165410" src="" />

- เปลี่ยนสถานะ Todo/ กำลังดำเนินการ/ เสร็จสิ้น

  <img width="465" height="358" alt="Screenshot 2025-12-01 165442" src="" />
  
  <img width="455" height="345" alt="Screenshot 2025-12-01 165614" src="" />

  <img width="472" height="347" alt="Screenshot 2025-12-01 165458" src="" />

- ลบงาน

  มีปุ่ม Delete อยู่บนกล่องงานแต่ละกล่อง เมื่อคุณกดปุ่มนี้ งานนั้นก็จะถูกลบ
  
  <img width="647" height="239" alt="Screenshot 2025-12-01 165637" src="" />
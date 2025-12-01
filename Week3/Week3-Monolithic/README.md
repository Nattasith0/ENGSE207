<img width="1888" height="1040" alt="Screenshot 2025-12-01 201813" src="https://github.com/user-attachments/assets/ddcea9f5-6439-4e16-a31f-63b61c3b7942" /># Task Board - Monolithic Architecture

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
  
  <img width="1888" height="1040" alt="Screenshot 2025-12-01 201813" src="https://github.com/user-attachments/assets/2c00b396-a187-4c7e-a868-e4df0ea0b70e" />


- ดูงานทั้งหมด

  
  <img width="1762" height="747" alt="Screenshot 2025-12-01 202102" src="https://github.com/user-attachments/assets/d3186b4f-1584-4c53-b5da-062c6a1dd758" />


- สร้างงานใหม่
  
<img width="1773" height="635" alt="Screenshot 2025-12-01 202149" src="https://github.com/user-attachments/assets/01dab06f-cb87-400f-8072-d72e5ac6f9ed" />


  สร้าง

  <img width="574" height="168" alt="Screenshot 2025-12-01 203343" src="https://github.com/user-attachments/assets/b224ed2f-e42b-4938-bbb2-344efb718e0d" />


  แสดงให้คุณเห็นที่นี่

  <img width="565" height="509" alt="Screenshot 2025-12-01 203602" src="https://github.com/user-attachments/assets/b94646b4-30ea-4248-84d9-ada840b9c1fc" />


- เปลี่ยนสถานะ Todo/ กำลังดำเนินการ/ เสร็จสิ้น

  <img width="560" height="494" alt="Screenshot 2025-12-01 203645" src="https://github.com/user-attachments/assets/6c281ff9-2944-466f-934b-cf04c002dd00" />

  
  <img width="564" height="736" alt="Screenshot 2025-12-01 203706" src="https://github.com/user-attachments/assets/fe6a169d-a897-4127-b089-42c56d323a16" />


  <img width="566" height="568" alt="Screenshot 2025-12-01 203730" src="https://github.com/user-attachments/assets/fe8a6f39-b36c-42ce-9e2f-a13ae7d19306" />


- ลบงาน

  มีปุ่ม Delete อยู่บนกล่องงานแต่ละกล่อง เมื่อคุณกดปุ่มนี้ งานนั้นก็จะถูกลบ
  
  <img width="581" height="172" alt="Screenshot 2025-12-01 203759" src="https://github.com/user-attachments/assets/fe2416b7-c6bd-4df2-aef1-856f49320a34" />

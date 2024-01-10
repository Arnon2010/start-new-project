<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include_once "db.php";

// รับค่า std_id จากคำขอ
//$fac_id = $_GET['fac_id']; // หรือใช้ $_POST แล้วเปลี่ยนเป็น POST ในคำสั่ง SQL

// สร้างคำสั่ง SQL เพื่อดึงข้อมูลนักศึกษาจากฐานข้อมูล
$sql = "SELECT *, 
CASE WHEN user_role = 'A' THEN 'ผู้ดูแลระบบ' ELSE 'คณะ/หน่วยงาน' END AS role_status
FROM  mt_user u
WHERE u.user_astatus = '1'";


// ดำเนินการส่งคำสั่ง SQL และรับผลลัพธ์
$result = $conn->query($sql);
$numrow = $result->num_rows;
// ตรวจสอบผลลัพธ์
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // $data[] = array(
        //     'user_id' => $row['user_id'],
        //     'user_email' => $row['user_email'],
        // );

        $data[] = $row;
    }
    // แปลงข้อมูลเป็นรูปแบบ JSON และส่งกลับไปยังแอปพลิเคชัน Angular
    header('Content-Type: application/json');
    echo json_encode(array('data' => $data, 'row' => $numrow));
} else {
    // ถ้าไม่พบข้อมูลนักศึกษา
    echo 'ไม่พบข้อมูลผู้ใช้งานระบบ';
}

// ปิดการเชื่อมต่อฐานข้อมูล
$conn->close();

<?php
// Veritabanı bağlantısı
define('DB_HOST', 'localhost');
define('DB_USER', 'ozpenpvcom_cagatayozbek'); // cPanel'deki kullanıcı adınız
define('DB_PASS', 'ozpenwinsa');  // Oluşturduğunuz şifre
define('DB_NAME', 'ozpenpvcom_ozpen_admin');  // Veritabanı adı

// Bağlantı oluştur
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Türkçe karakter için
$conn->set_charset("utf8mb4");

// Bağlantı kontrolü
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Veritabanı bağlantı hatası']));
}

// Admin şifresi (hash'lenmiş)
define('ADMIN_PASSWORD', password_hash('ozpenwinsa', PASSWORD_DEFAULT)); // İlk kurulumda değiştirin!

// CORS ayarları (React için)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=utf-8');

// Preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
?>

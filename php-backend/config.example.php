<?php
// Veritabanı bağlantısı
define('DB_HOST', 'localhost');
define('DB_USER', 'KULLANICI_ADI'); // cPanel'deki kullanıcı adınız
define('DB_PASS', 'SIFRE');  // Oluşturduğunuz şifre
define('DB_NAME', 'VERITABANI_ADI');  // Veritabanı adı

// Bağlantı oluştur
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Türkçe karakter için
$conn->set_charset("utf8mb4");

// Bağlantı kontrolü
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Veritabanı bağlantı hatası']));
}

// Admin şifresi (hash'lenmiş)
define('ADMIN_PASSWORD', '$2y$10$EXAMPLEHASH...'); // İlk kurulumda değiştirin!
?>

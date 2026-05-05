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

// Admin şifresi hash'i. Üretimde şu komutla üretin:
// php -r "echo password_hash('YENI_GUCLU_SIFRE', PASSWORD_DEFAULT), PHP_EOL;"
define('ADMIN_PASSWORD', 'BURAYA_PASSWORD_HASH_DEGERI_GELECEK');

// API CORS izinleri
define('ALLOWED_ORIGINS', [
    'https://ozpenpvc.com.tr',
    'https://www.ozpenpvc.com.tr',
]);
?>

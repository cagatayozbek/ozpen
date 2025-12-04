<?php
// Tüm hataları göster
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h1>🔧 Veritabanı Bağlantı Testi</h1>";

// Config dosyasını yükle
require_once('config.php');

echo "<p>✅ config.php başarıyla yüklendi</p>";

// Bağlantıyı test et
if ($conn->connect_error) {
    echo "<p style='color:red'>❌ Bağlantı hatası: " . $conn->connect_error . "</p>";
    die();
}

echo "<p style='color:green'>✅ Veritabanına başarıyla bağlanıldı!</p>";

// Tablo var mı kontrol et
$result = $conn->query("SHOW TABLES LIKE 'reference'");
if ($result->num_rows > 0) {
    echo "<p style='color:green'>✅ 'reference' tablosu mevcut</p>";
    
    // Tablo yapısını göster
    $structure = $conn->query("DESCRIBE reference");
    echo "<h3>Tablo Yapısı:</h3><ul>";
    while ($row = $structure->fetch_assoc()) {
        echo "<li>{$row['Field']} ({$row['Type']})</li>";
    }
    echo "</ul>";
    
    // Kayıt sayısını göster
    $count = $conn->query("SELECT COUNT(*) as total FROM reference")->fetch_assoc();
    echo "<p>📊 Toplam {$count['total']} kayıt var</p>";
} else {
    echo "<p style='color:red'>❌ 'reference' tablosu bulunamadı!</p>";
}

echo "<hr><p><strong>Test tamamlandı!</strong></p>";
?>

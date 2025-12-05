<?php
require_once('api_bootstrap.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $uploadDir = '../uploads/';
    
    // Klasör yoksa oluştur
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    
    $file = $_FILES['file'];
    
    // Dosya adını temizle (Türkçe karakter ve boşlukları düzelt)
    function cleanFileName($string) {
        $tr = array('ş','Ş','ı','I','İ','ğ','Ğ','ü','Ü','ö','Ö','Ç','ç','(',')','/',' ','?');
        $eng = array('s','s','i','i','i','g','g','u','u','o','o','c','c','','','-','-','');
        $string = str_replace($tr, $eng, $string);
        $string = preg_replace('/[^A-Za-z0-9\-\.]/', '', $string); // Sadece güvenli karakterler
        return strtolower($string);
    }
    
    $cleanName = cleanFileName($file['name']);
    $fileName = time() . '_' . $cleanName;
    $targetPath = $uploadDir . $fileName;
    
    // Sadece resimlere izin ver
    $allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!in_array($file['type'], $allowedTypes)) {
        echo json_encode(['success' => false, 'message' => 'Sadece JPG, PNG veya WEBP yükleyebilirsiniz.']);
        exit;
    }
    
    if (move_uploaded_file($file['tmp_name'], $targetPath)) {
        // Tam URL döndür
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
        $url = "$protocol://$_SERVER[HTTP_HOST]/php-backend/uploads/$fileName";
        
        echo json_encode(['success' => true, 'url' => $url]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Dosya yüklenemedi.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Dosya bulunamadı.']);
}
?>

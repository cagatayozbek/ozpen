<?php
require_once('api_bootstrap.php');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['success' => false, 'message' => 'Geçersiz istek'], 405);
}

require_admin();
require_csrf();

if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    json_response(['success' => false, 'message' => 'Dosya bulunamadı.'], 400);
}

$file = $_FILES['file'];
$maxSize = 5 * 1024 * 1024;

if ($file['size'] > $maxSize) {
    json_response(['success' => false, 'message' => 'Dosya boyutu en fazla 5 MB olabilir.'], 400);
}

if (!is_uploaded_file($file['tmp_name'])) {
    json_response(['success' => false, 'message' => 'Geçersiz dosya yüklemesi.'], 400);
}

$finfo = new finfo(FILEINFO_MIME_TYPE);
$mimeType = $finfo->file($file['tmp_name']);
$allowedTypes = [
    'image/jpeg' => 'jpg',
    'image/png' => 'png',
    'image/webp' => 'webp',
];

if (!isset($allowedTypes[$mimeType])) {
    json_response(['success' => false, 'message' => 'Sadece JPG, PNG veya WEBP yükleyebilirsiniz.'], 400);
}

$uploadDir = __DIR__ . '/../uploads/';

if (!is_dir($uploadDir) && !mkdir($uploadDir, 0755, true)) {
    json_response(['success' => false, 'message' => 'Yükleme klasörü oluşturulamadı.'], 500);
}

if (!is_writable($uploadDir)) {
    json_response(['success' => false, 'message' => 'Yükleme klasörüne yazılamıyor.'], 500);
}

function cleanFileName($string) {
    $tr = array('ş','Ş','ı','I','İ','ğ','Ğ','ü','Ü','ö','Ö','Ç','ç','(',')','/',' ','?');
    $eng = array('s','s','i','i','i','g','g','u','u','o','o','c','c','','','-','-','');
    $string = str_replace($tr, $eng, $string);
    $string = preg_replace('/[^A-Za-z0-9\-]/', '', pathinfo($string, PATHINFO_FILENAME));
    $string = trim(strtolower($string), '-');

    return $string ?: 'referans';
}

$safeBaseName = cleanFileName($file['name']);
$fileName = sprintf('%s_%s.%s', date('YmdHis'), bin2hex(random_bytes(6)), $allowedTypes[$mimeType]);
$targetPath = $uploadDir . $safeBaseName . '_' . $fileName;

if (!move_uploaded_file($file['tmp_name'], $targetPath)) {
    json_response(['success' => false, 'message' => 'Dosya yüklenemedi.'], 500);
}

chmod($targetPath, 0644);

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'ozpenpvc.com.tr';
$url = "$protocol://$host/php-backend/uploads/" . basename($targetPath);

echo json_encode(['success' => true, 'url' => $url]);

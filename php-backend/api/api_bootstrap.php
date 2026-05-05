<?php
require_once __DIR__ . '/../config.php';

// CORS ayarları (React ve admin panel için)
$allowedOrigins = defined('ALLOWED_ORIGINS')
    ? ALLOWED_ORIGINS
    : [
        'https://ozpenpvc.com.tr',
        'https://www.ozpenpvc.com.tr',
        'http://localhost:3000',
        'http://localhost:4173',
    ];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if ($origin && in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Credentials: true');
}

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-Token');
header('Content-Type: application/json; charset=utf-8');

// Preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

function start_admin_session() {
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
}

function current_csrf_token() {
    start_admin_session();
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['csrf_token'];
}

function json_response($payload, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($payload);
    exit();
}

function require_admin() {
    start_admin_session();
    if (empty($_SESSION['admin_logged_in'])) {
        json_response(['success' => false, 'message' => 'Yetkisiz erişim'], 401);
    }
}

function require_csrf() {
    start_admin_session();
    $requestToken = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    $sessionToken = $_SESSION['csrf_token'] ?? '';

    if (!$requestToken || !$sessionToken || !hash_equals($sessionToken, $requestToken)) {
        json_response(['success' => false, 'message' => 'Geçersiz güvenlik anahtarı'], 403);
    }
}

<?php
require_once('api_bootstrap.php');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Tüm referansları getir
        $sql = "SELECT * FROM reference ORDER BY created_at DESC";
        $result = $conn->query($sql);
        
        $references = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $references[] = $row;
            }
        }
        
        echo json_encode([
            'success' => true,
            'data' => $references
        ]);
        break;
        
    case 'POST':
        // Yeni referans ekle (Admin panelden)
        session_start();
        if (!isset($_SESSION['admin_logged_in'])) {
            echo json_encode(['success' => false, 'message' => 'Yetkisiz erişim']);
            exit();
        }
        
        $data = json_decode(file_get_contents('php://input'), true);
        
        $title = $conn->real_escape_string($data['title']);
        $description = $conn->real_escape_string($data['description']);
        $location = $conn->real_escape_string($data['location']);
        $year = intval($data['year']);
        $category = $conn->real_escape_string($data['category']);
        $image = $conn->real_escape_string($data['image']);
        
        $sql = "INSERT INTO reference (title, description, location, year, category, image) 
                VALUES ('$title', '$description', '$location', $year, '$category', '$image')";
        
        if ($conn->query($sql)) {
            echo json_encode([
                'success' => true,
                'message' => 'Referans başarıyla eklendi',
                'id' => $conn->insert_id
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Hata: ' . $conn->error]);
        }
        break;
        
    case 'DELETE':
        // Referans sil
        session_start();
        if (!isset($_SESSION['admin_logged_in'])) {
            echo json_encode(['success' => false, 'message' => 'Yetkisiz erişim']);
            exit();
        }
        
        $data = json_decode(file_get_contents('php://input'), true);
        $id = intval($data['id']);
        
        $sql = "DELETE FROM reference WHERE id = $id";
        
        if ($conn->query($sql)) {
            echo json_encode(['success' => true, 'message' => 'Referans silindi']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Hata: ' . $conn->error]);
        }
        break;
        
    default:
        echo json_encode(['success' => false, 'message' => 'Geçersiz istek']);
        break;
}

$conn->close();
?>

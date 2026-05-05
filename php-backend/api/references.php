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
        require_admin();
        require_csrf();
        
        $data = json_decode(file_get_contents('php://input'), true);
        if (!is_array($data)) {
            json_response(['success' => false, 'message' => 'Geçersiz veri'], 400);
        }
        
        $title = trim($data['title'] ?? '');
        $description = trim($data['description'] ?? '');
        $location = trim($data['location'] ?? '');
        $year = intval($data['year'] ?? date('Y'));
        $category = trim($data['category'] ?? '');
        $image = trim($data['image'] ?? '');

        if ($title === '') {
            json_response(['success' => false, 'message' => 'Başlık zorunludur'], 400);
        }
        
        $stmt = $conn->prepare(
            "INSERT INTO reference (title, description, location, year, category, image) VALUES (?, ?, ?, ?, ?, ?)"
        );
        $stmt->bind_param('sssiss', $title, $description, $location, $year, $category, $image);
        
        if ($stmt->execute()) {
            echo json_encode([
                'success' => true,
                'message' => 'Referans başarıyla eklendi',
                'id' => $conn->insert_id
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Hata: ' . $conn->error]);
        }
        $stmt->close();
        break;
        
    case 'DELETE':
        // Referans sil
        require_admin();
        require_csrf();
        
        $data = json_decode(file_get_contents('php://input'), true);
        if (!is_array($data)) {
            json_response(['success' => false, 'message' => 'Geçersiz veri'], 400);
        }

        $id = intval($data['id'] ?? 0);
        if ($id <= 0) {
            json_response(['success' => false, 'message' => 'Geçersiz referans'], 400);
        }
        
        $stmt = $conn->prepare("DELETE FROM reference WHERE id = ?");
        $stmt->bind_param('i', $id);
        
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Referans silindi']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Hata: ' . $conn->error]);
        }
        $stmt->close();
        break;
        
    default:
        echo json_encode(['success' => false, 'message' => 'Geçersiz istek']);
        break;
}

$conn->close();
?>

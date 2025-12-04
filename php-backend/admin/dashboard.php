<?php
session_start();
require_once('../config.php');

// Giriş kontrolü
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit();
}

// Referansları çek
$sql = "SELECT * FROM reference ORDER BY created_at DESC";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Referans Yönetimi - Özpen Admin</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f5f5f5;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .container {
            max-width: 1200px;
            margin: 30px auto;
            padding: 0 20px;
        }
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            text-decoration: none;
            display: inline-block;
        }
        .btn-primary {
            background: #667eea;
            color: white;
        }
        .btn-danger {
            background: #ff4444;
            color: white;
        }
        .btn-success {
            background: #00C851;
            color: white;
        }
        .card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background: #f8f9fa;
            font-weight: bold;
        }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
        }
        .modal-content {
            background: white;
            width: 90%;
            max-width: 600px;
            margin: 50px auto;
            padding: 30px;
            border-radius: 10px;
        }
        input, textarea, select {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 2px solid #ddd;
            border-radius: 5px;
        }
        textarea {
            min-height: 100px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>📊 Referans Yönetimi</h1>
        <a href="logout.php" class="btn btn-danger">Çıkış</a>
    </div>

    <div class="container">
        <div class="card">
            <button class="btn btn-success" onclick="openModal()">➕ Yeni Referans Ekle</button>
        </div>

        <div class="card">
            <table>
                <thead>
                    <tr>
                        <th>Başlık</th>
                        <th>Konum</th>
                        <th>Yıl</th>
                        <th>Kategori</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if ($result->num_rows > 0): ?>
                        <?php while($row = $result->fetch_assoc()): ?>
                            <tr>
                                <td><?= htmlspecialchars($row['title']) ?></td>
                                <td><?= htmlspecialchars($row['location']) ?></td>
                                <td><?= $row['YEAR'] ?></td>
                                <td><?= htmlspecialchars($row['category']) ?></td>
                                <td>
                                    <button class="btn btn-danger" onclick="deleteReference(<?= $row['id'] ?>)">Sil</button>
                                </td>
                            </tr>
                        <?php endwhile; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="5" style="text-align: center;">Henüz referans eklenmemiş</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Modal -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <h2>Yeni Referans Ekle</h2>
            <form id="referenceForm">
                <input type="text" name="title" placeholder="Proje Başlığı" required>
                <textarea name="description" placeholder="Açıklama"></textarea>
                <input type="text" name="location" placeholder="Konum (örn: Ankara)">
                <input type="number" name="year" placeholder="Yıl" min="2000" max="2030">
                <select name="category">
                    <option value="">Kategori Seçin</option>
                    <option value="PVC Pencere">PVC Pencere</option>
                    <option value="PVC Kapı">PVC Kapı</option>
                    <option value="Cam Balkon">Cam Balkon</option>
                    <option value="Panjur">Panjur</option>
                </select>
                <input type="text" name="image" placeholder="Fotoğraf URL (opsiyonel)">
                <button type="submit" class="btn btn-success">Kaydet</button>
                <button type="button" class="btn btn-danger" onclick="closeModal()">İptal</button>
            </form>
        </div>
    </div>

    <script>
        function openModal() {
            document.getElementById('modal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('referenceForm').reset();
        }

        document.getElementById('referenceForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            const response = await fetch('../api/references.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (result.success) {
                alert('Referans eklendi!');
                location.reload();
            } else {
                alert('Hata: ' + result.message);
            }
        });

        async function deleteReference(id) {
            if (!confirm('Bu referansı silmek istediğinizden emin misiniz?')) return;

            const response = await fetch('../api/references.php', {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id})
            });

            const result = await response.json();
            if (result.success) {
                alert('Referans silindi!');
                location.reload();
            } else {
                alert('Hata: ' + result.message);
            }
        }
    </script>
</body>
</html>

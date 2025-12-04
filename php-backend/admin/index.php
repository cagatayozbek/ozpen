<?php
header('Content-Type: text/html; charset=utf-8');
session_start();

// Basit admin kontrol
if (!isset($_SESSION['admin_logged_in'])) {
    // Şifre kontrolü
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if ($_POST['pass'] === 'ozpenwinsa') {
            $_SESSION['admin_logged_in'] = true;
            header('Location: ?page=dashboard');
            exit;
        }
    }
    
    // Login formu
    ?>
    <!DOCTYPE html>
    <html><head><title>Admin Girişi</title></head>
    <body style="font-family:Arial;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#667eea">
        <form method="POST" style="background:white;padding:40px;border-radius:10px;box-shadow:0 0 20px rgba(0,0,0,0.2)">
            <h2 style="text-align:center">🔐 Özpen Admin</h2>
            <input type="password" name="pass" placeholder="Şifre" required style="width:100%;padding:15px;margin:20px 0;border:2px solid #ddd;border-radius:5px;box-sizing:border-box">
            <button type="submit" style="width:100%;padding:15px;background:#667eea;color:white;border:none;border-radius:5px;cursor:pointer;font-weight:bold">Giriş</button>
        </form>
    </body></html>
    <?php
    exit;
}

// Dashboard
require_once('../config.php');
?>
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Referans Yönetimi</title></head>
<body style="font-family:Arial;margin:0;background:#f5f5f5">
    <div style="background:#667eea;color:white;padding:20px;display:flex;justify-content:space-between">
        <h1>📊 Referans Yönetimi</h1>
        <a href="logout.php" style="color:white;text-decoration:none;background:#ff4444;padding:10px 20px;border-radius:5px">Çıkış</a>
    </div>
    <div style="max-width:1200px;margin:30px auto;padding:20px">
        <div style="background:white;padding:20px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.1);margin-bottom:20px">
            <button onclick="document.getElementById('modal').style.display='block'" style="background:#00C851;color:white;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;font-weight:bold">➕ Yeni Referans Ekle</button>
        </div>
        <div style="background:white;padding:20px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.1)">
            <table style="width:100%;border-collapse:collapse">
                <tr style="background:#f8f9fa">
                    <th style="padding:15px;text-align:left;border-bottom:1px solid #ddd">Başlık</th>
                    <th style="padding:15px;text-align:left;border-bottom:1px solid #ddd">Konum</th>
                    <th style="padding:15px;text-align:left;border-bottom:1px solid #ddd">Yıl</th>
                    <th style="padding:15px;text-align:left;border-bottom:1px solid #ddd">İşlemler</th>
                </tr>
                <?php
                $result = $conn->query("SELECT * FROM reference ORDER BY created_at DESC");
                if ($result->num_rows > 0):
                    while($row = $result->fetch_assoc()):
                ?>
                <tr>
                    <td style="padding:15px;border-bottom:1px solid #ddd"><?= htmlspecialchars($row['title']) ?></td>
                    <td style="padding:15px;border-bottom:1px solid #ddd"><?= htmlspecialchars($row['location']) ?></td>
                    <td style="padding:15px;border-bottom:1px solid #ddd"><?= $row['YEAR'] ?></td>
                    <td style="padding:15px;border-bottom:1px solid #ddd">
                        <button onclick="deleteRef(<?= $row['id'] ?>)" style="background:#ff4444;color:white;padding:5px 15px;border:none;border-radius:5px;cursor:pointer">Sil</button>
                    </td>
                </tr>
                <?php endwhile; else: ?>
                <tr><td colspan="4" style="padding:20px;text-align:center;color:#999">Henüz referans eklenmemiş</td></tr>
                <?php endif; ?>
            </table>
        </div>
    </div>

    <!-- Modal -->
    <div id="modal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5)">
        <div style="background:white;width:90%;max-width:600px;margin:50px auto;padding:30px;border-radius:10px">
            <h2>Yeni Referans Ekle</h2>
            <form id="form">
                <input type="text" name="title" placeholder="Proje Başlığı" required style="width:100%;padding:10px;margin-bottom:15px;border:2px solid #ddd;border-radius:5px;box-sizing:border-box">
                <textarea name="description" placeholder="Açıklama" style="width:100%;padding:10px;margin-bottom:15px;border:2px solid #ddd;border-radius:5px;min-height:100px;box-sizing:border-box"></textarea>
                <input type="text" name="location" placeholder="Konum" style="width:100%;padding:10px;margin-bottom:15px;border:2px solid #ddd;border-radius:5px;box-sizing:border-box">
                <input type="number" name="year" placeholder="Yıl" min="2000" max="2030" style="width:100%;padding:10px;margin-bottom:15px;border:2px solid #ddd;border-radius:5px;box-sizing:border-box">
                <select name="category" style="width:100%;padding:10px;margin-bottom:15px;border:2px solid #ddd;border-radius:5px;box-sizing:border-box">
                    <option value="">Kategori Seçin</option>
                    <option>PVC Pencere</option>
                    <option>PVC Kapı</option>
                    <option>Cam Balkon</option>
                </select>
                <button type="submit" style="background:#00C851;color:white;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;margin-right:10px">Kaydet</button>
                <button type="button" onclick="document.getElementById('modal').style.display='none'" style="background:#ff4444;color:white;padding:10px 20px;border:none;border-radius:5px;cursor:pointer">İptal</button>
            </form>
        </div>
    </div>

    <script>
    document.getElementById('form').onsubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        const res = await fetch('../api/references.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const result = await res.json();
        alert(result.message);
        if(result.success) location.reload();
    };

    async function deleteRef(id) {
        if(!confirm('Silmek istediğinizden emin misiniz?')) return;
        const res = await fetch('../api/references.php', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        });
        const result = await res.json();
        alert(result.message);
        if(result.success) location.reload();
    }
    </script>
</body></html>

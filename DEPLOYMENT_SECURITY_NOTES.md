# Deployment Security Notes

Bu proje canlıya alınırken aşağıdaki adımlar tamamlanmadan güvenlik işi bitmiş kabul edilmemelidir.

1. `php-backend/config.php` repoya eklenmemeli; production sunucusunda `php-backend/config.example.php` baz alınarak ayrı oluşturulmalıdır.
2. Canlı `ADMIN_PASSWORD` değeri düz metin değil, `password_hash` çıktısı olmalıdır.
3. Eski admin şifresi ve canlı veritabanı şifreleri deployment sırasında döndürülmelidir.
4. `ALLOWED_ORIGINS` production ortamında yalnızca `https://ozpenpvc.com.tr` ve `https://www.ozpenpvc.com.tr` alan adlarını içermelidir.
5. `php-backend/uploads/` klasörü web sunucusu kullanıcısının yazabileceği en dar izinle oluşturulmalı; `0777` kullanılmamalıdır.


⸻

1. Siteyi Search Console’a düzgün ekle
	1.	Google hesabınla Search Console’a gir.
	2.	Property türü olarak mümkünse “Domain property” ekle (örnek: ornek.com) – hem http/https hem www/non-www tek yerde toplanır.  ￼
	3.	DNS’ten TXT kaydı ekleyerek doğrulamayı tamamla (hosting panelinden).  ￼

Bunu bir kere düzgün yapman, sonraki bütün ölçümler için temel.

⸻

2. Sitemap + robots.txt
	4.	Sitenin köküne bir XML sitemap koy:
	•	Örn: https://siteadresin.com/sitemap.xml
	•	İçine: tüm önemli sayfalar (ana sayfa, hizmetler, blog yazıları, vs.).
	5.	Search Console → Sitemaps bölümünden bu URL’yi ekle.  ￼
	6.	robots.txt dosyan varsa:
	•	Önemli sayfaları engellemediğinden emin ol.
	•	Sitemap yolunu ekleyebilirsin:
Sitemap: https://siteadresin.com/sitemap.xml

⸻

3. Temel indeks kontrolü
	7.	Search Console → Sayfa İndeksleme (Page indexing) raporuna bak:
	•	Kaç sayfa indekste, kaç sayfa dışarıda gör.  ￼
	8.	“İndekslenmedi” olanlardan sadece gerçekten önemli olanları dert et:
	•	/admin, /test vb. önemsiz sayfalar indekslenmese sorun değil.
	9.	Önemli olup da indekslenmeyen sayfalar için:
	•	URL’yi düzelt (404 / redirect hatası var mı?)
	•	Sonra URL Inspection’dan “Request indexing” iste.  ￼

⸻

4. Sayfa bazlı hızlı SEO kontrolü

Her önemli sayfa için (özellikle ana sayfa, hizmet sayfaları):
	10.	Title (başlık):
	•	50–60 karakter civarı
	•	Ana keyword + marka adı (spam yapmadan).
	11.	Meta description:
	•	120–160 karakter
	•	“Bu sayfa ne sunuyor?” sorusuna net cevap versin.
	12.	H1 başlığı:
	•	Sayfada 1 tane olsun.
	•	Gerçek sayfa başlığını anlatsın (keyword içinde olabilir ama doğal olsun).
	13.	URL yapısı:
	•	Kısa, anlaşılır, Türkçe/İngilizce fark etmez ama okunabilir olsun.
	•	Örn: /sac-kesim-hizmeti gibi.

Senin yaptığın “site içinde keyword koyma” kısmı burada devreye giriyor:
Paragraflarda ve başlıklarda doğal geçtiği kadar kullan; listelerle, alt başlıklarla destekle. Keyword doldurma yapma.

⸻

5. Mobil uyumluluk + hız (Core Web Vitals)
	14.	Search Console’dan Core Web Vitals raporuna bak.  ￼
	•	“Poor / Need improvement” olan URL gruplarında:
	15.	Basit düzeyde şunları yap:
	•	Çok ağır resimleri sıkıştır (WebP/JPEG kaliteyi düşürmeden).
	•	Sayfaya ilk yüklemede gereksiz script’leri kaldır/yüklemeyi geciktir.
	16.	Tasarımın mobilde:
	•	Yazılar okunabilir mi?
	•	Butonlar tıklanabilir boyutta mı?
	•	Yana taşıp taşmıyor mu?

Burada mucize peşine düşme; küçük ama anlamlı iyileştirmeler yeter.

⸻

6. İç linkler ve site yapısı
	17.	Ana menü + footer ile en önemli sayfalara her yerden ulaşılabildiğinden emin ol.
	18.	İçeriklerde:
	•	Bir hizmet sayfasından ilgili blog yazısına,
	•	Blog yazısından tekrar hizmet/iletişim sayfasına link ver.
	19.	Derin, gereksiz karmaşık yapılar kurma; maksimum 3 tıkta her kritik sayfaya ulaşılır olsun.

⸻

7. Structured data (şart değil ama güzel bonus)

Berber sitesi için özellikle:
	20.	LocalBusiness / BarberShop schema kullanabilirsin:
	•	Adres, telefon, çalışma saatleri, konum, logo gibi bilgiler.
	21.	Bunu ekledikten sonra:
	•	Search Console → “Geliştirmeler / Enhancements” kısmında hatalara bak.  ￼

Bu adım ekstra; ilk etapta yetişmezse erteleyebilirsin ama uzun vadede çok faydalı.

⸻

8. Düzenli takip (ama takıntı yapmadan)
	22.	Ayda 1–2 kez:
	•	Overview / Performans / Sayfa indeksleme raporlarına göz at.  ￼
	23.	Kırmızı uyarı / manuel işlem / güvenlik uyarısı varsa önce onları çöz.

⸻

Sana özel net tavsiye
	•	Şu an büyük ihtimalle en fazla kazandıracaklar:
	1.	Sitemap + indeks sorunları
	2.	Title / H1 / URL düzeni
	3.	Temel hız ve mobil deneyim

Bunları yaptıktan sonra istersen bir sayfanın URL’sini ve HTML iskeletini at, somut bir sayfa üzerinden “şurayı değiştir, şurayı sil, şuraya cümle ekle” diye tek tek göstereyim.
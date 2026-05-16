# FitnessTracker

FitnessTracker, React ve Bootstrap 5 ile hazirlanmis basit bir fitness takip uygulamasidir. Kullanici antrenman ekleyebilir, kayitlari listeleyebilir, güncelleyebilir ve silebilir.

## Kullanilan Teknolojiler

- React
- Vite
- Bootstrap 5
- Netlify

## Proje Yapisi

- `src/Components`: Form, liste ve istatistik bileşenleri
- `src/Pages`: Sayfa bileşenleri
- `src/Interfaces`: Veri modeli ve başlangic verileri

## Ozellikler

- Antrenman ekleme
- Antrenmanlari listeleme
- Var olan kaydi güncelleme
- Kayit silme
- Toplam süre, kalori ve ortalama kalori özetleri
- Kayitlari tarayicinin localStorage alaninda saklama
- Profil bilgisi güncelleme

## Ekran Goruntusu

# Web

<img width="1711" height="1304" alt="image" src="https://github.com/user-attachments/assets/a427ce8d-73d5-4b0d-ba02-208bedc4d380" />
<img width="1728" height="1249" alt="image" src="https://github.com/user-attachments/assets/6fd70aff-a148-402c-aad0-92170bb4835d" />

# Mobil

<img width="553" height="995" alt="image" src="https://github.com/user-attachments/assets/8b43f9b6-40a2-4a65-a542-f1fc73cc4db3" />
<img width="545" height="977" alt="image" src="https://github.com/user-attachments/assets/6e2e1e13-8377-4326-b536-ad8e28e96709" />

## Kurulum

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Netlify icin build komutu `npm run build`, yayin klasoru `dist` olarak ayarlanmistir.

## Teslim Notlari

1. Projeyi GitHub'da public bir repository olarak yayinlayin.
2. Netlify'da repository'yi baglayin.
3. Build komutu olarak `npm run build`, publish directory olarak `dist` kullanin.
4. GitHub ve Netlify linklerini proje teslim formuna ekleyin.

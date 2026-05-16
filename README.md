# FitnessTracker

FitnessTracker, React ve Bootstrap 5 ile hazirlanmis basit bir fitness takip uygulamasidir. Kullanici antrenman ekleyebilir, kayitlari listeleyebilir, guncelleyebilir ve silebilir.

## Kullanilan Teknolojiler

- React
- Vite
- Bootstrap 5
- Netlify

## Proje Yapisi

- `src/Components`: Form, liste ve istatistik bileşenleri
- `src/Pages`: Sayfa bilesenleri
- `src/Interfaces`: Veri modeli ve baslangic verileri

## Ozellikler

- Antrenman ekleme
- Antrenmanlari listeleme
- Var olan kaydi guncelleme
- Kayit silme
- Toplam süre, kalori ve ortalama kalori özetleri
- Kayitlari tarayicinin localStorage alaninda saklama

## Ekran Goruntusu

![FitnessTracker ana ekran](screenshots/fitness-tracker-home.png)

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

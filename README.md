# Coach Daru Website

Website personal Daru Dewayanto (Astro, static). Bahasa: English. Look & feel: referensi template "Hawthorn" (charcoal + greige, serif Prata, Montserrat, tanda tangan Pinyon Script).

## Jalankan

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm run dev      # http://localhost:4323
npm run build    # hasil statis di dist/
```

## Tayang sementara: GitHub Pages

- Live: https://darudewayanto.github.io/profile/ (noindex, tidak diindeks Google)
- Repo: https://github.com/darudewayanto/profile
- Setiap `git push` ke `main` otomatis build + deploy lewat `.github/workflows/deploy.yml` (±1 menit).
- Pindah ke domain sendiri nanti: ubah env di workflow (`SITE_URL`, hapus `BASE_PATH` & `PUBLIC_NOINDEX`), lalu pasang custom domain.

## Mengubah konten

Semua teks, angka, kredensial, topik speaking, program & nomor WA ada di **`src/data/site.ts`**.
Foto di `src/assets/photos/`, logo di `src/assets/brand/`, badge di `src/assets/badges/`.
Logo/badge tidak pernah ditampilkan lebih besar dari setengah resolusi aslinya (`crispWidth`) supaya tetap tajam di layar retina.

## Sebelum go-live

- [ ] Domain (mis. darudewayanto.com / coachdaru.com) → `astro.config.mjs` & `site.url`
- [ ] Review topik speaking, FAQ & timeline (draf dari compro, perlu konfirmasi Daru)
- [ ] Testimoni klien (`testimonials`)
- [ ] Email pribadi (sekarang salam@hijrahcoach.co.id) & link LinkedIn/Instagram/YouTube
- [ ] Logo vektor (SVG) Center of Agility & Marshall Goldsmith
- [ ] Analytics (GA4 / Plausible)

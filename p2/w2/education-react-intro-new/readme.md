# Education React Intro (Basic)

## Table of Content

1. What is ReactJS ?
1. What is JSX ?
1. VanillaJS vs ReactJS
1. Let's Demo

## Demo (Non-Vite)

Demo ini menggunakan live-server / vite standar non-template

Langkah-langkahnya adalah sebagai berikut:

1. Tambahkan script untuk menggunakan React
1. Tambahkan script untuk mengkonversi React menjadi sesuatu yang bisa dibaca oleh browser (babel)
1. Tambahkan sebuah root element untuk React
1. Pindahkan seluruh section ke dalam script React (JSX)
1. Gunakan React
1. Membuat Component React
1. Suntik React DOM
1. Ganti cara untuk melakukan comment (dari HTML ke JSX)
1. Ganti cara untuk menggunakan class (class -> className)
1. Ganti cara untuk menggunakan select selected (selected dibuang, diganti jadi defaultValue)
1. Membuat "data" reaktif (state) untuk kondisi login dan username
1. Gunakan state username
1. Membuat Tampilan yang akan muncul berdasarkan kondisi tertentu (conditional rendering)
1. Membuat fungsi untuk membaca perubahan input
1. Memodifikasi input untuk bisa menerima dan mengganti state username
1. Membuat fungsi untuk memasukkan identitas pengguna
1. Jangan lupa untuk membuat conditional rendering ketika user sudah logged in
1. Membuat data dummy untuk Todo (ambil dari server/db.json)
1. Membuat looping element (Rendering List)
1. Membuat "data" reaktif (state) untuk data AddTodo
1. Membuat fungsi untuk menghandle input Form Todo
1. set value dan onChange untuk seluruh input Form Add Todo
1. Membuat fungsi untuk menghandle Form Add Todo
1. Menambahkan event onSubmit pada form
1. Membuat fungsi untuk kembali ke halaman utama
1. Mengimplementasikan Kembali ke halaman utama

## Demo (Vite)

Demo ini menggunakan Vite dengan template React sebagai permulaannya

1. `npx create vite@latest <nama_folder>`
1. Pilih `React`
1. Pilih `Javascript`
1. `cd <nama_folder>`
1. `npm install`
1. Tambah tailwind dengan `npm install tailwindcss @tailwindcss/vite`
1. Modifikasi file `vite.config.js` untuk menambahkan tailwindcss
1. Modifikasi file `index.css` untuk menambahkan tailwindcss
1. `npm run dev`
1. Modifikasi kode dengan langkah sebagai berikut:
   1. Hapus import script tailwind yang ada di template `index.html`
   1. Ganti Title dan Tambahkan script untuk CSS yang dibutuhkan (`index.html`)
   1. Hapus file src/index.css dan uncomment import pada `src/main.jsx`
   1. Hapus file src/App.css dan uncomment import pada `src/App.jsx`
   1. Hapus seluruh code yang ada di dalam function App
   1. Hapus seluruh import yang tidak digunakan
   1. Copy isi dari body yang ada di template (`index.html`) ke `src/App.jsx`
   1. Ganti cara untuk melakukan comment (dari HTML ke JSX)
   1. Ganti cara untuk menggunakan class (class -> className)
   1. Ganti cara untuk menggunakan select selected (selected dibuang, diganti jadi defaultValue)
   1. Import function yang dibutuhkan untuk mengakses data reaktif (state) pada React
   1. Membuat "data" reaktif (state) untuk kondisi login dan username
   1. Tampilkan isi state username
   1. Membuat Tampilan yang akan muncul berdasarkan kondisi tertentu (conditional rendering)
   1. Membuat fungsi untuk membaca perubahan input
   1. Memodifikasi input untuk bisa menerima dan mengganti state username
   1. Membuat fungsi untuk memasukkan identitas pengguna
   1. Menambahkan event onClick pada button untuk bisa berpindah halaman
   1. Jangan lupa untuk membuat conditional rendering ketika user sudah logged in
   1. Membuat data dummy untuk Todo (ambil dari server/db.json)
   1. Membuat looping element (Rendering List)
   1. Membuat "data" reaktif (state) untuk data AddTodo
   1. Membuat fungsi untuk menghandle input Form Todo
   1. set value dan onChange untuk seluruh input Form Add Todo
   1. Membuat fungsi untuk menghandle Form Add Todo
   1. Menambahkan event onSubmit pada form
   1. Membuat fungsi untuk kembali ke halaman utama
   1. Mengimplementasikan Kembali ke halaman utama

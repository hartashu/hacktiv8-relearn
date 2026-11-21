import { db } from './db.js';

const initialProducts = [
  {
    title: 'Mechanical Keyboard Keychron K2',
    price: 1250000,
    category: 'Electronics',
    description:
      'Compact 75% wireless mechanical keyboard with tactile switches and RGB backlight.',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500',
    stock: 15,
  },
  {
    title: 'Ergonomic Wireless Mouse MX Master 3S',
    price: 1490000,
    category: 'Electronics',
    description:
      'Precision wireless mouse with quiet clicks and ultra-fast MagSpeed scrolling.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    stock: 20,
  },
  {
    title: 'The Pragmatic Programmer (20th Anniversary Edition)',
    price: 680000,
    category: 'Books',
    description:
      'Your journey to mastery in modern software engineering and clean architecture.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500',
    stock: 10,
  },
  {
    title: 'Minimalist Ceramic Pour-Over Coffee Dripper',
    price: 245000,
    category: 'Home & Living',
    description:
      'Handcrafted ceramic V60 dripper for clean and balanced manual coffee brewing.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500',
    stock: 25,
  },
  {
    title: 'Heavyweight Cotton Oversized T-Shirt',
    price: 185000,
    category: 'Apparel',
    description:
      '240gsm combed cotton tee with relaxed fit and durable ribbed collar.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    stock: 40,
  },
];

async function seed() {
  console.log('Memulai seeding database catalog_explorer...');

  // Bersihkan data produk lama jika skrip dijalankan ulang (opsional agar tidak duplikat)
  await db.orm.public.Product.delete();

  // Masukkan semua data produk awal sekaligus
  await db.orm.public.Product.createAll(initialProducts);

  console.log(
    `Seeding selesai! ${initialProducts.length} produk berhasil dimasukkan.`,
  );
  process.exit(0);
}

seed().catch((err) => {
  console.error('Gagal melakukan seeding:', err);
  process.exit(1);
});

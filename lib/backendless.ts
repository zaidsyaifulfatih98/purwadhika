import Backendless from 'backendless';

var APP_ID = '297C42D1-9304-426B-BF74-62CC720C37D3';
var API_KEY = '654D295C-796E-4EF1-9A83-B001206975FE';

Backendless.initApp(APP_ID, API_KEY);


interface Product {
  objectId?: string;    // akan otomatis ada dari Backendless
  productname: string;
  quantity: number;
  price: number;
  city: string;
}

// Menambah produk baru
const tambahProduk = async (produk: Product) => {
  try {
    const result = await Backendless.Data.of<Product>('Products').save(produk);
    console.log('Produk berhasil ditambahkan:', result);
  } catch (error) {
    console.error('Gagal menambah produk:', error);
  }
};

// Mengambil semua produk
const ambilSemuaProduk = async () => {
  try {
    const produkList = await Backendless.Data.of<Product>('Products').find();
    produkList.forEach((produk) =>
      console.log(produk.productname, produk.quantity, produk.price, produk.city)
    );
  } catch (error) {
    console.error('Gagal mengambil produk:', error);
  }
};

// Mengupdate produk berdasarkan objectId
const updateProduk = async (objectId: string, perubahan: Partial<Product>) => {
  try {
    const produk = await Backendless.Data.of<Product>('Products').findById(objectId);
    Object.assign(produk, perubahan);
    const hasilUpdate = await Backendless.Data.of<Product>('Products').save(produk);
    console.log('Produk berhasil diupdate:', hasilUpdate);
  } catch (error) {
    console.error('Gagal update produk:', error);
  }
};

// Menghapus produk
const hapusProduk = async (objectId: string) => {
  try {
    await Backendless.Data.of<Product>('Products').remove(objectId);
    console.log('Produk berhasil dihapus');
  } catch (error) {
    console.error('Gagal hapus produk:', error);
  }
};

// Contoh penggunaan:
tambahProduk({ productname: 'Meja', quantity: 2, price: 200000, city: 'Surabaya' });
// updateProduk('B276AE59-88B7-4C6C-91DB-53B19422B3D1', { quantity: 4 });
// hapusProduk('FC156BDF-B355-4E51-8526-C5166DFB19AA');
ambilSemuaProduk();
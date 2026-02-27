import Backendless from 'backendless';

var APP_ID = 'DE7033D5-1332-491A-9336-3BFC94DAEA24';
var API_KEY = '34C3EF70-0366-4ABD-A53B-8A2287DC300A';

Backendless.initApp(APP_ID, API_KEY);



interface Product {
  objectId?: string;    // akan otomatis ada dari Backendless
  name: string;
  price: number;
  city: string;
  imageurl: string;
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
      console.log(produk.name, produk.price, produk.city, produk.imageurl)
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

const hapusSemuaProduk = async () => {
  try {
    // 1. Ambil semua product
    const produkList = await Backendless.Data.of('Products').find();

    // 2. Hapus satu persatu
    for (const produk of produkList) {
      if (produk.objectId) {
        await Backendless.Data.of('Products').remove(produk.objectId);
      }
    }

    console.log('Semua produk berhasil dihapus');
  } catch (error) {
    console.error('Gagal hapus semua produk:', error);
  }
};

// Contoh penggunaan:
//tambahProduk({ name: 'Martabak', price: 35000 , city: 'Jakarta' });
// updateProduk('B276AE59-88B7-4C6C-91DB-53B19422B3D1', { quantity: 4 });
// hapusProduk('78C46A1C-D740-4437-BCDD-EB551FE87FC4');
//ambilSemuaProduk();
//hapusSemuaProduk();
export default Backendless



import Backendless from 'backendless';

var APP_ID = 'A4EFA3ED-EBD3-4073-B05D-364960CC390D';
var API_KEY = 'ED1674B8-9912-466B-8F41-957D5F865488';

Backendless.initApp(APP_ID, API_KEY);



interface Product {
  objectId?: string;    // akan otomatis ada dari Backendless
  text: string;
  completed : boolean;
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
      console.log(produk.text, produk.completed)
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
// tambahProduk({ text: "Complete Todo App on Frontend Mentor", completed: false });
// updateProduk('B276AE59-88B7-4C6C-91DB-53B19422B3D1', { quantity: 4 });
// hapusProduk('A886D8C2-E8AE-426D-819B-8C39D864545F');
// ambilSemuaProduk();
//hapusSemuaProduk();
export default Backendless

// const initialTodos: Todo[] = [
//     { id: 1, text: "Complete online JavaScript course", completed: true },
//     { id: 2, text: "Jog around the park 3x", completed: false },
//     { id: 3, text: "10 minutes meditation", completed: false },
//     { id: 4, text: "Read for 1 hour", completed: false },
//     { id: 5, text: "Pick up groceries", completed: false },
//     { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false }
// ];
// Mengatur tanggal otomatis
document.getElementById('tanggal').innerText = new Date().toLocaleDateString('id-ID');

// Menangani pengiriman form
document.getElementById('blangkoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Mengambil nilai dari input
    const penilai = document.getElementById('penilai').value;
    const afdeling = document.getElementById('afdeling').value;
    const namaPenyadap = document.getElementById('namaPenyadap').value;
    const tahunTanam = document.getElementById('tahunTanam').value;
    const blok = document.getElementById('blok').value;
    const samplePohon = document.getElementById('samplePohon').value;

    // Menampilkan nilai yang diinput
    console.log(`Penilai: ${penilai}`);
    console.log(`Afdeling: ${afdeling}`);
    console.log(`Nama Penyadap: ${namaPenyadap}`);
    console.log(`Tahun Tanam: ${tahunTanam}`);
    console.log(`Blok: ${blok}`);
    console.log(`Sample Pohon: ${samplePohon}`);

    // Menampilkan form luka
    document.getElementById('lukaForm').style.display = 'block';
});

// Menangani pengiriman form luka
document.getElementById('lukaDataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Mengambil nilai dari input
    const lukaKecil = parseInt(document.getElementById('lukaKecil').value);
    const lukaSedang = parseInt(document.getElementById('lukaSedang').value);
    const lukaBesar = parseInt(document.getElementById('lukaBesar').value);
    const kurangDalam = parseInt(document.getElementById('kurangDalam').value);
    const normatif = parseInt(document.getElementById('normatif').value);
    const rapat = parseInt(document.getElementById('rapat').value);
    const boros = parseInt(document.getElementById('boros').value);
    const sangatBoros = parseInt(document.getElementById('sangatBoros').value);
    const batasDepan = parseInt(document.getElementById('batasDepan').value);
    const batasBelakang = parseInt(document.getElementById('batasBelakang').value);
    const sotokan = parseInt(document.getElementById('sotokan').value);
    const petikan = parseInt(document.getElementById('petikan').value);
    const lebih45 = parseInt(document.getElementById('lebih45').value);
    const kurang35 = parseInt(document.getElementById('kurang35').value);
    const bergelombang = parseInt(document.getElementById('bergelombang').value);
    const mangkok = parseInt(document.getElementById('mangkok').value);
    const bowl = parseInt(document.getElementById('bowl').value);
    const pohonTidakDisadap = parseInt(document.getElementById('pohonTidakDisadap').value);
    const talangMepet = parseInt(document.getElementById('talangMepet').value);

    // Menghitung total
    const total = (lukaKecil * 3) + (lukaSedang * 5) + (lukaBesar * 7) + (kurangDalam * 2) + (normatif * 0.1) + (rapat * 4) + (boros * 6) + (sangatBoros * 10) + (batasDepan * 2) + (batasBelakang * 2) + (sotokan * 5) + (petikan * 5) + (lebih45 * 3) + (kurang35 * 3) + (bergelombang * 2) + (mangkok * 3) + (bowl * 2) + (pohonTidakDisadap * 10) + (talangMepet * 1);

    // Menentukan kelas berdasarkan total
    let kelas;
    if (total < 15) {
        kelas = 'A';
    } else if (total >= 16 && total <= 25) {
        kelas = 'B';
    } else {
        kelas = 'C';
    }
    // Fungsi untuk menampilkan nama file yang diupload dan preview gambarnya
    function updateFileNameAndPreview(inputId, displayId, previewId) {
        const input = document.getElementById(inputId);
        const display = document.getElementById(displayId);
        const preview = document.getElementById(previewId);
        
        // Cek apakah ada file yang dipilih
        if (input.files.length > 0) {
            display.textContent = `File yang dipilih: ${input.files[0].name}`;

            // Membaca file dan menampilkan preview
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        } else {
            display.textContent = '';
            preview.src = ''; // Kosongkan preview jika tidak ada file
        }
    }

    // Menambahkan event listener untuk input file
document.getElementById('fotoPenyadap').addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('fotoPenyadap-preview').src = reader.result;
    };
    reader.readAsDataURL(file);
    document.getElementById('fotoPenyadap-name').textContent = file.name;
});

document.getElementById('fotoKayuKaret').addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('fotoKayuKaret-preview').src = reader.result;
    };
    reader.readAsDataURL(file);
    document.getElementById('fotoKayuKaret-name').textContent = file.name;
});

    // Menampilkan hasil
    document.getElementById('result').style.display = 'block';
    document.getElementById('total').innerText = `Total: ${total.toFixed(2)}`;
    document.getElementById('kelas').innerText = `Kelas: ${kelas}`;

    // Menampilkan rekap data
    document.getElementById('rekap').style.display = 'block';
    document.getElementById('tanggal-rekap').innerText = document.getElementById('tanggal').innerText;
    document.getElementById('penilai-rekap').innerText = penilai;
    document.getElementById('afdeling-rekap').innerText = afdeling;
    document.getElementById('namaPenyadap-rekap').innerText = namaPenyadap;
    document.getElementById('tahunTanam-rekap').innerText = tahunTanam;
    document.getElementById('blok-rekap').innerText = blok;
    document.getElementById('samplePohon-rekap').innerText = samplePohon;
    document.getElementById('kelas-rekap').innerText = kelas;
});

// Menangani tombol print
document.getElementById('print-btn').addEventListener('click', function() {
    window.print();
});
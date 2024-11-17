"use client"; // Untuk menggunakan event handler di sisi klien

import { useRouter } from "next/navigation";

const featuredArticle = {
  id: 1,
  title: "Review Orlistat 120 mg, Obat Diet untuk Turunkan Berat Badan",
  time: "4 menit yang lalu",
  category: "NEWS",
  image: "obat2.jpg", // Ganti sesuai lokasi gambar Anda
};

const topArticles = [
  {
    id: 2,
    title: "Mengenal Manfaat Kemiri untuk Kesehatan Tubuh",
    image: "obat.jpg",
  },
  {
    id: 3,
    title: "Cegah Anemia, Ini Berbagai Makanan Penambah Darah",
    image: "obat.jpg",
  },
  {
    id: 4,
    title: "6 Daftar Makanan yang Baik untuk Radang Tenggorokan",
    image: "obat.jpg",
  },
  {
    id: 5,
    title: "Ikan Kembung: Ini Kandungan Gizi, Manfaat dan Cara Mengolahnya",
    image: "obat.jpg",
  },
  {
    id: 6,
    title: "4 Buah dengan Kandungan Kalsium Tinggi bagi Kesehatan",
    image: "obat.jpg",
  },
];

export default function ArticlesPage() {
  const router = useRouter();

  const handleArticleClick = (id) => {
    router.push(`/details/${id}`); // Navigasi ke halaman detail
  };

  return (
    <div className="flex gap-5 p-5">
      {/* Featured Article */}
      <div className="relative flex-2">
        <img
          src={featuredArticle.image}
          alt={featuredArticle.title}
          className="w-full h-150 object-cover rounded-lg shadow-md"
        />
        <div className="absolute bottom-5 left-5 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <p className="text-xs font-semibold uppercase">{featuredArticle.category}</p>
          <h2
            className="text-lg font-bold mt-1 hover:underline cursor-pointer"
            onClick={() => handleArticleClick(featuredArticle.id)}
          >
            {featuredArticle.title}
          </h2>
          <p className="text-xs mt-2">{featuredArticle.time}</p>
        </div>
      </div>

      {/* Top Articles */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-blue-500 mb-4">Top Articles</h3>
        <div className="flex flex-col gap-4">
          {topArticles.map((article) => (
            <div
              key={article.id}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
              onClick={() => handleArticleClick(article.id)}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-20 h-16 object-cover rounded-md"
              />
              <p className="text-sm font-semibold leading-tight">{article.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

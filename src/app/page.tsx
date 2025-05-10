"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Sprout,
  Send,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Award,
  Users,
  TrendingUp,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur shadow-sm">
        <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-2">
            <Sprout className="h-6 w-6 text-green-600" />
            <span className="text-lg font-semibold tracking-tight">Sanggar Tani Muda</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#tentang" className="text-sm font-medium hover:text-green-600 transition-colors">Tentang</Link>
            <Link href="#struktur" className="text-sm font-medium hover:text-green-600 transition-colors">Struktur</Link>
            <Link href="#agrotrisula" className="text-sm font-medium hover:text-green-600 transition-colors">Agrotrisula</Link>
            <Link href="#manfaat" className="text-sm font-medium hover:text-green-600 transition-colors">Manfaat</Link>
            <Link href="#produk" className="text-sm font-medium hover:text-green-600 transition-colors">Produk</Link>
            <Link href="#galeri" className="text-sm font-medium hover:text-green-600 transition-colors">Galeri</Link>
            <Link href="#kontak" className="text-sm font-medium hover:text-green-600 transition-colors">Kontak</Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section - Minimalist */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-green-100">
          <div className="container max-w-3xl mx-auto px-6 md:px-8 flex flex-col items-center text-center gap-8">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 shadow-sm">Desa Srimulyo</div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Strategi Pemberdayaan <span className="text-green-600">Sanggar Tani Muda</span>
            </h1>
            <p className="max-w-xl text-gray-600 md:text-xl">
              Pendekatan Agrotrisula untuk Peningkatan Kualitas dan Produktivitas Pertanian di Desa Srimulyo
            </p>
            <button
              className="bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-200 px-8 py-3 text-base font-semibold rounded-full text-white"
              onClick={() => {
                const section = document.getElementById('tentang');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </section>
        {/* About Section - Enhanced with better visuals */}
        <section id="tentang" className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-white z-0"></div>
          <div className="container max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-full bg-green-100 p-1.5 text-green-600">
                <Sprout className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tentang Program</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Program Sanggar Tani Muda adalah inisiatif untuk memberdayakan generasi muda di Desa Srimulyo dalam
                  mengembangkan pertanian berkelanjutan dan modern.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative mx-auto w-full max-w-[500px] lg:order-last">
                <div className="absolute inset-0 bg-green-600 rounded-xl rotate-3 opacity-10"></div>
                <div className="absolute inset-0 bg-green-600 rounded-xl -rotate-3 opacity-10"></div>
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src="/images/products/satu.jpg?height=400&width=600"
                    alt="Kegiatan pelatihan petani muda"
                    width={600}
                    height={400}
                    className="object-cover aspect-video"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-green-100">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Peserta Aktif</p>
                      <p className="font-bold text-green-600">120+</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="grid gap-6">
                  <div className="bg-green-50 rounded-lg p-6 shadow-sm border border-green-100 transition-all duration-200 hover:shadow-md">
                    <h3 className="text-xl font-bold flex items-center text-green-800">
                      <span className="bg-green-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-green-600"
                        >
                          <path d="M12 2L4 10l2 2 6-6 6 6 2-2-8-8z" />
                        </svg>
                      </span>
                      Visi
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Menciptakan ekosistem pertanian yang inovatif, produktif, dan berkelanjutan melalui pemberdayaan
                      petani muda.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 shadow-sm border border-green-100 transition-all duration-200 hover:shadow-md">
                    <h3 className="text-xl font-bold flex items-center text-green-800">
                      <span className="bg-green-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-green-600"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </span>
                      Misi
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Mengembangkan kapasitas petani muda melalui pendekatan Agrotrisula yang mengintegrasikan
                      pendidikan, penelitian, dan praktik.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 shadow-sm border border-green-100 transition-all duration-200 hover:shadow-md">
                    <h3 className="text-xl font-bold flex items-center text-green-800">
                      <span className="bg-green-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-green-600"
                        >
                          <path d="M20 4v5l-9 7-9-7V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          <path d="M2 12.5V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5" />
                        </svg>
                      </span>
                      Tujuan
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Meningkatkan kualitas dan produktivitas pertanian di Desa Srimulyo dengan melibatkan generasi muda
                      dalam inovasi pertanian.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Organizational Structure Section */}
        <section id="struktur" className="w-full py-20 md:py-32 bg-white">
          <div className="container max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col items-center text-center mb-12 gap-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-2">Struktur Pengurus</h2>
              <div className="w-16 h-1 bg-green-500 rounded mb-4 mx-auto"></div>
              <p className="max-w-xl text-gray-500 md:text-lg">
                Tim pengurus Sanggar Tani Muda yang berdedikasi untuk pengembangan pertanian di Desa Srimulyo
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ketua */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/products/ketua.jpg?height=400&width=400"
                    alt="Ketua Sanggar Tani Muda"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">Ketua</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Pimpinan</span>
                  </div>
                  <p className="text-gray-600 mb-4">Memimpin dan mengkoordinasikan seluruh kegiatan Sanggar Tani Muda</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>Mengawasi 3 Divisi</span>
                  </div>
                </div>
              </div>

              {/* Divisi Pendidikan */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/products/divisi1.jpg?height=400&width=400"
                    alt="Kepala Divisi Pendidikan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">Divisi Pendidikan</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Divisi</span>
                  </div>
                  <p className="text-gray-600 mb-4">Mengelola program pelatihan dan pengembangan kapasitas petani muda</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <BookOpen className="h-4 w-4" />
                    <span>Program Pelatihan</span>
                  </div>
                </div>
              </div>

              {/* Divisi Penelitian */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/products/divisi2.jpg?height=400&width=400"
                    alt="Kepala Divisi Penelitian"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">Divisi Penelitian</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Divisi</span>
                  </div>
                  <p className="text-gray-600 mb-4">Melakukan riset dan inovasi dalam bidang pertanian</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Award className="h-4 w-4" />
                    <span>Riset & Inovasi</span>
                  </div>
                </div>
              </div>

              {/* Divisi Praktik */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/products/devisi3.jpg?height=400&width=400"
                    alt="Kepala Divisi Praktik"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">Divisi Praktik</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Divisi</span>
                  </div>
                  <p className="text-gray-600 mb-4">Mengelola implementasi praktik pertanian di lapangan</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Sprout className="h-4 w-4" />
                    <span>Implementasi Lapangan</span>
                  </div>
                </div>
              </div>

              {/* Divisi Produksi */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/products/divisi4.jpg?height=400&width=400"
                    alt="Kepala Divisi Produksi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">Divisi Produksi</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Divisi</span>
                  </div>
                  <p className="text-gray-600 mb-4">Mengelola produksi dan pengolahan hasil pertanian</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4" />
                    <span>Produksi & Pengolahan</span>
                  </div>
                </div>
              </div>

              {/* Divisi Pemasaran */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/products/divisi5.jpg?height=400&width=400"
                    alt="Kepala Divisi Pemasaran"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">Divisi Pemasaran</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Divisi</span>
                  </div>
                  <p className="text-gray-600 mb-4">Mengelola pemasaran dan distribusi produk pertanian</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Send className="h-4 w-4" />
                    <span>Pemasaran & Distribusi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Agrotrisula Section - Minimalist */}
        <section id="agrotrisula" className="w-full py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-green-100">
          <div className="container max-w-4xl mx-auto px-6 md:px-8 flex flex-col items-center">
            <div className="flex flex-col items-center text-center mb-12 gap-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-2">Pendekatan Agrotrisula</h2>
              <div className="w-16 h-1 bg-green-500 rounded mb-4 mx-auto"></div>
              <p className="max-w-xl text-gray-500 md:text-lg">
                Tiga pilar utama: Pendidikan, Penelitian, dan Praktik untuk pertanian berkelanjutan.
              </p>
            </div>
            <div className="w-fit grid gap-6 md:grid-cols-3 justify-center">
              <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 border border-green-100 hover:border-green-400 transition-all duration-300 p-6 flex flex-col items-center text-center max-w-xs">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4 group-hover:bg-green-200 transition-colors">
                  <BookOpen className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Pendidikan</h3>
                <p className="text-gray-600 text-sm">
                  Pelatihan dan pengembangan kapasitas petani muda melalui kurikulum pertanian modern.
                </p>
              </div>
              <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 border border-green-100 hover:border-green-400 transition-all duration-300 p-6 flex flex-col items-center text-center max-w-xs">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4 group-hover:bg-green-200 transition-colors">
                  <Sprout className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Praktik</h3>
                <p className="text-gray-600 text-sm">
                  Penerapan langsung pengetahuan dan hasil penelitian di lahan percontohan.
                </p>
              </div>
              <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 border border-green-100 hover:border-green-400 transition-all duration-300 p-6 flex flex-col items-center text-center max-w-xs">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4 group-hover:bg-green-200 transition-colors">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Penelitian</h3>
                <p className="text-gray-600 text-sm">
                  Riset dan inovasi untuk pengembangan teknik pertanian yang berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section - Enhanced with better visuals */}
        <section id="manfaat" className="w-full py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-full bg-green-100 p-1.5 text-green-600">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Manfaat Program</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Program ini memberikan berbagai manfaat bagi petani muda dan komunitas Desa Srimulyo
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className="h-2 bg-green-600"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-green-600"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Peningkatan Kapasitas</h3>
                  <p className="text-gray-600 text-sm">
                    Petani muda memperoleh pengetahuan dan keterampilan pertanian modern
                  </p>
                </div>
              </div>
              <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className="h-2 bg-green-600"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-green-600"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Inovasi Pertanian</h3>
                  <p className="text-gray-600 text-sm">
                    Pengembangan teknik dan teknologi pertanian yang sesuai dengan kondisi lokal
                  </p>
                </div>
              </div>
              <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className="h-2 bg-green-600"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-green-600"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Peningkatan Produktivitas</h3>
                  <p className="text-gray-600 text-sm">
                    Hasil panen yang lebih baik dengan penerapan metode pertanian berkelanjutan
                  </p>
                </div>
              </div>
              <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className="h-2 bg-green-600"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-green-600"
                    >
                      <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.93 1.93 0 0 0-.97 1.68v4.8a2 2 0 0 0 1 1.73l7.3 4.05c.75.41 1.66.41 2.41 0l7.3-4.05a2 2 0 0 0 1-1.73V9.81a1.93 1.93 0 0 0-.23-.97Z" />
                      <path d="m3.09 8.84 7.29 4.05a2.12 2.12 0 0 0 2.06 0l7.29-4.05" />
                      <path d="M12 22v-9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Pemberdayaan Ekonomi</h3>
                  <p className="text-gray-600 text-sm">
                    Peningkatan pendapatan dan kesejahteraan petani muda di Desa Srimulyo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Produk Section - Minimalist */}
        <section id="produk" className="w-full py-20 md:py-32 bg-white">
          <div className="container max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex flex-col items-center text-center mb-12 gap-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-2">Produk Kami</h2>
              <div className="w-16 h-1 bg-green-500 rounded mb-4 mx-auto"></div>
              <p className="max-w-xl text-gray-500 md:text-lg">
                Produk unggulan hasil pertanian dan olahan Desa Srimulyo
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px] justify-center">
              {/* Product 1: Segar Bumi Srimulyo */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-green-100 hover:border-green-400 transition-all duration-300 max-w-xs mx-auto relative">
                <div className="relative w-full h-60">
                  <Image
                    src="/images/products/segar-bumi-srimulyo.png"
                    alt="Segar Bumi Srimulyo"
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow">Best Seller</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold">Segar Bumi Srimulyo</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Fresh</span>
                  </div>
                  <p className="text-gray-600 mb-2 text-xs">
                    Produk hasil olahan pertanian Desa Srimulyo yang segar dan berkualitas.
                  </p>
                  <div className="flex items-center justify-end">
                    <a
                      href="https://wa.me/6282292121572"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-green-200 hover:bg-green-50 text-xs px-3 py-1 h-auto"
                    >
                      PESAN
                    </a>
                  </div>
                </div>
              </div>
              {/* Product 2: Sri-Kriuk */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-green-100 hover:border-green-400 transition-all duration-300 max-w-xs mx-auto relative">
                <div className="relative w-full h-60">
                  <Image
                    src="/images/products/kripik.png"
                    alt="Sri-Kriuk"
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded shadow">Baru</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold">Sri-Kriuk</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Seasonal</span>
                  </div>
                  <p className="text-gray-600 mb-2 text-xs">
                    Camilan renyah berbahan dasar hasil pertanian lokal, cocok untuk segala suasana.
                  </p>
                  <div className="flex items-center justify-end">
                    <a
                      href="https://wa.me/6282292121572"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-green-200 hover:bg-green-50 text-xs px-3 py-1 h-auto"
                    >
                      PESAN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery Section - Minimalist */}
        <section id="galeri" className="w-full py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-green-100">
          <div className="container max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col items-center text-center mb-12 gap-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-2">Galeri Kegiatan</h2>
              <div className="w-16 h-1 bg-green-500 rounded mb-4 mx-auto"></div>
              <p className="max-w-xl text-gray-500 md:text-lg">
                Dokumentasi kegiatan Sanggar Tani Muda di Desa Srimulyo
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gallery Item 1 */}
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/images/products/pelatihan.jpg?height=400&width=400"
                    alt="Pelatihan Pertanian"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-bold text-lg mb-2">Pelatihan Pertanian</h3>
                      <p className="text-sm">Kegiatan pelatihan pertanian modern untuk petani muda</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Item 2 */}
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/images/products/panen.jpg?height=400&width=400"
                    alt="Panen Bersama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-bold text-lg mb-2">Panen Bersama</h3>
                      <p className="text-sm">Kegiatan panen hasil pertanian bersama petani muda</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Item 3 */}
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/images/products/pameran.jpg?height=400&width=400"
                    alt="Workshop Teknologi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-bold text-lg mb-2">Workshop Teknologi</h3>
                      <p className="text-sm">Workshop penerapan teknologi pertanian modern</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Item 4 */}
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/images/products/lapangan.jpg?height=400&width=400"
                    alt="Kunjungan Lapangan"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-bold text-lg mb-2">Kunjungan Lapangan</h3>
                      <p className="text-sm">Kunjungan ke lahan percontohan pertanian modern</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Item 5 */}
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/images/products/teknologi.jpg?height=400&width=400"
                    alt="Diskusi Kelompok"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-bold text-lg mb-2">Diskusi Kelompok</h3>
                      <p className="text-sm">Forum diskusi pengembangan pertanian berkelanjutan</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery Item 6 */}
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/images/products/pameran.jpg?height=400&width=400"
                    alt="Pameran Hasil"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-bold text-lg mb-2">Pameran Hasil</h3>
                      <p className="text-sm">Pameran hasil pertanian dan produk olahan petani muda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section - Enhanced with better visuals */}
        <section id="kontak" className="w-full py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-full bg-green-100 p-1.5 text-green-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kontak Kami</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Temukan kami di lokasi berikut atau hubungi melalui kontak yang tersedia
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="relative rounded-xl overflow-hidden h-[400px] w-full shadow-xl">
                <div className="absolute inset-0 bg-green-600 rounded-xl rotate-3 opacity-10 -z-10"></div>
                <div className="absolute inset-0 bg-green-600 rounded-xl -rotate-3 opacity-10 -z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31619.7298993289!2d110.46193105!3d-7.846173049999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a510dff8df009%3A0x5027a76e3568c50!2sSrimulyo%2C%20Kec.%20Piyungan%2C%20Kabupaten%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1746884385743!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="grid gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Alamat</h3>
                        <p className="text-gray-600">
                          Desa Srimulyo, Kecamatan Piyungan, Kabupaten Bantul, Yogyakarta
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Calendar className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Jam Operasional</h3>
                        <p className="text-gray-600">Senin - Jumat: 08.00 - 16.00 WIB</p>
                        <p className="text-gray-600">Sabtu: 08.00 - 12.00 WIB</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Telepon</h3>
                        <p className="text-gray-600">+62 822 9212 1572</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                        <p className="text-gray-600">ppkohimaipa2025@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container max-w-7xl mx-auto flex flex-col gap-6 py-8 md:py-12 px-6 md:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <Sprout className="h-6 w-6 text-green-600" />
                <span className="text-lg font-semibold">Sanggar Tani Muda</span>
              </div>
              <p className="text-sm text-gray-500">
                Program pemberdayaan petani muda untuk meningkatkan kualitas dan produktivitas pertanian di Desa
                Srimulyo melalui pendekatan Agrotrisula.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Sanggar Tani Muda. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// biome-ignore lint/style/useImportType: <explanation>
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Arsa",
  lastName: "Kumar",
  name: `Arsa Kumar`,
  role: "Front End Developer",
  avatar: "/images/avatar.png",
  email: "Arsa Kumar@gmail.com",
  location: "Asia/Jakarta", // Untuk wilayah WIB // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Indonesia", "Islam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about Front End Developer</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/arsa-tampan?tab=projects",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/arsa-kumar-ab1015229/",
    essential: true,
  },
  {
    name: "Gmail",
    icon: "gmail",
    link: "<mailto:1>person.gmail</mailto:1>",
    essential: true,
  },
  {
    
  name: "Download CV",
  icon: "download",
  link: "/images/CV.jpeg", 
  essential: true,

  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.svg",
  label: "Home",
  title: `${person.name} – Staff Administrasi`,
  description: `Hi, I'm Arsa Kumar, a backend and infrastructure engineer who thrives at the intersection of scale, data, and systems thinking.`,
  headline: <>Hi, I'm Arsa Kumar</>,

  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          80% faster onboarding
        </Text>
      </Row>
    ),
    href: "/work/ai-document-structuring-service",
  },
  subline: (
    <>
      Lulusan S1 Teknik Informatika Universitas Raharja yang profesional, adaptif, dan berdedikasi tinggi dengan pengalaman kerja lintas industri, mencakup bidang Administrasi Stok, Pengoperasian Mesin CNC, IT Support, dan Quality Control. Memiliki keahlian yang kuat dalam pengelolaan data dan inventaris, pemeliharaan sistem & jaringan IT, presisi teknis produksi, serta penerapan standar kualitas dan K3. Terbukti berorientasi pada detail, mampu meningkatkan efisiensi dan produktivitas, serta siap memberikan kontribusi optimal baik dalam operasional teknis maupun administrasi perusahaan.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a backend engineer with 4+ years at Quark Software building distributed systems, microservices, and AI-powered platform features. 3× Employee of the Quarter.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       Profesional berpengalaman dengan latar belakang kuat di bidang IT Support dan administrasi operasional. Memiliki keahlian teknis dalam pemecahan masalah perangkat keras/lunak, pengelolaan jaringan, serta manajemen data dan dokumen administratif yang teliti. Terbiasa bekerja dalam lingkungan operasional yang dinamis, cepat tanggap terhadap kendala sistem, serta berkomitmen tinggi dalam mendukung efisiensi kerja perusahaan melalui koordinasi yang baik dan pemanfaatan teknologi.
        <br /><br />
        Profesional multidisiplin dengan pengalaman kerja lintas sektor yang menggabungkan ketelitian administratif dan keandalan teknis IT Support.
        <br /><br />
        <li>Keunggulan IT: Mampu melakukan troubleshooting perangkat keras (hardware) dan perangkat lunak (software), pemeliharaan infrastruktur jaringan, serta memberikan dukungan teknis bagi pengguna (user support).</li>
        <li>Keunggulan Administrasi: Terbiasa mengelola sistem pendataan, pengarsipan dokumen digital maupun konvensional, pelaporan operasional harian, serta pengoperasian alat-alat penunjang kantor (termasuk penguasaan Microsoft Excel untuk monitoring data).</li>
        <li>Kompetensi Inti: Problem solving yang kuat, komunikasi yang efektif antar-departemen, serta kemampuan beradaptasi tinggi untuk memastikan kelancaran operasional harian perusahaan.</li>
     
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT Molex Ayus.",
        timeframe: "Aug 2019 - Sep 2021",
        role: "Operator Produksi",
        achievements: [
          <>
            Menjalankan Proses Produksi: Mengoperasikan mesin-mesin produksi sesuai dengan Standar Operasional Prosedur (SOP) dan instruksi kerja yang berlaku untuk memastikan target harian tercapai.
          </>,
          <>
            Pengendalian Kualitas (Quality Control): Melakukan pengecekan secara berkala (in-process control) terhadap hasil produksi untuk memastikan produk bebas dari cacat dan sesuai dengan spesifikasi kualitas perusahaan.
          </>,
          <>
           Perawatan & Kebersihan Mesin: Membersihkan area kerja dan mesin produksi sebelum serta sesudah proses produksi selesai guna menjaga standar higienitas dan mencegah kontaminasi.
          </>,
           <>
          Pencatatan & Pelaporan: Mengisi log sheet atau laporan produksi harian secara akurat, mencakup jumlah hasil produksi, waktu kerja, serta kendala yang terjadi di lini produksi.          
          </>,
           <>
           Penerapan K3 (Kesehatan dan Keselamatan Kerja): Mematuhi aturan keselamatan kerja dengan mengenakan Alat Pelindung Diri (APD) lengkap seperti masker, sarung tangan, seragam, dan penutup kepala selama berada di area produksi.          
           </>,
           <>
          Koordinasi Tim: Bekerjasama dengan bagian pengawas (supervisor), tim maintenance, dan bagian quality control untuk segera menindaklanjuti jika terjadi kendala atau kerusakan pada mesin.          
          </>,
          
        ],
        images: [],
      },
      {
        company: "CV Isometrik Teknindo.",
        timeframe: "Jul 2022 - Jul 2024",
        role: "Quality Control",
        achievements: [
  
   
         <>
        Inspeksi Bahan Baku (Incoming Quality Control / IQC)
        <ul>
        <li>Memeriksa kualitas plat besi lempeng panjang yang baru datang sebelum masuk ke proses produksi.</li>
        <li>Mengukur ketebalan, lebar, panjang, serta mengecek kondisi fisik plat besi (memastikan bebas dari karat, retak, cacat permukaan, atau tekukan yang tidak sesuai standar).</li>
        <li>Memastikan spesifikasi material sesuai dengan lembar kerja (<em>drawing</em> / order pembelian).</li>
        </ul>
        <>
        Pemeriksaan Proses (In-Process Quality Control / IPQC):
         <ul>
        <li>Mengawasi dan memeriksa hasil pemotongan (cutting) atau pembentukan awal plat besi.</li>
        <li>Melakukan pengecekan secara berkala saat proses pengerjaan di mesin press manual untuk memastikan ukuran, presisi, sudut tekukan, dan lubang (hole) sudah akurat sesuai gambar teknik.</li>
        <li>Memeriksa kestabilan hasil cetakan dari mesin press manual untuk mencegah terjadinya pergeseran ukuran atau kecacatan akibat keausan alat (dies).</li>
        </ul>
        Pengujian Produk Akhir (Final Quality Control / FQC):
         <ul>
        <li>Melakukan pengukuran dimensi akhir sparepart menggunakan alat ukur presisi (seperti jangka sorong / vernier caliper, mikrometer, atau gauge khusus).</li>
        <li>Memastikan produk sparepart tidak memiliki burr (sisa potongan tajam yang berlebih), retak akibat tekanan press, atau penyok.</li>
        </ul>
         Pencatatan & Pelaporan (Documentation):
         <ul>
        <li>Mengisi lembar pemeriksaan kualitas (QC sheet / Inspection report) harian secara akurat.</li>
        <li>Memisahkan produk yang lolos kualitas (Good) dengan produk yang cacat (Reject / NG) ke dalam wadah atau area khusus yang telah diberi label.</li>
        <li>Melaporkan temuan masalah atau produk reject berulang kepada bagian produksi atau supervisor agar dapat segera dilakukan tindakan perbaikan (corrective action).</li>
        </ul>
         Penerapan Standar Kerja & K3:
         <ul>
          <li>Mematuhi prosedur keselamatan kerja, mengingat pengoperasian bahan plat besi dan mesin press manual memiliki risiko tinggi (menggunakan APD seperti sarung tangan keselamatan, sepatu safety, dan kacamata pelindung).</li>
        </ul>
        </>
        </>

        ],
        images: [],
      },
      {
        company: "PT Visionet Data Internasional.",
        timeframe: "Jun 2024 - Sep 2024",
        role: "IT Support",
        achievements: [
         
          <>   
     <li>Pemasangan & Instalasi Perangkat: Melakukan instalasi perangkat jaringan (seperti router, switch, access point, dan kabel LAN/fiber optic) serta konfigurasi perangkat keras dan lunak di lokasi pelanggan (on-site installation).</li>
     <br></br>  <li>Service & Troubleshooting Teknis: Menganalisis, mendiagnosis, dan memperbaiki kerusakan atau kendala pada perangkat keras (hardware), sistem jaringan, maupun perangkat pendukung kantor yang mengalami gangguan.</li>
     <br></br>  <li>Pengelolaan Unit Sewa (Rental Unit):</li>
        <ul>
        <li>Menyiapkan, mengonfigurasi, dan melakukan uji fungsi (quality check) pada unit-unit sewa keperluan kantor (seperti laptop, PC, printer, atau proyektor) sebelum dikirim ke klien.</li>
      <li>Memastikan spesifikasi perangkat sewa sesuai dengan permintaan kontrak dan siap digunakan.</li>
        </ul>
        <br></br><li>Pemeliharaan Berkala (Maintenance): Melakukan pengecekan rutin (preventive maintenance) terhadap infrastruktur jaringan dan perangkat sewa yang terpasang di klien untuk meminimalkan risiko kerusakan mendadak.</li>
         <>
      <br></br><li>Dukungan Pengguna (User Support & Helpdesk): Memberikan bantuan teknis dan edukasi kepada klien atau pengguna akhir (end-user) terkait cara pengoperasian perangkat yang disewa atau solusi atas kendala jaringan yang dihadapi.</li>
      <br></br><li>Dokumentasi & Pelaporan: Membuat laporan teknis pengerjaan, berita acara serah terima (BAST) untuk unit sewa atau instalasi jaringan, serta mencatat riwayat perbaikan (ticket log) untuk keperluan inventaris dan evaluasi perusahaan.</li>
       
        </>
        </>
        ],
        images: [],
      },
      {
        company: "PT Talenta Anugerah Pratama.",
        timeframe: "Sep 2025 - Mar 2026",
        role: "Operator CNC",
        achievements: [
          <>
          <><li>Membaca Gambar Teknik: Memahami gambar kerja 2D/3D (CAD) untuk menentukan dimensi, toleransi, dan spesifikasi produk furnitur.</li></>
          <br></br><><li>Persiapan Bahan: Memilih dan memasang bahan baku (seperti kayu solid, MDF, atau triplek/plywood) di atas meja mesin dengan benar.</li> </>
          <br></br><><li>Input Program: Memasukkan berkas instruksi (G-code) ke dalam kontrol mesin atau melakukan pengeditan ringan pada program jika diperlukan.</li></>
          <br></br><><li>Uji Coba (Running Test): Melakukan simulasi atau pemotongan sampel pertama untuk memastikan jalur pemotongan (toolpath) sudah akurat sebelum produksi massal.</li></>
          <br></br><><li>Pemantauan (Monitoring): Memantau jalannya mesin selama proses produksi untuk mendeteksi malafungsi atau kesalahan pemotongan secara cepat.</li></>
          <br></br><><li>Inspeksi Produk: Memeriksa produk jadi menggunakan alat ukur presisi (seperti jangka sorong/kaliber) untuk memastikan kesesuaian dengan standar kualitas perusahaan.</li></>
          <br></br><><li>Dokumentasi: Mencatat jumlah produksi, penggunaan bahan, dan kendala teknis yang terjadi selama jam kerja (shift).</li></>
           </>
        ],
        images: [],
     },
      {
        company: "PT Indo Color Abadi.",
        timeframe: "Mar 2026 - Juli 2026",
        role: "Staff Warehouse",
        achievements: [
          <>  
        <><li>Bertanggungjawab dalam stock opname bahan baku mulai dari pengaturan stock, penerimaan dan penimbangan bahan datang, penyimpanan dalam gudang, serta pendataan keluar masuk bahan setiap harinya</li></>
        <br></br><li>Menginput dan mengelola data produksi.</li>
        <br></br><li>Membuat laporan produksi harian.</li>
        <br></br><li>Mengarsipkan dokumen produksi.</li>
        <br></br><li>Memantau jadwal dan proses administrasi produksi.</li>
        <br></br><li>Bertanggung jawab dalam penyediaan stock bahan baku, kordinasi dengan purchasing untuk supply stock</li>
        <br></br><li>Bertanggung Jawab dalam administrasi pengelolaan data stok bahan baku, packaging, penerimaan dan pencatatan keluar masuk bahan dan barangnya</li>
        <br></br><li>Membantu prepare bahan produksi jika di perlukan</li>
           </>
        ],
        images: [],

      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Certifications",
    institutions: [
      {
        name: "Universitas Raharja",
        description: <>Bachelor of Informatics Engineering (2017-2022) • CGPA: 2.79 <br />
        Relevant coursework: Computer Fundamentals, Operating Systems, Networking, Data Structures & Algorithms</>,
      },
      {
        name: "Microsoft Certified: Azure AI Engineer Associate",
        description: <>Demonstrated expertise in designing and implementing AI solutions on Azure, including Azure AI Document Intelligence and Azure AI Services.</>,
      },
      {
        name: "Microsoft Azure AI Essentials Professional Certificate",
        description: <>Foundational certification in Azure AI services and machine learning. </>,
      },
      {
        name: "Building Scalable Java Microservices — Google Cloud",
        description: <>Professional certification in designing and deploying production-grade Java microservices with Spring Boot and Spring Cloud.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Operator Produksi",
        description: (
          <>
           Pemahaman & Penerapan CPOB / GMP , Pengoperasian Mesin Produksi Farmasi
           Penanganan Sterilitas & Cleanroom (Ruang Bersih), Kontrol Kualitas Dasar & In-Process Control (IPC),
           Kalibrasi & Pemeliharaan Dasar (Troubleshooting), Dokumentasi & Data Integrity (Cgmp Documentation)
           
             </>
        ),
        
        images: [],
      },
      {
        title: "Quality control",
        description: (
          <>
            Penguasaan Alat Ukur Presisi, 
            Pembacaan dan Analisis Gambar Teknik (Engineering Drawing & GD&T),
            Inspeksi Kualitas Proses Press (Stamping Process Control), 
            Pengoperasian Alat Uji Khusus (Testing Equipment), 

          </>
        ),
    
        images: [],
      },
      {
        title: "IT Support",
        description: (
          <>
          IT Asset & Inventory Management System,
          Maintenance & Troubleshooting Perangkat Sewa (Hardware & Software),
          Sistem Pelacakan & Monitoring (GPS & IoT Tracking), Remote Support & Helpdesk Management, 
          Keamanan Data & Manajemen Perangkat Bergerak (MDM), 

          </>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Azure",
            icon: "azure",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        images: [],
      },
      {
        title: "Operator CNC",
        description: (
          <>
           Pengoperasian Mesin CNC Kayu/Panel (CNC Router & Boring), 
           Pembacaan Gambar Teknik & Desain Furniture (2D/3D),
           Pemrograman Dasar & Pengaturan Program CNC (G-Code / M-Code),
           Pemilihan Material & Penanganan Panel (Material Handling),
         </>
        ),
        tags: [
          {
            name: "software CAD/CAM",
            icon: "software CAD/CAM",
          },
        ],
        images: [],
      },
      
      {
        title: "Staff Adminitrasi",
        description: (
          <>
           Administrasi Stok & Gudang (Inventory Administration),
           Administrasi Produksi & Penjualan,
           Pengelolaan Dokumen & Korespondensi,
           Pengoperasian Sistem & Pelaporan,

          </>
        ),
        tags: [
          {
            name: "Excel",
            icon: "Excel",
          },
          {
            name: "Word",
            icon: "Word",
          },
          {
             name: "Drive",
             icon: "Drive",
          }
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about backend engineering and systems design...",
  description: `Technical insights and engineering philosophy from ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Backend engineering and AI integration projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    // Gallery disabled for now - can be enabled later with architecture diagrams or personal photos
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

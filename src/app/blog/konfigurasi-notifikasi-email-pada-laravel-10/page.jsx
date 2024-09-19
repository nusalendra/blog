"use client";

import { useState } from "react";

export default function KonfigurasiEmailNotificationPadaLaravel10() {
  const [copySuccess, setCopySuccess] = useState("Copy");

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
    setCopySuccess("Copied!");

    setTimeout(() => {
      setCopySuccess("Copy");
    }, 2000);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 max-w-4xl mx-auto">
      <div className="header mt-14 text-center">
        <h1 className="font-bold text-2xl">
          Konfigurasi Notifikasi Email Pada Laravel 10
        </h1>
        <h5>created by - nusalendra.com</h5>
      </div>
      <div className="content mt-24 text-justify">
        <p className="mt-4 font-light text-md">
          Halo, teman-teman developer! Lagi ngulik Laravel 10 dan penasaran
          gimana caranya ngatur notifikasi email dengan mudah? Kamu datang ke
          tempat yang tepat! Di blog ini, kita bakal bahas langkah-langkah
          simpel untuk mengkonfigurasi notifikasi email di Laravel 10.
        </p>
        <p className="mt-4 font-light text-md">
          Tapi, pernah nggak kamu ngerasain masalah komunikasi yang terlewat
          gara-gara nggak ada sistem notifikasi email? Atau mungkin user nggak
          tau kalau ada update penting? Nah, inilah kenapa fitur email
          notification itu penting banget, terutama buat menjaga komunikasi
          otomatis dengan user. Tenang aja, kita bakal bahas semua itu dengan
          gaya santai dan jelas, mulai dari dasar sampai ke tips-tips berguna
          lainnya. Yuk, langsung aja kita mulai!
        </p>
        <div className="mt-5">
          <h1 className="font-bold text-xl">Install Framework Laravel</h1>
          <p className="mt-2 font-light text-md">
            Langkah pertama, arahkan ke folder yang diinginkan, lalu buka
            terminal/CMD di folder tersebut dan jalankan perintah berikut di
            dalam terminal/CMD :
          </p>
          <div className="relative mt-5 mb-5">
            <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
              composer create-project laravel/laravel:^10.0 notify-mail
            </pre>
            <button
              className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
              onClick={() =>
                handleCopy(
                  "composer create-project laravel/laravel:^10.0 notify-mail"
                )
              }
            >
              {copySuccess}
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-md mb-2">
              <strong>composer create-project :</strong> Ini adalah perintah
              untuk membuat proyek baru menggunakan Composer.
            </p>
            <p className="text-md mb-2">
              <strong>laravel/laravel:^10.0 :</strong> Bagian ini menunjukkan
              bahwa kita menginstal Laravel versi 10. Simbol <code>^</code>{" "}
              memungkinkan kita mendapatkan versi terbaru dari Laravel 10.
            </p>
            <p className="text-md mb-2">
              <strong>notify-mail :</strong> Ini adalah nama folder atau
              aplikasi yang akan dibuat. Kamu bisa menggantinya dengan nama
              proyek yang diinginkan.
            </p>
          </div>
          <p className="mt-4 font-light text-md">
            Setelah proses instalasi selesai, kita dapat menjalankan proyek
            Laravel dengan mengikuti perintah berikut di terminal/CMD :
          </p>
          <div className="relative mt-5 mb-5">
            <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
              cd notify-mail
            </pre>
            <button
              className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
              onClick={() => handleCopy("cd notify-mail")}
            >
              {copySuccess}
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-md mb-2">
              <strong>cd notify-mail :</strong> Bagian ini digunakan untuk
              berpindah ke folder proyek notify-mail yang baru saja dibuat. Ini
              diperlukan agar kamu dapat menjalankan perintah dan bekerja di
              dalam proyek Laravel yang baru tersebut.
            </p>
          </div>
          <div className="relative mt-5 mb-5">
            <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
              php artisan serve
            </pre>
            <button
              className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
              onClick={() => handleCopy("cd notify-mail")}
            >
              {copySuccess}
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-md mb-2">
              <strong>php artisan serve :</strong> Bagian ini berfungsi untuk
              menjalankan server lokal bawaan Laravel, yang memungkinkan kamu
              mengakses aplikasi Laravel melalui browser. Jika di terminal atau
              cmd muncul pesan &quot;Server running on [http://127.0.0.1:8000]&quot;, maka
              aplikasi Laravel siap digunakan. Laravel dijalankan melalui port
              8000, dan kamu bisa membukanya di browser dengan mengunjungi{" "}
              <a
                className="text-blue-500"
                href="http://localhost:8000/"
                target="_blank"
              >
                http://localhost:8000/
              </a>{" "}
            </p>
          </div>
          <h1 className="font-bold text-xl mt-5">
            Verifikasi 2 Langkah (2-Step Verification)
          </h1>
          <img
            src="/konfigurasi-email-pada-laravel-10/verifikasi-2-langkah.png"
            alt="verifikasi-2-langkah"
            className="mt-2"
          />
          <p className="mt-2 font-light text-md">
            Menggunakan verifikasi dua langkah dalam konfigurasi email
            notifikasi bertujuan untuk meningkatkan keamanan akun email
            pengirim. Meskipun seseorang mengetahui kata sandi utama, mereka
            tetap butuh kode verifikasi tambahan untuk mengakses akun. Ini
            penting, terutama saat Laravel mengirim email melalui layanan
            seperti Gmail. Dengan verifikasi dua langkah, kamu juga bisa membuat{" "}
            <strong className="font-semibold">App Password</strong> yang aman
            khusus untuk aplikasi Laravel, tanpa membahayakan kata sandi utama
            akunmu.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mt-5">
            <p className="text-md mb-2">
              Langkah-langkahnya adalah sebagai berikut :
            </p>
            <ul>
              <li>1. Masuk ke akun Google kamu.</li>
              <li>
                2. Masuk ke menu <strong>Keamanan</strong> (Security) di
                pengaturan akun, atau kamu juga bisa mencarinya dengan mengetik
                &quot;Verifikasi 2 Langkah&quot; di kolom pencarian.
              </li>
              <li>
                3. Aktifkan <strong>Verifikasi Dua Langkah</strong> (2-Step
                Verification).
              </li>
              <li>
                4. Pilih metode verifikasi tambahan, seperti kode lewat SMS atau
                aplikasi autentikator, dan setelah berhasil, verifikasi dua
                langkah akan diaktifkan.
              </li>
            </ul>
          </div>
          <p className="mt-2 font-light text-md">
            Setelah verifikasi dua langkah diaktifkan, buka bagian{" "}
            <strong className="font-semibold">
              App Password / Sandi Aplikasi
            </strong>{" "}
            untuk mendapatkan kata sandi yang akan digunakan sebagai{" "}
            <strong className="font-semibold">MAIL_PASSWORD</strong> di file{" "}
            <strong className="font-semibold">.env</strong>. Pastikan untuk
            menyalin dan menyimpan kata sandi ini untuk sementara.
          </p>
          <h1 className="font-bold text-xl mt-5">Konfigurasi .env</h1>
          <p className="mt-2 font-light text-md">
            Sekarang buka file .env kamu di project Laravel dan pada bagian kode
            ini
          </p>
          <div className="relative mt-5 mb-5">
            <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
              MAIL_MAILER=smtp{"\n"}
              MAIL_HOST=mailpit{"\n"}
              MAIL_PORT=1025{"\n"}
              MAIL_USERNAME=null{"\n"}
              MAIL_PASSWORD=null{"\n"}
              MAIL_ENCRYPTION=null{"\n"}
              MAIL_FROM_ADDRESS=&quot;hello@example.com&quot;{"\n"}
              MAIL_FROM_NAME=&quot;${`APP_NAME`}&quot;
            </pre>
            <button
              className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
              onClick={() =>
                handleCopy(
                  `MAIL_MAILER=smtp\nMAIL_HOST=mailpit\nMAIL_PORT=1025\nMAIL_USERNAME=null\nMAIL_PASSWORD=null\nMAIL_ENCRYPTION=null\nMAIL_FROM_ADDRESS="hello@example.com"\nMAIL_FROM_NAME="$APP_NAME"`
                )
              }
            >
              {copySuccess}
            </button>
          </div>
          <p className="mt-2 font-light text-md">Ubah kode menjadi</p>
          <div className="relative mt-5 mb-5">
            <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
              MAIL_MAILER=smtp{"\n"}
              MAIL_HOST=smtp.gmail.com{"\n"}
              MAIL_PORT=587{"\n"}
              MAIL_USERNAME=emailpengirim@gmail.com{"\n"}
              MAIL_PASSWORD=passwordpengirim{"\n"}
              MAIL_ENCRYPTION=tls{"\n"}
              MAIL_FROM_ADDRESS=&quot;emailpengirim@gmail.com&quot;{"\n"}
              MAIL_FROM_NAME=&quot;${`APP_NAME`}&quot;
            </pre>
            <button
              className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
              onClick={() =>
                handleCopy(
                  `MAIL_MAILER=smtp\nMAIL_HOST=smtp.gmail.com\nMAIL_PORT=587\nMAIL_USERNAME=emailpengirim@gmail.com\nMAIL_PASSWORD=passwordpengirim\nMAIL_ENCRYPTION=tls\nMAIL_FROM_ADDRESS="emailpengirim@gmail.com"\nMAIL_FROM_NAME="$APP_NAME"`
                )
              }
            >
              {copySuccess}
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-md mb-2">
              Setelah memperbarui kode di atas, pastikan kamu menyesuaikan{" "}
              <strong className="font-semibold">MAIL_USERNAME</strong> dan{" "}
              <strong className="font-semibold">MAIL_FROM_ADDRESS</strong>{" "}
              dengan email kamu, serta{" "}
              <strong className="font-semibold">MAIL_PASSWORD</strong> dengan
              App Password atau Sandi Aplikasi yang sudah dibuat sebelumnya.
              Ingat, jangan ada spasi di MAIL_PASSWORD ya!
            </p>
          </div>
          <h1 className="font-bold text-xl mt-5">Membuat Kelas Notifikasi</h1>
          <p className="mt-2 font-light text-md">
            Pada langkah ini, kita akan membuat kelas notifikasi untuk mengirim
            pesan notifikasi. Ikuti langkah-langkah berikut ini dengan
            menjalankan perintah di terminal atau CMD.
          </p>
          <div className="relative mt-5 mb-5">
            <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
              php artisan make:notification KirimNotifikasi
            </pre>
            <button
              className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
              onClick={() =>
                handleCopy("php artisan make:notification KirimNotifikasi")
              }
            >
              {copySuccess}
            </button>
          </div>
          <p className="mt-2 font-light text-md">
            Setelah menjalankan perintah tersebut, kamu dapat menemukan kelas
            notifikasi yang telah dibuat di{" "}
            <strong className="font-semibold">
              app/Notifications/KirimNotifikasi.php
            </strong>
            . Selanjutnya, ubah kode di file tersebut agar sesuai dengan kode
            yang ditunjukkan di bawah ini.
          </p>
          <div className="relative mt-5 mb-5">
            <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
              {`<?php

namespace App\\Notifications;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Notifications\\Messages\\MailMessage;
use Illuminate\\Notifications\\Notification;

class KirimNotifikasi extends Notification
{
    use Queueable;
    public $data;

    /**
     * Create a new notification instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Get the notification&#39;s delivery channels.
     *
     * @return array&lt;int, string&gt;
     */
    public function via(object $notifiable): array
    {
        return [&quot;mail&quot;];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            -&gt;subject(&quot;Email Notification Testing&quot;)
            -&gt;view(&#39;kirim-notifikasi&#39;, [
                &#39;data&#39; =&gt; $this-&gt;data
            ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}`}
            </pre>
            <button
              className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
              onClick={() =>
                handleCopy(`<?php

namespace App\\Notifications;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Notifications\\Messages\\MailMessage;
use Illuminate\\Notifications\\Notification;

class KirimNotifikasi extends Notification
{
    use Queueable;
    public $data;

    /**
     * Create a new notification instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Get the notification&#39;s delivery channels.
     *
     * @return array&lt;int, string&gt;
     */
    public function via(object $notifiable): array
    {
        return [&quot;mail&quot;];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            -&gt;subject(&quot;Email Notification Testing&quot;)
            -&gt;view(&#39;kirim-notifikasi&#39;, [
                &#39;data&#39; =&gt; $this-&gt;data
            ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array&lt;string, mixed&gt;
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}`)
              }
            >
              {copySuccess}
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-md mb-2">
              Beberapa penjelasan singkat mengenai fungsi dan property yang ada
              pada kelas notifikasi :
            </p>
            <p className="text-md mb-2">
              <strong>public $data :</strong> Property yang digunakan untuk
              menyimpan data yang akan digunakan dalam notifikasi.
            </p>
            <p className="text-md mb-2">
              <strong>__construct($data) :</strong> Constructor yang menerima
              data dan menyimpannya ke dalam property $data.
            </p>
            <p className="text-md mb-2">
              <strong>via($notifiable) :</strong> Menentukan channel pengiriman
              notifikasi (dalam hal ini, email).
            </p>
            <p className="text-md mb-2">
              <strong>toMail($notifiable) :</strong> Mengatur bagaimana
              notifikasi akan dikirim melalui email menggunakan MailMessage dan
              mengirimkan data ke view.
            </p>
          </div>
          <h1 className="font-bold text-xl mt-5">Membuat View</h1>
          <p className="mt-2 font-light text-md">
            Untuk menampilkan konten email notifikasi, kita perlu membuat view
            yang akan digunakan di dalam method <code>toMail()</code>. View ini
            berfungsi sebagai template yang memuat data notifikasi yang akan
            dikirim. Pada kode di atas, kita menggunakan view{" "}
            <code>&#39;kirim-notifikasi&#39;</code> dan mengirimkan data ke dalamnya.
            Sekarang, buat file <code>kirim-notifikasi.blade.php</code> di
            folder <code>resources/views</code> dan sesuaikan isinya sesuai
            dengan kebutuhan notifikasi Anda. Masukkan kode berikut ke dalam
            view tersebut.
          </p>
          <div className="relative mt-5 mb-5">
            <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Testing Email Notification</title>
</head>
<body>
    <h3>{{ $data['name'] }}</h3>
    <h4>{{ $data['message'] }}</h4>
</body>
</html>`}
            </pre>
            <button
              className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
              onClick={() =>
                handleCopy(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Testing Email Notification</title>
</head>
<body>
    <h3>{{ $data['name'] }}</h3>
    <h4>{{ $data['message'] }}</h4>
</body>
</html>`)
              }
            >
              {copySuccess}
            </button>
          </div>
          <h1 className="font-bold text-xl mt-5">Membuat Controller</h1>
          <p className="mt-2 font-light text-md">
            Tahap berikutnya adalah membuat controller dan jalankan perintah
            berikut di terminal atau CMD.
          </p>
          <div className="relative mt-5 mb-5">
            <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
              php artisan make:controller UserController
            </pre>
            <button
              className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
              onClick={() =>
                handleCopy("php artisan make:controller UserController")
              }
            >
              {copySuccess}
            </button>
          </div>
          <p className="mt-2 font-light text-md">
            Sebagai contoh, kita akan membuat controller bernama{" "}
            <strong className="font-semibold">UserController</strong> yang
            digunakan untuk mengirim data dummy melalui notifikasi. Silakan
            tambahkan kode berikut ke dalam controller tersebut.
          </p>
          <div className="relative mt-5 mb-5">
            <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
              {`<?php

namespace App\\Http\\Controllers;

use App\\Notifications\\KirimNotifikasi;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Notification;

class UserController extends Controller
{
    public function kirimNotifikasi()
    {
        $data = [
            'name' => 'Penerima Notifikasi',
            'email' => 'emailpenerima@gmail.com',
            'message' => 'Terima kasih telah mendaftar akun baru di layanan kami!'
        ];

        Notification::route('mail', $data['email'])
            ->notify(new KirimNotifikasi($data));

        return 'Pengiriman Notifikasi Berhasil';
    }
}`}
            </pre>
            <button
              className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
              onClick={() =>
                handleCopy(`<?php

namespace App\\Http\\Controllers;

use App\\Notifications\\KirimNotifikasi;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Notification;

class UserController extends Controller
{
    public function kirimNotifikasi()
    {
        $data = [
            'name' => 'Penerima Notifikasi',
            'email' => 'emailpenerima@gmail.com',
            'message' => 'Terima kasih telah mendaftar akun baru di layanan kami!'
        ];

        Notification::route('mail', $data['email'])
            ->notify(new KirimNotifikasi($data));

        return 'Pengiriman Notifikasi Berhasil';
    }
}`)
              }
            >
              {copySuccess}
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-md mb-2">
            Kode tersebut merupakan sebuah method dalam Laravel yang bertujuan
            untuk mengirim notifikasi email menggunakan{" "}
            <strong className="font-semibold">facade Notification</strong>.
          </p>
          <p className="text-md mb-2">
            <strong>$data :</strong> Sebuah array yang berisi data dummy untuk
            notifikasi (email yang digunakan harus aktif).
          </p>
          <p className="text-md mb-2">
            <strong>Notification::route(&#39;mail&#39;, $data[&#39;email&#39;]) :</strong>{" "}
            Metode ini digunakan untuk menentukan rute notifikasi melalui
            channel email, dengan alamat tujuan yang diambil dari{" "}
            <code>$data[&#39;email&#39;]</code>. Dengan cara ini, kamu bisa mengirimkan
            notifikasi langsung ke alamat email yang ditentukan tanpa memerlukan
            model User.
          </p>
          <p className="text-md mb-2">
            <strong>notify(new KirimNotifikasi($data)) :</strong> Metode
            notify() akan mengirimkan notifikasi. Dalam contoh ini,{" "}
            <code>new KirimNotifikasi($data) </code> membuat sebuah instance
            dari kelas KirimNotifikasi, dan data yang ada akan diteruskan ke
            kelas tersebut.
          </p>
        </div>
        <p className="text-md mb-2">
          Setelah menambahkan kode di atas, langkah berikutnya adalah membuat
          route. Buka file routes/web.php, lalu tambahkan kode berikut.
        </p>
        <div className="relative mt-5 mb-5">
          <pre className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto text-xs">
            Route::get(&#39;/kirim-notifikasi&#39;, [UserController::class,
            &#39;kirimNotifikasi&#39;]);
          </pre>
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-500 transition text-xs"
            onClick={() =>
              handleCopy(
                "Route::get('/kirim-notifikasi', [UserController::class, 'kirimNotifikasi']);"
              )
            }
          >
            {copySuccess}
          </button>
        </div>
        <h1 className="font-bold text-xl mt-5">Hasil</h1>
        <p className="mt-2 font-light text-md">
          Setelah menambahkan route tersebut ke dalam file web.php, Anda dapat
          membuka browser dan mengakses halaman{" "}
          <a
            href="http://localhost:8000/kirim-notifikasi"
            target="_blank"
            className="text-blue-700"
          >
            http://localhost:8000/kirim-notifikasi
          </a>
          . Jika berhasil, halaman tersebut akan menampilkan hasil seperti di
          bawah ini.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src="/konfigurasi-email-pada-laravel-10/request-berhasil.png"
            alt="request-berhasil"
            className="w-full max-w-screen-md"
          />
        </div>
        <p className="mt-5 font-light text-md">
          Kamu bisa memeriksa notifikasi di email penerima, dan hasilnya akan
          terlihat seperti berikut ini.
        </p>
        <img
          src="/konfigurasi-email-pada-laravel-10/notifikasi-email.png"
          alt="notifikasi-email"
          className="mt-2 w-full max-w-screen-md"
        />
        <h1 className="font-bold text-xl mt-5">Kesimpulan</h1>
        <p className="mt-2 font-light text-md">
          Sebagai penutup, mengonfigurasi notifikasi email di Laravel 10
          sebenarnya cukup mudah dan sangat bermanfaat untuk aplikasi kita.
          Dengan langkah-langkah yang telah kita bahas, kita sekarang bisa
          mengirim notifikasi email dengan lancar. Fitur ini membantu menjaga
          komunikasi dengan pengguna tetap teratur dan profesional. Semoga
          panduan ini membantu dalam memahami prosesnya. Selamat mencoba!
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function BlogList() {
  return (
    <div className="mt-28 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-start max-w-4xl mx-auto">
        <ul>
            <li className="mt-5">
                <Link href={`/blog/konfigurasi-notifikasi-email-pada-laravel-10`}>
                    <p className="text-lg font-bold hover:text-stone-700">Konfigurasi Notifikasi Email pada Laravel 10</p>
                    <p className="text-sm mt-5">Notifikasi email di Laravel memudahkan aplikasi untuk mengirim pesan penting, seperti konfirmasi pesanan, pengingat, atau update status.</p>
                </Link>
            </li>
        </ul>
    </div>
  );
}

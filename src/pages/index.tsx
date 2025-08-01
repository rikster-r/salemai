import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>
          SalemAI
        </title>
      </Head>
      <div
        className={`${geistSans.className} ${geistMono.className} font-sans flex justify-center min-h-screen`}
      >
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-[1000px] w-full">
          <Header />
        </main>
      </div>
    </>
  );
}

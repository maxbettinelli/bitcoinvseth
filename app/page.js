'use client'
import Image from "next/image";
import CryptoChart from '../components/CryptoChart';


export default function Home() {
  return (
    <main className="p-8 m-32 border rounded-lg">
      <h1 className="text-center">Bitcoin & Alts Price Chart </h1>
      <CryptoChart />
    </main>
  );
}

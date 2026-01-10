import Hero from "@/app/components/sections/hero/page";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-3xl px-6 py-20 space-y-24">
        <section id="home"><Hero /></section>

      </main>
    </div>
  )
}
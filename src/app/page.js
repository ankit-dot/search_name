
import HomePage from "@/components/homePage";
import Search from '@/components/search';




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Search/>
      <HomePage/>
    </main>
  );
}

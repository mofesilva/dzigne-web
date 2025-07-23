import HeaderSection from "./components/HeaderSection";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="">
        <HeaderSection />
        <Footer />
      </div>
    </main>
  );
}

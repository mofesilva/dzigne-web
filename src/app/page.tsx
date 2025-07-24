import HeaderSection from "./components/HeaderSection";
import Footer from "@/components/footer/Footer";
import CompanyHighlightsSection from "./components/CompanyHighlightsSection";
export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="">
        <HeaderSection />
        <CompanyHighlightsSection />
        <Footer />
      </div>
    </main>
  );
}

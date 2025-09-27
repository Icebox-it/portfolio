import Image from "next/image";
import Link from "next/link";
import SkillPage from "@/components/SkillPage/SkillPage";
import AboutMePage from "@/components/AboutMePage/AboutMePage";
import { Zen_Maru_Gothic } from "next/font/google";
import CareerPage from "@/components/CareerPage/CareerPage";
const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={zenMaruGothic.className}>
      <div className="top text-center mb-5"></div>
      <AboutMePage />
      <CareerPage />
      <SkillPage />
    </div>
  );
}

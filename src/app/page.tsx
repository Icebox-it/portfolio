import Image from "next/image";
import Link from "next/link";
import SkillPage from "@/components/SkillPage/SkillPage";
import AboutMePage from "@/components/AboutMePage/AboutMePage";
import { Zen_Maru_Gothic } from "next/font/google";
const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={zenMaruGothic.className}>
      <div className="top text-center"></div>
      <AboutMePage />
      <SkillPage />
      <Link href="#" className="text-decoration-none text-black">
        <p>Topに戻る</p>
      </Link>
    </div>
  );
}

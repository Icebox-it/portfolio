import Image from "next/image";
import Link from "next/link";
import SkillPage from "@/components/SkillPage/SkillPage";
import AboutMePage from "@/components/AboutMePage/AboutMePage";
import { Zen_Maru_Gothic } from "next/font/google";
import CareerPage from "@/components/CareerPage/CareerPage";
import TopPage from "@/components/TopPage/TopPage";
const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// const sleep = (ms: number): Promise<void> =>
//   new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  // await sleep(1000);
  return (
    <div className={zenMaruGothic.className}>
      <TopPage />
      <AboutMePage />
      <CareerPage />
      <SkillPage />
      <div className="text-center page">
        <h2>Link</h2>
        <div>ここにGithubのリンクを貼る</div>
      </div>
      <div className="page"></div>
    </div>
  );
}

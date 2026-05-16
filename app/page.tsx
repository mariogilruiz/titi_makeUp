import FadeInit from "@/components/effects/Fade_init";
import Content_AOS from "@/components/home/Content_AOS";
import Hero_section from "@/components/home/Hero_section";
import Section_02 from "@/components/home/Section_02";

import { getPageData } from "@/lib/api/datas";

export default async function Home() {
  const respond = await getPageData("home");

  return (
    <FadeInit>
      <main>
        <Hero_section datas={respond} />
        <Section_02 datas={respond} />
        <Content_AOS />
      </main>
    </FadeInit>
  );
}

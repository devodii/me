import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Introduction } from "@/components/introduction";
import { MyStory } from "@/components/story";
import { Wrapper } from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Header />

      <div className="my-4">
        <Introduction />
      </div>
      <div className="flex flex-col gap-2.5">
        <MyStory />
      </div>

      <Footer />
    </Wrapper>
  );
}

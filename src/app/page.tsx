import { Introduction } from "@/components/introduction";
import { MyStory } from "@/components/story";

export default function Home() {
  return (
    <section>
      <div className="my-12 md:my-16">
        <Introduction />
      </div>
      <div className="flex flex-col gap-2.5">
        <MyStory />
      </div>
    </section>
  );
}

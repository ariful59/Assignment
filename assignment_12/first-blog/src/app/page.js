import Hero from "./components/Hero";
import Service from "@/app/components/service";
import PostCategory from "@/app/components/PostCategory";
export default function Home() {
  return (
    <div>

        <PostCategory/>
        <Hero/>
        <Service/>
    </div>
  );
}

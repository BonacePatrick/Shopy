
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import RecentProducts from "@/components/RecentProducts";


export default async function Home({searchParams}:{searchParams: {category: string}}) {
  const {category} = await searchParams
  return (
    <>
     <Hero/>
     <Categories/>
     <RecentProducts category={category}/>
    </>
  );
}

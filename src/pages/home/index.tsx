import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import CategoryList from '../../components/home/CategoryList';
import CardList from '../../components/store/CardList';

export default function Home() {
  return (
    // bg-black 지워야함
    <main className="w-full h-full flex flex-col gap-y-[0.5rem] bg-black">
      <Header />
      <Banner />
      <CategoryList />
      <CardList />
    </main>
  );
}

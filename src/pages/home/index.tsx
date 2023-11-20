import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CategoryList from '../../components/CategoryList';
import CardList from '../../components/CardList';

export default function Home() {
  return (
    <main className="w-96 h-full flex flex-col gap-y-[0.5rem]">
      <Header />
      <Banner />
      <CategoryList />
      <CardList />
    </main>
  );
}

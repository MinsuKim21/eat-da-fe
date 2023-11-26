import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import CategoryList from '../../components/home/CategoryList';
import CardList from '../../components/store/CardList';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';

export default function Home() {
  ChannelService.loadScript();

  ChannelService.boot({
    pluginKey: process.env.REACT_APP_CHANNELTALK_PlUGIN_KEY,
  });

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

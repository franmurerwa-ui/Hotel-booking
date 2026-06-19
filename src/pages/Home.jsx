import Hero from "../components/Hero";
import PropertyTypes from "../components/PropertyTypes";
import TrendingDestinations from "../components/TrendingDestinations";
import TopUniqueProperties from "../components/TopUniqueProperties";
import HomesGuestsLove from "../components/HomesGuestsLove";
import GeniusBanner from "../components/GeniusBanner";
import PopularDestinations from "../components/PopularDestinations";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <div className="pb-8">
        <PropertyTypes />
        <TrendingDestinations />
        <TopUniqueProperties />
        <HomesGuestsLove />
        <GeniusBanner />
        <PopularDestinations />
      </div>
    </div>
  );
}

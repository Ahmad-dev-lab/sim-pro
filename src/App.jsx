import Header from "./components/Header";
import PopularDestinations from "./components/PopularDestinations";
import SearchBar from "./components/SearchBar";
import CountryGrid from "./components/CountryGrid";
import DownloadAppBanner from "./components/DownloadAppBanner";
import ExploreDestinations from "./components/ExploreDestinations"; // ✅ yeh add karo
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
        <ExploreDestinations /> 
      <PopularDestinations />
      
      <CountryGrid />
      <DownloadAppBanner />
          
      <Footer />
    </>
  );
}

export default App;

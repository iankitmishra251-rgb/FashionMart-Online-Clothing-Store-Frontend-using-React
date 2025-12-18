import Categories from '../components/Categories'
import Collections from '../components/Collections'
import Collections2 from '../components/Collections2'
import Footer from '../components/Footer'
import HeaderWithDivider from '../components/HeaderWithDivider'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import OfferSection from '../components/OfferSection'
import ProductList from '../components/ProductList'
import ShowAllButton from '../components/ShowAllButton'
function Home() {
    return (
        <div>
            <Navbar />
            <img src="/assets/images/banners/header.png" alt="Home Banner" className='w-100' />
            <Categories />
            <Collections />
            <HeaderWithDivider title={"Trending T-Shirts"} />
            <ProductList />
            <ShowAllButton />
            <HeaderWithDivider title={"Featured Products"} />
            <ProductList />
            <ShowAllButton />
            <img src="/assets/images/banners/banner2.png" alt="Banner" className='w-100 mt-5' />
            <Collections2 />
            <img src="/assets/images/banners/banner3.png" alt="Banner" className='w-100 mt-5' />
            <OfferSection />
            <img src="/assets/images/banners/banner4.png" alt="Banner" className='w-100 mt-5' />
            <NewsLetter />
            <hr />
            <Footer />
        </div>
    )
}

export default Home

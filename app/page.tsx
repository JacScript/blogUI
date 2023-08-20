import Navbar from '../components/Navbar.component'
import Hero from '../components/Hero.component'
import LoopTextBar from '@/components/LoopTextBar.component'
import PopularSlider from '../components/PopularSlider.component'
import HomeBooks from '@/components/HomeBooks.component'
import TopicSlider from '@/components/TopicSlider.component'
import DontMissReadingSection from '@/components/DontMissReadingSection.component'
import NewsLetter from '@/components/NewsLetter.component'


export default  function Home() {


  return (
    <>
      <Hero />
      <LoopTextBar />
      <PopularSlider />
      <HomeBooks />
      <TopicSlider />
      <DontMissReadingSection />
      <NewsLetter />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}

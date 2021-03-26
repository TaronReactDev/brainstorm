import Footer from "./componentes/footer/index"
import SignUp from "./componentes/signUp/index"
import FeaturedVideos from "./componentes/featuredVideos/index"
import FeaturedStories from "./componentes/featuredStories/index"
import BecomeATravel  from "./componentes/becomeATravel/index"
import Header  from "./componentes/header/index"

function App() {
  return (
    <div >
      <Header/>
      <BecomeATravel/>
      <FeaturedStories/>
      <FeaturedVideos/>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;

import Navbar from './components/navbar/Navbar';
import Sectionone from './components/sectionone/Sectionone';
import Sectiontwo from './components/sectiontwo/Sectiontwo';
import Sectionthree from './components/sectionthree/Sectionthree';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <Sectionone />
      <div className="mt-[300px]"> 
        <Sectiontwo />
      </div>
      <div className="mt-[-250px]">
      <Sectionthree/>
      </div>
      <div className="mt-[70px]">
      <Footer/>
      </div>
    </>
  );
}

export default App;

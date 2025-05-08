import "../components/Home.css";
import FeatureCard from '../components/FeatureCard';
import patern from "./assets/pattern.png";


// daata for reusablw feature component 

const features = [
    { name: 'Reduce Costs', sub: 'Save up to 70% on operational expenses' },
    { name: 'Increase Efficiency', sub: 'Focus on growth while we handle the heavy lifting.' },
    { name: 'No Rigid Contracts', sub: 'Scale your workforce up or down as needed.' },
    { name: 'Fluent & Culturally Aligned Communication', sub: 'Professionals trained for global markets.' },
    { name: 'Highly Skilled & Certified Talent', sub: 'Experts in their fields, not just degree holders.' },
    { name: 'Office-Based Professionals', sub: 'Reliable, structured, and fully managed teams.' },
    { name: '100% Dedicated Workforce', sub: 'Focused professionals committed to your success.' },
    { name: 'Performance-Driven Approach', sub: 'Regular training and quality assurance for excellence.' },
  ];
  

const Home = () => {
    return(
        <div>
        <div className="home-container">
          <h1>Powering Global Talent, Driving Business Growth</h1>
          <p> Your Strategic Outsourcing Partner for Remote Excellence </p>
          <button>Contact Us</button>
        </div>


        <div className="home-p">

        <img src={patern}/>

        <div className="p-p">
            <p>At Consult Park, we connect businesses with world-class remote talent, helping them scale,
                optimise, and thrive. Whether you need skilled virtual staff, process outsourcing, or expert
                consulting, we provide tailored solutions that drive results.
            </p>

             <p>Consult Park specializes in outsourcing virtual teams to support international companies in
        achieving their business goals. By connecting organizations with skilled professionals, Consult
        Park enables businesses to enhance productivity, streamline operations, and scale effectively.
        The company is committed to delivering tailored solutions that align with the unique needs of
        each client, fostering growth and innovation across industries</p>
        </div>
        </div>

        <div className="feature-section">
      {features.map((feature, index) => (
        <FeatureCard key={index} name={feature.name} sub={feature.sub} />
      ))}
    </div>

        </div>
    )
}

export default Home;
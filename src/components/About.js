import about from "./images/about.jpg";
import abt02 from "./images/abt-02.jpg";
const About = () => {
    return ( 
        <div className="container">
            <div className="abt-1">
                <img src={about} alt=""/>
                <h1>About</h1>
            </div>
            <div className="abt-2">
                <h1>Profile</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            </div>
            <div className="abt-3">
                <div className="abt-3a">
                    <h4>OUR SERVICES</h4>
                    <p>provides services ranging from IT Consulting to Software Strategy, Networking, Architecture, ERP/CRM, Mobility, App development, Business Intelligence and Performance management, Outsourcing, Web Methodologies, areas of analysis, design, development and maintenance of next generation applications and information systems. Harnessing the latest technologies and combining strong knowledge and solid proficiency, we help our customers build large-scale, advanced systems that support their business operations efficiently and effectively</p>
                </div>
                <div className="abt-3b">
                    <h4>OUR PRODUCTS</h4>
                    <p>We offer a broad lineup of product offerings including Quality Assurance tools, CMS, Website Builder, Digital Organizer & Mobile Computing Software, backed by support capabilities to meet the needs of customers that support their systems to effectively perform their operations and meet the most pressing of challenges within the context of how they need to do it.

                        but we also have the advantage of possessing high quality technical capabilities and a solid track record supplemented by a commitment to meet our customers expectations to a successful future.</p>
                </div>
           </div>
           <div className="abt-4">
                <div className="abt-4a">
                    <img src={abt02} alt=""/>
                </div>
                <div className="abt-4b">
                    <h2>OUR TEAM</h2>
                    <p>The company has a team of highly experienced and qualified IT professionals with the requisite expertise to provide superior value for our clients by delivering high quality output designed to enhance your Return on Investment.

Uniquely, Accentiqa has a team that not only is skilled in handling the intricacies of technology, but also possesses high creativity skills. We believe that only the level of innovation can distinguish two equally matched skill sets. Our team members hold degrees from the countries most prestigious institutions. We have experts having managerial as well as technical background, including domain experts of each of the industries we focus on.</p>
                </div>
           </div>
           
        </div>
     );
}
 
export default About;
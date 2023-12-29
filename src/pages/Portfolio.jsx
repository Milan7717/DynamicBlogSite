import { useEffect, useState } from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Mainportfolio from '../component/common/porfolio/Mainportfolio'
import AcademicJourney from '../component/common/porfolio/AcademicJourney'
import SkillSetion from '../component/common/porfolio/SkillSetion'
import Project from '../component/common/porfolio/Project'
import axios from 'axios';



const Portfolio = (props) => {

    const [portfolioData, setPotfolioData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/mainportfolio/');
                setPotfolioData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const [academicData, setAcademicData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/education/');
                setAcademicData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);
    const [projectData, setProjectData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/project/');
                setProjectData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);
    const [skillData, setSkillData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/skill/');
                setSkillData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>

                <div className=" lg:mx-24 md:mx-10 sm:mx-8">
                    {portfolioData.map((setportfolioData, index) => (


                        <Mainportfolio


                            key={index}
                            portfolioDescription={setportfolioData.portfolio_description}
                            portfolioImage={setportfolioData.portfolio_image}
                            aboutMeDescription={setportfolioData.aboutme_description}
                            aboutMeImage={setportfolioData.aboutme_image}


                        />
                    ))}
                    {/* <!-- education section --> */}

                    {academicData.map((setAcademicData, index) => (

                        <AcademicJourney

                            key={index}
                            schoolName={setAcademicData.school_name}
                            joindate={setAcademicData.joindate}
                            enddate={setAcademicData.enddate}
                            educationDescription={setAcademicData.education_description}

                        />
                    ))}

                    {/* <!-- skills --> */}

                    {skillData.map((setSkillData, index) => (

                        <SkillSetion
                            key={index}
                            codingHeading={setSkillData.coding_heading}
                            codingExperienceDescription={setSkillData.codingexperience_description}

                            professionalHeading={setSkillData.professional_heading}
                            professionalExperienceDescription={setSkillData.professionalexperience_description}


                        />
                    ))}



                    {/* <!-- project --> */}
                    {projectData.map((setProjectData, index) => (
                        <Project 
                        key={index}
                        projectHeading={setProjectData.project_heading}
                        projectDescription={setProjectData.project_description}
                        />
                    ))}



                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>

    )
}

export default Portfolio
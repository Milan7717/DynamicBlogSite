import { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import axios from 'axios'
import Popup from '../component/common/Popup';

const Contact = () => {
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to your Django backend API
            await axios.post('http://127.0.0.1:8000/api/contact/', formData);
            // Handle success (e.g., show a thank you message)
            console.log('Contact form submitted successfully!');
            // Display a success message
            setIsMessageSent(true);
            setTimeout(() => {
                window.location.reload();
            }, 2000);

        } catch (error) {
            // Handle error (e.g., show an error message)
            console.error('Error submitting contact form:', error);
        }
    };

    return (
        <>
            <Navbar />
            {!isMessageSent && (

                <div className="contact text-center">
                    <h1 className="underline text-4xl my-4">Contact <span className="text-blue-400">Me!</span></h1>
                    <div className="flex justify-center items-center">
                        <form className="md:w-[50%] sm:w-[80%] w-[100%] lg:w-[40%] text-lg" onSubmit={handleSubmit}>
                            <div className="flex items-center mb-4 border-2 border-sky-400  rounded-lg">
                                <p className="sm:w-[20%] p-2 ">Name :</p>
                                <input className="p-2 sm:w-[80%] outline-none bg-transparent" name='full_name' type="text" placeholder="Full Name" onChange={handleChange} required />
                            </div>
                            <div className="flex items-center mb-4 border-2 border-sky-400  rounded-lg">
                                <p className="sm:w-[20%] p-2 ">Phone :</p>
                                <input className="p-2 sm:w-[80%] outline-none bg-transparent" name='phone' type="text" placeholder="Full Name" onChange={handleChange} required />
                            </div>
                            <div className="flex items-center mb-4 border-2 border-sky-400  rounded-lg">
                                <p className="sm:w-[20%] p-2 ">Email :</p>
                                <input className="p-2 sm:w-[80%] outline-none bg-transparent" name='email' type="text" placeholder="Full Name" onChange={handleChange} required />
                            </div>

                            <div className="textarea mb-4 flex outline-none  border-2 border-sky-400 rounded-lg">
                                <p className="sm:w-[20%] p-2 ">Message :</p>
                                <textarea className="sm:w-[80%] p-2 " id="" cols="30" rows="10" name='message' placeholder="Your Message" onChange={handleChange} required></textarea>
                            </div>

                            <div className="text-white mb-4">
                                <button type="submit"
                                    className="btn bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg sm:p-2 w-[8rem]">Submit</button>
                            </div>

                        </form>




                    </div>

                </div>
            )}

            {isMessageSent && (
                <Popup message="Contact done" />
            )}

            <Footer />
        </>
    );
};

export default Contact;

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram } from 'lucide-react';

/**
 * Contact component that provides a form for users to send messages
 * Features responsive design and success message on submission
 */
const Contact = () => {
    // Form input states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    
    // Success state to track form submission
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    /**
     * Handles form submission and shows success message
     * @param e - Form submission event
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // In a real application, you would send the form data to your backend here
        console.log({ name, email, phone, message });
        
        // Show success message
        setIsSubmitted(true);
        
        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        
        // Reset success message after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };
    
    return (
        <div className="bg-black text-white py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl font-bold mb-8 text-center">
                    Get in <span className="text-pink-500">Touch</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        
                        <div className="flex items-start space-x-4">
                            <Phone className="text-pink-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <p className="text-gray-300">+91 98765 43210</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <Mail className="text-pink-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <p className="text-gray-300">info@chitrasangamstudio.com</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-pink-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-medium">Studio Address</h4>
                                <p className="text-gray-300">
                                    14, Rajeev Nagar Road, opp. Road, Rajeev Nagar, shyam bazar, Patna, Bihar 800024
                                </p>
                            </div>
                        </div>
                        
                        {/* Social Media Icons */}
                        <div className="pt-6">
                            <h4 className="font-medium mb-3">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-800 hover:bg-pink-500 transition duration-300 p-3 rounded-full">
                                    <i className="fab fa-facebook-f text-lg"></i>
                                </a>
                                <a href="#" className="bg-gray-800 hover:bg-pink-500 transition duration-300 p-3 rounded-full">
                                    <i className="fab fa-instagram text-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="bg-gray-900 p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                        
                        {isSubmitted ? (
                            <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-300 p-4 rounded-md mb-6 flex items-center">
                                <div className="bg-green-500 rounded-full p-1 mr-3">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                Thank you! Your message has been sent successfully. We'll get back to you soon.
                            </div>
                        ) : null}
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-gray-800 text-white border-0 rounded-md p-3 w-full focus:ring-2 focus:ring-pink-500 focus:outline-none"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-800 text-white border-0 rounded-md p-3 w-full focus:ring-2 focus:ring-pink-500 focus:outline-none"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="bg-gray-800 text-white border-0 rounded-md p-3 w-full focus:ring-2 focus:ring-pink-500 focus:outline-none"
                                    placeholder="+91 9304604766"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={4}
                                    className="bg-gray-800 text-white border-0 rounded-md p-3 w-full focus:ring-2 focus:ring-pink-500 focus:outline-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 w-full transition duration-300 uppercase tracking-wider font-medium"
                            >
                                <span>Submit</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
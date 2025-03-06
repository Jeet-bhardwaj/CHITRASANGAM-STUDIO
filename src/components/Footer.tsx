import { Camera } from "lucide-react";

const Footer = () => {
    return (
        <>
            <footer className="bg-green-800 text-white py-8 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Camera className="w-6 h-6" />
                        <span className="text-2xl font-bold">CHITRASANGAM STUDIO</span>
                        <span className="text-xl font-light">photography</span>
                    </div>
                    <div className="text-sm text-center md:text-right">
                        <p>650 Center Avenue, West View, PA, 15229</p>
                        <p>(412) 335-8123 | katie@kathrynhyslopphotography.com</p>
                        <p>© {new Date().getFullYear()} CHITRASANGAM STUDIO. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;  
import PixelSnow from "../components/backgrounds/PixarSnow";
import Lanyard from "../components/animations/Lanyard";
import { useState } from "react";
import axios from "axios";
import Dock from "../components/animations/Dock";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import toast from "react-hot-toast";
export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const toastId = toast.loading("Sending message...");

      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);

        toast.success("Message sent successfully!", { id: toastId });

        setFormData({ name: "", email: "", message: "" });

      } catch (error) {
        toast.error("Failed to send message", { id: toastId });
        console.error(error);
      }

      setLoading(false);
    };
  const items = [
      {
        icon: <FaGithub size={20} />,
        label: "GitHub",
        onClick: () => window.open("https://github.com/Siddhartha2910", "_blank"),
      },
      {
        icon: <FaLinkedin size={20} />,
        label: "LinkedIn",
        onClick: () => window.open("https://www.linkedin.com/in/g-siddhartha-kumar/", "_blank"),
      },
      {
        icon: <FaInstagram size={20} />,
        label: "Instagram",
        onClick: () => window.open("https://www.instagram.com/siddhartha__1029/", "_blank"),
      },
    ];
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-black flex items-center px-6 md:px-16 py-20"
      style={{ scrollMarginTop: "5px" }}
    >
      {/* Snow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PixelSnow
          color="#ffffff"
          flakeSize={0.012}
          minFlakeSize={1.25}
          pixelResolution={1000}
          speed={0.3}
          density={0.15}
          direction={125}
          brightness={0.7}
          depthFade={8}
          farPlane={20}
          gamma={0.4545}
          variant="round"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT — Contact Glass Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">

          <div className="
            w-full max-w-md
             h-140 md:h-150
            backdrop-blur-2xl
            bg-linear-to-br from-white/10 to-white/5
            border border-white/10
            rounded-2xl
            p-8 md:p-10
            shadow-[0_0_40px_rgba(255,255,255,0.05)]
          ">

            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Get In Touch
            </h2>

            <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
              Have an idea or collaboration in mind?
              Let’s build something impactful together.
            </p>
            <div >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition"
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className={`mt-2 px-6 py-2 rounded-full font-medium transition self-start
                  ${loading 
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : "bg-white text-black hover:bg-gray-300"
                  }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <div className="flex flex-col items-center">
                <Dock 
                  items={items}
                  panelHeight={60}
                  baseItemSize={45}
                  magnification={65}
                />
                
              </div>

            </form>
            </div>
          </div>
          
        </div>
        

        {/* RIGHT — Lanyard (Hidden on Mobile) */}
        <div className="hidden md:flex w-1/2 h-125 justify-center items-center pt-10">
          <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} />
        </div>

      </div>
    </section>
  );
};

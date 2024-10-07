import { FC, useState } from "react";
import profilePhoto from "../assets/profile_photo.png";
import CustomInput from "../../components/CustomInput";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "../../components/Link";
import axios from "axios";


type FormField = 'name' | 'email' | 'subject' | 'message';


const katalogFormContact: { label: string; placeholder: string; type: string; key: FormField }[] = [
  { label: "Name", placeholder: "James Robber", type: "text", key: "name" },
  { label: "Email", placeholder: "James Robber", type: "text", key: "email" },
  { label: "Subject", placeholder: "For web design work Enquire", type: "text", key: "subject" },
  { label: "Message", placeholder: "Type your Message", type: "textarea", key: "message" },
];

const katalogSocialLinks = [
  { label: "Linkedin", url: "https://in.linkedin.com/in/ayush-barnwal-25796a1b3" },
  { label: "Instagram", url: "https://www.instagram.com/ayushbarnwal.here/" },
  { label: "Twitter", url: "https://x.com/theayushbarnwal" },
  { label: "Webflow", url: "https://ayush-barnwal.webflow.io/" },
  { label: "Figma", url: "https://ayush-barnwal.webflow.io/#about" },
];

const ContactUs: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: FormField) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:2000/messages", formData);
      console.log("Form submitted successfully", response.data);
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  return (
    <section className="min-h-full bg-neutral-400">
      <Header bgColor="bg-neutral-400" />

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 py-9 px-4 md:px-8">
        <div className="order-2 md:order-1 flex flex-col items-center mt-4">
          <div className="bg-gray-400 p-2 rounded-full">
            <img className="w-[200px] h-[200px] rounded-full mb-0" src={profilePhoto} />
          </div>
          <div className="self-start mb-2">
            <div className="text-2xl font-extralight gap-x-8 px-4">Contact Detail</div>
            <ul className="list-none gap-x-8 px-4">
              <li className="text-2xl font-medium py-1">ayush.barnwal@brightscout.com</li>
              <li className="text-2xl font-medium py-1">+91 8651447521</li>
            </ul>
          </div>
          <div className="self-start">
            <div className="text-2xl font-extralight gap-x-8 px-4">Social</div>
            <Link mode="vertical" color="text-black-400" katalogLinks={katalogSocialLinks} />
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-4">
          <div className="text-4xl sm:text-5xl md:text-6xl text-black-400">
            Let's build something cool together
          </div>

          { katalogFormContact.map((form) => (
            <CustomInput
              key={form.key}
              label={form.label}
              placeholder={form.placeholder}
              type={form.type}
              value={formData[form.key]}
              onChange={(e) => handleChange(e, form.key)}
            />
          ))}

          <button
            className="w-40 bg-black-400 hover:bg-black-600 text-white font-medium py-4 px-4 rounded-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactUs;

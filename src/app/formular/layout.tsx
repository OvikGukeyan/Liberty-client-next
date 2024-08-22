import React from "react";
import ContactForm from "./page";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontaktformular",
  description: "Liberty Finance Kontaktformular",
  keywords: "",
};

const ContactFormLayout = () => {

  return (
    <>
      <ContactForm />
      <Footer isStatic={false} />
    </>
  );
};

export default ContactFormLayout;

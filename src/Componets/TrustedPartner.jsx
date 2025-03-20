import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";


const TrustedPartners = () => {
  const partners = [
    { id: 1, image: p1, alt: "BackHub" },
    { id: 2, image: p2, alt: "CableLabs" },
    { id: 3, image: p3, alt: "DBS" },
    { id: 4, image: p4, alt: "EasyEuro" },
    { id: 5, image: p5, alt: "AMD" },
  ];

  return (
    <section className="bg-[#0D2A32] py-8 px-6 md:px-12 lg:px-24 text-center">
      <h3 className="text-[#5EEAD4] text-sm uppercase tracking-widest mb-6">
        Our Trusted Partners
      </h3>
      <div className="flex flex-wrap justify-evenly items-center gap-6">
        {partners.map((partner) => (
          <img
            key={partner.id}
            src={partner.image}
            alt={partner.alt}
            className=" hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;

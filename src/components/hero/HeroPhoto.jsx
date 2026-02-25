import TiltedCard from "./TiltedCard";

const HeroPhoto = () => {
  return (
    <div className="flex justify-center">
      

        {/* Desktop: Tilted Card */}
      <div className="hidden md:block">
        <TiltedCard
          imageSrc="public\image2.jpeg"
          altText="Gade Siddhartha Kumar"
          containerHeight="340px"
          containerWidth="340px"
          imageHeight="370px"
          imageWidth="320px"
          rotateAmplitude={5}
          scaleOnHover={1.03}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={false}
        />
      </div>

      {/* Mobile: Static Image */}
      <div className="block md:hidden">
        <img
          src="public\image2.jpeg"
          alt="Gade Siddhartha Kumar"
          className="w-60 h-69 rounded-2xl object-cover shadow-lg"
        />
      </div>
    </div>

    
  );
};

export default HeroPhoto;

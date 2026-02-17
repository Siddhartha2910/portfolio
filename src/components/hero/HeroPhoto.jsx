import TiltedCard from "./TiltedCard";

const HeroPhoto = () => {
  return (
    <div className="flex justify-center">
      

        {/* Desktop: Tilted Card */}
      <div className="hidden md:block">
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Gade Siddhartha Kumar"
          containerHeight="340px"
          containerWidth="340px"
          imageHeight="340px"
          imageWidth="340px"
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
          src="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          alt="Gade Siddhartha Kumar"
          className="w-70 h-70 rounded-2xl object-cover shadow-lg"
        />
      </div>
    </div>

    
  );
};

export default HeroPhoto;

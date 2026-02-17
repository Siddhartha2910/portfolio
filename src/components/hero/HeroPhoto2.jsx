import { CometCard } from "../animations/Cometcard";

const HeroPhoto2 = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <CometCard>
        <div
          className="
            w-60 sm:w-70 md:w-[320px]
            rounded-2xl
            bg-[#1F2121]
            p-2 md:p-3
          "
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative aspect-3/4 w-full">
            <img
              src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   // <-- replace with your image
              alt="Gade Siddhartha Kumar"
              className="
                absolute inset-0
                h-full w-full
                rounded-xl
                object-cover
                bg-black
              "
              style={{
                transform: "translateZ(30px)",
              }}
            />
          </div>
        </div>
      </CometCard>
    </div>
  );
};

export default HeroPhoto2;

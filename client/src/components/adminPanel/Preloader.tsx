import FadeContent from "../ui/FadeContent";
import Silk from "../ui/Silk";
import TextType from "../ui/TextType";

const Preloader = () => {
  return (
    <FadeContent duration={500}>
      <section className="h-screen relative overflow-hidden">
        <Silk color="#8B5CF6" noiseIntensity={0} />
        <div className="absolute top-40 left-1/4 z-20">
          <h1 className="text-[150px] text-[#dddddd] leading-[1.2]">
            <TextType
              text={["Hello, \nAdmin", "Welcome \nto Admin Panel"]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </h1>
        </div>

        {/* Дальний слой (самые маленькие, сильный блюр) */}
        <div className="absolute rotate-45 top-1/4 left-1/4 opacity-30 blur-sm">
          <img
            src="src/assets/images/fen.png"
            alt="realme"
            className="w-32 h-32 object-contain"
          />
        </div>

        <div className="absolute top-1/3 right-1/4 opacity-25 blur-sm">
          <img
            src="src/assets/images/headphones-yoga-anc.png"
            alt="lenovo"
            className="w-40 h-40 object-contain"
          />
        </div>

        {/* Средний слой (средний размер, небольшой блюр) */}
        <div className="absolute top-10 left-10 opacity-40 blur-sm">
          <img
            src="src/assets/images/cateogoryimage3.png"
            alt="realme"
            className="w-48 h-48 object-contain"
          />
        </div>

        <div className="absolute top-60 right-20 opacity-40 blur-sm">
          <img
            src="src/assets/images/samsung-galaxy-s25.png"
            alt="samsung"
            className="w-56 h-56 object-contain rotate-12"
          />
        </div>

        {/* Ближний слой (побольше, почти без блюра) */}
        <div className="absolute top-1/2 left-16 opacity-20 blur-xs">
          <img
            src="src/assets/images/iphone.png"
            alt="iphone"
            className="w-64 h-64 object-contain -rotate-6"
          />
        </div>

        <div className="absolute bottom-10 left-1/3 opacity-20 blur-xs">
          <img
            src="src/assets/images/phone.png"
            alt="realme"
            className="w-72 h-72 object-contain rotate-45"
          />
        </div>

        {/* Дополнительные мелкие элементы */}
        <div className="absolute top-2/3 left-3/4 opacity-15 blur-xs">
          <img
            src="src/assets/images/laptop-honor-magicbook-x16.png"
            alt="honor"
            className="w-46 h-46 object-contain rotate-30"
          />
        </div>

        <div className="absolute top-16 right-32 opacity-15 blur-sm">
          <img
            src="src/assets/images/huawei-matepad-se-11.png"
            alt="huawei"
            className="w-20 h-20 object-contain -rotate-15"
          />
        </div>

        <div className="absolute top-10 left-1/3 opacity-10 blur-sm">
          <img
            src="src/assets/images/smartwatch-oneplus-watch3.png"
            alt="oneplus"
            className="w-16 h-16 object-contain rotate-20"
          />
        </div>

        {/* Самые дальние/бледные */}
        <div className="absolute top-1/4 right-2/4 opacity-10 blur-xs">
          <img
            src="src/assets/images/smartwatch-oneplus-watch3.png"
            alt="oneplus"
            className="w-28 h-28 object-contain"
          />
        </div>

        <div className="absolute top-0 left-2/4 opacity-10 blur-sm">
          <img
            src="src/assets/images/headphones.png"
            alt="realme"
            className="w-36 h-36 object-contain -rotate-30"
          />
        </div>
      </section>
    </FadeContent>
  );
};

export default Preloader;

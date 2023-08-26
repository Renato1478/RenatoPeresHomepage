import SpecialButton from "@/app/@core/components/buttons/SpecialButton";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="s-hero" className="wrapper flex justify-between align-middle pt-36 pb-4">
      <div className="flex flex-col align-middle justify-center max-w-lg gap-y-4">
        <div className="text-3xl font-bold">
          Helping <span className="text-red-400">ideas</span> turn into{" "}
          <span className="text-purple-600">reality</span> in a modern and
          beatiful way
        </div>
        <div className="mt-2">
          Professional skills that will put a star in your project.
        </div>
        <div className="mt-2">
          <SpecialButton href="#">
            <i>Whats yours?</i>
          </SpecialButton>
        </div>
      </div>
      <Image
        src={"/images/renato_during_day.svg"}
        alt="Renato During Day"
        width={487}
        height={350}
      />
    </div>
  );
}

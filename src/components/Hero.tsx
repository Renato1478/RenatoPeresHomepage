import SpecialButton from "@/@core/components/buttons/SpecialButton";

import MainIllustration from "./MainIllustration";

export default function Hero() {
  return (
    <div
      id="s-hero"
      className="dark:text-white section wrapper flex max-md:flex-col justify-between align-middle pt-48 max-md:pt-28 pb-4"
    >
      <div className="flex flex-col align-middle justify-center max-w-lg gap-y-4">
        <div className="text-3xl font-bold">
          Helping <span className="text-red-400">ideas</span> turn into{" "}
          <span className="text-purple-600 dark:text-purple-500">reality</span>{" "}
          in a modern and beatiful way
        </div>
        <div className="mt-2 dark:text-slate-400">
          Professional skills that will put a star in your project.
        </div>
        <div className="mt-2">
          <SpecialButton href="mailto:renatoperesdesouza@hotmail.com">
            <i>Let&apos;s talk</i>
          </SpecialButton>
        </div>
      </div>
      <MainIllustration />
    </div>
  );
}

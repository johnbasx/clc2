import logoDark from "@images/CLC2-LOGO-sideB.png";
import logoLight from "@images/CLC2-LOGO-side.png";
import Image from "next/image";

export function Logo(props: any) {
  return (
    <div>
      <Image
        alt='CLC2 Logo dark'
        src={logoLight}
        className='w-auto h-24 md:h-20'
        unoptimized
        priority
      />
    </div>
  );
}

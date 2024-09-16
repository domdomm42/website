import Link from "next/link";
import Image from "next/image";
import finalLogoFont from "../../public/finalLogoFont.svg";
import drill from "../../public/drill.svg";

export default function Logo() {
  return (
    <Link href="/" className="flex items-start relative">
      <Image
        src={finalLogoFont}
        alt="logo"
        width={150}
        height={150}
        className="hover:opacity-60"
      />
      <div className="absolute" style={{ top: "35px", right: "15px" }}>
        <Image
          src={drill}
          alt="drill"
          width={40}
          height={40}
          className="animate-drill"
        />
      </div>
    </Link>
  );
}

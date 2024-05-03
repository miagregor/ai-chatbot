import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link className="flex flex-row" href="/">
        <Image
          className="w-full"
          style={{ height: "fit-content", alignSelf: "center", paddingLeft:"20px" }}
          src="/logo.png"
          alt="dexcom-logo"
          width={0}
          height={0}
          sizes="100vw"
          priority
        />
    </Link>
  );
}

export default Logo;

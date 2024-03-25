import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="border-4 border-title rounded-t-[60px] sm:rounded-b-[50px] w-[103%] h-[100px] fixed sm:absolute -bottom-1 sm:bottom-0 left-1/2 flex justify-center items-center bg-white translate-x-[-50%] sm:max-w-[430px]"
    >
      <ul className="w-3/5 h-[50px] flex justify-between items-center">
        <li>
          <Link href="/shop">
            <Image
              src="/assets/points-navbar.svg"
              alt="icône points"
              width={50}
              height={50}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="/assets/qr-code-navbar.svg"
              alt="icône qr code"
              width={60}
              height={60}
            />
          </Link>
        </li>
        <li>
          <Link href="/account">
            <Image
              src="/assets/account-navbar.svg"
              alt="icône compte"
              width={50}
              height={50}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

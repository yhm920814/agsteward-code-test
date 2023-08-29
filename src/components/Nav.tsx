import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex h-12 items-center bg-white shadow-sm">
      <Link href="/">
        <h5 className="ml-4 flex w-32 items-center font-sans text-xs font-semibold leading-5">
          National Stewardship Trading Platform
        </h5>
      </Link>
    </div>
  );
}

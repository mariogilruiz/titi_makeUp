import Link from "next/link";

export default function Button_basic() {
  return (
      <Link
        href="/contact?from=hero"
        className="relative overflow-hidden border-2 border-black font-mono text-black text-sm md:text-lg #md:text-2xl font-medium px-3 py-1 my-3 lg:my-0 rounded shadow uppercase cursor-pointer before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-black/10 before:transition-all before:duration-300 before:ease-out before:z-0 hover:before:w-full"
      >
        <span className="relative z-10">solicitar información</span>
      </Link>
  );
}

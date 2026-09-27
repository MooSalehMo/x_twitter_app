import Link from "next/link";

export default function Footer() {
  return (     
    <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
      <Link href="/">Terms of Service</Link>
      <Link href="/">Privacy Policy</Link>
      <Link href="/">Cookie Policy</Link>
      <Link href="/">Accessibility</Link>
      <Link href="/">Ads Info</Link>
      <span>© 2025 L Corp.</span>
    </div>
   
  );
}

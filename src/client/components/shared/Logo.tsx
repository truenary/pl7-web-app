type logoProps = {
  logoTitle: string;
};
export default function Logo({ logoTitle }: logoProps) {
  return (
    <>
      <img src="logo.jpg" className="h-8 sm:h-10 md:h-12" alt="Logo" />
      <span className="text-black text-lg font-semibold">{logoTitle}</span>
    </>
  );
}

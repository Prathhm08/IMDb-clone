import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      <Image
        className="h-52"
        src="spinner.svg"
        width={200}
        height={300}
        alt="loading..."
      />
    </div>
  );
}

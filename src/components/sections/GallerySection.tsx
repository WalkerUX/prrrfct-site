import Image from "next/image";

const cats = [
  { src: "/images/mainecoon-gallery.webp", alt: "Maine Coon cat" },
  { src: "/images/siamese-gallery.webp", alt: "Siamese cat" },
  { src: "/images/tortoiseshell-gallery.webp", alt: "Tortoiseshell cat" },
  { src: "/images/abyssinian-gallery.webp", alt: "Abyssinian cat" },
  { src: "/images/tuxedo-gallery.webp", alt: "Tuxedo cat" },
  { src: "/images/whitesiamese-gallery.webp", alt: "White Siamese cat" },
  { src: "/images/russianblue-gallery.webp", alt: "Russian Blue cat" },
  { src: "/images/graywhite-gallery.webp", alt: "Gray and white cat" },
];

export function GallerySection() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="w-full py-0 flex flex-col items-start gap-md md:gap-lg lg:gap-xl"
    >
      {/* Visual label only – NOT a heading element (keeps rotor clean) */}
      <p
        id="gallery-heading"
        className="mt-0 mb-0 font-semibold text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px] text-[#101112]"
      >
        Choose your favorite breed…or create a crew!
      </p>

      {/* Accessible list of breed images */}
      <ul
        className="
          grid
          grid-cols-2 gap-md
          md:grid-cols-3 md:gap-lg
          lg:grid-cols-4 lg:gap-xl
          list-none p-0 m-0 w-full
        "
      >
        {cats.map((cat) => (
          <li key={cat.src}>
            <Image
              src={cat.src}
              alt={cat.alt}
              width={480}
              height={480}
              className="w-full h-auto aspect-square object-cover"
              sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 50vw"
              loading="eager"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

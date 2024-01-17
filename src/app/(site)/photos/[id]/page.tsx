import Link from "next/link";
import Image from "next/image";
import photos, { Photo } from "@/data/photos";

function PhotoPage({ params: { id } }: { params: { id: string } }) {
  const photo: Photo = photos.find((p) => p.id === id)!;

  return (
    <section className="py-10">
      <div className="container">
        <div>
          <Link
            href="/photos"
            className="font-semibold italic text-sky-600 underline"
          >
            Back to photos
          </Link>
        </div>

        <div className="mt-10 w-1/3">
          <Image
            alt=""
            src={photo.imageSrc}
            height={500}
            width={500}
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default PhotoPage;

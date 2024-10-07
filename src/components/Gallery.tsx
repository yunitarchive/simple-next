import { FC } from "react";

interface GalleryProps {
  cover: string;
  link: string;
}

interface GalleryContainerProps {
  items: GalleryProps[];
}

const Gallery: FC<GalleryContainerProps> = ({ items }) => {
  const half = Math.ceil(items.length / 2);
  const itemsFirst = items.slice(0, half);
  const itemsSecond = items.slice(half);

  return (
    <div className="space-y-6">
   
      <div className="w-full mx-1">
        <div className="flex space-x-5">
          {itemsFirst.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="snap-center flex-shrink-0"
            >
              <div className="bg-gray-400 w-[360px] rounded-lg h-[280px] p-9 flex items-center justify-center">
                <img src={item.cover} className="object-cover w-full h-full" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full  mx-1">
        <div className="flex space-x-5">
          {itemsSecond.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="snap-center flex-shrink-0"
            >
              <div className="bg-gray-400 w-[360px] rounded-lg h-[280px] p-9 flex items-center justify-center">
                <img src={item.cover} className="object-cover w-full h-full" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

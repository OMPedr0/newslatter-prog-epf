import Image, { StaticImageData } from 'next/image';

interface NewsletterCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const NewsletterCard = ({ title, description, image }: NewsletterCardProps) => {
  return (
    <div className="bg-gray-400 shadow-md rounded-md p-4">
      <Image src={image} alt={title} className="w-full h-auto object-cover rounded-md mb-2" />
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
    </div>
  );
};

export default NewsletterCard;

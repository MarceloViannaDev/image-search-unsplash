import { Card } from 'flowbite-react';

type DefaultCardProps = {
  imageUrl: string;
};

export const DefaultCard: React.FC<DefaultCardProps> = ({ imageUrl }) => {
  return (
    <Card className="max-w-sm" href="#">
      <img
        src={imageUrl}
        alt="Unsplash Image"
        width={334}
        height={223}
        className="rounded-xl"
      />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
        dolor, placeat sunt fugiat atque nemo debitis ullam quas totam alias
        nostrum maxime aut dignissimos cupiditate tenetur tempora error. Quidem,
        consequatur?
      </p>
    </Card>
  );
};

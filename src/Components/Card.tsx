// interface CardProps{
//     title: string
//     comments: number
//     time: Date
//     author: string
// }

const Card= () => {
  return (
    <div className="w-full border-2 p-5">
      <div className="flex flex-col">
        <h1 className="font-bold text-[1.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, enim?
        </h1>
        <div className="flex gap-2 text-[15px] opacity-70">
          <p>2 comments</p>
          <p>5 hours ago</p>
          <p>By Lorem, ipsum.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;




export default function ButtonBlue({text}: {text: string;}) {
  return (     
    <button className=" outline-none py-1 px-3 bg-blue-500 rounded-3xl text-white md:font-bold cursor-pointer hover:opacity-85 ">
        {text}
    </button>
  );
}

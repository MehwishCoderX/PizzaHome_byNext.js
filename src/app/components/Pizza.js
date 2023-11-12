import Image from "next/image";

const Pizza = ({pizza}) => {
 return(
  <div className="group py-2 rounded-x1  cursor-pointer">
    <div>
      {/* Pizza Image */}
  <Image
  className="mb-8 "
 src={pizza.image}
 width={270}
 height={270}

></Image>
</div>
{/* Pizza Name */}
<div className="text-xl font-bold mb-3 transition-all duration-300 uppercase" >{pizza.name}</div>
{/*  Pizza Discription*/}
<div> {pizza.description}</div>
{/*  pizza Price*/}
<div> starts at  {pizza.priceSm} $</div>
{/*  pizza Size "choosing Pizza"*/}
{/*  pizza Toppings "Choosing"*/}
<div><button > choose</button></div>

  </div>
 )
  
};

export default Pizza;

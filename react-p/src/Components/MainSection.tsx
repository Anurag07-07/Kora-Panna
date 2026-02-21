import car from '../assets/Poster McLaren 600LT supercar 3D Render with McLaren Logo _ Wall Art _ 3+1 FREE _ UKposters.jpg'

type McLarenCar = {
  name: string;
  priceUSD: number;
  engine: string;
  horsepower: number;
  topSpeedKmph: number;
  zeroToHundred: number; 
};

const mclarenCars: McLarenCar[] = [
  {
    name: "McLaren 720S",
    priceUSD: 310000,
    engine: "4.0L Twin-Turbo V8",
    horsepower: 710,
    topSpeedKmph: 341,
    zeroToHundred: 2.9,
  },
  {
    name: "McLaren 765LT",
    priceUSD: 382000,
    engine: "4.0L Twin-Turbo V8",
    horsepower: 755,
    topSpeedKmph: 330,
    zeroToHundred: 2.8,
  },
  {
    name: "McLaren P1",
    priceUSD: 1150000,
    engine: "3.8L Twin-Turbo V8 Hybrid",
    horsepower: 903,
    topSpeedKmph: 350,
    zeroToHundred: 2.8,
  },
  {
    name: "McLaren Artura",
    priceUSD: 240000,
    engine: "3.0L Twin-Turbo V6 Hybrid",
    horsepower: 671,
    topSpeedKmph: 330,
    zeroToHundred: 3.0,
  },
  {
    name: "McLaren Senna",
    priceUSD: 1000000,
    engine: "4.0L Twin-Turbo V8",
    horsepower: 789,
    topSpeedKmph: 335,
    zeroToHundred: 2.8,
  },
];


const MainSection = () => {
  return (
    <div className=' flex '>
       <div className=' bg-linear-to-t from-cyan-300 w-1/2 h-screen px-20 py-20'>
        <img className=' w-full h-full object-cover rounded-4xl  shadow-md   ' alt='maclaren' src={car}></img>
       </div> 
       <div className='w-1/2 flex justify-center flex-col px-5 bg-linear-to-t from-cyan-300 to-'>
        {
          mclarenCars.map(({name,priceUSD,topSpeedKmph})=>(
              <div key={56} className=' text-2xl font-bold  '>
                <div> Name {name}</div>
                <div> Price {priceUSD}</div>
                <div> Top speed {topSpeedKmph}km/h</div>
              </div>
          ))
        }
      </div> 
    </div>
  )
}

export default MainSection

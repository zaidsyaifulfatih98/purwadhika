export default function TailwindPage(){
    return(
        <>
        {/* Font Size */}
        <h1 className="text-xl">Intro TailWind</h1>
        <h1 className="text-3xl">Intro TailWind</h1>
        <h1 className="text-6xl">Intro TailWind</h1>
        <h1 className="text-[3em]">Intro TailWind Custom</h1>
        <h1 className="text-[42px]">Intro TailWind Custom</h1>

        {/* Background colour */}
        <div className="w-[100px] h-[100px] bg-purple-100">Box-01</div>
        <div className="w-[100px] h-[100px] bg-purple-200">Box-01</div>
        <div className="w-[100px] h-[100px] bg-purple-400">Box-01</div>
        <div className="w-[100px] h-[100px] bg-purple-800">Box-01</div>
        <div className="w-[100px] h-[100px] bg-purple-950">Box-01</div>
        <div className="w-[100px] h-[100px] bg-[#FFD400]">Box-01</div>
        <div className="w-[100px] h-[100px] bg-salmon">Box-01</div>

        {/* text */}
        <p className="text-red-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique atque optio debitis quas explicabo necessitatibus a voluptatem ipsa dolor enim, alias nobis ratione, esse doloribus pariatur? Impedit nobis optio laudantium?</p>
        <p className="text-red-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique atque optio debitis quas explicabo necessitatibus a voluptatem ipsa dolor enim, alias nobis ratione, esse doloribus pariatur? Impedit nobis optio laudantium?</p>
        <p className="text-red-900">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique atque optio debitis quas explicabo necessitatibus a voluptatem ipsa dolor enim, alias nobis ratione, esse doloribus pariatur? Impedit nobis optio laudantium?</p>
        
        {/* Grid */}
        <section className="grid grid-cols-5 grid-rows-4 bg-gray-100">
            <div className="bg-red-100">01</div>
            <div className="bg-red-200">02</div>
            <div className="bg-red-300 col-span-3">03</div>
            <div className="bg-red-400">04</div>
            <div className="bg-red-500 col-end-6 row-span-2" >05</div>
        </section>
        {/* Flexbox */}
        <section className="flex justify-center items-center">
            <div className="bg-red-100">01</div>
            <div className="bg-red-200">02</div>

        </section>
        {/* Responsive */}
        <h2 className="text-green-300 bg-black sm:text-yellow-300 md:text-gray-300 lg:text-blue-300">Purwadhika School</h2>


        

        </>
    )
}
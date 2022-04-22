import React from 'react';

const AboutUs = () =>{
    return(
        <div className='flex flex-col px-12 pt-4'>
            <span className='flex justify-center font-bold text-4xl'>SUPER LIGA</span>
            <div  className="text-justify leading-8 my-6 text-lg small:text-base smallest:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
               electronic typesetting, remaining essentially unchanged. It was popularised 
               in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
               , and more recently with desktop publishing software like Aldus PageMaker 
               including versions of Lorem Ipsum.
            </div>
        </div>
    );
}

export default AboutUs;
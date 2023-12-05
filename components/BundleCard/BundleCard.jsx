import Image from 'next/image'
import React from 'react'
import DeleteBundleButton from '../DeleteBundleButton/DeleteBundleButton'

async function BundleCard({cost, name, id, messages, time, imgUrl, admin, country}) {

    console.log(cost, name);

  return (
    <div className='flex items-center justify-between gap-10 flex-wrap w-full lg:w-auto border-2 rounded-lg p-7'>
        <div>
            <h1 className='text-2xl font-bold mb-3 inline-block text-lightBlue border-b border-lightBlue'>
                {name}:
            </h1>
            <div>
                <span className='font-bold'>
                الرسائل  المتاحة في هذه الباقة:
                </span>
                <span className='text-lightBlue font-bold mr-2'>
                    {messages}
                </span>
            </div>
            <div>
                <span className='font-bold'>
                الوقت المتاح لهذه الباقة:
                </span>
                <span className='text-lightBlue font-bold mr-2'>
                    {time} أيام
                </span>
            </div>
            <div>
                <span className='font-bold'>
                    سعر الباقة:
                </span>
                <span className='text-lightBlue font-bold mr-2'>
                    {cost} دولار
                </span>
            </div>
            {!admin && (
                <div>
                    <button className='text-white font-bold bg-lightBlue p-2 mt-3 rounded-lg cursor-pointer hover:opacity-70 outline-none'>
                        اشترك الان!
                    </button>
                </div>
            )}
            {admin && 
                <div>
                    <span className='font-bold'>
                        الدولة المتاحة فيها الباقة:
                    </span>
                    <span className='text-lightBlue font-bold mr-2'>
                        {country}
                    </span>
                    <div>
                        <DeleteBundleButton id={id}/>
                    </div>
                </div>
            
            }
            
        </div>
        <div>
            <Image src={imgUrl} width={100} height={100}/>
        </div>
    </div>
  )
}

export default BundleCard
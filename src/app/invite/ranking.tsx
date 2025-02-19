import MedalGold from '../../assets/Medal_gold.svg'
import MedalSilver from '../../assets/Medal_silver.svg'
import MedalCooper from '../../assets/Medal_cooper.svg'
import Image from 'next/image'

export function Ranking() {
    return (
        <div className='w-full max-w-[440px] space-y-5'>
            <h2 className='text-gray-200 text-xl font-heading leading-none'>
                Ranking de indicações
            </h2>
            <div className='space-y-4'>
                <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                    <span className='text-sm text-gray-300 leading-none'>
                        <span className='font-semibold'>1º</span> | Nome teste
                    </span>
                    <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                        1030
                    </span>
                    <Image src={MedalGold} alt="gold_medal" className='absolute top-0 right-8' />
                </div>
                <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                    <span className='text-sm text-gray-300 leading-none'>
                        <span className='font-semibold'>2º</span> | Nome teste
                    </span>
                    <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                        1030
                    </span>
                    <Image src={MedalSilver} alt="gold_medal" className='absolute top-0 right-8' />
                </div>
                <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                    <span className='text-sm text-gray-300 leading-none'>
                        <span className='font-semibold'>3º</span> | Nome teste
                    </span>
                    <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                        1030
                    </span>
                    <Image src={MedalCooper} alt="gold_medal" className='absolute top-0 right-8' />
                </div>
            </div>
        </div>
    )
}
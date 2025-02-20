import MedalGold from '../../../assets/Medal_gold.svg'
import MedalSilver from '../../../assets/Medal_silver.svg'
import MedalCooper from '../../../assets/Medal_cooper.svg'
import Image from 'next/image'
import { getRanking } from '@/http/api'

export async function Ranking() {
    const { ranking } = await getRanking()

    return (
        <div className='w-full max-w-[440px] space-y-5'>
            <h2 className='text-gray-200 text-xl font-heading leading-none'>
                Ranking de indicações
            </h2>
            <div className='space-y-4'>
                {ranking.map((item, index) => {
                    const rankingPosition = index + 1
                    return (
                        <div key={item.id} className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                            <span className='text-sm text-gray-300 leading-none'>
                                <span className='font-semibold'>{index + 1}º</span> | {item.name}
                            </span>
                            <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                                {item.score}
                            </span>
                            {rankingPosition === 1 && <Image src={MedalGold} alt="gold_medal" className='absolute top-0 right-8' />}
                            {rankingPosition === 2 && <Image src={MedalSilver} alt="silver_medal" className='absolute top-0 right-8' />}
                            {rankingPosition === 3 && <Image src={MedalCooper} alt="cooper_medal" className='absolute top-0 right-8' />}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export function Main() {
    return (
        <main className='flex-1 p-6'>  {/* flex-1 -> make size adjustable based on remaining space */}
            <div className='flex items-center gap-4'>
                <button className='rounded-full bg-black/40 p-1'>
                    <ChevronLeft />
                </button>
                <button className='rounded-full bg-black/40 p-1'>
                    <ChevronRight />
                </button>
            </div>

            <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

            <div className='grid grid-cols-3 gap-4 mt-4'>
                <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src='/album.jpg' width={104} height={104} alt='Capa do album' />
                    <strong>Ok Computer</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-white/10' />
                    </button>
                </a>
                <a href='#' className='bg-white/5 group  rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src='/album.jpg' width={104} height={104} alt='Capa do album' />
                    <strong>Ok Computer</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-white/10' />
                    </button>
                </a>
                <a href='#' className='bg-white/5 group  rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src='/album.jpg' width={104} height={104} alt='Capa do album' />
                    <strong>Ok Computer</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-white/10' />
                    </button>
                </a>
                <a href='#' className='bg-white/5 group  rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src='/album.jpg' width={104} height={104} alt='Capa do album' />
                    <strong>Ok Computer</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-white/10' />
                    </button>
                </a>
                <a href='#' className='bg-white/5 group  rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src='/album.jpg' width={104} height={104} alt='Capa do album' />
                    <strong>Ok Computer</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-white/10' />
                    </button>
                </a>
                <a href='#' className='bg-white/5 group  rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src='/album.jpg' width={104} height={104} alt='Capa do album' />
                    <strong>Ok Computer</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-white/10' />
                    </button>
                </a>
            </div>

            <h2 className='font-semibold text-2xl mt-10'>Made for You</h2>

            <div className='grid grid-cols-6 gap-4 mt-4'>
                <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album' />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Wallows, Green Day, COIN, Calipso, Bregatow</span>
                </a>
                <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album' />
                    <strong className='font-semibold'>Daily Mix 2</strong>
                    <span className='text-sm text-zinc-400'>Wallows, Green Day, COIN, Calipso, Bregatow</span>
                </a>
                <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album' />
                    <strong className='font-semibold'>Daily Mix 3</strong>
                    <span className='text-sm text-zinc-400'>Wallows, Green Day, COIN, Calipso, Bregatow</span>
                </a>
                <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album' />
                    <strong className='font-semibold'>Daily Mix 4</strong>
                    <span className='text-sm text-zinc-400'>Wallows, Green Day, COIN, Calipso, Bregatow</span>
                </a>
                <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                    <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album' />
                    <strong className='font-semibold'>Daily Mix 5</strong>
                    <span className='text-sm text-zinc-400'>Wallows, Green Day, COIN, Calipso, Bregatow</span>
                </a>
            </div>
        </main>
    )
}
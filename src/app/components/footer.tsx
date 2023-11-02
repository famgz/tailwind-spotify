import { Laptop2, LayoutList, Maximize2, Mic2Icon, Play, Repeat, ShuffleIcon, SkipBack, SkipForward, Volume } from 'lucide-react'
import Image from 'next/image'


export function Footer() {
    return (
        <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
            {/* Cover and title */}
            <div className='flex items-center gap-3'>
                <Image src='/album.jpg' width={56} height={56} alt='Capa do album' />
                <div className='flex flex-col'>
                    <strong className='font-normal'>Love Song</strong>
                    <span className='text-xs text-zinc-400'>Radiohead</span>
                </div>
            </div>

            {/* Progress buttons */}
            <div className='flex flex-col items-center gap-2'>
                {/* Control buttons */}
                <div className='flex items-center gap-6'>
                    <ShuffleIcon size={20} className='text-zinc-200' />
                    <SkipBack size={20} className='text-zinc-200' />
                    <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
                        <Play size={20} className='text-zinc-200' />
                    </button>
                    <SkipForward size={20} className='text-zinc-200' />
                    <Repeat size={20} className='text-zinc-200' />
                </div>
                {/* Slider */}
                <div className='flex items-center gap-2'>
                    <span className='text-xs text-zinc-400'>0:31</span>
                    <div className='h-1 rounded-full w-96 bg-zinc-600'>
                        <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
                    </div>
                    <span className='text-xs text-zinc-400'>2:45</span>
                </div>
            </div>

            {/* Output Buttons */}
            <div className='flex items-center gap-4'>
                <Mic2Icon size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className='flex items-center gap-2'>
                    <Volume size={20} />
                    <div className='h-1 rounded-full w-24 bg-zinc-600'>
                        <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
                    </div>
                </div>
                <Maximize2 size={20} />

            </div>
        </footer>
    )
}

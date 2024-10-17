import Header from '@/components/Header';
import { Playfair_Display } from '@next/font/google';
import { Nanum_Gothic } from '@next/font/google';


const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-playfair-display',
});

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-nanum'
})

export const metadata = {
  title: "Loan Tracker",
  description: "Calculate Loan and More",
};

export default function Home() {
  return (
    <main className={`${playfairDisplay.variable} ${nanumGothic.variable} w-full overflow-visible`}>
      <Header title="Loan Tracker" />
      <div className='max-w-full border border-black h-[35%] rounded-3xl mx-8'>
        
      </div>

      <div className='md:flex md:flex-row flex-col flex justify-center items-center h-[40%] m-8 gap-8'>
        <div className='md:w-1/2 w-full border border-black h-full rounded-3xl'>

        </div>

        <div className='md:w-1/2 w-full border border-black h-full rounded-3xl'>

        </div>
      </div>
    </main>
  );
}


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



export default function Home() {
  return (
    <main className={`${playfairDisplay.variable} ${nanumGothic.variable} w-full`}>
      <Header title="Accounty" />
    </main>
  );
}

// css
import './globals.css';
// import next fonts
import{ Bangers, Quicksand, Roboto_Condensed} from 'next/font/google'
const bangers=Bangers({

  subsets:['latin'],
  variable:['--font-bangers'],
  weight:['400'],

});
const quicksand=Quicksand({

  subsets:['latin'],
  variable:['--font-quicksand'],
  // weight:['400'],

});
const robotoCondensed=Roboto_Condensed({

  subsets:['latin'],
  variable:['--font-robotoCondensed'],
  weight:['400'],

});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-robotoCondensed`}>{children}</body>
    </html>
  );
}

import dna from '../assets/dna.png';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className='container mx-auto'>
      {/* Header Section */}
      <header className='w-full bg-gradient-to-r from-[#A8DADC] to-[#457B9D] p-4 flex justify-between items-center'>
        <div className='logo'>
          <img src={dna} alt='Monadic DNA' className='h-10' />
        </div>
        <nav className='flex items-center space-x-4'>
          <a href='#home' className='text-white'>
            Home
          </a>
          <a href='#about' className='text-white'>
            About
          </a>
          <a href='#services' className='text-white'>
            Services
          </a>
          <a href='#contact' className='text-white'>
            Contact
          </a>
          <button className='bg-[#FF6F61] text-white py-2 px-4 rounded'>
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='text-center py-20 bg-gray-100'>
        <div className='max-w-4xl mx-auto'>
          <img src='' alt='DNA Lock' className='w-full h-auto mb-8' />
          <h1 className='text-4xl font-bold mb-4'>
            Your Genomic Insights, Your Privacy, Our Mission.
          </h1>
          <p className='text-lg mb-8'>
            Discover health and ancestry insights while keeping your data
            secure.
          </p>
          <div>
            <Link
              to='/create'
              className='bg-[#FF6F61] text-white py-2 px-4 rounded mr-4'
            >
              Upload Your DNA
            </Link>
            <button className='bg-[#FAD02E] text-black py-2 px-4 rounded'>
              View Result
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div>
            <div className='text-6xl mb-4'>🔒</div>
            <h2 className='text-xl font-bold mb-2'>Privacy at the Core</h2>
            <p>Your data is encrypted and secure.</p>
          </div>
          <div>
            <div className='text-6xl mb-4'>🛡️</div>
            <h2 className='text-xl font-bold mb-2'>Zero-Knowledge Computing</h2>
            <p>We never see your data.</p>
          </div>
          <div>
            <div className='text-6xl mb-4'>✔️</div>
            <h2 className='text-xl font-bold mb-2'>Verified Insights</h2>
            <p>Trustworthy and accurate results.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='py-20 bg-[#FFE8A1]'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-8'>How It Works</h2>
          <div className='space-y-8'>
            <div className='flex items-center hover:scale-105 transition-transform'>
              <div className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4'>
                1
              </div>
              <div className='flex items-center'>
                <div className='text-4xl mr-4'>☁️</div>
                <p>Upload your raw DNA file.</p>
              </div>
            </div>
            <div className='flex items-center hover:scale-105 transition-transform'>
              <div className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4'>
                2
              </div>
              <div className='flex items-center'>
                <div className='text-4xl mr-4'>🔍</div>
                <p>Receive your encrypted DNA Passport.</p>
              </div>
            </div>
            <div className='flex items-center hover:scale-105 transition-transform'>
              <div className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4'>
                3
              </div>
              <div className='flex items-center'>
                <div className='text-4xl mr-4'>✔️</div>
                <p>
                  Use tools like SnipperBot and mtDog to analyze traits
                  privately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Privacy Challenge Section */}
      <section className='py-20 bg-[#F1FAEE]'>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='text-center md:text-left'>
            <div className='text-6xl mb-4'>🔒</div>
            <h2 className='text-3xl font-bold mb-4'>
              The Current Privacy Challenge
            </h2>
            <p className='text-lg'>
              Understanding the risks associated with genomic data privacy is
              crucial. Current systems often leave your sensitive information
              vulnerable to breaches and misuse.
            </p>
          </div>
          <div className='flex justify-center'>
            <img
              src='path/to/dna-broken-chain-animation.gif'
              alt='DNA Privacy Risk'
              className='w-full h-auto'
            />
          </div>
        </div>
      </section>

      {/* Our Privacy-Protecting Alternative Section */}
      <section className='py-20 bg-[#A8DADC]'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>
            Our Privacy-Protecting Alternative
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105'>
              <div className='text-6xl mb-4'>🔒</div>
              <h3 className='text-xl font-bold mb-2'>Secure Data Handling</h3>
              <p>
                Your data is encrypted and handled with the utmost security.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105'>
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-xl font-bold mb-2'>Anonymous Insights</h3>
              <p>Gain insights without revealing your identity.</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105'>
              <div className='text-6xl mb-4'>🏅</div>
              <h3 className='text-xl font-bold mb-2'>Verified Results</h3>
              <p>Trustworthy and accurate results you can rely on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Monadic DNA Section */}
      <section className='py-20 bg-[#FF6F61] text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>Why Choose Monadic DNA</h2>
          <div className='relative flex justify-center items-center'>
            <div className='absolute w-full h-full bg-dna-pattern opacity-10'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='relative p-6 rounded-full bg-white text-black transform transition-transform hover:scale-110'>
                <div className='text-6xl mb-4'>🔒</div>
                <h3 className='text-xl font-bold mb-2'>Privacy</h3>
                <p className='hidden group-hover:block'>
                  Your data is encrypted and secure.
                </p>
              </div>
              <div className='relative p-6 rounded-full bg-white text-black transform transition-transform hover:scale-110'>
                <div className='text-6xl mb-4'>🔍</div>
                <h3 className='text-xl font-bold mb-2'>Anonymous Insights</h3>
                <p className='hidden group-hover:block'>
                  Gain insights without revealing your identity.
                </p>
              </div>
              <div className='relative p-6 rounded-full bg-white text-black transform transition-transform hover:scale-110'>
                <div className='text-6xl mb-4'>✔️</div>
                <h3 className='text-xl font-bold mb-2'>Trusted Results</h3>
                <p className='hidden group-hover:block'>
                  Trustworthy and accurate results you can rely on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className='bg-gray-800 text-white py-4'>
        <div className='container mx-auto text-center'>
          <p>&copy; 2023 Monadic DNA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import Profile from '@/public/profile.jpg';
import Image from 'next/image';
import info from '@/public/info.json'
import Head from 'next/head';
import MasonryLayout from '@/components/GridLayout';

export default function Home() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch('/api/works')
      .then((res) => res.json())
      .then((data) => setWorks(data.images));
  }, []);

  return (
    <main className="min-h-screen px-5 py-12 md:p-14 duration-200">
      <Head>
        <title>{info.name}</title>
        <link rel="icon" type="image/x-icon" href="/profile.jpg"></link>
      </Head>
      {/* <Profile profile={profile} /> */}
      <header className='flex items-center gap-2 w-full'>
        <Image src={Profile} alt="profile" width={150} height={150} className="size-8 rounded-full"/>
        <h1 className='text-lg font-medium'>{info.name}</h1>
      </header>
      <div className="mt-5 flex items-center gap-2">
        <div className="rounded-full size-2 bg-green-400"></div>
        <p className='text-xs'>Available for hire</p>
      </div>
      <div className='mt-5 max-w-lg'>{info.bio}</div>
      <div className="mt-12 mb-8">***</div>
      <div>
        <h2 className='text-lg font-medium mb-3'>Fine me:</h2>
        {
          info.contacts.map(contact => (
            <div key={contact.name}>
              <a href={contact.link} className='text-base hover:underline'>{contact.name}</a>
            </div>
          ))
        }
      </div>
      <div className="mt-12 mb-3">***</div>
      <div className="flex items-center gap-5">
        <a href={info.cv} className='block flex items-center gap-1 text-sm'>
          <p>download cv</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
          </svg>
        </a>
        <a href={`mailto:${info.email}`} className='block flex items-center gap-1 text-sm'>
          <p>email me</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

      <h2 className="text-lg font-medium mt-12 mb-8">Works</h2>
      <MasonryLayout>
        {works.map((work, index) => (
          <div key={index} className="mb-5 rounded">
            <img src={work.src} alt={work.name}className='w-full' />
          </div>
        ))}
      </MasonryLayout>
    </main>
  );
}

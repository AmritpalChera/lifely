'use client';
import clsx from 'clsx'
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'


function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
        />
      </svg>
    )
  }

  
const NewsletterForm = ({isDark}: {isDark?: boolean}) => {
  const [subed, setSubed] = useState(false);
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };



  const handelFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ;
    
    await fetch('/api/subscribeUser', { method: 'POST', body: JSON.stringify({email: formData.email})}).then(res => {
      localStorage.setItem('lifely_newsletter_subscribed', 'true');
      setFormData({email: ''});
      setSubed(true);
    })
  }

  useEffect(() => {
    const isSubscribed = localStorage.getItem('lifely_newsletter_subscribed');
    if (isSubscribed) setSubed(true);
  }, [])


  return (
    <form onSubmit={handelFormSubmit} className="flex justify-between w-full">
      <div className='w-full max-w-sm'>
          <h2 className={clsx("font-display text-sm font-semibold tracking-wider", isDark ? "text-white" : "text-neutral-950")}>
          Sign up for our newsletter
          </h2>
          <p className={clsx("mt-4 text-sm", isDark ? 'text-gray-300': 'text-neutral-700')}>
          Subscribe to get the latest design news, articles, resources and
          inspiration.
          </p>
      </div>

      {subed && <div className={clsx('relative mt-6 w-full max-w-sm')}>
        <div className='bg-gray-200 flex justify-center items-center gap-2 rounded-xl text-center max-w-sm py-2 font-semibold'>
          Subscribed
          <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="checkmark"><g><g><path d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z"></path><path d="M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z"></path></g></g></svg>
        </div>
      </div>}
      
      {!subed && <div className="relative mt-6 w-full max-w-sm">
        <input
          type="email"
          name='email'
          placeholder={subed ? "Thank you for subscribing" : "Email address"}
          autoComplete="email"
          disabled={subed}
          aria-label="Email address"
          onChange={handleChange}
          required
          value={formData.email}
          className={clsx("block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:outline-none", isDark ? "text-gray-200 focus:border-neutral-500 focus:ring-neutral-600" : 'text-neutral-950   focus:border-neutral-950  focus:ring-neutral-950/5')}
        />
        <div className="absolute top-1 right-1 flex items-center justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className={clsx("flex aspect-square h-12 w-full items-center justify-center rounded-xl bg-neutral-950 text-white transition ", isDark ? 'hover:bg-neutral-500' : 'hover:bg-neutral-800') }
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>}
    </form>
  )
}

export default NewsletterForm
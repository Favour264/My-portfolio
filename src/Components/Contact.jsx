import React from 'react'
import '../App.css'


const Contact = () => {
  return (
    <div>
                       <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <div class="bg-transparent">
      <header class="bg-transparent text-white text-center py-12">
        <h1 class="text-4xl font-bold mt-16 text-sky-500">Contact Us</h1>
      </header>
      <section class="text-center py-12 px-4">
        <h2 class="text-2xl font-bold text-sky-500">Get In Touch</h2>
        <p class="mt-4 text-white max-w-2xl mx-auto">We are here to help you. Reach out to us via any of the following methods.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div class="p-4 shadow-lg rounded-lg bg-transparent  transition-colors">
            <h3 class="text-xl font-bold text-sky-500">Call Us</h3>
            <p class="text-white mt-2">+1 123 456 7890</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-transparent  transition-colors">
            <h3 class="text-xl font-bold text-sky-500">Email Us</h3>
            <p class="text-white mt-2">contact@wisedoctors.com</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-transparent  transition-colors">
            <h3 class="text-xl font-bold text-sky-500">Visit Us</h3>
            <p class="text-white mt-2">123 Health St, Wellness City</p>
          </div>
        </div>
      </section>
      <section class="bg-transparent py-12 px-4">
        <h2 class="text-2xl font-bold text-center text-sky-500">Send Us A Message</h2>
        <form class="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label htmlFor="name" class="block text-gray-700 font-bold">Name</label>
            <input type="text" id="name" class="w-full mt-2 p-3 border  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
          </div>
          <div>
            <label htmlFor="email" class="block text-gray-700 font-bold">Email</label>
            <input type="email" id="email" class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
          </div>
          <div>
            <label htmlFor="message" class="block text-gray-700 font-bold">Message</label>
            <textarea id="message" rows="5" class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"></textarea>
          </div>
          <button type="submit" class="w-full bg-green-700 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors">Send Message</button>
        </form>
      </section>
    </div>
    </div>
    </div>
  )
}

export default Contact

import React from 'react'
import '../App.css'

const Footer = () => {
  return (
    <div>

      <footer class="bg-animated cyber-grid relative overflow-hidden">
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center md:text-left">
                    <h3 class="text-2xl font-bold text-white neon-text mb-4">FAVVY</h3>
                    <p class="text-cyan-300">Connecting the digital realm</p>
                </div>
                <div class="text-center">
                    <h4 class="text-xl font-bold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">Home</a></li>
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">Services</a></li>
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">About</a></li>
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>
                <div class="text-center md:text-right">
                    <h4 class="text-xl font-bold text-white ">Stay Connected</h4>
                    <div class="flex justify-center md:justify-end space-x-4">
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-facebook-f text-2xl"></i></a>
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-twitter text-2xl"></i></a>
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-instagram text-2xl"></i></a>
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-linkedin-in text-2xl"></i></a>
                    </div>
                </div>
            </div>
            <div class="mt-8  border-t border-cyan-800">
                <p class="text-center text-cyan-300">&copy; 2024 CYBERLINK. All rights reserved.</p>
            </div>
        </div>
        <div class="absolute inset-0 pointer-events-none neon-border"></div>
    </footer>
    </div>

  )
}

export default Footer

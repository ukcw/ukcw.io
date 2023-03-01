import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-20 px-10 pt-48 pb-16 border-t border-gray-200">
      <div className="relative mx-10vw">
        <div className="relative mx-auto max-w-3xl lg:max-w-7xl">
          <div className="font-medium text-2xl text-primary">Ulysses Kee</div>
          <p className="max-w-md mt-6 text-2xl text-secondary">
            Software engineer interested in making the world a better place
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://github.com/ukcw">
              <FaGithub className="h-6 w-6 text-primary" />
            </a>
            <a href="https://twitter.com/ukcw_">
              <FaTwitter className="h-6 w-6 text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/ulysses-kee/">
              <FaLinkedin className="h-6 w-6 text-primary" />
            </a>
          </div>
          <div className="lg:flex lg:gap-2 mt-24 text-lg lg:mt-44 text-secondary">
            <span>All rights reserved</span>
            <span className="block lg:inline">© Ulysses Kee 2023</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

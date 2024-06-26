import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon } from "./Icons";
import Logo from "./Logo";


const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  console.log(router)

  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href="/" title="Home" className="mr-4"/>
            <CustomLink href="/about" title="About" className="mx-4"/>
            <CustomLink href="/projects" title="Projects" className="mx-4"/>
            <CustomLink href="/articles" title="Articles" className="ml-4"/>
        </nav>
        <nav className ="flex items-center justify-center flex-wrap">
            <motion.a href="https://github.com/Awonnie" target={"_blank"}
            className="w-10 mr-5"
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}>
              <GithubIcon/>
            </motion.a>

            <motion.a href="https://www.linkedin.com/in/angie-wong-mei-chi/" target={"_blank"}
            className="w-10 mr-5"
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}>
              <LinkedInIcon/>
            </motion.a>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
        </div>
    </header>
  )
}

export default NavBar
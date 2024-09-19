'use client'

// import Link, {LinkProps} from "next/link"
import React, { ReactNode } from "react"
// import { useRouter } from "next/navigation"
import {Link, useNavigate} from 'react-router-dom'



function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const TransitionLink = ({children, href, className, ...props}) => {

    const navigate = useNavigate()

    const handleTransition = async (e) => {
        e.preventDefault();

        //run animation
        const body = document.querySelector("body")
        body?.classList.add("page-transition")
        //sleep for some time
        await sleep(500);

        navigate(href);
        await sleep(500);
        body?.classList.remove("page-transition")
    }

  return (
    <Link onClick={e => handleTransition(e)} className={className} to={href} {...props}>
        {children}
    </Link>
  )
}

export default TransitionLink
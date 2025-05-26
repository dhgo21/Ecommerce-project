import React, { useState } from 'react'
import "./About.css"
import { Link } from 'react-router-dom';
import Fotter from "../components/Fotter"
function About() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  }

  const data = [
    {
      title: "About Swift Mart",
      desc: "Swift Mart is your one-stop destination for latest trendy gadgets and electronics. We believe in providing quality products with seamless online shopping experience."
    },
    {
      title: "Our Mission",
      desc: "Our mission is to make technology accessible and affordable for everyone. We are committed to delivering innovative products with exceptional customer service."
    },
    {
      title: "Our Vision",
      desc: "To become the most loved and trusted e-commerce brand for gadgets and electronics."
    },
    {
      title: "Why Choose Us",
      desc: "At Swift Mart, we offer a wide range of products with secure payments and fast shipping. Our 24/7 customer support ensures a smooth and reliable shopping experience."
    },
    {
      title: "Contact Us",
      desc:
      <>
        For any queries, suggestions, or support, feel free to reach out to us at this <a href="https://forms.gle/jdKt75N1EBRGHPW3A" target="_blank">form</a>.
    </>
    }
  ]

  return (
    <>
    <div className="about">
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className={`panel ${open === index ? 'active' : ''}`}>
            <div className="summary" onClick={() => toggle(index)}>
              {item.title}
            </div>
            <div className="content">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Fotter />
    </>
  )
}

export default About

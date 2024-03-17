import './App.css'


function App() {

  const list = ["Menu", "Location", "About", "Contact"]
  const navList = list.map((navIteam) => {
    return <li key={navIteam}>{navIteam}</li>
  })

  return (
    <>
      <nav>
        <img src="/public/brand_logo.png" alt="" />
        <ul>{navList}</ul>
        <button>Login</button>
      </nav>
      <main>
        <div className="title">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="hero-btn">
            <div className='align'>
              <button className="1">Shope Now</button>
              <button className="2">Category</button>
            </div>
            <div className="social-logo">
              <p>Also Availiable On
              </p>
              <div>
                <img src="/public/amazon.png" alt="" />
                <img src="/public/flipkart.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src="/public/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  )
}

export default App

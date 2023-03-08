import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/976919.jpg?k=b4d2dd3f87340b547a0e1aa9fc7e89b47ebe9539086c7f5f4e637e5e2137be7c&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Orlando</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/349720.jpg?k=b7eca2cb90afd858f294732b0d5c194af47e70386b5be99373e3ff03be95c515&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Las Vegas</h1>
            <h2>523 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/976784.jpg?k=717a6a83ea61edb06017bb8c9bd3d36511ec0e1aef59ac94235584d4fd1709cb&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>New York</h1>
            <h2>123 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured

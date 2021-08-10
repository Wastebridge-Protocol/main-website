const Footer = () => {
  return (
    <section id='footer'>
			<div className='inner'>
				<h2 className='major'>Social Media</h2>
				<p>Follow us on our Social Media profiles for future updates of the Project.</p>
				<ul className='contact'>
					<li className='icon solid fa-envelope'><a href='#'>info@wastebridge.org</a></li>
					<li className='icon brands fa-twitter'><a href='https://twitter.com/wastebridge'>twitter.com/wastebridge</a></li>
					{/* <li className='icon brands fa-facebook-f'><a href='#'>facebook.com/untitled-tld</a></li> */}
					{/* <li className='icon brands fa-instagram'><a href='#'>instagram.com/untitled-tld</a></li> */}
				</ul>
				<ul className='copyright'>
					<li>&copy; WasteBridge Protocol. All rights reserved.</li>
				</ul>
			</div>
		</section>
  )
}

export default Footer

import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Camera from '@material-ui/icons/Camera'
import Palette from '@material-ui/icons/Palette'
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import Button from '../components/CustomButtons/Button.js'
import GridContainer from '../components/Grid/GridContainer.js'
import GridItem from '../components/Grid/GridItem.js'
import HeaderLinks from '../components/Header/HeaderLinks.js'
import NavPills from '../components/NavPills/NavPills.js'
import Parallax from '../components/Parallax/Parallax.js'

import styles from '../styles/jss/nextjs-material-kit/pages/profilePage.js'

const useStyles = makeStyles(styles)

export default function AboutPage(props) {
	const classes = useStyles()
	const { ...rest } = props
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	)
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
	return (
		<div>
			<Parallax small filter image="/img/bg1.jpg" />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div>
					<div className={classes.container}>
						<h2 className={classes.title}>About Us</h2>
						<div className={classes.description}>
							{/* <h3>VISION & MISSION</h3> */}
							<p>
								The VBC Construction Mission is To provide customer satisfaction
								and create value for stakeholders through professionalism,
								transparency, quality, cutting-edge technology and social
								responsibility. The VBC Construction Mission. Driven by
								incredibleness. To be a main development organization in the
								worldwide business sector. To wind up the clients most favored
								decision by accomplishing magnificence in quality and convenient
								finished worth included undertakings.To consistently improve,
								create and receive best in class innovation in techniques and
								materials to upgrade profitability and cost adequacy. To
								constantly enhance the fitness of our kin and do right by them
								to work at VBC Construction. To manufacture a wellbeing society
								went for consistently decreasing the recurrence seriousness rate
								towards accomplishing zero mishaps. To recognize and moderate
								all the natural effects emerging from our exercises and follow
								relevant ecological standards
							</p>
							<h3>Our Vision</h3>
							<p>
								To be a trusted pioneer in the land part contributing towards
								dynamic India.
							</p>

							<h3>Our Mission</h3>
							<p>
								To give consumer loyalty and make esteem for partners through
								demonstrable skill and social obligation.
							</p>

							<h3>Our Team</h3>
							<p>
								Vijay Chauhan co-founded VBC GROUP in 2009, and is managing
								Director and principle architect at VBC Architects &
								Construction, where he takes on the design and supervision of
								substantive, high- end, and experimental projects. For Chauhan
								design is intuitive, yet based on a commitment to quality and
								solid research, these are the characteristic he foster in VBC
								Architects & Construction methodology. The resulting projects
								speak for themselves. VBC ARCHITECTS & CONSTRUCTION is provide
								customer satisfaction and create value for stakeholders through
								professionalism, transparency, quality, cutting-edge technology
								and social responsibility. VBC ARCHITECTS & Constructions is one
								of the most experienced and respected building and civil
								construction firm.We are a private company that specializes in
								conceiving modern, high- caliber solutions for architectural
								design and urban planning projects. From the VBC office in
								Faridabad, we service the Delhi NCR area in progressive
								architectural design and supervision. Our team of architects has
								successfully developed functional and meaningful projects in
								Delhi NCR. We have positioned ourselves as the choice for those
								who value quality, creativity, and distinction. The VBC
								Construction and supervision procedure is based in rigorous
								research and experimentation. We work hand- in-hand with our
								clients on design strategy, and involve them all there processes
								of development.
							</p>
							<p>
								Vijay Chauhan co-founded VBC PROJECTS PVT. LTD. in 2016, and is
								managing DIRECTOR and CEO at VBC PROJECTS, where he takes on the
								design and supervision of substantive, high- end, and
								experimental projects. For CHAUHAN design is intuitive, yet
								based on a commitment to quality and solid research, these are
								the characteristic he foster in VBC PROJECTS methodology. The
								resulting projects speak for themselves.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

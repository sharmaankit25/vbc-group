import React from 'react'
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import { Business, House, People, Check } from '@material-ui/icons'

// core components
import GridContainer from '../../components/Grid/GridContainer.js'
import GridItem from '../../components/Grid/GridItem.js'
import InfoArea from '../../components/InfoArea/InfoArea.js'

import styles from '../../styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js'

const useStyles = makeStyles(styles)

export default function ProductSection() {
	const classes = useStyles()
	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={10}>
					<h2 className={classes.title}>What we do</h2>
					<p className={classes.description}>
						The VBC Construction Mission is To provide customer satisfaction and
						create value for stakeholders through professionalism, transparency,
						quality, cutting-edge technology and social responsibility. The VBC
						Construction Mission. Driven by incredibleness. To be a main
						development organization in the worldwide business sector. To wind
						up the clients most favored decision by accomplishing magnificence
						in quality and convenient finished worth included undertakings.To
						consistently improve, create and receive best in class innovation in
						techniques and materials to upgrade profitability and cost adequacy.
						To constantly enhance the fitness of our kin and do right by them to
						work at VBC Construction. To manufacture a wellbeing society went
						for consistently decreasing the recurrence seriousness rate towards
						accomplishing zero mishaps. To recognize and moderate all the
						natural effects emerging from our exercises and follow relevant
						ecological standards
					</p>
					<Link href="/about">
              <a className={classes.navLink}>Read more..</a>
        </Link>
				</GridItem>
			</GridContainer>
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={3}>
						<InfoArea
							title="Interior Design"
							description=""
							icon={Check}
							iconColor="info"
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={3}>
						<InfoArea
							title="Architects"
							description=""
							icon={Business}
							iconColor="success"
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={3}>
						<InfoArea
							title="Construction"
							description=""
							icon={People}
							iconColor="danger"
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={3}>
						<InfoArea
							title="Real Estate"
							description=""
							icon={House}
							iconColor="danger"
							vertical
						/>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	)
}

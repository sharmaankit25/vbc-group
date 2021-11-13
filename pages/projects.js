import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import Camera from '@material-ui/icons/Camera'
import Palette from '@material-ui/icons/Palette'
import Favorite from '@material-ui/icons/Favorite'
import Close from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
// core components
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import Button from '../components/CustomButtons/Button.js'
import GridContainer from '../components/Grid/GridContainer.js'
import GridItem from '../components/Grid/GridItem.js'
import HeaderLinks from '../components/Header/HeaderLinks.js'
import NavPills from '../components/NavPills/NavPills.js'
import Parallax from '../components/Parallax/Parallax.js'

import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

import styles from '../styles/jss/nextjs-material-kit/pages/profilePage.js'

const useStyles = makeStyles(styles)

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />
})

Transition.displayName = 'Transition'

export default function ProjectsPage(props) {
	const classes = useStyles()
	const { ...rest } = props
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	)
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)

	const [classicModal, setClassicModal] = React.useState(false)
  const [modalImageUrl, setModalImageUrl] = React.useState("")

  const toggleImageModal = (status, imageUrl="") => {
    setClassicModal(status)
    setModalImageUrl(imageUrl)
  }

	return (
		<div>
			<Parallax small filter image="/img/landing-bg.jpg" />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<h2 className={classes.title}>Projects</h2>
					<div className={classes.description}>
						<p>Check out some of our projects we have worked upon in our portfolio below.</p>
					</div>

					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/1.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/1.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/2.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/2.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/3.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/3.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/4.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/4.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/5.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/5.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/6.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/6.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/7.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/7.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/8.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/8.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/9.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/9.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/10.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/10.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/11.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/11.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/12.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/12.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/13.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/13.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/14.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/14.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/15.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/15.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/16.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/16.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/17.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/17.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/18.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/18.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/19.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/19.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/20.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/20.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/21.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/21.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/22.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/22.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/23.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/23.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/24.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/24.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/25.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/25.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/26.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/26.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/27.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/27.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/28.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/28.jpg")}
							/>
						</GridItem>

						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/29.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/29.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/30.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/30.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/31.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/31.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/32.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/32.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/33.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/33.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/34.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/34.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/35.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/35.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/36.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/36.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/37.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/37.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/38.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/38.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/39.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/39.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/40.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/40.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/41.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/41.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/42.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/42.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/43.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/43.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/44.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/44.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/45.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/45.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/46.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/46.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/47.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/47.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/48.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/48.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/49.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/49.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/50.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/50.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/51.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/51.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/52.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/52.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/53.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/53.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/54.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/54.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/55.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/55.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/56.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/56.jpg")}
							/>
						</GridItem>

						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/57.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/57.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/58.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/58.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/59.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/59.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/60.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/60.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/61.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/61.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/62.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/62.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/63.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/63.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/64.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/64.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/65.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/65.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/66.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/66.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/67.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/67.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/68.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/68.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/69.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/69.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/70.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/70.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/71.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/71.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/72.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/72.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/73.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/73.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/74.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/74.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/75.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/75.jpg")}
							/>
						</GridItem>

						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/76.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/76.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/77.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/77.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/78.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/78.jpg")}
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			<Dialog
				classes={{
					root: classes.center,
					paper: classes.modal,
				}}
				open={classicModal}
				TransitionComponent={Transition}
				fullScreen
				keepMounted
				onClose={() => toggleImageModal(false)}
				aria-labelledby="classic-modal-slide-title"
				aria-describedby="classic-modal-slide-description"
			>
				<DialogTitle
					id="classic-modal-slide-title"
					disableTypography
					className={classes.modalHeader}
				>
					<IconButton
						className={classes.modalCloseButton}
						key="close"
						aria-label="Close"
						color="inherit"
						onClick={() => toggleImageModal(false)}
					>
						<Close className={classes.modalClose} />
					</IconButton>
					{/* <h4 className={classes.modalTitle}>Modal title</h4> */}
				</DialogTitle>
				<DialogContent
					id="classic-modal-slide-description"
					className={classes.modalBody}
				>
					{/* <p>
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts. Separated they
						live in Bookmarksgrove right at the coast of the Semantics, a large
						language ocean. A small river named Duden flows by their place and
						supplies it with the necessary regelialia. It is a paradisematic
						country, in which roasted parts of sentences fly into your mouth.
						Even the all-powerful Pointing has no control about the blind texts
						it is an almost unorthographic life One day however a small line of
						blind text by the name of Lorem Ipsum decided to leave for the far
						World of Grammar.
					</p> */}
          <img
									alt="..."
									src={modalImageUrl}

								/>
				</DialogContent>
				<DialogActions className={classes.modalFooter}>
					{/* <Button color="transparent" simple>
						Nice Button
					</Button> */}
					<Button onClick={() => setClassicModal(false)} color="danger" simple>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

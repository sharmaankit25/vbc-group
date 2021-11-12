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
			<Parallax small filter image="/img/bg1.jpg" />
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
								src="/img/portfolio/studio-1.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/studio-1.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/studio-2.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/studio-2.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/studio-5.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/studio-5.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/studio-4.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/studio-4.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/olu-eletu.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/olu-eletu.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/clem-onojeghuo.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/clem-onojeghuo.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/cynthia-del-rio.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/cynthia-del-rio.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/mariya-georgieva.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/mariya-georgieva.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/clem-onojegaw.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/clem-onojegaw.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/mariya-georgieva.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/mariya-georgieva.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/studio-3.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/studio-3.jpg")}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<img
								alt="..."
								src="/img/portfolio/clem-onojeghuo.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/clem-onojeghuo.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/olu-eletu.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/olu-eletu.jpg")}
							/>
							<img
								alt="..."
								src="/img/portfolio/studio-1.jpg"
								className={navImageClasses}
								onClick={() => toggleImageModal(true, "/img/portfolio/studio-1.jpg")}
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

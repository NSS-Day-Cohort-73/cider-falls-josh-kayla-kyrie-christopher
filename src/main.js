/* import buildGuestsHTML() from parkGuestsHTML.js
    buildAreasHTML() from parkAreasHTML.js
    buildServicesHTML() from parkServicesHTML.js */

import { buildGuestsHTML } from './parkGuestsHTML.js'
import { buildAreasHTML } from './parkAreasHTML.js'
import { parkServices } from './parkServicesHTML.js'

// Invoke buildGuestsHTML() and storing the value
const guestsHTMLString = buildGuestsHTML()

// Invoke buildAreasHTML() and storing the value
const areasHTMLString = buildAreasHTML()

// Invoke buildServicesHTML() and storing the value
const servicesHTMLString = parkServices()

// Build HTML structure
const fullHTMLString = `
	<h2 id="park-header">
		<div id="logo"><img src="./imgs/logo.png" width="300"></div>
		<div id="park-name">Cider Falls<div>
	</h2>
	<main id="mainflex">
		<div class="flexleft">
			<article id="services">
				<h4>Services</h4>
				<section class="service">
                    ${servicesHTMLString}
				</section>
			</article>
			<article id="areas">
                ${areasHTMLString}
			</article>
		</div>
		<div class="flexright">
			<article id="guests">
				<h4>Guests</h4>
                ${guestsHTMLString}
			</article>
		</div>
	</main>
	<foot>
		<h4 id="info-list">Phone Number ·  E-mail ·  Street Address</h4>
	</foot>
`

// Get DOM container
const container = document.querySelector('.container')

// Render HTML to the DOM
container.innerHTML = fullHTMLString

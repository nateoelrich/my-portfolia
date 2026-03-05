<script lang="ts">
	import { studioInfo } from '$lib/data/studio';
	import SEO from '$lib/components/SEO.svelte';
	import { fade, fly } from 'svelte/transition';
	import { intersectionObserver } from '$lib/actions/intersectionObserver';

	let missionVisible = $state(false);
	let ratesVisible = $state(false);
	let equipmentVisible = $state(false);
	let galleryVisible = $state(false);
	let contactVisible = $state(false);
</script>

<SEO 
	title="Fat Unc Studios | Recording Studio"
	description="A recording space socially progressive, LGBTQ+, and creatively nonconforming artists who refuse to be silenced. Professional recording at $40/hr for bands, $20/hr for solo artists."
/>

<div class="studio-page">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-content">
			<div class="hero-badge">EST. 2026</div>
			<h1 class="hero-title">
				<span class="title-fat">FAT UNC</span>
				<span class="title-studios">STUDIOS</span>
			</h1>
			<p class="hero-tagline">{studioInfo.tagline}</p>
			<p class="hero-description">{studioInfo.description}</p>
			<div class="hero-cta">
				<a href="#contact" class="cta-button">BOOK NOW</a>
				<a href="#rates" class="cta-button-secondary">VIEW RATES</a>
			</div>
		</div>
		<div class="hero-background-pattern"></div>
	</section>

	<!-- Refined Mission Section -->
	<section class="refined-mission-section">
		<div class="container">
			<div class="refined-mission-box">
				<div class="refined-mission-label">Mission Statement</div>
				<p class="refined-mission-text">Fat Unc Studios exists to provide accessible, affirming recording space for socially progressive and LGBTQ+ artists resisting cultural conformity and rising fascism. We reject extractive industry models that prioritize profit and polish over authenticity and community. Our studio lowers financial and psychological barriers to creation, prioritizing raw expression, mutual respect, and creative freedom over perfectionism. We are building an underground alternative where bold voices can create work that feels honest, urgent, and culturally necessary.</p>
			</div>
		</div>
	</section>

	<!-- Manifesto Section -->
	<section class="mission-section" use:intersectionObserver={{ onIntersect: () => (missionVisible = true) }}>
		<div class="container">
			<div class="mission-content">
				<h2 class="section-title">MANIFESTO</h2>
				<div class="mission-statement">Music should have teeth.
Studios should feel safe.
Art should not bow to fascism, algorithms, or corporate gatekeepers.

Fat Unc Studios is a scrappy, underground recording space for socially progressive and LGBTQ+ artists who refuse to sand down their edges.

We are not here for perfect takes.
We are here for honest ones.

We resist cultural conformity, rising authoritarianism, and the industry pressure to make everything clean, quiet, and compliant.

We build sessions rooted in respect, experimentation, and community.
Lower barriers. Fewer rules. More truth.

Raw over polished.
Bold over marketable.
Authentic over safe-for-the-algorithm.</div>
			</div>
		</div>
	</section>

	<!-- Rates Section -->
	<section id="rates" class="rates-section" use:intersectionObserver={{ onIntersect: () => (ratesVisible = true) }}>
		<div class="container">
			<h2 class="section-title">RATES</h2>
			<div class="rates-grid">
				{#each studioInfo.rates as rate}
					<div class="rate-card">
						<div class="rate-type">{rate.type}</div>
						<div class="rate-price">{rate.price}</div>
						<div class="rate-description">{rate.description}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Equipment Section -->
	<section id="gear" class="equipment-section" use:intersectionObserver={{ onIntersect: () => (equipmentVisible = true) }}>
		<div class="container">
			<h2 class="section-title">EQUIPMENT</h2>
			<div class="equipment-grid">
				{#each studioInfo.equipment as equipmentGroup}
					<div class="equipment-card">
						<h3 class="equipment-category">{equipmentGroup.category}</h3>
						<ul class="equipment-list">
							{#each equipmentGroup.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Gallery Placeholder Section -->
	<section id="gallery" class="gallery-section" use:intersectionObserver={{ onIntersect: () => (galleryVisible = true) }}>
		<div class="container">
			<h2 class="section-title">THE SPACE</h2>
			<div class="gallery-placeholder">
				<div class="placeholder-content">
					<svg class="placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
					</svg>
					<p>PHOTOS COMING SOON</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="contact-section" use:intersectionObserver={{ onIntersect: () => (contactVisible = true) }}>
		<div class="container">
			<h2 class="section-title">BOOK A SESSION</h2>
			<div class="contact-content">
				<div class="contact-info">
					<div class="contact-item">
						<div class="contact-label">EMAIL</div>
						<div class="contact-value">{studioInfo.contact.email}</div>
					</div>
					<div class="contact-item">
						<div class="contact-label">PHONE</div>
						<div class="contact-value">{studioInfo.contact.phone}</div>
					</div>
					<div class="contact-item">
						<div class="contact-label">LOCATION</div>
						<div class="contact-value">{studioInfo.contact.location}</div>
					</div>
				</div>
				<div class="contact-socials">
					<div class="contact-label">FOLLOW US</div>
					<div class="socials-placeholder">
						<p>Social links coming soon...</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	/* CSS Variables for Studio Theme */
	.studio-page {
		--studio-red: #ff0040;
		--studio-black: #0a0a0a;
		--studio-dark-gray: #1a1a1a;
		--studio-gray: #2a2a2a;
		--studio-light-gray: #666;
		--studio-white: #ffffff;
		--studio-yellow: #ffed00;
		
		--font-display: 'Bebas Neue', 'Arial Black', sans-serif;
		--font-condensed: 'Barlow Condensed', 'Arial Narrow', sans-serif;
		--font-body: 'Rubik', sans-serif;
		
		background: var(--studio-black);
		color: var(--studio-white);
		font-family: var(--font-body);
	}

	/* Hero Section */
	.hero-section {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: linear-gradient(135deg, var(--studio-black) 0%, var(--studio-dark-gray) 100%);
		border-bottom: 6px solid var(--studio-red);
	}

	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		padding: 2rem;
		max-width: 1200px;
	}

	.hero-badge {
		display: inline-block;
		background: var(--studio-red);
		color: var(--studio-white);
		padding: 0.5rem 1.5rem;
		font-family: var(--font-condensed);
		font-weight: 700;
		font-size: 1rem;
		letter-spacing: 3px;
		transform: rotate(-2deg);
		margin-bottom: 2rem;
		border: 3px solid var(--studio-white);
		box-shadow: 4px 4px 0 var(--studio-black);
	}

	.hero-title {
		margin: 0;
		line-height: 0.85;
	}

	.title-fat {
		display: block;
		font-family: var(--font-display);
		font-size: clamp(4rem, 15vw, 12rem);
		color: var(--studio-white);
		text-shadow: 
			4px 4px 0 var(--studio-red),
			8px 8px 0 rgba(0, 0, 0, 0.5);
		letter-spacing: 0.02em;
	}

	.title-studios {
		display: block;
		font-family: var(--font-display);
		font-size: clamp(3rem, 12vw, 10rem);
		color: var(--studio-yellow);
		text-shadow: 
			3px 3px 0 var(--studio-black),
			6px 6px 0 rgba(255, 0, 64, 0.5);
		letter-spacing: 0.05em;
	}

	.hero-tagline {
		font-family: var(--font-condensed);
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 700;
		color: var(--studio-red);
		text-transform: uppercase;
		letter-spacing: 2px;
		margin: 2rem 0 1rem;
		transform: rotate(-1deg);
	}

	.hero-description {
		font-size: clamp(1rem, 2.5vw, 1.5rem);
		color: var(--studio-light-gray);
		max-width: 600px;
		margin: 0 auto 3rem;
		line-height: 1.6;
	}

	.hero-cta {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.cta-button {
		display: inline-block;
		background: var(--studio-red);
		color: var(--studio-white);
		padding: 1rem 3rem;
		font-family: var(--font-condensed);
		font-size: 1.5rem;
		font-weight: 700;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 2px;
		border: 4px solid var(--studio-white);
		box-shadow: 6px 6px 0 var(--studio-black);
		transition: all 0.2s ease;
		transform: rotate(-1deg);
	}

	.cta-button:hover {
		transform: rotate(-1deg) translate(-2px, -2px);
		box-shadow: 8px 8px 0 var(--studio-black);
	}

	.cta-button-secondary {
		display: inline-block;
		background: transparent;
		color: var(--studio-yellow);
		padding: 1rem 3rem;
		font-family: var(--font-condensed);
		font-size: 1.5rem;
		font-weight: 700;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 2px;
		border: 4px solid var(--studio-yellow);
		box-shadow: 6px 6px 0 var(--studio-black);
		transition: all 0.2s ease;
		transform: rotate(1deg);
	}

	.cta-button-secondary:hover {
		transform: rotate(1deg) translate(-2px, -2px);
		box-shadow: 8px 8px 0 var(--studio-black);
		background: var(--studio-yellow);
		color: var(--studio-black);
	}

	.hero-background-pattern {
		position: absolute;
		inset: 0;
		opacity: 0.03;
		background-image: 
			repeating-linear-gradient(
				45deg,
				transparent,
				transparent 10px,
				var(--studio-white) 10px,
				var(--studio-white) 20px
			);
		pointer-events: none;
	}

	/* Container */
	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 4rem 2rem;
	}

	/* Section Titles */
	.section-title {
		font-family: var(--font-display);
		font-size: clamp(3rem, 8vw, 6rem);
		text-align: center;
		margin: 0 0 3rem;
		color: var(--studio-white);
		text-shadow: 4px 4px 0 var(--studio-red);
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}

	/* Mission Section */
	.mission-section {
		background: var(--studio-dark-gray);
		border-top: 4px solid var(--studio-red);
		border-bottom: 4px solid var(--studio-red);
	}

	.mission-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.mission-statement {
		background: var(--studio-gray);
		padding: 3rem;
		border: 3px solid var(--studio-red);
		box-shadow: 8px 8px 0 var(--studio-black);
		transform: rotate(-0.5deg);
		font-family: var(--font-condensed);
		font-size: clamp(0.95rem, 2vw, 1.2rem);
		font-weight: 400;
		line-height: 1.8;
		color: var(--studio-white);
		white-space: pre-line;
	}

	/* Refined Mission Section */
	.refined-mission-section {
		background: var(--studio-black);
		border-top: 4px solid var(--studio-yellow);
		border-bottom: 4px solid var(--studio-yellow);
	}

	.refined-mission-box {
		max-width: 900px;
		margin: 0 auto;
		background: var(--studio-dark-gray);
		border: 4px solid var(--studio-yellow);
		padding: 3rem;
		position: relative;
		box-shadow: 12px 12px 0 var(--studio-gray);
	}

	.refined-mission-label {
		position: absolute;
		top: -1.5rem;
		left: 2rem;
		background: var(--studio-red);
		color: var(--studio-white);
		font-family: var(--font-condensed);
		font-size: 1.2rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2px;
		padding: 0.5rem 1.5rem;
		border: 3px solid var(--studio-yellow);
		box-shadow: 4px 4px 0 var(--studio-black);
		transform: rotate(-2deg);
	}

	.refined-mission-text {
		font-family: var(--font-body);
		font-size: clamp(1rem, 2vw, 1.25rem);
		font-weight: 400;
		line-height: 1.9;
		color: var(--studio-white);
		margin: 0;
		text-align: justify;
	}

	/* Rates Section */
	.rates-section {
		background: var(--studio-black);
	}

	.rates-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 3rem;
		max-width: 900px;
		margin: 0 auto;
	}

	.rate-card {
		background: var(--studio-dark-gray);
		border: 4px solid var(--studio-yellow);
		padding: 3rem 2rem;
		text-align: center;
		box-shadow: 8px 8px 0 var(--studio-gray);
		transition: all 0.3s ease;
	}

	.rate-card:hover {
		transform: translate(-4px, -4px);
		box-shadow: 12px 12px 0 var(--studio-gray);
	}

	.rate-type {
		font-family: var(--font-condensed);
		font-size: 2rem;
		font-weight: 900;
		color: var(--studio-yellow);
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 1rem;
	}

	.rate-price {
		font-family: var(--font-display);
		font-size: 4rem;
		color: var(--studio-red);
		margin-bottom: 1rem;
		text-shadow: 2px 2px 0 var(--studio-black);
	}

	.rate-description {
		color: var(--studio-light-gray);
		font-size: 1.1rem;
		line-height: 1.5;
	}

	/* Equipment Section */
	.equipment-section {
		background: var(--studio-dark-gray);
		border-top: 4px solid var(--studio-yellow);
	}

	.equipment-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	.equipment-card {
		background: var(--studio-gray);
		border: 3px solid var(--studio-white);
		padding: 2rem;
		box-shadow: 6px 6px 0 var(--studio-black);
	}

	.equipment-category {
		font-family: var(--font-body);
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--studio-yellow);
		text-transform: uppercase;
		letter-spacing: 1.5px;
		margin: 0 0 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 3px solid var(--studio-red);
	}

	.equipment-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.equipment-list li {
		padding: 0.75rem 0;
		border-bottom: 1px solid var(--studio-light-gray);
		color: var(--studio-white);
		font-size: 1.1rem;
	}

	.equipment-list li:last-child {
		border-bottom: none;
	}

	.equipment-list li::before {
		content: "▸";
		color: var(--studio-red);
		font-weight: bold;
		margin-right: 1rem;
		font-size: 1.2rem;
	}

	/* Gallery Section */
	.gallery-section {
		background: var(--studio-black);
		border-top: 4px solid var(--studio-red);
	}

	.gallery-placeholder {
		background: var(--studio-gray);
		border: 4px dashed var(--studio-light-gray);
		min-height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder-content {
		text-align: center;
		color: var(--studio-light-gray);
	}

	.placeholder-icon {
		width: 120px;
		height: 120px;
		margin: 0 auto 1rem;
		opacity: 0.3;
	}

	.placeholder-content p {
		font-family: var(--font-condensed);
		font-size: 2rem;
		font-weight: 700;
		letter-spacing: 3px;
		margin: 0;
	}

	/* Contact Section */
	.contact-section {
		background: var(--studio-dark-gray);
		border-top: 4px solid var(--studio-yellow);
		border-bottom: 6px solid var(--studio-red);
	}

	.contact-content {
		max-width: 900px;
		margin: 0 auto;
		display: grid;
		gap: 4rem;
	}

	.contact-info {
		display: grid;
		gap: 2rem;
	}

	.contact-item {
		background: var(--studio-gray);
		padding: 2rem;
		border: 3px solid var(--studio-red);
		box-shadow: 6px 6px 0 var(--studio-black);
	}

	.contact-label {
		font-family: var(--font-condensed);
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--studio-yellow);
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 0.5rem;
	}

	.contact-value {
		font-size: 1.5rem;
		color: var(--studio-white);
		font-weight: 500;
	}

	.contact-socials {
		background: var(--studio-gray);
		padding: 2rem;
		border: 3px solid var(--studio-yellow);
		box-shadow: 6px 6px 0 var(--studio-black);
	}

	.socials-placeholder {
		margin-top: 1rem;
		padding: 2rem;
		background: var(--studio-dark-gray);
		border: 2px dashed var(--studio-light-gray);
		text-align: center;
		color: var(--studio-light-gray);
	}

	/* Observer animations */
	:global(.studio-page [data-observed="false"]) {
		opacity: 0;
		transform: translateY(30px);
	}

	:global(.studio-page [data-observed="true"]) {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 0.6s ease, transform 0.6s ease;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-badge {
			font-size: 0.9rem;
			padding: 0.4rem 1rem;
		}

		.hero-cta {
			flex-direction: column;
			align-items: stretch;
		}

		.cta-button,
		.cta-button-secondary {
			width: 100%;
			max-width: 350px;
			margin: 0 auto;
		}

		.mission-statement {
			padding: 2rem;
		}

		.refined-mission-box {
			padding: 2rem;
		}

		.refined-mission-label {
			font-size: 1rem;
			padding: 0.4rem 1rem;
			left: 1rem;
		}

		.refined-mission-text {
			text-align: left;
		}

		.rates-grid {
			grid-template-columns: 1fr;
		}

		.equipment-grid {
			grid-template-columns: 1fr;
		}

		.container {
			padding: 3rem 1rem;
		}
	}
</style>

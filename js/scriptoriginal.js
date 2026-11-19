<!-- Logic -->
const products = [
	{
		id: 101,
		title: 'Guía Ilustrada de Hierbas Medicinales',
		category: 'infografia',
		price: 14.99,
		badge: 'Botánica',
		image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80'
		],
		desc: 'Origen, propiedades antioxidantes y usos terapéuticos de plantas aromáticas.',
		specs: {
			'Formato de Entrega': 'PDF Vectorial + Figma Source (.fig)',
			'Resolución': '300 DPI (A2 / A3 Impresión de alta fidelidad)',
			'Paleta de Color': 'CMYK & RGB (Apto para web e imprenta)',
			'Licencia de Uso': 'Comercial + Personal (Sin límite de impresiones)',
			'Temática': 'Botánica, Nutrición y Maridaje Culinario'
		},
		features: [
			'Mapeo geográfico de origen de 12 plantas medicinales.',
			'Gráficos de concentración de antioxidantes y aceites esenciales.',
			'Guía de preservación y secado de hojas.'
		]
	},
	{
		id: 102,
		title: 'Tabla Nutricional de Granos y Legumbres',
		category: 'infografia',
		price: 12.99,
		badge: 'Botánica',
		image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80'
		],
		desc: 'Anatomía del grano, aporte de fibra, proteínas e índice glucémico.',
		specs: {
			'Formato de Entrega': 'PDF Vectorial + SVG + PNG HD',
			'Resolución': '300 DPI (A2 Poster)',
			'Licencia de Uso': 'Comercial + Educativa',
			'Temática': 'Botánica / Superalimentos'
		},
		features: [
			'Desglose anatómico en capas: salvado, endospermo y germen.',
			'Comparativa de índice glucémico y velocidad de absorción.',
			'Perfil de aminoácidos esenciales por porción.'
		]
	},
	{
		id: 103,
		title: 'Mapa de Fitonutrientes y Colores',
		category: 'infografia',
		price: 16.99,
		badge: 'Botánica',
		image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
		],
		desc: 'Guía cromática de frutas y verduras según sus beneficios fisiológicos.',
		specs: {
			'Formato de Entrega': 'PDF Vectorial Scalable',
			'Resolución': 'Vectorial Infinito',
			'Licencia de Uso': 'Comercial Completa'
		},
		features: [
			'Clasificación por pigmentos: Licopeno, Antocianinas, Clorofila, Betacarotenos.',
			'Efectos biológicos en sistema inmune, ocular y vascular.'
		]
	},
	{
		id: 104,
		title: 'Roadmap Visual JavaScript ES2026',
		category: 'infografia',
		price: 18.99,
		badge: 'Dev Kit',
		image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
		],
		desc: 'Diagrama visual de JS moderno, Event Loop y frameworks populares.',
		specs: {
			'Formato de Entrega': 'PDF + Figma Source Code + PNG 4K',
			'Compatibilidad': 'Figma, Illustrator, Adobe Reader',
			'Licencia': 'Licencia de Desarrollador / Personal'
		},
		features: [
			'Arquitectura paso a paso: Call Stack, Web APIs, Task Queue y Microtasks.',
			'Comparativa técnica de sintaxis moderna y mejores prácticas.'
		]
	},
	{
		id: 105,
		title: 'HTML5 Semántico & CSS Grid Cheat Sheet',
		category: 'infografia',
		price: 11.99,
		badge: 'Dev Kit',
		image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80'
		],
		desc: 'Referencia rápida de maquetación responsiva, flexbox y accesibilidad.',
		specs: {
			'Formato de Entrega': 'PDF Vectorial + SVG Printable',
			'Resolución': '300 DPI (Ideal Desktop Wallpaper / Poster)'
		},
		features: [
			'Esquema visual de etiquetas semánticas para SEO.',
			'Guía de propiedades CSS Grid & Flexbox en diagramas.'
		]
	},
	{
		id: 1,
		title: 'Master en JavaScript ES2026',
		category: 'curso',
		price: 49.99,
		badge: 'Curso Online',
		image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
		],
		desc: 'Capacitación completa en desarrollo moderno e integración API.',
		specs: {
			'Duración': '35 Horas de Video HD en Vivo & Grabado',
			'Nivel': 'Principiante a Avanzado',
			'Certificado': 'Certificación Digital Verificable',
			'Acceso': 'De por vida + Actualizaciones gratuitas'
		},
		features: [
			'10 Proyectos reales construidos paso a paso.',
			'Acceso a comunidad privada de estudiantes en Discord.',
			'Código fuente completo disponible en GitHub.'
		]
	},
	{
		id: 3,
		title: 'UI Kit Dashboard Figma Premium',
		category: 'recurso',
		price: 29.99,
		badge: 'Kit UI',
		image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
		gallery: [
			'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
		],
		desc: 'Librería con +100 componentes optimizados para SaaS.',
		specs: {
			'Archivo Source': '.FIG (Figma Native Design System)',
			'Componentes': '+100 Variables, Auto-Layout 5.0, Dark/Light Mode',
			'Licencia': 'Licencia Comercial para ilimitados clientes'
		},
		features: [
			'Gráficos, tablas interactivas y formularios responsivos.',
			'Soporte completo para Design Tokens.'
		]
	}
];

let cart = [];
let currentActiveProduct = null;

function renderProducts(items) {
	document.getElementById('products-container').innerHTML = items.map(p => `
		<div class="card">
			<div class="card-img-wrapper" onclick="openProductModal(${p.id})">
				<img src="${p.image}" alt="${p.title}" class="card-img">
				<div class="card-img-overlay">
					<i class="fa-solid fa-magnifying-glass-plus"></i> Ver Galería y Ficha Técnica
				</div>
			</div>
			<div class="card-body">
				<span class="card-tag ${p.badge === 'Botánica' ? 'tag-nutriatlas' : (p.badge === 'Desarrollo Web' || p.category === 'curso' ? 'tag-dev' : '')}">
					${p.badge || p.category}
				</span>
				<h3 class="card-title" onclick="openProductModal(${p.id})">${p.title}</h3>
				<p class="card-desc">${p.desc}</p>
				<div class="card-footer">
					<span class="price">$${p.price}</span>
					<button class="btn-buy" onclick="addToCart(${p.id}, this)">Añadir al Carrito</button>
				</div>
			</div>
		</div>
	`).join('');
}

/* --- MOBILE MENU --- */
function toggleMobileMenu() {
	const navLinks = document.getElementById('nav-links');
	const toggleBtn = document.getElementById('nav-toggle');
	if (!navLinks) return;
	
	navLinks.classList.toggle('active');
	
	if (toggleBtn) {
		const icon = toggleBtn.querySelector('i');
		if (icon) {
			if (navLinks.classList.contains('active')) {
				icon.className = 'fa-solid fa-xmark';
			} else {
				icon.className = 'fa-solid fa-bars';
			}
		}
	}
}

/* --- PRODUCT MODAL --- */
function openProductModal(productId) {
	const product = products.find(p => p.id === productId);
	if (!product) return;

	currentActiveProduct = product;

	document.getElementById('modal-title').innerText = product.title;
	document.getElementById('modal-price').innerText = `$${product.price.toFixed(2)}`;
	document.getElementById('modal-badge').innerText = product.badge || product.category;
	
	if (product.badge === 'Botánica') {
		document.getElementById('modal-badge').className = 'modal-badge tag-nutriatlas';
	} else {
		document.getElementById('modal-badge').className = 'modal-badge';
	}

	const gallery = product.gallery || [product.image];
	document.getElementById('modal-main-img').src = gallery[0];

	const thumbnailContainer = document.getElementById('modal-thumbnail-list');
	thumbnailContainer.innerHTML = gallery.map((imgUrl, index) => `
		<div class="thumbnail-item ${index === 0 ? 'active' : ''}" onclick="switchModalImage('${imgUrl}', this)">
			<img src="${imgUrl}" alt="Thumbnail ${index + 1}">
		</div>
	`).join('');

	const specsTable = document.getElementById('modal-specs-table');
	if (product.specs) {
		specsTable.innerHTML = Object.entries(product.specs).map(([key, val]) => `
			<tr>
				<td class="spec-label">${key}</td>
				<td class="spec-value">${val}</td>
			</tr>
		`).join('');
	} else {
		specsTable.innerHTML = '';
	}

	const featuresList = document.getElementById('modal-features-list');
	if (product.features && product.features.length) {
		featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
		document.getElementById('modal-features-container').style.display = 'block';
	} else {
		document.getElementById('modal-features-container').style.display = 'none';
	}

	const buyBtn = document.getElementById('modal-buy-btn');
	buyBtn.onclick = function() {
		addToCart(product.id);
		closeProductModalDirect();
	};

	document.getElementById('product-modal-backdrop').classList.add('active');
	document.body.style.overflow = 'hidden';
}

function switchModalImage(imgUrl, element) {
	document.getElementById('modal-main-img').src = imgUrl;
	document.querySelectorAll('.thumbnail-item').forEach(el => el.classList.remove('active'));
	element.classList.add('active');
}

function closeProductModal(event) {
	if (event.target.id === 'product-modal-backdrop') {
		closeProductModalDirect();
	}
}

function closeProductModalDirect() {
	document.getElementById('product-modal-backdrop').classList.remove('active');
	document.body.style.overflow = 'auto';
}

/* --- STORE & CART LOGIC --- */
function filterProducts(cat, evt) {
	document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
	if (evt && evt.target) {
		evt.target.classList.add('active');
	}
	renderProducts(cat === 'all' ? products : products.filter(p => p.category === cat));
}

function showToast(message, icon = 'fa-circle-check') {
	const stack = document.getElementById('toast-stack');
	const toast = document.createElement('div');
	toast.className = 'toast';
	toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
	stack.appendChild(toast);
	setTimeout(() => toast.remove(), 3000);
}

function addToCart(id, btn) {
	const product = products.find(p => p.id === id);
	cart.push(product);
	updateCart();
	showToast(`${product.title} añadido al carrito`, 'fa-cart-shopping');

	const cartBtn = document.querySelector('.cart-icon-btn');
	if (cartBtn) {
		cartBtn.classList.remove('bump');
		void cartBtn.offsetWidth;
		cartBtn.classList.add('bump');
	}

	if (btn) {
		const original = btn.innerHTML;
		btn.classList.add('added');
		btn.innerHTML = '<i class="fa-solid fa-check"></i> Añadido';
		setTimeout(() => { btn.classList.remove('added'); btn.innerHTML = original; }, 1600);
	}
}

/* FUNCIÓN UPDATE CART ACTUALIZADA CON IMAGEN Y DESCRIPCIÓN */
function updateCart() {
	document.getElementById('cart-count').innerText = cart.length;
	
	const container = document.getElementById('cart-items');
	if (cart.length === 0) {
		container.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding:2rem 0;">Tu carrito está vacío.</p>';
	} else {
		container.innerHTML = cart.map((item, idx) => `
			<div class="cart-item">
				<img src="${item.image}" alt="${item.title}" class="cart-item-img">
				<div class="cart-item-info">
					<h4 class="cart-item-title">${item.title}</h4>
					<p class="cart-item-desc">${item.desc || ''}</p>
					<span class="cart-item-price">$${item.price.toFixed(2)}</span>
				</div>
				<button class="cart-item-delete" onclick="removeFromCart(${idx})" aria-label="Eliminar producto">
					<i class="fa-solid fa-trash"></i>
				</button>
			</div>
		`).join('');
	}

	const total = cart.reduce((sum, p) => sum + p.price, 0).toFixed(2);
	document.getElementById('cart-total').innerText = total;

	const checkoutTotal = document.getElementById('checkout-total');
	if (checkoutTotal) {
		checkoutTotal.innerText = `$${total}`;
	}
}

function removeFromCart(idx) { 
	cart.splice(idx, 1); 
	updateCart(); 
}

function toggleCart() { 
	document.getElementById('cart-modal').classList.toggle('open'); 
}

/* --- CHECKOUT FLOW LOGIC --- */
function goToCheckout() {
	if (!cart.length) {
		showToast('Tu carrito está vacío.', 'fa-circle-exclamation');
		return;
	}
	document.getElementById('cart-step-items').style.display = 'none';
	const checkoutStep = document.getElementById('cart-step-checkout');
	checkoutStep.style.display = 'flex';
	document.getElementById('cart-title').innerText = 'Checkout Seguro';
	
	const total = cart.reduce((sum, p) => sum + p.price, 0).toFixed(2);
	document.getElementById('checkout-total').innerText = `$${total}`;
}

function backToCart() {
	document.getElementById('cart-step-checkout').style.display = 'none';
	document.getElementById('cart-step-items').style.display = 'flex';
	document.getElementById('cart-title').innerText = 'Tu Pedido';
}

function processPayment(event) {
	event.preventDefault();
	const btnPay = document.getElementById('btn-pay');
	const originalText = btnPay.innerHTML;

	btnPay.disabled = true;
	btnPay.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Procesando Pago...';

	setTimeout(() => {
		const email = document.getElementById('buyer-email').value;
		showToast(`¡Pago procesado con éxito! Enlaces enviados a ${email}`, 'fa-circle-check');
		
		cart = [];
		updateCart();
		document.getElementById('checkout-form').reset();
		backToCart();
		toggleCart();

		btnPay.disabled = false;
		btnPay.innerHTML = originalText;
	}, 2000);
}

/* ESCAPE KEY TO CLOSE MODALS */
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		closeProductModalDirect();
		const cartModal = document.getElementById('cart-modal');
		if (cartModal && cartModal.classList.contains('open')) {
			toggleCart();
		}
	}
});

/* --- Scroll Reveal --- */
function initScrollReveal() {
	const targets = document.querySelectorAll('.card, .service-card, .portfolio-item');
	targets.forEach(el => el.classList.add('reveal'));

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.12 });

	targets.forEach(el => observer.observe(el));
}

renderProducts(products);
initScrollReveal();

const originalRenderProducts = renderProducts;
renderProducts = function(items) {
	originalRenderProducts(items);
	initScrollReveal();
};


/* --- SERVICES & QUOTE FORM LOGIC --- */
const servicesData = {
	'dev': {
		title: 'Desarrollo Web a Medida',
		badge: 'Desarrollo Web',
		desc: 'Construcción de sitios web institucionales, landing pages de alta conversión y dashboards interactivos adaptados a tus objetivos de negocio.',
		preview: `
			<div class="service-preview-card">
				<div class="mock-browser-bar">
					<span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
					<span class="mock-url">https://tu-sitio-web.com</span>
				</div>
				<div class="mock-body">
					<div class="mock-metrics">
						<div class="metric-chip"><i class="fa-solid fa-bolt"></i> 99/100 Speed</div>
						<div class="metric-chip"><i class="fa-solid fa-mobile-screen"></i> 100% Responsive</div>
						<div class="metric-chip"><i class="fa-solid fa-shield-halved"></i> SSL & Checkout</div>
					</div>
					<div class="mock-tech-stack">
						<span>HTML5</span><span>CSS3</span><span>JS</span><span>React</span><span>PHP</span>
					</div>
				</div>
			</div>
		`,
		includes: [
			'Desarrollo Frontend ligero y veloz (HTML5, CSS3, JS / React / PHP).',
			'Diseño 100% responsivo para móviles, tablets y escritorio.',
			'Optimización SEO técnico y velocidad de carga extrema.',
			'Integración de pasarelas de pago y formularios de contacto.'
		]
	},
	'bots': {
		title: 'Bots & Chatbots Automatizados',
		badge: 'Inteligencia Artificial & Chatbots',
		desc: 'Desarrollo e integración de bots conversacionales inteligentes para sitios web, WhatsApp Business y plataformas CRM.',
		preview: `
			<div class="service-preview-card">
				<div class="mock-chat-window">
					<div class="chat-bubble bot"><i class="fa-solid fa-robot"></i> ¡Hola! ¿En qué puedo ayudarte hoy?</div>
					<div class="chat-bubble user">Quiero cotizar un proyecto.</div>
					<div class="chat-bubble bot"><i class="fa-solid fa-robot"></i> ¡Claro! Por favor ingresa tu correo...</div>
				</div>
			</div>
		`,
		includes: [
			'Respuestas automáticas inteligentes a preguntas frecuentes (FAQ 24/7).',
			'Captura, calificación y envío de prospectos/leads directamente a tu correo o CRM.',
			'Integración con APIs (OpenAI / WhatsApp Webhook / Telegram / Messenger).',
			'Panel de entrenamiento con respuestas personalizadas para tu marca.'
		]
	},
	'ui': {
		title: 'Kits UI & Sistemas de Diseño',
		badge: 'UI/UX Design',
		desc: 'Creación de sistemas de diseño escalables en Figma para equipos de desarrollo y startups que buscan coherencia visual.',
		preview: `
			<div class="service-preview-card">
				<div class="mock-ui-kit">
					<div class="ui-color-swatch"><span style="background:#0d1f45;"></span><span style="background:#c9922f;"></span><span style="background:#8e121c;"></span></div>
					<div class="ui-buttons-preview"><button class="btn-demo-primary">Primary</button> <button class="btn-demo-sec">Secondary</button></div>
				</div>
			</div>
		`,
		includes: [
			'Librerías de componentes accesibles y reutilizables en Figma.',
			'Documentación de tokens de diseño (colores, tipografías, espaciados).',
			'Diseño de estados (Hover, Active, Disabled) y modo claro/oscuro.',
			'Soporte directo para la entrega de assets a desarrolladores.'
		]
	},
	'info': {
		title: 'Infografías y Recursos Premium',
		badge: 'Diseño Editorial / Vectorial',
		desc: 'Diseño de diagramas complejos, mapas conceptuales, posters botánicos o educativos en alta resolución listos para impresos o web.',
		preview: `
			<div class="service-preview-card mock-infographic">
				<div class="info-header">
					<div class="info-logo"><i class="fa-brands fa-html5"></i> INFOGRAFÍA TÉCNICA HD</div>
					<span class="info-badge-hd">300 DPI · Vectorial</span>
				</div>
				
				<div class="info-grid">
					<!-- Bloque Flujo de Diagrama -->
					<div class="info-box">
						<div class="info-box-title"><i class="fa-solid fa-diagram-project"></i> Flujo & Arquitectura</div>
						<div class="info-flow-step">
							<span><i class="fa-solid fa-file-code"></i> Código</span>
							<i class="fa-solid fa-chevron-right"></i>
							<span><i class="fa-solid fa-gears"></i> DOM</span>
							<i class="fa-solid fa-chevron-right"></i>
							<span><i class="fa-solid fa-desktop"></i> Render</span>
						</div>
					</div>

					<!-- Bloque Código vs Visual -->
					<div class="info-box">
						<div class="info-box-title"><i class="fa-solid fa-laptop-code"></i> Ejemplo de Código & Output</div>
						<div class="code-vs-output">
							<div class="mini-code">
								<code>&lt;header&gt;<br>&nbsp;&lt;h1&gt;HTML5&lt;/h1&gt;<br>&lt;/header&gt;</code>
							</div>
							<div class="mini-output">
								<strong>Bienvenido</strong>
								<div class="mini-img-placeholder"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="info-footer">
					<span><i class="fa-solid fa-check"></i> PDF, SVG, FIG y PNG 4K</span>
					<span><i class="fa-solid fa-qrcode"></i> Códigos QR & Links Interactivos</span>
				</div>
			</div>
		`,
		includes: [
			'Ilustración vectorial personalizada e infografías HD (300 DPI).',
			'Entrega en múltiples formatos: PDF listo para imprenta, SVG, PNG 4K y Figma.',
			'Licencia de uso comercial exclusiva para tu marca.',
			'Múltiples rondas de revisión de contenido técnico.'
		]
	}
};

function openServiceModal(serviceKey) {
	const service = servicesData[serviceKey];
	if (!service) return;

	// 1. Asignar Título
	document.getElementById('service-title').innerText = service.title;
	
	// 2. Asignar Badge y forzar la clase tag-dev (#8e121c)
	const badgeEl = document.getElementById('service-badge');
	badgeEl.innerText = service.badge;
	badgeEl.className = 'modal-badge tag-dev';
	
	// 3. Asignar Descripción
	document.getElementById('service-description').innerText = service.desc;
	
	// 4. Inyectar la Muestra Visual (Preview)
	const previewSlot = document.getElementById('service-preview-slot');
	if (previewSlot) {
		previewSlot.innerHTML = service.preview || '';
	}

	// 5. Generar Lista de Características Incluidas
	const list = document.getElementById('service-includes-list');
	list.innerHTML = service.includes.map(item => `<li>${item}</li>`).join('');

	// 6. Abrir Modal y bloquear scroll del fondo
	document.getElementById('service-modal-backdrop').classList.add('active');
	document.body.style.overflow = 'hidden';
}

function closeServiceModal(event) {
	if (event.target.id === 'service-modal-backdrop') {
		closeServiceModalDirect();
	}
}

function closeServiceModalDirect() {
	document.getElementById('service-modal-backdrop').classList.remove('active');
	document.body.style.overflow = 'auto';
}

// --- CÓDIGO NUEVO Y CONECTADO ---
async function submitServiceQuote(event) {
	event.preventDefault();
	const btnSubmit = document.getElementById('btn-submit-quote');
	const originalText = btnSubmit.innerHTML;

	// Obtener los datos del formulario y del modal
	const name = document.getElementById('quote-name').value;
	const email = document.getElementById('quote-email').value;
	const details = document.getElementById('quote-details').value;
	const serviceTitle = document.getElementById('service-title').innerText;

	btnSubmit.disabled = true;
	btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

	try {
		// Envió vía FormSubmit usando tu correo directamente
		const response = await fetch('https://formsubmit.co/ajax/leimbekwebstudio@gmail.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				_subject: `Nueva Cotización: ${serviceTitle}`,
				Servicio: serviceTitle,
				Cliente: name,
				Email_Contacto: email,
				Detalles_Proyecto: details
			})
		});

		const data = await response.json();

		if (response.ok) {
			showToast(`¡Solicitud enviada! Te responderemos pronto a ${email}`, 'fa-paper-plane');
			document.getElementById('service-quote-form').reset();
			closeServiceModalDirect();
		} else {
			showToast('Hubo un problema al enviar. Intenta nuevamente.', 'fa-circle-exclamation');
		}
	} catch (error) {
		showToast('Error de conexión al enviar el mensaje.', 'fa-circle-exclamation');
	} finally {
		btnSubmit.disabled = false;
		btnSubmit.innerHTML = originalText;
	}
}

/* --- NOSOTROS MODAL LOGIC --- */
function openAboutModal() {
	document.getElementById('about-modal-backdrop').classList.add('active');
	document.body.style.overflow = 'hidden';
}

function closeAboutModal(event) {
	if (event.target.id === 'about-modal-backdrop') {
		closeAboutModalDirect();
	}
}

function closeAboutModalDirect() {
	document.getElementById('about-modal-backdrop').classList.remove('active');
	document.body.style.overflow = 'auto';
}

// Cierra el modal y desplaza suavemente hasta la sección #tienda
function goToStoreFromAbout() {
	closeAboutModalDirect();
	const storeSection = document.getElementById('tienda');
	if (storeSection) {
		storeSection.scrollIntoView({ behavior: 'smooth' });
	}
}
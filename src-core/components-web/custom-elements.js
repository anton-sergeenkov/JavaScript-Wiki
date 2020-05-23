
const customElementRegistry = window.customElements;

const arrCustomElements = [
	// text
	'u-text-underline', 'u-text-header', 'u-text-define',
	// menu
	'u-menu', 'u-menu-accent', 'u-menu-code', 'u-menu-border', 'u-menu-unactive',
	// code
	'u-code', 'u-code-npm', 'u-code-accent', 'u-code-text', 'u-code-list', 'u-code-comment',
	// link
	'u-link-wrapper',
	// message
	'u-message-ok', 'u-message-info', 'u-message-warn', 'u-message-error',   

	'u-code-wrapper', 'u-code-title',    
	'u-text-accent',
	'u-block-left-padding'
];

arrCustomElements.forEach(function(element) {
	customElementRegistry.define(element,
		class extends HTMLElement {
			constructor() {
				super();
			}
		}
	);
});

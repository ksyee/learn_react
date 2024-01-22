// 웹 컴포넌트 API (웹 표준)
// 슬롯(Slot)

if ('customElements' in globalThis) {
    customElements.define('euid-stack', class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = `
                <div class="euid-stack">
                    <h2>
                        <slot name="headline"></slot>
                    </h2>
                    <p>
                        <slot name="description"></slot>
                    </p>
                </div>
            `;
        }
    })
}
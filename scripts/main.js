import { parkAreaList } from './parkAreas.js';
import { guestList } from './guests.js';
import { serviceList } from './services.js';

const parkAreasListHTML = parkAreaList();
const guestListHTML = guestList();
const servicesListHTML = serviceList();

const mainContainer = document.querySelector("#container");

mainContainer.innerHTML = `
    <body>
        <section class="services">
            Park services: ${servicesListHTML}
        </section>
        <h2>Park Areas</h2>
        <section class="areas">
            ${parkAreasListHTML}
        </section>
        <aside class="guests">
            ${guestListHTML}
        </aside>
        <footer>
            <p>Main Phone: (XXX)XXX-XXXX, Email Address: info@ciderfallspark.com Address: 123 Cider Falls Rd, Cider Falls, CF 12345</p>
        </footer>
    </body>
    `;
import { parkAreaList } from './parkAreas.js';
import { guestList } from './guests.js';
import { serviceList } from './services.js';

const parkAreasListHTML = parkAreaList();
const guestListHTML = guestList();
const servicesListHTML = serviceList();

const mainContainer = document.querySelector("#container");

mainContainer.innerHTML = `
    <body>
    <header>
        <h1>Cider Falls State Park</h1>
        <section class="services">
            <h1>Services</h1>
            ${servicesListHTML}
        </section>
        <section class="areas">
        <h2>Park Areas</h2>
        ${parkAreasListHTML}
        </section>
     <aside class="guests">
        <h2>Guests</h2>
        ${guestListHTML}
     </aside>
<footer>
    <p>Main Phone: (XXX)XXX-XXXX, Email Address: info@ciderfallspark.com Address: 123 Cider Falls Rd, Cider Falls, CF 12345</p>
</footer>
`;
const map1 = L.map('map1').setView([0, 0], 2);
const map2 = L.map('map2').setView([0, 0], 2);

// Capas base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map1);

L.tileLayer('https://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg', {
    attribution: '© Stamen Terrain'
}).addTo(map2);

// Sincronizar los mapas
map1.sync(map2);
map2.sync(map1);

// Activar Geoman en ambos mapas
map1.pm.addControls({ position: 'topleft' });
map2.pm.addControls({ position: 'topleft' });

// Configuración de la barra lateral
const sidebar = L.control.sidebar({ container: 'sidebar' }).addTo(map1);
setTimeout(() => sidebar.show(), 500);
</script>
</body>
</html>

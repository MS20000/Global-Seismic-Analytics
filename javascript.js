// ՆՈՐ: Երբ քարտեզը սկսում է շարժվել, ցույց տալ, որ տվյալները հաշվարկվում են
map.on('movestart', () => {
    document.getElementById('energy-text').innerHTML = '<span style="color:#f0ad4e; font-style: italic;">🔄 Հաշվարկվում է նոր գոտու էներգիան...</span>';
});

map.on('moveend', updateSidebarBasedOnView);
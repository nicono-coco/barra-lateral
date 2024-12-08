const snowContainer = document.getElementById('snow');
const snowflakes = 100;

for (let i = 0; i < snowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = Math.random();
    snowflake.style.width = `${Math.random() * 10 + 10}px`;
    snowflake.style.height = snowflake.style.width;
    snowContainer.appendChild(snowflake);
}

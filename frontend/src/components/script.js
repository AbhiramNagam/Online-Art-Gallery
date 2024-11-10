const messages = ["Discover Art", "Explore Creativity", "Unleash Your Imagination"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000;

function type() {
    const dynamicText = document.getElementById("dynamic-text");
    if (!isDeleting && charIndex < messages[index].length) {
        dynamicText.textContent += messages[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        dynamicText.textContent = messages[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, erasingSpeed);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            index = (index + 1) % messages.length;
        }
        setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
    loadArtGallery();
});

function loadArtGallery() {
    const arts = [
        {
            image: "https://images.unsplash.com/photo-1422493757035-1e5e03968f95?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Sunset"
        },
        {
            image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Pets"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1667149988377-0e326e842beb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Ocean Waves"
        },
        {
            image: "https://images.unsplash.com/photo-1516470047996-b6dde636095f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Mountain"
        },
        {
            image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Forests"
        },
        {
            image: "https://images.unsplash.com/photo-1462258409682-731445253757?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "City Lights"
        },
        {
            image:"https://cdn.pixabay.com/photo/2023/08/13/00/43/blue-8186653_1280.jpg",
            title: "Birds"
        },
        {
            image:"https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_960_720.jpg",
            title: "Seasons"
        },
        {
            image:"https://cdn.pixabay.com/photo/2023/11/06/09/43/lotus-8369252_1280.jpg",
            title: "Flowers"
        },
        {
            image: "https://cdn.pixabay.com/photo/2016/11/29/03/59/dark-1867202_1280.jpg",
            title: "Night Sky"
        }
    ];

    const artGrid = document.getElementById('art-grid');

    arts.forEach(art => {
        const artItem = document.createElement('div');
        artItem.classList.add('art-item');

        const img = document.createElement('img');
        img.src = art.image;
        img.alt = art.title;
        img.loading = "lazy";

        const title = document.createElement('p');
        title.textContent = art.title;

        artItem.appendChild(img);
        artItem.appendChild(title);
        artGrid.appendChild(artItem);

    });
}



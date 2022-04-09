const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');
const layer4 = document.getElementById('layer4');
const layer5 = document.getElementById('layer5');
const layer6 = document.getElementById('layer6');
const layer7 = document.getElementById('layer7');
const layer8 = document.getElementById('layer8');

function animateContent() {
        let scroll = window.pageYOffset;

        if(scroll >= 0) {
            layer1.style.transform = `translateY(${scroll * (-0.6)}px)`;
            layer2.style.transform = `translateY(${scroll * (-0.4)}px)`;
            layer3.style.transform = `translateY(${scroll * (-0.5)}px)`;
            layer4.style.transform = `translateY(${scroll * (-0.2)}px)`;
            layer5.style.transform = `translateY(${scroll * (-0.1)}px)`;
            layer6.style.transform = `translateY(${scroll * (-0.1)}px)`;
            layer7.style.transform = `translateX(${scroll * (-0.3)}px)`;
            layer8.style.transform = `translateX(${scroll * (-0.3)}px)`;
        }
    };

window.addEventListener('scroll', animateContent);

let currentSize = 1;
const step = 0.1;
const minSize = 0.8;
const maxSize = 1.6;

window.onload = function() {
    const savedSize = localStorage.getItem('fontSize');
    if(savedSize) {
        currentSize = parseFloat(savedSize);
        document.body.style.fontSize = currentSize + 'em';
    }
}

function fontSize(action) {
    const body = document.body.style;
    
    switch(action) {
        case 'increase':
            if(currentSize < maxSize) currentSize += step;
            break;
        case 'decrease':
            if(currentSize > minSize) currentSize -= step;
            break;
        case 'reset':
            currentSize = 1;
            break;
    }
    
    body.fontSize = currentSize + 'em';
    localStorage.setItem('fontSize', currentSize);
}
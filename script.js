const gamesData = {
    mlbb: {
        id: 'mlbb',
        name: 'Mobile Legends',
        tag: 'Resmi & Instan',
        banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        logo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Mobile_Legends_Bang_Bang_logo.png', 
        fallbackLogo: 'https://ui-avatars.com/api/?name=MLBB&background=1e2024&color=facc15&size=256&bold=true',
        inputsHtml: `
            <div class="flex gap-2">
                <input type="number" id="userId" placeholder="User ID" oninput="resetVerification()" class="input-base w-2/3 text-sm font-mono">
                <input type="number" id="zoneId" placeholder="Zone ID" oninput="resetVerification()" class="input-base w-1/3 text-sm font-mono">
            </div>
        `,
        helperHtml: 'ID di profil game. Cth: <span class="text-white font-mono bg-gray-800 px-1 rounded">146187045 (2739)</span>',
        products: [
            { id: 'ml_w1', name: 'Weekly Diamond Pass', price: 28000, icon: '🎟️', bonus: 'Hot' },
            { id: 'ml_w2', name: '2x Weekly Pass', price: 56000, icon: '🎟️', bonus: '' },
            { id: 'ml_w3', name: '3x Weekly Pass', price: 84000, icon: '🎟️', bonus: '' },
            { id: 'ml_w4', name: 'Twilight Pass', price: 150000, icon: '🎫', bonus: 'Max Lvl' },
            { id: 'ml_st1', name: 'Starlight Member', price: 140000, icon: '⭐', bonus: 'New' },
            { id: 'ml_st2', name: 'Starlight Plus', price: 330000, icon: '🌟', bonus: '' },
            { id: 'ml_d1', name: '5 Diamonds', price: 1500, icon: '💎', bonus: '' },
            { id: 'ml_d2', name: '12 Diamonds', price: 3500, icon: '💎', bonus: '+1 Bonus' },
            { id: 'ml_d3', name: '28 Diamonds', price: 8000, icon: '💎', bonus: '+3 Bonus' },
            { id: 'ml_d4', name: '59 Diamonds', price: 16000, icon: '💎', bonus: '+5 Bonus' },
            { id: 'ml_d5', name: '86 Diamonds', price: 24000, icon: '💎', bonus: '+8 Bonus' },
            { id: 'ml_d6', name: '172 Diamonds', price: 48000, icon: '💎', bonus: '+16 Bonus' },
            { id: 'ml_d7', name: '257 Diamonds', price: 71000, icon: '💎', bonus: '+22 Bonus' },
            { id: 'ml_d8', name: '344 Diamonds', price: 96000, icon: '💎', bonus: '+33 Bonus' },
            { id: 'ml_d9', name: '429 Diamonds', price: 120000, icon: '💎', bonus: '+45 Bonus' },
            { id: 'ml_d10', name: '514 Diamonds', price: 143000, icon: '💎', bonus: '+58 Bonus' },
            { id: 'ml_d11', name: '706 Diamonds', price: 191000, icon: '💎', bonus: '+73 Bonus' },
            { id: 'ml_d12', name: '878 Diamonds', price: 239000, icon: '💎', bonus: '+95 Bonus' },
            { id: 'ml_d13', name: '1050 Diamonds', price: 285000, icon: '💎', bonus: '+115 Bonus' },
            { id: 'ml_d14', name: '2195 Diamonds', price: 570000, icon: '💎', bonus: '+255 Bonus' },
            { id: 'ml_d15', name: '3688 Diamonds', price: 950000, icon: '💎', bonus: '+448 Bonus' },
            { id: 'ml_d16', name: '5532 Diamonds', price: 1425000, icon: '💎', bonus: '+682 Bonus' },
            { id: 'ml_d17', name: '9288 Diamonds', price: 2375000, icon: '💎', bonus: '+1148 Bonus' }
        ]
    },
    ff: {
        id: 'ff',
        name: 'Free Fire',
        tag: 'Proses Cepat',
        banner: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        logo: 'https://upload.wikimedia.org/wikipedia/en/4/44/Free_Fire_logo.svg',
        fallbackLogo: 'https://ui-avatars.com/api/?name=FF&background=1e2024&color=facc15&size=256&bold=true',
        inputsHtml: `
            <div class="w-full relative">
                <input type="number" id="userId" placeholder="Player ID" oninput="resetVerification()" class="input-base text-sm font-mono">
            </div>
        `,
        helperHtml: 'Player ID di profil. Cth: <span class="text-white font-mono bg-gray-800 px-1 rounded">1234567890</span>',
        products: [
            { id: 'ff_w', name: 'Weekly Member', price: 30000, icon: '🎫', bonus: 'Hot' },
            { id: 'ff_m', name: 'Monthly Member', price: 100000, icon: '🎟️', bonus: 'Best' },
            { id: 'ff_d1', name: '5 Diamonds', price: 1000, icon: '💎', bonus: '' },
            { id: 'ff_d2', name: '12 Diamonds', price: 2000, icon: '💎', bonus: '' },
            { id: 'ff_d3', name: '50 Diamonds', price: 8000, icon: '💎', bonus: '' },
            { id: 'ff_d4', name: '70 Diamonds', price: 10000, icon: '💎', bonus: '+7 Bonus' },
            { id: 'ff_d5', name: '140 Diamonds', price: 20000, icon: '💎', bonus: '+14 Bonus' },
            { id: 'ff_d6', name: '355 Diamonds', price: 50000, icon: '💎', bonus: '+35 Bonus' },
            { id: 'ff_d7', name: '720 Diamonds', price: 100000, icon: '💎', bonus: '+72 Bonus' },
            { id: 'ff_d8', name: '1450 Diamonds', price: 200000, icon: '💎', bonus: '+145 Bonus' },
            { id: 'ff_d9', name: '2180 Diamonds', price: 300000, icon: '💎', bonus: '+218 Bonus' },
            { id: 'ff_d10', name: '3640 Diamonds', price: 500000, icon: '💎', bonus: '+364 Bonus' },
            { id: 'ff_d11', name: '7290 Diamonds', price: 1000000, icon: '💎', bonus: '+729 Bonus' }
        ]
    },
    pubg: {
        id: 'pubg',
        name: 'PUBG Mobile',
        tag: 'Region Global',
        banner: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PUBG_logo.png/1200px-PUBG_logo.png',
        fallbackLogo: 'https://ui-avatars.com/api/?name=PUBG&background=1e2024&color=facc15&size=256&bold=true',
        inputsHtml: `
            <div class="w-full relative">
                <input type="number" id="userId" placeholder="Character ID" oninput="resetVerification()" class="input-base text-sm font-mono">
            </div>
        `,
        helperHtml: 'Character ID di profil. Cth: <span class="text-white font-mono bg-gray-800 px-1 rounded">5123456789</span>',
        products: [
            { id: 'pubg_u1', name: '30 UC', price: 7500, icon: '💰', bonus: '' },
            { id: 'pubg_u2', name: '60 UC', price: 15000, icon: '💰', bonus: '' },
            { id: 'pubg_u3', name: '120 UC', price: 30000, icon: '💰', bonus: '+10 Bonus' },
            { id: 'pubg_u4', name: '325 UC', price: 75000, icon: '💰', bonus: '+25 Bonus' },
            { id: 'pubg_u5', name: '660 UC', price: 150000, icon: '💰', bonus: '+60 Bonus' },
            { id: 'pubg_u6', name: '1800 UC', price: 350000, icon: '💰', bonus: '+300 Bonus' },
            { id: 'pubg_u7', name: '3850 UC', price: 750000, icon: '💰', bonus: '+600 Bonus' },
            { id: 'pubg_u8', name: '8100 UC', price: 1500000, icon: '💰', bonus: '+1500 Bonus' }
        ]
    }
};

const paymentMethods = [
    { id: 'qris', name: 'QRIS', provider: 'Semua e-Wallet', icon: 'fa-qrcode', color: 'text-pink-500', fee: 1000 },
    { id: 'gopay', name: 'GoPay', provider: 'Gojek', icon: 'fa-wallet', color: 'text-blue-500', fee: 500 },
    { id: 'dana', name: 'DANA', provider: 'Dompet Digital', icon: 'fa-wallet', color: 'text-blue-400', fee: 500 },
    { id: 'shopeepay', name: 'ShopeePay', provider: 'Shopee', icon: 'fa-bag-shopping', color: 'text-orange-500', fee: 0 },
    { id: 'alfamart', name: 'Alfamart', provider: 'Minimarket', icon: 'fa-store', color: 'text-red-500', fee: 2500 },
    { id: 'bca', name: 'BCA VA', provider: 'Bank Transfer', icon: 'fa-building-columns', color: 'text-blue-600', fee: 4000 }
];

let appState = {
    currentGame: 'mlbb',
    accountVerified: false,
    nickname: '',
    accountIdText: '', 
    selectedItem: null,
    selectedPayment: null
};

const formatIDR = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

function initApp() {
    renderGameSelector();
    renderPayments();
    handleSelectGame('mlbb');
}

function renderGameSelector() {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = Object.values(gamesData).map(game => `
        <div id="game-card-${game.id}" onclick="handleSelectGame('${game.id}')" 
             class="selectable-card bg-brand-input rounded-xl p-3 flex flex-col items-center justify-center gap-2 group relative overflow-hidden">
            <div class="check-badge absolute top-1 right-1 text-brand-primary bg-brand-dark rounded-full w-4 h-4 flex items-center justify-center z-10">
                <i class="fas fa-check text-[10px]"></i>
            </div>
            <img src="${game.logo}" onerror="this.onerror=null; this.src='${game.fallbackLogo}';" alt="${game.name}" 
                 class="w-12 h-12 rounded-[0.7rem] shadow-md object-contain group-hover:scale-110 transition-transform duration-300 border border-gray-700 bg-white/5 p-1.5">
            <span class="text-[11px] font-bold text-center leading-tight line-clamp-1">${game.name}</span>
        </div>
    `).join('');
}

function handleSelectGame(gameId) {
    const game = gamesData[gameId];
    if(!game) return;

    appState.currentGame = gameId;
    appState.selectedItem = null;
    resetVerification();

    document.querySelectorAll('#gamesGrid .selectable-card').forEach(el => el.classList.remove('selected'));
    document.getElementById(`game-card-${gameId}`).classList.add('selected');

    const banner = document.getElementById('headerBanner');
    const logo = document.getElementById('headerLogo');
    banner.style.opacity = 0; logo.style.opacity = 0;
    
    setTimeout(() => {
        banner.src = game.banner;
        logo.src = game.logo;
        logo.onerror = () => { logo.src = game.fallbackLogo; };
        
        document.getElementById('headerTitle').innerText = game.name;
        document.getElementById('headerTag').innerText = game.tag;
        banner.style.opacity = 0.2; logo.style.opacity = 1;
    }, 300);

    document.getElementById('dynamicInputs').innerHTML = game.inputsHtml;
    document.getElementById('inputHelper').innerHTML = game.helperHtml;
    renderProducts(game.products);
    updatePaymentPrices();
    updateCheckoutUI();
}

function renderProducts(products) {
    const grid = document.getElementById('itemsGrid');
    grid.innerHTML = products.map(item => `
        <div id="card-${item.id}" onclick="handleSelectProduct('${item.id}')" 
             class="selectable-card bg-brand-input rounded-xl p-3 md:p-4 relative flex flex-col items-center justify-center text-center min-h-[90px] md:min-h-[110px] group">
            <div class="check-badge absolute top-2 right-2 text-brand-primary bg-brand-dark rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                <i class="fas fa-check text-[10px]"></i>
            </div>
            ${item.bonus ? `<div class="absolute top-0 left-0 bg-red-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-br-lg rounded-tl-xl shadow-sm">${item.bonus}</div>` : ''}
            <div class="text-2xl md:text-3xl mb-1 md:mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">${item.icon}</div>
            <div class="font-bold text-white text-xs md:text-sm leading-tight mb-1">${item.name}</div>
            <div class="text-[10px] md:text-xs text-brand-textMuted">${formatIDR(item.price)}</div>
        </div>
    `).join('');
}

function renderPayments() {
    const list = document.getElementById('paymentsList');
    list.innerHTML = paymentMethods.map(pay => `
        <div id="pay-${pay.id}" onclick="handleSelectPayment('${pay.id}')" 
             class="selectable-card bg-brand-input rounded-xl p-3 flex items-center justify-between relative overflow-hidden group">
            <div class="flex items-center gap-3 relative z-10">
                <div class="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center shadow-inner border border-gray-800 group-hover:bg-brand-card transition-colors">
                    <i class="fas ${pay.icon} ${pay.color} text-lg"></i>
                </div>
                <div class="flex flex-col text-left">
                    <span class="font-bold text-white text-sm">${pay.name}</span>
                    <span class="text-[10px] text-brand-textMuted">${pay.provider}</span>
                </div>
            </div>
            <div class="flex items-center gap-2 relative z-10">
                <div class="text-right flex flex-col">
                    <span class="font-bold text-white text-xs" id="price-display-${pay.id}">---</span>
                    ${pay.fee === 0 ? '<span class="text-[9px] text-green-400 font-bold bg-green-400/10 px-1.5 py-[1px] rounded mt-0.5">Bebas Admin</span>' : ''}
                </div>
                <div class="check-badge text-brand-primary w-4 text-right">
                    <i class="fas fa-check-circle text-sm"></i>
                </div>
            </div>
        </div>
    `).join('');
}

function handleSelectProduct(id) {
    const game = gamesData[appState.currentGame];
    appState.selectedItem = game.products.find(p => p.id === id);
    
    document.querySelectorAll('#itemsGrid .selectable-card').forEach(el => el.classList.remove('selected'));
    document.getElementById(`card-${id}`).classList.add('selected');

    updatePaymentPrices();
    updateCheckoutUI();
}

function handleSelectPayment(id) {
    appState.selectedPayment = paymentMethods.find(p => p.id === id);
    
    document.querySelectorAll('#paymentsList .selectable-card').forEach(el => el.classList.remove('selected'));
    document.getElementById(`pay-${id}`).classList.add('selected');

    updateCheckoutUI();
}

function updatePaymentPrices() {
    paymentMethods.forEach(pay => {
        const displayEl = document.getElementById(`price-display-${pay.id}`);
        if (!displayEl) return;
        
        if (appState.selectedItem) {
            const total = appState.selectedItem.price + pay.fee;
            displayEl.innerText = formatIDR(total);
            displayEl.classList.remove('text-gray-500');
            displayEl.classList.add('text-brand-primary');
        } else {
            displayEl.innerText = '---';
            displayEl.classList.add('text-gray-500');
            displayEl.classList.remove('text-brand-primary');
        }
    });
}

async function fetchRealAccountAPI(game, uid, zone) {
    const endpoints = [];
    if (game === 'mlbb') {
        endpoints.push(`https://api.isan.eu.org/nickname/ml?id=${uid}&zone=${zone}`);
        endpoints.push(`https://api.elxyz.me/api/v1/checker/mlbb/?id=${uid}&zone=${zone}`);
    } else if (game === 'ff' || game === 'pubg') {
        if(game === 'pubg') return new Promise((resolve) => setTimeout(() => resolve("PUBG Player " + uid.substring(0,4)), 800));
        endpoints.push(`https://api.isan.eu.org/nickname/ff?id=${uid}`);
        endpoints.push(`https://api.elxyz.me/api/v1/checker/freefire/?id=${uid}`);
    }

    for (let i = 0; i < endpoints.length; i++) {
        try {
            let data = null;
            let proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(endpoints[i])}`;
            let response = await fetch(proxyUrl);
            
            if (!response.ok) {
                proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(endpoints[i])}&t=${Date.now()}`;
                response = await fetch(proxyUrl);
                const proxyData = await response.json();
                if (proxyData.contents) data = JSON.parse(proxyData.contents);
            } else {
                data = await response.json();
            }

            if (data) {
                let result = data.data || data; 
                let nickname = result.username || result.userName || result.nickname || result.name || result.user_name || result.user;
                if (!nickname && typeof result === 'string') nickname = result;

                if (nickname && typeof nickname === 'string' && nickname.trim() !== '') {
                    const errorKeywords = ['not found', 'invalid', 'gagal', 'salah', 'tidak ditemukan'];
                    const isErrorString = errorKeywords.some(keyword => nickname.toLowerCase().includes(keyword));
                    if (!isErrorString) return decodeURIComponent(nickname.replace(/\+/g, ' ')); 
                }
            }
        } catch (err) { console.warn(`[API Gagal] Lanjut...`); }
    }
    throw new Error('ID / Server tidak ditemukan.');
}

async function verifyAccount() {
    const btn = document.getElementById('btnVerify');
    const uidInput = document.getElementById('userId');
    const zoneInput = document.getElementById('zoneId');
    
    const uid = uidInput ? uidInput.value.trim() : '';
    const zone = zoneInput ? zoneInput.value.trim() : '';

    if (appState.currentGame === 'mlbb') {
        if (!uid || !zone) { showVerificationStatus('Mohon isi User ID dan Zone ID', 'text-red-500 border-red-500/30'); return; }
        appState.accountIdText = `${uid} (${zone})`;
    } else {
        if (!uid) { showVerificationStatus('Mohon isi ID Player', 'text-red-500 border-red-500/30'); return; }
        appState.accountIdText = `${uid}`;
    }

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    btn.disabled = true;
    document.getElementById('verifyStatus').classList.add('hidden');

    try {
        const accountName = await fetchRealAccountAPI(appState.currentGame, uid, zone);
        
        appState.accountVerified = true;
        appState.nickname = accountName;

        showVerificationStatus(`
            <span class="text-[10px] text-brand-textMuted uppercase tracking-wider font-semibold">Tujuan Top Up:</span>
            <div class="flex items-center gap-1.5 text-green-400 mt-0.5">
                <i class="fas fa-check-circle text-xs"></i> 
                <span class="font-bold text-sm truncate max-w-[200px]">${appState.nickname}</span>
            </div>
            <span class="text-[10px] text-gray-400 font-mono mt-1">ID: ${appState.accountIdText}</span>
        `, 'border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.1)]');

    } catch (error) {
        appState.accountVerified = false;
        appState.nickname = '';
        showVerificationStatus(`<div class="font-bold">Gagal:</div> <span class="text-xs mt-0.5">${error.message}</span>`, 'text-red-500 border-red-500/30 bg-red-500/10');
    } finally {
        btn.innerHTML = '<i class="fas fa-search"></i> Cek Akun';
        btn.disabled = false;
        updateCheckoutUI();
    }
}

function resetVerification() {
    appState.accountVerified = false;
    appState.nickname = '';
    document.getElementById('verifyStatus').classList.add('hidden');
    
    const btn = document.getElementById('btnVerify');
    btn.innerHTML = '<i class="fas fa-search"></i> Cek Akun';
    
    updateCheckoutUI();
}

function showVerificationStatus(html, classes) {
    const statusDiv = document.getElementById('verifyStatus');
    statusDiv.innerHTML = html;
    statusDiv.className = `flex flex-col items-start gap-0 text-sm bg-gray-800/80 p-3 rounded-xl border w-full mt-3 ${classes}`;
    statusDiv.classList.remove('hidden');
}

function updateCheckoutUI() {
    const btnCheckout = document.getElementById('btnCheckout');
    
    if (appState.selectedItem) {
        document.getElementById('summaryPrice').innerText = formatIDR(appState.selectedItem.price);
        
        if (appState.selectedPayment) {
            document.getElementById('summaryFee').innerText = formatIDR(appState.selectedPayment.fee);
            const total = appState.selectedItem.price + appState.selectedPayment.fee;
            document.getElementById('totalPrice').innerText = formatIDR(total);
        } else {
            document.getElementById('summaryFee').innerText = 'Rp 0';
            document.getElementById('totalPrice').innerText = formatIDR(appState.selectedItem.price);
        }
    } else {
        document.getElementById('summaryPrice').innerText = 'Rp 0';
        document.getElementById('summaryFee').innerText = 'Rp 0';
        document.getElementById('totalPrice').innerText = 'Rp 0';
    }

    const isReady = appState.accountVerified && appState.selectedItem && appState.selectedPayment;
    btnCheckout.disabled = !isReady;
}

function processCheckout() {
    if (!appState.accountVerified || !appState.selectedItem || !appState.selectedPayment) return;

    document.getElementById('modalGameName').innerText = gamesData[appState.currentGame].name;
    document.getElementById('modalName').innerText = appState.nickname; 
    document.getElementById('modalId').innerText = appState.accountIdText; 
    document.getElementById('modalItem').innerText = appState.selectedItem.name;
    document.getElementById('modalPayment').innerText = appState.selectedPayment.name;
    
    const total = appState.selectedItem.price + appState.selectedPayment.fee;
    document.getElementById('modalTotal').innerText = formatIDR(total);

    const modal = document.getElementById('checkoutModal');
    const content = document.getElementById('modalContent');
    
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    });
}

function closeModal() {
    const modal = document.getElementById('checkoutModal');
    const content = document.getElementById('modalContent');
    
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function showCustomAlert(message) {
    document.getElementById('customAlertMessage').innerText = message;
    const modal = document.getElementById('customAlert');
    modal.classList.remove('hidden');
}

function closeCustomAlert() {
    document.getElementById('customAlert').classList.add('hidden');
}

function proceedToPayment() {
    const btnPay = document.getElementById('btnProceedPay');
    const btnCancel = document.getElementById('btnCancelCheckout');
    
    const originalText = btnPay.innerHTML;
    btnPay.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
    btnPay.disabled = true;
    btnCancel.disabled = true;

    setTimeout(() => {
        btnPay.innerHTML = originalText;
        btnPay.disabled = false;
        btnCancel.disabled = false;
        
        closeModal(); 
        
        setTimeout(() => {
            showSuccessNotification();
        }, 300);
    }, 1200);
}

function showSuccessNotification() {
    const modal = document.getElementById('successNotification');
    const content = document.getElementById('successContent');
    
    const randomTrx = 'TRX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    document.getElementById('orderIdDisplay').innerText = randomTrx;

    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    });
}

function closeSuccessNotification() {
    const modal = document.getElementById('successNotification');
    const content = document.getElementById('successContent');
    
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        window.location.reload(); 
    }, 300);
}

window.addEventListener('DOMContentLoaded', initApp);
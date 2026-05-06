

// قائمة المنتجات (مصفوفة بيانات الموقع)
let productsList = [
    { id: 1, name: "سماعة الرأس Vura-X", price: 4500, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 2, name: "ساعة ذكية S2", price: 8200, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" }
];

// 1. وظائف الواجهة العامة
function openLogin() { document.getElementById('login-overlay').style.display = 'block'; }
function closeLogin() { document.getElementById('login-overlay').style.display = 'none'; }

function checkAccess() {
    const val = document.getElementById('dev-input').value;
    if (val === SECRET_CODE) {
        document.getElementById('user-interface').style.display = 'none';
        document.getElementById('admin-interface').style.display = 'block';
        closeLogin();
        switchAdminTab('dashboard');
    } else {
        alert("أهلاً بك كزائر!");
        closeLogin();
    }
}

// 2. تحديث قائمة المنتجات في المتجر
function renderStore() {
    const container = document.getElementById('store-list');
    if (!container) return;
    container.innerHTML = ""; 
    productsList.forEach(p => {
        container.innerHTML += `
            <div class="p-card">
                <img src="${p.img}" alt="${p.name}">
                <div class="p-card-body">
                    <h4>${p.name}</h4>
                    <span class="p-price">${p.price} د.ج</span>
                    <button style="width:100%; margin-top:10px; padding:8px; cursor:pointer">شراء الآن</button>
                </div>
            </div>
        `;
    });
}

// 3. وظائف لوحة التحكم
function switchAdminTab(tab) {
    const area = document.getElementById('admin-content-area');
    if (tab === 'dashboard') {
        area.innerHTML = `
            <h2>إحصائيات المتجر</h2>
            <div style="display:flex; gap:20px; margin-top:20px;">
                <div class="admin-card" style="flex:1"><h3>المنتجات</h3><p style="font-size:30px">${productsList.length}</p></div>
                <div class="admin-card" style="flex:1"><h3>الطلبات</h3><p style="font-size:30px">0</p></div>
            </div>
        `;
    } else if (tab === 'add') {
        area.innerHTML = `
            <div class="admin-card">
                <h2>إضافة منتج جديد للموقع</h2>
                <div class="input-group"><label>اسم المنتج</label><input type="text" id="new-name"></div>
                <div class="input-group"><label>السعر</label><input type="number" id="new-price"></div>
                <div class="input-group"><label>رابط الصورة</label><input type="text" id="new-img"></div>
                <button class="btn-primary" onclick="submitProduct()">نشر المنتج الآن ✅</button>
            </div>
        `;
    }
}

function submitProduct() {
    const name = document.getElementById('new-name').value;
    const price = document.getElementById('new-price').value;
    const img = document.getElementById('new-img').value;

    if (name && price && img) {
        // إضافة المنتج للمصفوفة
        productsList.unshift({ id: Date.now(), name, price, img });
        // تحديث المتجر فوراً
        renderStore();
        alert("تم النشر بنجاح!");
        switchAdminTab('dashboard');
    } else {
        alert("أكمل الخانات!");
    }
}

function exitAdmin() {
    // العودة للواجهة العامة وإعادة تحميل البيانات
    document.getElementById('admin-interface').style.display = 'none';
    document.getElementById('user-interface').style.display = 'block';
    renderStore();
}

// البدء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderStore);

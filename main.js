/**
 * ==========================================================================
 *  حلواني خالد عمر - محطة الحلويات Sweets Station
 *  Interactive App & Dynamic Rendering Engine
 * ==========================================================================
 */

(function () {
  'use strict';

  // 1. Data Initialization & Overrides Handling
  let config = window.SITE_CONFIG || {};

  try {
    const saved = localStorage.getItem('KHALED_OMAR_CONFIG_OVERRIDE');
    if (saved) {
      const parsed = JSON.parse(saved);
      config = deepMerge(config, parsed);
    }
  } catch (e) {
    console.warn('Could not load local storage override:', e);
  }

  // Order Tray State
  let orderTray = [];
  try {
    const savedTray = sessionStorage.getItem('KHALED_ORDER_TRAY');
    if (savedTray) orderTray = JSON.parse(savedTray);
  } catch (e) {
    orderTray = [];
  }

  // Active Menu Category & Search Query
  let activeCategory = 'all';
  let searchQuery = '';

  // 2. DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initBrandInfo();
    renderSocialLinks();
    renderCakes();
    renderCategoryTabs();
    renderMenu();
    renderFeatures();
    renderBranches();
    renderTestimonials();
    initSearch();
    initTray();
    initAdminModal();
    initScrollEffects();
  });

  // --------------------------------------------------------------------------
  // Brand & Header Initialization
  // --------------------------------------------------------------------------
  function initBrandInfo() {
    const b = config.brand || {};
    const h = config.hotline || {};

    // Announcement
    const annEl = document.getElementById('topAnnouncementText');
    if (annEl && b.announcement) annEl.textContent = b.announcement;

    // Logos
    const logoImgs = document.querySelectorAll('.brand-dynamic-logo');
    logoImgs.forEach(img => {
      img.src = b.logo || 'assets/images/logo.png';
      img.alt = b.name;
    });

    const crestImg = document.getElementById('heroCrestImg');
    if (crestImg) {
      crestImg.src = b.logoCover || 'assets/images/logo-original.jpg';
      crestImg.alt = b.name;
    }

    // Hero Texts
    const headlineEl = document.getElementById('heroHeadline');
    if (headlineEl && b.heroHeadline) headlineEl.textContent = b.heroHeadline;

    const subtitleEl = document.getElementById('heroSubtitle');
    if (subtitleEl && b.heroSubtitle) subtitleEl.textContent = b.heroSubtitle;

    // Hotline Elements & Links
    const hotlineBtns = document.querySelectorAll('.hotline-link-btn');
    hotlineBtns.forEach(btn => {
      btn.href = h.telLink || 'tel:16562';
      const labelSpan = btn.querySelector('.hotline-number-text');
      if (labelSpan) labelSpan.textContent = h.display || '16562';
    });

    // Exclusivity Banner Text
    const exTextEl = document.getElementById('exclusivityBannerText');
    if (exTextEl && h.deliveryNote) {
      exTextEl.textContent = `تنويه هام: الطلب والتوصيل يتم حصرياً عبر الاتصال بالخط الساخن الموحد ${h.display || '16562'}. ${h.deliveryNote}.`;
    }
  }

  // --------------------------------------------------------------------------
  // Social Channels
  // --------------------------------------------------------------------------
  function renderSocialLinks() {
    const s = config.social || {};
    const container = document.getElementById('socialGridContainer');
    if (!container) return;

    const platforms = [
      { key: 'facebook', iconClass: 'facebook', symbol: '📘' },
      { key: 'instagram', iconClass: 'instagram', symbol: '📸' },
      { key: 'youtube', iconClass: 'youtube', symbol: '▶️' },
      { key: 'tiktok', iconClass: 'tiktok', symbol: '🎵' }
    ];

    container.innerHTML = platforms.map(p => {
      const item = s[p.key];
      if (!item) return '';
      return `
        <article class="social-card">
          <div class="social-icon-box ${p.iconClass}">
            <span>${p.symbol}</span>
          </div>
          <h3 class="social-name">${item.name || item.title}</h3>
          <span class="social-handle">${item.handle}</span>
          <p class="social-desc">${item.description || ''}</p>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-card-btn">
            زيارة ومتابعة ←
          </a>
        </article>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // Signature Royal Cakes (11 Items)
  // --------------------------------------------------------------------------
  function renderCakes() {
    const container = document.getElementById('cakesGridContainer');
    if (!container) return;

    const cakes = config.cakes || [];
    container.innerHTML = cakes.map(cake => {
      const isAvailable = cake.available !== false;
      return `
        <article class="cake-card" data-cake-id="${cake.id}">
          <div class="cake-img-wrap" onclick="window.khaledApp.openCakeModal(${cake.id})">
            <img 
              src="${cake.image}" 
              alt="${cake.title}" 
              class="cake-img"
              loading="lazy"
              onerror="this.onerror=null;this.src='${cake.fallbackImage || 'assets/images/logo-badge.png'}';"
            />
            ${cake.badge ? `<span class="cake-badge">${cake.badge}</span>` : ''}
            <span class="cake-servings-pill">
              <span>👥</span> ${cake.servings}
            </span>
          </div>
          <div class="cake-content">
            <h3 class="cake-title">${cake.title}</h3>
            <p class="cake-details">${cake.details}</p>
            <div class="cake-footer">
              <div class="cake-price-wrap">
                <span class="cake-price-label">السعر التقريبي</span>
                <span class="cake-price-val">${cake.price} <span class="cake-price-currency">ج.م</span></span>
              </div>
              <div class="cake-actions">
                ${isAvailable ? `
                  <button class="btn-add-tray" onclick="window.khaledApp.addToTray('${cake.id}', 'cake')">
                    <span>+</span> أضف للطلب
                  </button>
                  <a href="${config.hotline.telLink || 'tel:16562'}" class="btn-add-tray" style="background:var(--gold-gradient);color:var(--burgundy-900)">
                    📞 اطلب 16562
                  </a>
                ` : `
                  <span style="font-size:0.85rem;color:#ff7875;font-weight:700">غير متوفر حالياً</span>
                `}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // Full Menu & Filtering
  // --------------------------------------------------------------------------
  function renderCategoryTabs() {
    const container = document.getElementById('categoryTabsContainer');
    if (!container) return;

    const cats = config.menuCategories || [];
    container.innerHTML = cats.map(cat => `
      <button 
        class="cat-tab ${cat.id === activeCategory ? 'active' : ''}" 
        data-category="${cat.id}"
        onclick="window.khaledApp.filterCategory('${cat.id}')"
      >
        ${cat.name}
      </button>
    `).join('');
  }

  function renderMenu() {
    const container = document.getElementById('menuGridContainer');
    if (!container) return;

    let items = config.menuItems || [];

    // Filter by Category
    if (activeCategory !== 'all') {
      if (activeCategory === 'cakes') {
        // Also include the signature cakes inside cakes tab
        const cakeItemsAsMenu = (config.cakes || []).map(c => ({
          id: 'c_' + c.id,
          title: c.title,
          category: 'cakes',
          price: c.price,
          unit: c.servings,
          desc: c.details,
          badge: c.badge,
          image: c.image,
          fallbackImage: c.fallbackImage
        }));
        items = cakeItemsAsMenu.concat(items.filter(i => i.category === 'cakes'));
      } else {
        items = items.filter(i => i.category === activeCategory);
      }
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(i => 
        (i.title && i.title.toLowerCase().includes(q)) ||
        (i.desc && i.desc.toLowerCase().includes(q))
      );
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p style="font-size: 1.4rem; margin-bottom: 8px;">🔍 لم يتم العثور على نتائج مطابقة لـ "${searchQuery}"</p>
          <p>جرّب البحث باسم صنف آخر أو تصفح الأقسام من الأعلى.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(item => `
      <article class="menu-item-card">
        <div class="menu-item-img-wrap">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="menu-item-img"
            loading="lazy"
            onerror="this.onerror=null;this.src='assets/images/logo-badge.png';"
          />
          ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
          ${item.unit ? `<span class="menu-item-unit">${item.unit}</span>` : ''}
        </div>
        <div class="menu-item-body">
          <h3 class="menu-item-title">${item.title}</h3>
          <p class="menu-item-desc">${item.desc}</p>
          <div class="menu-item-bottom">
            <span class="menu-item-price">${item.price} <small style="font-size:0.75rem">ج.م</small></span>
            <button class="btn-add-tray" onclick="window.khaledApp.addToTray('${item.id}', 'menu')">
              <span>+</span> أضف للطلب
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  function initSearch() {
    const input = document.getElementById('menuSearchInput');
    if (!input) return;

    input.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderMenu();
    });
  }

  // --------------------------------------------------------------------------
  // Features (Why Choose Khaled Omar?)
  // --------------------------------------------------------------------------
  function renderFeatures() {
    const container = document.getElementById('featuresGridContainer');
    if (!container) return;

    const feats = config.features || [];
    container.innerHTML = feats.map(f => `
      <div class="feature-box">
        <span class="feature-icon">${f.icon}</span>
        <h3 class="feature-title">${f.title}</h3>
        <p class="feature-desc">${f.desc}</p>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // Branches
  // --------------------------------------------------------------------------
  function renderBranches() {
    const container = document.getElementById('branchesGridContainer');
    if (!container) return;

    const branches = config.branches || [];
    container.innerHTML = branches.map(b => `
      <article class="branch-card ${b.isMain ? 'main-branch' : ''}">
        ${b.isMain ? `<span class="branch-tag">الفرع الرئيسي</span>` : ''}
        <h3 class="branch-name">${b.name}</h3>
        <div class="branch-detail">
          <span class="icon">📍</span>
          <span>${b.address}</span>
        </div>
        <div class="branch-detail">
          <span class="icon">⏰</span>
          <span>${b.workingHours}</span>
        </div>
        <div class="branch-detail">
          <span class="icon">📞</span>
          <span>الطلب عبر الخط الساخن: <strong>${b.phone}</strong></span>
        </div>
        <div class="branch-actions">
          <a href="tel:${b.phone}" class="branch-call-btn">
            <span>📞</span> اتصال وتوصيل دليفري
          </a>
        </div>
      </article>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // Testimonials
  // --------------------------------------------------------------------------
  function renderTestimonials() {
    const container = document.getElementById('testimonialsGridContainer');
    if (!container) return;

    const reviews = config.testimonials || [];
    container.innerHTML = reviews.map(r => `
      <div class="feature-box" style="text-align: right; border-color: rgba(229,184,66,0.2);">
        <div style="color: var(--gold-400); margin-bottom: 8px;">★★★★★</div>
        <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 12px; color: var(--text-cream);">"${r.comment}"</p>
        <h4 style="font-size: 0.95rem; color: var(--gold-300);">${r.name}</h4>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // Order Tray Logic
  // --------------------------------------------------------------------------
  function initTray() {
    updateTrayUI();

    const openBtn = document.getElementById('openTrayBtn');
    const closeBtn = document.getElementById('closeTrayBtn');
    const backdrop = document.getElementById('trayBackdrop');
    const drawer = document.getElementById('trayDrawer');

    if (openBtn) openBtn.addEventListener('click', () => toggleTray(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleTray(false));
    if (backdrop) backdrop.addEventListener('click', () => toggleTray(false));
  }

  function toggleTray(open) {
    const drawer = document.getElementById('trayDrawer');
    const backdrop = document.getElementById('trayBackdrop');
    if (!drawer || !backdrop) return;

    if (open) {
      drawer.classList.add('open');
      backdrop.classList.add('open');
      renderTrayItems();
    } else {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
    }
  }

  function addToTray(id, type) {
    let itemData = null;

    if (type === 'cake') {
      const c = (config.cakes || []).find(x => String(x.id) === String(id));
      if (c) itemData = { id: 'cake_' + c.id, title: c.title, price: c.price, type: 'cake' };
    } else {
      const m = (config.menuItems || []).find(x => String(x.id) === String(id));
      if (m) itemData = { id: m.id, title: m.title, price: m.price, type: 'menu' };
    }

    if (!itemData) return;

    const existing = orderTray.find(x => x.id === itemData.id);
    if (existing) {
      existing.qty += 1;
    } else {
      orderTray.push({ ...itemData, qty: 1 });
    }

    saveTray();
    updateTrayUI();
    renderTrayItems();
    showToast(`تمت إضافة "${itemData.title}" إلى قائمتك بنجاح!`);
  }

  function changeTrayQty(id, delta) {
    const item = orderTray.find(x => x.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      orderTray = orderTray.filter(x => x.id !== id);
    }

    saveTray();
    updateTrayUI();
    renderTrayItems();
  }

  function saveTray() {
    try {
      sessionStorage.setItem('KHALED_ORDER_TRAY', JSON.stringify(orderTray));
    } catch (e) {}
  }

  function updateTrayUI() {
    const badge = document.getElementById('cartCountBadge');
    const totalCount = orderTray.reduce((acc, item) => acc + item.qty, 0);

    if (badge) {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    }
  }

  function renderTrayItems() {
    const container = document.getElementById('trayItemsContainer');
    const totalEl = document.getElementById('trayTotalPrice');
    if (!container) return;

    if (orderTray.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
          <span style="font-size: 2.5rem; display: block; margin-bottom: 12px;">🧺</span>
          <p style="font-size: 1.1rem; font-weight: 700; color: var(--text-cream);">قائمتك فارغة حالياً</p>
          <p style="font-size: 0.9rem;">تصفح التورت والحلويات واضغط على "أضف للطلب" لتجهيز قائمتك قبل الاتصال بالخط الساخن 16562.</p>
        </div>
      `;
      if (totalEl) totalEl.textContent = '0 ج.م';
      return;
    }

    let totalPrice = 0;
    container.innerHTML = orderTray.map(item => {
      const itemTotal = item.price * item.qty;
      totalPrice += itemTotal;
      return `
        <div class="tray-item">
          <div class="tray-item-info">
            <h4 class="tray-item-name">${item.title}</h4>
            <span class="tray-item-price">${item.price} ج.م × ${item.qty} = <strong>${itemTotal} ج.م</strong></span>
          </div>
          <div class="tray-item-qty">
            <button class="qty-btn" onclick="window.khaledApp.changeTrayQty('${item.id}', 1)">+</button>
            <span style="font-weight: 800; min-width: 20px; text-align: center;">${item.qty}</span>
            <button class="qty-btn" onclick="window.khaledApp.changeTrayQty('${item.id}', -1)">-</button>
          </div>
        </div>
      `;
    }).join('');

    if (totalEl) totalEl.textContent = `${totalPrice} ج.م`;
  }

  function proceedOrderCall() {
    if (orderTray.length === 0) {
      alert('قائمتك فارغة! يرجى اختيار بعض الأصناف أولاً.');
      return;
    }

    // Build the order checklist
    const listSummary = orderTray.map((item, idx) => `${idx + 1}. ${item.title} (العدد: ${item.qty})`).join('\n');
    const totalSum = orderTray.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);

    const modalBody = document.getElementById('orderSummaryModalContent');
    if (modalBody) {
      modalBody.innerHTML = `
        <div style="text-align: right; line-height: 1.8;">
          <h3 style="color: var(--gold-200); margin-bottom: 12px; font-size: 1.3rem;">📋 ملخص طلبك لخدمة العملاء (16562):</h3>
          <div style="background: rgba(255,255,255,0.06); padding: 16px; border-radius: var(--radius-md); border: 1px dashed var(--border-gold); margin-bottom: 16px; white-space: pre-line; font-size: 1rem;">
${listSummary}
<hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 10px 0;">
<strong>الإجمالي التقريبي: ${totalSum} جنيه مصري</strong>
          </div>
          <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 20px;">
            اضغط على زر الاتصال بالأسفل للتحويل فوراً إلى الخط الساخن <strong>16562</strong> وإبلاغ الموظف بهذه القائمة لتأكيد حجزك وعنوان التوصيل.
          </p>
          <a href="tel:16562" class="btn-primary" style="width: 100%; justify-content: center; font-size: 1.2rem; padding: 14px;">
            📞 اتصل الآن بالخط الساخن (16562)
          </a>
        </div>
      `;
      openModal('orderSummaryModal');
    } else {
      window.location.href = 'tel:16562';
    }
  }

  // --------------------------------------------------------------------------
  // Cake Modal (Zoom & Info)
  // --------------------------------------------------------------------------
  function openCakeModal(cakeId) {
    const cake = (config.cakes || []).find(c => String(c.id) === String(cakeId));
    if (!cake) return;

    const img = document.getElementById('cakeModalImg');
    const title = document.getElementById('cakeModalTitle');
    const servings = document.getElementById('cakeModalServings');
    const details = document.getElementById('cakeModalDetails');
    const price = document.getElementById('cakeModalPrice');
    const addBtn = document.getElementById('cakeModalAddBtn');
    const callBtn = document.getElementById('cakeModalCallBtn');

    if (img) {
      img.src = cake.image;
      img.onerror = () => { img.src = cake.fallbackImage || 'assets/images/logo-badge.png'; };
    }
    if (title) title.textContent = cake.title;
    if (servings) servings.textContent = `👥 ${cake.servings}`;
    if (details) details.textContent = cake.details;
    if (price) price.textContent = `${cake.price} ج.م`;

    if (addBtn) {
      addBtn.onclick = () => {
        addToTray(cake.id, 'cake');
        closeModal('cakeModal');
      };
    }
    if (callBtn) {
      callBtn.href = config.hotline.telLink || 'tel:16562';
    }

    openModal('cakeModal');
  }

  // --------------------------------------------------------------------------
  // Admin & Config Editor Engine (الملف القابل للتعديل)
  // --------------------------------------------------------------------------
  function initAdminModal() {
    const trigger = document.getElementById('floatingAdminTrigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        populateAdminFields();
        openModal('adminEditorModal');
      });
    }

    const saveLocalBtn = document.getElementById('adminSaveLocalBtn');
    if (saveLocalBtn) {
      saveLocalBtn.addEventListener('click', saveAdminOverrides);
    }

    const exportBtn = document.getElementById('adminExportFileBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', exportConfigFile);
    }

    const resetBtn = document.getElementById('adminResetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('هل أنت متأكد من استعادة الإعدادات الأصلية الافتراضية؟')) {
          localStorage.removeItem('KHALED_OMAR_CONFIG_OVERRIDE');
          location.reload();
        }
      });
    }
  }

  function populateAdminFields() {
    setVal('adminBrandName', config.brand?.name);
    setVal('adminHeroHeadline', config.brand?.heroHeadline);
    setVal('adminHeroSubtitle', config.brand?.heroSubtitle);
    setVal('adminAnnouncement', config.brand?.announcement);
    setVal('adminHotline', config.hotline?.number);

    setVal('adminSocialFb', config.social?.facebook?.url);
    setVal('adminSocialInsta', config.social?.instagram?.url);
    setVal('adminSocialYt', config.social?.youtube?.url);
    setVal('adminSocialTiktok', config.social?.tiktok?.url);

    // Populate Cakes Quick Price Table
    const cakeListEl = document.getElementById('adminCakesListEditor');
    if (cakeListEl) {
      cakeListEl.innerHTML = (config.cakes || []).map(c => `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px;background:rgba(255,255,255,0.04);border-radius:6px;margin-bottom:6px;">
          <span style="font-weight:700;font-size:0.9rem">${c.title} (${c.servings})</span>
          <div style="display:flex;align-items:center;gap:6px">
            <input type="number" class="admin-input" style="width:100px;padding:4px 8px;text-align:center" id="admin_cake_price_${c.id}" value="${c.price}">
            <span style="font-size:0.85rem">ج.م</span>
          </div>
        </div>
      `).join('');
    }
  }

  function saveAdminOverrides() {
    config.brand.name = getVal('adminBrandName') || config.brand.name;
    config.brand.heroHeadline = getVal('adminHeroHeadline') || config.brand.heroHeadline;
    config.brand.heroSubtitle = getVal('adminHeroSubtitle') || config.brand.heroSubtitle;
    config.brand.announcement = getVal('adminAnnouncement') || config.brand.announcement;

    const newHotline = getVal('adminHotline') || config.hotline.number;
    config.hotline.number = newHotline;
    config.hotline.display = newHotline;
    config.hotline.telLink = `tel:${newHotline}`;

    if (config.social.facebook) config.social.facebook.url = getVal('adminSocialFb') || config.social.facebook.url;
    if (config.social.instagram) config.social.instagram.url = getVal('adminSocialInsta') || config.social.instagram.url;
    if (config.social.youtube) config.social.youtube.url = getVal('adminSocialYt') || config.social.youtube.url;
    if (config.social.tiktok) config.social.tiktok.url = getVal('adminSocialTiktok') || config.social.tiktok.url;

    // Save cake prices
    (config.cakes || []).forEach(c => {
      const priceInput = document.getElementById(`admin_cake_price_${c.id}`);
      if (priceInput && priceInput.value) {
        c.price = Number(priceInput.value);
      }
    });

    localStorage.setItem('KHALED_OMAR_CONFIG_OVERRIDE', JSON.stringify(config));
    alert('تم حفظ التعديلات محلياً وتحديث الصفحة بنجاح!');
    location.reload();
  }

  function exportConfigFile() {
    const fileContent = `/**
 * =======================================================================
 *  حلواني خالد عمر - ملف إعدادات وبيانات الموقع (Site Configuration File)
 *  تم التحديث والتصدير عبر لوحة التحكم في: ${new Date().toLocaleString('ar-EG')}
 * =======================================================================
 */

window.SITE_CONFIG = ${JSON.stringify(config, null, 2)};
`;

    const blob = new Blob([fileContent], { type: 'application/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'site-config.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('تم تنزيل ملف site-config.js المحدث بنجاح! استبدل الملف القديم به.');
  }

  // --------------------------------------------------------------------------
  // Generic Modal Helpers
  // --------------------------------------------------------------------------
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('open');
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('open');
  }

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('open');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
      toggleTray(false);
    }
  });

  // --------------------------------------------------------------------------
  // Toast Notifications
  // --------------------------------------------------------------------------
  function showToast(message) {
    let toast = document.getElementById('appGlobalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appGlobalToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 24px;
        background: linear-gradient(135deg, #7b0e27, #420815);
        border: 1px solid var(--border-gold);
        color: #fff;
        padding: 12px 22px;
        border-radius: var(--radius-full);
        box-shadow: 0 10px 30px rgba(0,0,0,0.7);
        font-weight: 700;
        font-size: 0.95rem;
        z-index: 1000;
        transform: translateY(30px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
      `;
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<span>✨</span> ${message}`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(30px)';
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // Utility Functions
  // --------------------------------------------------------------------------
  function setVal(id, val) {
    const el = document.getElementById(id);
    if (el && val != null) el.value = val;
  }

  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : null;
  }

  function deepMerge(target, source) {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(key => {
        if (isObject(source[key])) {
          if (!(key in target)) Object.assign(output, { [key]: source[key] });
          else output[key] = deepMerge(target[key], source[key]);
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }

  function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  function initScrollEffects() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.main-header');
      if (header) {
        if (window.scrollY > 40) {
          header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)';
        } else {
          header.style.boxShadow = 'none';
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // Global Export for inline events
  // --------------------------------------------------------------------------
  window.khaledApp = {
    openCakeModal,
    closeModal,
    addToTray,
    changeTrayQty,
    proceedOrderCall,
    filterCategory: (catId) => {
      activeCategory = catId;
      renderCategoryTabs();
      renderMenu();
    }
  };

})();

/* Dönerus — ortak betikler */
const SAYFA = document.body.dataset.sayfa || '';
const IMG = 'assets/img/';

/* ---------- menü verisi (menü, QR menü ve anasayfa ortak kullanır) ---------- */
const MENU = [
  { id: 'donerler', ad: 'Dönerler', urunler: [
    { ad: 'Porsiyon Döner', aciklama: 'Pilav, közlenmiş biber ve domates ile', fiyat: 420, img: 'porsiyon', rozet: ['Usta önerisi'], detay: 'Ateşin karşısında yavaş pişen döner, ince ince kesilip tereyağlı pilavın yanında servis edilir. Közlenmiş biber ve domatesle tam bir öğün.', alerjen: 'Gluten (pilav), süt ürünü (tereyağı)', yaninda: 'Yayık Ayran' },
    { ad: 'İskenderun Porsiyon', aciklama: 'Pide, domates sos, kızgın tereyağı, yoğurt', fiyat: 480, img: 'iskender-tabak', rozet: ['En çok satan'], detay: 'İskenderun usulünün imzası: küp doğranmış pidenin üstüne kâğıt inceliğinde döner, domates sos ve masada cızırdayan kızgın tereyağı. Yanında süzme yoğurt.', alerjen: 'Gluten (pide), süt ürünü (yoğurt, tereyağı)', yaninda: 'Yayık Ayran' },
    { ad: 'Pilav Üstü Tavuk Döner', aciklama: 'Tereyağlı pilav, sumaklı soğan, közlenmiş biber', fiyat: 310, img: 'pilav-tavuk', detay: 'Marine edilmiş tavuk döner, tereyağlı pirinç pilavının üstünde. Sumaklı soğan ve közlenmiş biberle hafif ama doyurucu.', alerjen: 'Süt ürünü (tereyağı)', yaninda: 'Acılı Şalgam' },
    { ad: 'Ekmek Arası Döner', aciklama: 'Bol döner, domates, soğan, turşu', fiyat: 260, img: 'yarim-ekmek', detay: 'Taze ekmeğin içine bol döner, domates, soğan ve turşu. Elde, yolda, her an.', alerjen: 'Gluten (ekmek)', yaninda: 'Yayık Ayran' },
  ]},
  { id: 'durumler', ad: 'Dürümler', urunler: [
    { ad: 'Et Dürüm', aciklama: 'İnce lavaş, domates, sumaklı soğan, maydanoz', fiyat: 290, img: 'et-durum', detay: 'İnce lavaşa sarılmış dana döner; domates, sumaklı soğan ve maydanozla. Lavaş sacda ısıtılıp çıtırlatılır.', alerjen: 'Gluten (lavaş)', yaninda: 'Acılı Şalgam' },
    { ad: 'Tavuk Dürüm', aciklama: 'Lavaş, marul, domates, turşu, sarımsaklı sos', fiyat: 220, img: 'tavuk-durum', detay: 'Lavaşa sarılı tavuk döner; marul, domates, turşu ve ev yapımı sarımsaklı sos.', alerjen: 'Gluten (lavaş), yumurta ve süt (sarımsaklı sos)', yaninda: 'Çıtır Patates' },
    { ad: 'Tavuk Dürüm Menü', aciklama: 'Tavuk dürüm ve yayık ayran birlikte', fiyat: 249, img: 'durum-menu', rozet: ['Yeni', 'Menü'], detay: 'Tavuk dürüm ve günlük yayık ayran bir arada, avantajlı fiyatla.', alerjen: 'Gluten (lavaş), süt ürünü (ayran), yumurta (sos)', yaninda: 'Çıtır Patates' },
  ]},
  { id: 'yaninda', ad: 'Yanında', urunler: [
    { ad: 'Çoban Salata', aciklama: 'Domates, salatalık, biber, soğan, limon', fiyat: 90, img: 'coban', rozet: ['Vegan'], detay: 'Küp doğranmış domates, salatalık, biber ve soğan; limon ve zeytinyağıyla.', alerjen: 'İçermez', yaninda: 'Ekmek Arası Döner' },
    { ad: 'Çıtır Patates', aciklama: 'Elle kesilmiş, ketçap ile', fiyat: 85, img: 'patates', rozet: ['Vejetaryen'], detay: 'Elle kesilmiş patates, dışı çıtır içi yumuşak kızartılır. Ketçapla servis edilir.', alerjen: 'İçermez', yaninda: 'Tavuk Dürüm' },
    { ad: 'Turşu Tabağı', aciklama: 'Ev usulü karışık turşu', fiyat: 60, img: 'tursu', rozet: ['Vegan'], detay: 'Ev usulü kurulmuş karışık turşu; dönerin en iyi arkadaşı.', alerjen: 'İçermez', yaninda: 'Ekmek Arası Döner' },
  ]},
  { id: 'icecekler', ad: 'İçecekler', urunler: [
    { ad: 'Yayık Ayran', aciklama: 'Günlük, köpüklü', fiyat: 45, img: 'ayran', detay: 'Günlük, bol köpüklü yayık ayran. Dönerin yanına en yakışan içecek.', alerjen: 'Süt ürünü', yaninda: 'İskenderun Porsiyon' },
    { ad: 'Acılı Şalgam', aciklama: 'Havuç turşusu ile', fiyat: 45, img: 'salgam', detay: 'Acılı şalgam, havuç turşusuyla. Ferahlatıcı ve iştah açıcı.', alerjen: 'İçermez', yaninda: 'Et Dürüm' },
    { ad: 'Su', aciklama: '330 ml cam şişe', fiyat: 20, img: 'su', detay: '330 ml cam şişe doğal kaynak suyu.', alerjen: 'İçermez' },
  ]},
  { id: 'tatlilar', ad: 'Tatlılar', urunler: [
    { ad: 'Künefe', aciklama: 'Hatay peyniri, Antep fıstığı, kaymak', fiyat: 190, img: 'kunefe', rozet: ['Paylaşmalık'], detay: 'Hatay peyniriyle hazırlanan, şerbetli, sıcak künefe; Antep fıstığı ve kaymakla servis edilir.', alerjen: 'Gluten (kadayıf), süt ürünü (peynir, kaymak), kuruyemiş (Antep fıstığı)', yaninda: 'Yayık Ayran' },
  ]},
];
const TL = n => n.toLocaleString('tr-TR') + ' ₺';

/* ---------- ortak üst menü ve alt bilgi ---------- */
const LINKLER = [['menu.html', 'Menü'], ['subeler.html', 'Şubeler'], ['hikayemiz.html', 'Lezzetimiz'], ['franchise.html', 'Franchise'], ['iletisim.html', 'İletişim']];
function logoHTML(koyu) {
  return `<a class="logo" href="index.html" aria-label="Dönerus anasayfa"><img src="assets/logo/donerus.png" alt="Dönerus"></a>`;
}
function ustMenu() {
  const el = document.getElementById('ust');
  if (!el) return;
  const acikZemin = document.body.dataset.ust === 'acik';
  el.className = 'ust' + (acikZemin ? ' acik-zemin' : '');
  el.innerHTML = `<div class="kap">${logoHTML(!acikZemin)}
    <nav class="menu-linkler" aria-label="Ana menü">${LINKLER.map(([h, a]) => `<a href="${h}" ${location.pathname.endsWith(h) ? 'aria-current="page"' : ''}>${a}</a>`).join('')}</nav>
    <div class="ust-sag"><a class="btn btn-koz" href="franchise.html#basvuru">Bayi Olun <span class="ok">→</span></a>
    <button class="hamburger" aria-label="Menüyü aç"><span></span></button></div></div>`;
  const mm = document.createElement('div');
  mm.className = 'mobil-menu';
  mm.innerHTML = `<button class="kapat" aria-label="Menüyü kapat">✕</button>${[['index.html', 'Anasayfa'], ...LINKLER].map(([h, a]) => `<a href="${h}">${a}</a>`).join('')}<a class="btn btn-koz" style="margin-top:24px;font-family:var(--sans);font-size:17px;border:0;justify-content:center" href="franchise.html#basvuru">Bayi Olun →</a>`;
  document.body.appendChild(mm);
  const cubuk = document.createElement('nav');
  cubuk.className = 'mobil-cubuk'; cubuk.setAttribute('aria-label', 'Hızlı işlemler');
  cubuk.innerHTML = `<a href="menu.html"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h10"/></svg>Menü</a><a href="iletisim.html" data-eylem="ara"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>Ara</a><a class="vurgu" href="franchise.html#basvuru"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V8l7-5 7 5v13M10 21v-6h4v6"/></svg>Bayi Ol</a>`;
  document.body.appendChild(cubuk);
  el.querySelector('.hamburger').onclick = () => mm.classList.add('acik');
  mm.querySelector('.kapat').onclick = () => mm.classList.remove('acik');
  mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('acik')));
  const kaydir = () => {
    const dolu = window.scrollY > 40;
    el.classList.toggle('dolu', dolu);
  };
  addEventListener('scroll', kaydir, { passive: true }); kaydir();
}
function altBilgi() {
  const el = document.getElementById('alt');
  if (!el) return;
  el.className = 'alt';
  el.innerHTML = `<div class="kap"><div class="alt-ust">
    <div>${logoHTML(true)}<p style="margin-top:18px;max-width:340px;font-size:15px">İskenderun usulü, bol soslu, tereyağlı döner. Her şubede aynı lezzet.</p>
      <form class="bulten" onsubmit="event.preventDefault();this.innerHTML='<p style=&quot;color:var(--krem)&quot;>Teşekkürler, kampanyalardan ilk siz haberdar olacaksınız.</p>'"><input type="email" required placeholder="E-posta adresiniz" aria-label="E-posta"><button class="btn btn-koz" style="padding:12px 18px">Abone ol</button></form></div>
    <div><h4>Lezzet</h4><ul><li><a href="menu.html">Menü</a></li><li><a href="qr.html">QR Menü</a></li><li><a href="subeler.html">Şubeler</a></li><li><a href="iletisim.html" data-eylem="siparis">Paket servis</a></li></ul></div>
    <div><h4>Kurumsal</h4><ul><li><a href="hikayemiz.html">Lezzetimiz</a></li><li><a href="franchise.html">Franchise</a></li><li><a href="panel.html">Bayi paneli</a></li><li><a href="iletisim.html">İletişim</a></li></ul></div>
    <div><h4>Bize ulaşın</h4><ul><li>[Telefon]</li><li>info@donerus.com.tr</li><li>[Merkez adres]</li></ul></div></div>
    <div class="alt-alt"><span>© 2026 Dönerus · Bu site bir tasarım önerisidir; içerik, fiyat ve şube bilgileri örnektir.</span><span>KVKK · Çerez Politikası · Gizlilik</span></div></div>`;
}

/* ---------- görünme animasyonu ---------- */
function gorunme() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('gorundu'); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('.gor').forEach(el => io.observe(el));
}

/* ---------- sayaçlar ---------- */
function sayaclar() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, hedef = +el.dataset.say, ek = el.dataset.ek || '';
    const t0 = performance.now();
    const adim = t => { const p = Math.min((t - t0) / 1600, 1); el.textContent = Math.round(hedef * (1 - Math.pow(1 - p, 3))).toLocaleString('tr-TR') + ek; if (p < 1) requestAnimationFrame(adim); };
    requestAnimationFrame(adim); io.unobserve(el);
  }), { threshold: .5 });
  document.querySelectorAll('[data-say]').forEach(el => io.observe(el));
}

/* ---------- menü sayfası ---------- */
function menuSayfasi() {
  const kok = document.getElementById('menu-icerik');
  if (!kok) return;
  document.getElementById('menu-sekme').innerHTML = MENU.map((g, i) => `<a href="#${g.id}" class="${i ? '' : 'aktif'}">${g.ad}</a>`).join('');
  kok.innerHTML = MENU.map(g => `<section class="menu-grup" id="${g.id}"><h2 class="gor">${g.ad}</h2><div class="menu-liste">${g.urunler.map(u => `
    <article class="menu-oge gor" data-urun="${u.ad}" tabindex="0" role="button"><img src="${IMG}${u.img}-kare.webp" alt="${u.ad}" loading="lazy"><div>
    <div class="ust-satir"><h3>${u.ad}</h3><span class="fiyat">${TL(u.fiyat)}</span></div><p>${u.aciklama}</p>
    ${u.rozet ? `<div class="rozetler">${u.rozet.map(r => `<span class="rozet ${/Yeni|En çok/.test(r) ? 'koz' : ''}">${r}</span>`).join('')}</div>` : ''}</div></article>`).join('')}</div></section>`).join('');
  sekmeTakip('#menu-sekme a', '.menu-grup');
  urunDetay(kok, '.menu-oge');
}
function sekmeTakip(sekmeSec, grupSec) {
  const sekmeler = [...document.querySelectorAll(sekmeSec)];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) sekmeler.forEach(s => s.classList.toggle('aktif', s.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll(grupSec).forEach(g => io.observe(g));
}

/* ---------- QR menü ---------- */
function qrMenu() {
  const kok = document.getElementById('qr-icerik');
  if (!kok) return;
  document.getElementById('qr-sekme').innerHTML = MENU.map((g, i) => `<a href="#${g.id}" class="${i ? '' : 'aktif'}">${g.ad}</a>`).join('');
  kok.innerHTML = MENU.map(g => `<section class="qr-grup" id="${g.id}"><h2>${g.ad}</h2>${g.urunler.map(u => `
    <button type="button" class="qr-oge" data-urun="${u.ad}" aria-label="${u.ad} detayı"><div><h3>${u.ad}</h3><p>${u.aciklama}</p><b>${TL(u.fiyat)}</b></div><span class="qr-foto"><img src="${IMG}${u.img}-kare.webp" alt="${u.ad}" loading="lazy"><i aria-hidden="true">+</i></span></button>`).join('')}</section>`).join('');
  sekmeTakip('#qr-sekme a', '.qr-grup');
  urunDetay(kok, '.qr-oge');
}

/* ---------- iletişim bilgileri: marka verince doldurulur, düğmeler kendiliğinden bağlanır ---------- */
const ILETISIM = {
  tel: '',          // ör. '+905XXXXXXXXX' → "Ara" düğmeleri doğrudan arar
  whatsapp: '',     // ör. '905XXXXXXXXX'  → WhatsApp'tan sipariş açılır
  instagram: '',    // ör. 'donerus'       → Instagram profili açılır
};
const HARITA = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
const PLATFORMLAR = [
  ['Yemeksepeti', 'https://www.yemeksepeti.com/', '#FA0050'],
  ['Getir Yemek', 'https://getir.com/yemek/', '#5D3EBC'],
  ['Trendyol Go', 'https://www.trendyol.com/go', '#F27A1A'],
  ['Migros Yemek', 'https://www.migros.com.tr/yemek', '#F28C00'],
];

/* ---------- ortak alt pencere ----------
   Bilerek tarayıcı geçmişine dokunmuyor (pushState/back yok) ve sayfayı kilitlemiyor:
   Android'de çift kapanma iki adım geri gidip sayfadan çıkarıyordu. Kapalıyken perde
   dokunuşları asla yutmaz (pointer-events:none). */
let PEN, PEN_ZAMAN = 0, PEN_SAYAC;
function pencereKur() {
  if (PEN) return PEN;
  PEN = document.createElement('div'); PEN.id = 'urun-pencere'; PEN.className = 'urun-pencere';
  PEN.innerHTML = '<div class="up-perde" data-kapat></div><div class="up-kutu" role="dialog" aria-modal="true"><button type="button" class="up-kapat" data-kapat aria-label="Kapat">✕</button><div class="up-ic"></div></div>';
  document.body.appendChild(PEN);
  PEN.addEventListener('click', e => {
    e.stopPropagation();
    if (e.target.closest('[data-kapat]')) {
      // açılış dokunuşunun perdeye düşmesine karşı kısa koruma
      if (e.target.classList.contains('up-perde') && Date.now() - PEN_ZAMAN < 450) return;
      return pencereKapat();
    }
    const y = e.target.closest('[data-yaninda]'); if (y) return urunAc(y.dataset.yaninda);
    const ey = e.target.closest('[data-eylem]'); if (ey) { e.preventDefault(); eylem(ey.dataset.eylem, ey.dataset); }
  });
  addEventListener('keydown', e => { if (e.key === 'Escape') pencereKapat(); });
  return PEN;
}
function pencereAc(html) {
  const pen = pencereKur();
  clearTimeout(PEN_SAYAC);
  pen.querySelector('.up-ic').innerHTML = html;
  pen.querySelector('.up-kutu').scrollTop = 0;
  if (!pen.classList.contains('acik')) PEN_ZAMAN = Date.now();
  pen.classList.add('gorunur');
  void pen.offsetWidth;            // geçiş animasyonu için
  pen.classList.add('acik');
}
function pencereKapat() {
  if (!PEN || !PEN.classList.contains('acik')) return;
  PEN.classList.remove('acik');
  clearTimeout(PEN_SAYAC);
  PEN_SAYAC = setTimeout(() => { if (!PEN.classList.contains('acik')) PEN.classList.remove('gorunur'); }, 300);
}

/* ---------- ürün detayı (QR menü, menü sayfası, anasayfa kartları) ---------- */
const URUNLER = MENU.flatMap(g => g.urunler);
function urunAc(ad) {
  const u = URUNLER.find(x => x.ad === ad);
  if (!u) return;
  const y = u.yaninda && URUNLER.find(x => x.ad === u.yaninda);
  pencereAc(`
    <div class="up-foto"><img src="${IMG}${u.img}-orta.webp" alt="${u.ad}"></div>
    <div class="up-metin">
      ${u.rozet ? `<div class="rozetler">${u.rozet.map(r => `<span class="rozet ${/Yeni|En çok/.test(r) ? 'koz' : ''}">${r}</span>`).join('')}</div>` : ''}
      <div class="up-baslik"><h2>${u.ad}</h2><span class="fiyat">${TL(u.fiyat)}</span></div>
      <p class="up-detay">${u.detay || u.aciklama}</p>
      <h4>İçindekiler</h4><div class="up-cipler">${u.aciklama.split(/,| ve | ile/).map(x => x.trim()).filter(Boolean).map(x => `<span>${x}</span>`).join('')}</div>
      ${u.alerjen ? `<h4>Alerjen bilgisi</h4><p class="up-alerjen">${u.alerjen}</p>` : ''}
      ${y ? `<h4>Yanında iyi gider</h4><button type="button" class="up-yaninda" data-yaninda="${y.ad}"><img src="${IMG}${y.img}-kare.webp" alt=""><span><b>${y.ad}</b><small>${TL(y.fiyat)}</small></span><i>→</i></button>` : ''}
      ${SAYFA === 'qr' ? '<p class="up-not">Siparişinizi garsonumuza iletebilirsiniz.</p>' : '<button type="button" class="btn btn-koz up-siparis" data-eylem="siparis">Sipariş ver →</button>'}
    </div>`);
}
function urunDetay(kok, secici) {
  kok.addEventListener('click', e => { const o = e.target.closest(secici); if (o && o.dataset.urun) { e.preventDefault(); urunAc(o.dataset.urun); } });
  kok.addEventListener('keydown', e => { const o = e.target.closest(secici); if (o && e.key === 'Enter' && o.tagName !== 'BUTTON') urunAc(o.dataset.urun); });
}

/* ---------- hızlı eylemler: ara, sipariş, yol tarifi, instagram ---------- */
const ICON = {
  tel: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  yol: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
};
function telDugme(etiket, sinif = 'btn-koz') {
  return ILETISIM.tel
    ? `<a class="btn ${sinif} ey-tam" href="tel:${ILETISIM.tel}">${ICON.tel} ${etiket}</a>`
    : `<button type="button" class="btn ${sinif} ey-tam" data-eylem="numara">${ICON.tel} ${etiket}</button>`;
}
function eylem(tur, veri = {}) {
  if (tur === 'ara') {
    pencereAc(`<div class="up-metin ey">
      <span class="ust-yazi">Dönerus</span><h2>Bizi arayın</h2>
      <p class="up-detay">Çağrı merkezimizden ya da size en yakın şubeden sipariş verebilirsiniz.</p>
      ${telDugme('Çağrı merkezini ara')}
      <h4>Şubeler</h4>
      ${SUBELER.map(s => `<div class="ey-sube"><div><b>${s.ad}</b><small>${s.il} · ${s.saat}</small></div>
        <a class="ey-ikon" href="${HARITA('Dönerus ' + s.ad)}" rel="noopener" aria-label="${s.ad} yol tarifi">${ICON.yol}</a>
        ${ILETISIM.tel ? `<a class="ey-ikon koz" href="tel:${ILETISIM.tel}" aria-label="${s.ad} ara">${ICON.tel}</a>` : `<button type="button" class="ey-ikon koz" data-eylem="numara" aria-label="${s.ad} ara">${ICON.tel}</button>`}</div>`).join('')}
    </div>`);
  } else if (tur === 'siparis') {
    pencereAc(`<div class="up-metin ey">
      <span class="ust-yazi">Paket servis</span><h2>Nereden sipariş verelim?</h2>
      <p class="up-detay">Dönerus'u en sevdiğiniz uygulamada bulun ya da doğrudan şubeyi arayın.</p>
      <div class="ey-platform">${PLATFORMLAR.map(([a, u, r]) => `<a href="${u}" rel="noopener" style="--r:${r}"><b>${a}</b><span>Siparişe git ↗</span></a>`).join('')}</div>
      ${ILETISIM.whatsapp ? `<a class="btn ey-tam ey-wp" href="https://wa.me/${ILETISIM.whatsapp}?text=${encodeURIComponent('Merhaba, sipariş vermek istiyorum.')}" rel="noopener">WhatsApp'tan sipariş ver</a>` : ''}
      ${telDugme('Telefonla sipariş', 'btn-cizgi-koyu')}
      <a class="btn btn-hardal ey-tam" href="subeler.html">${ICON.yol} Gel-al: en yakın şube</a>
    </div>`);
  } else if (tur === 'instagram') {
    pencereAc(`<div class="ey-ig"><img src="${IMG}ig-profil.webp" alt="Dönerus Instagram profili"></div>
      <div class="up-metin ey">
        ${ILETISIM.instagram ? `<a class="btn btn-koz ey-tam" href="https://instagram.com/${ILETISIM.instagram}" rel="noopener">Instagram'da aç ↗</a>` : '<p class="up-not">Örnek profil tasarımı. Marka hesabı eklenince bu düğme doğrudan Instagram\'ı açar.</p>'}
      </div>`);
  } else if (tur === 'numara') {
    const k = PEN && PEN.querySelector('.ey-uyari');
    const html = '<p class="ey-uyari">📞 Bu bir tasarım önerisi: şube numaraları markadan alınınca bu düğme telefonu doğrudan arar.</p>';
    if (k) { k.classList.remove('titre'); void k.offsetWidth; k.classList.add('titre'); }
    else if (PEN && PEN.classList.contains('acik')) PEN.querySelector('.up-metin').insertAdjacentHTML('afterbegin', html);
    else pencereAc(`<div class="up-metin ey"><h2>Bizi arayın</h2>${html}</div>`);
  }
}
document.addEventListener('click', e => {
  const ey = e.target.closest('[data-eylem]');
  if (ey && !ey.closest('#urun-pencere')) { e.preventDefault(); eylem(ey.dataset.eylem, ey.dataset); }
});

/* ---------- şubeler ---------- */
const SUBELER = [
  { il: 'Şehir 1', ad: 'Örnek Cadde Şubesi', adres: 'Şube adresi markadan alınacak', saat: '10:00 – 02:00', img: 'cephe' },
  { il: 'Şehir 1', ad: 'Örnek Çarşı Şubesi', adres: 'Şube adresi markadan alınacak', saat: '10:00 – 01:00', img: 'tabela' },
  { il: 'Şehir 2', ad: 'Örnek AVM Şubesi', adres: 'AVM yemek katı · adres markadan alınacak', saat: '10:00 – 22:00', img: 'avm' },
  { il: 'Şehir 2', ad: 'Örnek Mahalle Şubesi', adres: 'Şube adresi markadan alınacak', saat: '10:00 – 00:00', img: 'ic-mekan' },
];
function subelerSayfasi() {
  const kok = document.getElementById('sube-liste');
  if (!kok) return;
  const iller = ['Tümü', ...new Set(SUBELER.map(s => s.il))];
  const filtre = document.getElementById('sube-filtre');
  const ciz = il => {
    kok.innerHTML = SUBELER.filter(s => il === 'Tümü' || s.il === il).map(s => `<article class="sube"><img src="${IMG}${s.img}-orta.webp" alt="${s.ad} şubesi" loading="lazy"><div class="sube-ic">
      <span class="durum">Şu an açık</span><h3>${s.ad}</h3><p>${s.adres}<br>${s.il} · ${s.saat}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><a class="btn btn-cizgi" style="padding:10px 16px;font-size:14px" href="iletisim.html" data-eylem="ara">Ara</a><a class="btn btn-cizgi" style="padding:10px 16px;font-size:14px" href="${HARITA('Dönerus ' + s.ad)}" rel="noopener">Yol tarifi</a><a class="btn btn-koz" style="padding:10px 16px;font-size:14px" href="qr.html">Menü</a></div></div></article>`).join('');
    filtre.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.textContent === il));
  };
  filtre.innerHTML = iller.map(i => `<button aria-pressed="false">${i}</button>`).join('');
  filtre.onclick = e => { if (e.target.tagName === 'BUTTON') ciz(e.target.textContent); };
  ciz('Tümü');
}

/* ---------- franchise başvuru formu ---------- */
const ANAHTAR = 'donerus_basvurular';
const basvurular = () => { try { return JSON.parse(localStorage.getItem(ANAHTAR)) || null; } catch { return null; } };
const kaydet = l => { try { localStorage.setItem(ANAHTAR, JSON.stringify(l)); } catch {} };
const ORNEK_BASVURU = [
  { no: 'DNR-2026-0142', tarih: '2026-10-06', ad: 'Murat Yıldız', tel: '0532 000 00 01', eposta: 'murat@ornek.com', il: 'Bursa', ilce: 'Nilüfer', tip: 'Cadde', mulk: 'Kira', butce: '15 – 20 milyon TL', deneyim: '8', meslek: 'Restoran işletmecisi', durum: 'Görüşme planlandı' },
  { no: 'DNR-2026-0141', tarih: '2026-10-05', ad: 'Elif Kaya', tel: '0533 000 00 02', eposta: 'elif@ornek.com', il: 'Antalya', ilce: 'Muratpaşa', tip: 'AVM', mulk: 'Henüz yok', butce: '12 – 15 milyon TL', deneyim: '3', meslek: 'Mağaza müdürü', durum: 'Lokasyon incelemede' },
  { no: 'DNR-2026-0139', tarih: '2026-10-03', ad: 'Hasan Demir', tel: '0535 000 00 03', eposta: 'hasan@ornek.com', il: 'Konya', ilce: 'Selçuklu', tip: 'Cadde', mulk: 'Kendi mülkü', butce: '20 milyon TL ve üzeri', deneyim: '12', meslek: 'Gıda toptancısı', durum: 'Onaylandı' },
  { no: 'DNR-2026-0137', tarih: '2026-10-01', ad: 'Zeynep Arslan', tel: '0536 000 00 04', eposta: 'zeynep@ornek.com', il: 'İzmir', ilce: 'Bornova', tip: 'Cadde', mulk: 'Kira', butce: '12 – 15 milyon TL', deneyim: '0', meslek: 'Mühendis', durum: 'Yeni' },
  { no: 'DNR-2026-0135', tarih: '2026-09-29', ad: 'Can Öztürk', tel: '0537 000 00 05', eposta: 'can@ornek.com', il: 'Kayseri', ilce: 'Kocasinan', tip: 'Diğer', mulk: 'Henüz yok', butce: '12 milyon TL altı', deneyim: '1', meslek: 'Serbest meslek', durum: 'Uygun bulunmadı' },
];
function puanla(b) {
  let p = 40;
  p += Math.min(+b.deneyim || 0, 10) * 3;
  p += { 'Kendi mülkü': 15, 'Kira': 10, 'Henüz yok': 0 }[b.mulk] || 0;
  p += { '20 milyon TL ve üzeri': 15, '15 – 20 milyon TL': 12, '12 – 15 milyon TL': 8, '12 milyon TL altı': 0 }[b.butce] || 0;
  return Math.min(p, 100);
}
function basvuruFormu() {
  const form = document.getElementById('basvuru-formu');
  if (!form) return;
  const adimlar = [...form.querySelectorAll('.form-adim')];
  const isaretler = [...document.querySelectorAll('.form-adimlar li')];
  const ilerleme = document.querySelector('.ilerleme i');
  let aktif = 0;
  const goster = i => {
    aktif = i;
    adimlar.forEach((a, j) => a.classList.toggle('aktif', j === i));
    isaretler.forEach((l, j) => { l.classList.toggle('aktif', j === i); l.classList.toggle('tamam', j < i); });
    ilerleme.style.width = ((i + 1) / adimlar.length * 100) + '%';
    form.querySelector('[data-geri]').style.visibility = i ? 'visible' : 'hidden';
    form.querySelector('[data-ileri]').innerHTML = i === adimlar.length - 1 ? 'Başvuruyu gönder <span class="ok">→</span>' : 'Devam <span class="ok">→</span>';
  };
  const dogrula = () => {
    let tamam = true;
    adimlar[aktif].querySelectorAll('[required]').forEach(g => {
      const alan = g.closest('.alan') || g.closest('.onay');
      let gecerli = g.type === 'checkbox' ? g.checked : g.type === 'radio' ? !!form.querySelector(`[name="${g.name}"]:checked`) : g.value.trim() !== '';
      if (gecerli && g.type === 'email') gecerli = /\S+@\S+\.\S+/.test(g.value);
      if (gecerli && g.name === 'tel') gecerli = g.value.replace(/\D/g, '').length >= 10;
      alan && alan.classList.toggle('hata', !gecerli);
      if (!gecerli) tamam = false;
    });
    return tamam;
  };
  form.querySelector('[data-ileri]').onclick = () => {
    if (!dogrula()) return;
    if (aktif < adimlar.length - 1) return goster(aktif + 1);
    const v = Object.fromEntries(new FormData(form));
    const liste = basvurular() || ORNEK_BASVURU.slice();
    const no = 'DNR-2026-0' + (143 + liste.length - ORNEK_BASVURU.length);
    liste.unshift({ no, tarih: new Date().toISOString().slice(0, 10), durum: 'Yeni', yeni: true, ...v });
    kaydet(liste);
    form.querySelector('.form-icerik').style.display = 'none';
    const b = form.querySelector('.basari');
    b.querySelector('code').textContent = no;
    b.classList.add('aktif');
    isaretler.forEach(l => { l.classList.remove('aktif'); l.classList.add('tamam'); });
    ilerleme.style.width = '100%';
  };
  form.querySelector('[data-geri]').onclick = () => goster(Math.max(0, aktif - 1));
  form.addEventListener('input', e => { const a = e.target.closest('.alan,.onay'); a && a.classList.remove('hata'); });
  const tel = form.querySelector('[name=tel]');
  tel.addEventListener('input', () => {
    const d = tel.value.replace(/\D/g, '').slice(0, 11);
    tel.value = [d.slice(0, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)].filter(Boolean).join(' ');
  });
  goster(0);
}

/* ---------- başvuru takip paneli ---------- */
const DURUMLAR = { 'Yeni': 'd-yeni', 'Görüşme planlandı': 'd-gorusme', 'Lokasyon incelemede': 'd-lokasyon', 'Onaylandı': 'd-onay', 'Uygun bulunmadı': 'd-red' };
function panel() {
  const tbody = document.getElementById('panel-satirlar');
  if (!tbody) return;
  let liste = basvurular() || ORNEK_BASVURU.slice();
  const ciz = () => {
    const ara = (document.getElementById('panel-ara').value || '').toLocaleLowerCase('tr');
    const dsec = document.getElementById('panel-durum').value;
    const gor = liste.filter(b => (!dsec || b.durum === dsec) && (!ara || [b.ad, b.il, b.ilce, b.no].join(' ').toLocaleLowerCase('tr').includes(ara)));
    tbody.innerHTML = gor.map(b => { const p = puanla(b); return `<tr data-no="${b.no}" class="${b.yeni ? 'yeni' : ''}">
      <td><b style="color:var(--komur)">${b.ad}</b><br><span style="color:var(--metin-2);font-size:13px">${b.no}</span></td>
      <td>${b.il} / ${b.ilce}</td><td>${b.tip}</td><td>${b.butce}</td>
      <td><span class="puan"><i><b style="width:${p}%"></b></i>${p}</span></td>
      <td><span class="etiket-d ${DURUMLAR[b.durum]}">${b.durum}</span></td>
      <td style="color:var(--metin-2)">${new Date(b.tarih).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}</td></tr>`; }).join('') ||
      '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--metin-2)">Bu filtreye uyan başvuru yok.</td></tr>';
    const say = d => liste.filter(b => b.durum === d).length;
    document.getElementById('o-toplam').textContent = liste.length;
    document.getElementById('o-yeni').textContent = say('Yeni');
    document.getElementById('o-gorusme').textContent = say('Görüşme planlandı') + say('Lokasyon incelemede');
    document.getElementById('o-onay').textContent = say('Onaylandı');
  };
  const cekmece = document.getElementById('cekmece'), perde = document.getElementById('perde');
  const kapat = () => { cekmece.classList.remove('acik'); perde.classList.remove('acik'); };
  perde.onclick = kapat;
  tbody.onclick = e => {
    const tr = e.target.closest('tr[data-no]'); if (!tr) return;
    const b = liste.find(x => x.no === tr.dataset.no);
    cekmece.innerHTML = `<div class="cekmece-ust"><div><span class="ust-yazi">${b.no}</span><h3 style="margin-top:6px">${b.ad}</h3><p style="color:var(--metin-2);font-size:14px">${b.meslek || ''} · ${b.deneyim || 0} yıl sektör deneyimi</p></div><button class="btn btn-cizgi" style="padding:8px 14px" aria-label="Kapat">✕</button></div>
      <div class="cekmece-govde">
      <div class="bilgi"><div><span>Telefon</span><b>${b.tel}</b></div><div><span>E-posta</span><b>${b.eposta}</b></div><div><span>Lokasyon</span><b>${b.il} / ${b.ilce}</b></div><div><span>Tip</span><b>${b.tip}</b></div><div><span>Mülk</span><b>${b.mulk}</b></div><div><span>Bütçe</span><b>${b.butce}</b></div><div><span>Başvuru tarihi</span><b>${new Date(b.tarih).toLocaleDateString('tr-TR')}</b></div><div><span>Ön puan</span><b>${puanla(b)} / 100</b></div></div>
      ${b.neden ? `<div><span class="ust-yazi">Neden Dönerus?</span><p style="margin-top:8px">${b.neden}</p></div>` : ''}
      <div class="alan"><label>Durum</label><select id="durum-sec">${Object.keys(DURUMLAR).map(d => `<option ${d === b.durum ? 'selected' : ''}>${d}</option>`).join('')}</select></div>
      <div class="alan"><label>Not</label><textarea id="not" rows="3" placeholder="Görüşme notu ekleyin">${b.not || ''}</textarea></div>
      <button class="btn btn-koz" id="kaydet" style="justify-content:center">Kaydet</button></div>`;
    cekmece.querySelector('.cekmece-ust button').onclick = kapat;
    cekmece.querySelector('#kaydet').onclick = () => { b.durum = cekmece.querySelector('#durum-sec').value; b.not = cekmece.querySelector('#not').value; delete b.yeni; kaydet(liste); ciz(); kapat(); };
    cekmece.classList.add('acik'); perde.classList.add('acik');
  };
  document.getElementById('panel-ara').oninput = ciz;
  document.getElementById('panel-durum').onchange = ciz;
  document.getElementById('panel-sifirla').onclick = () => { liste = ORNEK_BASVURU.slice(); kaydet(liste); ciz(); };
  addEventListener('storage', () => { liste = basvurular() || liste; ciz(); });
  ciz();
}

/* ---------- iletişim formu ---------- */
function iletisimFormu() {
  const f = document.getElementById('iletisim-formu');
  if (!f) return;
  f.onsubmit = e => { e.preventDefault(); f.innerHTML = '<div class="basari aktif"><div class="tik"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F2E8D8" stroke-width="2.5"><path d="M5 12l5 5 9-10"/></svg></div><h3>Mesajınız bize ulaştı</h3><p style="color:var(--metin-2)">Müşteri ilişkileri ekibimiz en geç bir iş günü içinde size dönecek.</p></div>'; };
}

ustMenu(); altBilgi(); if (SAYFA === 'anasayfa') urunDetay(document.querySelector('main'), '.j-urun'); menuSayfasi(); qrMenu(); subelerSayfasi(); basvuruFormu(); panel(); iletisimFormu();
gorunme(); sayaclar();

/* Android uygulama içi tarayıcılar (WhatsApp, Instagram) PDF açamaz: belge görüntüleyiciye yönlendir */
(function(){if(!/Android/.test(navigator.userAgent)||!/; wv\)|WhatsApp|Instagram|FBAN|FBAV/.test(navigator.userAgent))return;
document.querySelectorAll('a[href$=".pdf"]').forEach(function(a){a.removeAttribute('download');a.href='https://docs.google.com/viewer?url='+encodeURIComponent(a.href);});})();

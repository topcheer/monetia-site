/* ============================================================
   Moneta — site.js
   i18n (zh/en) · reveal · pointer parallax · film dialog
   ============================================================ */
document.documentElement.classList.add('js');
const I18N = {
  zh: {
    'meta.title': 'Moneta — 会听会看的 AI 记账本', 'meta.desc': 'Moneta：语音、拍照、对话三种方式 AI 自动记账。预算、报表、多币种、iCloud 同步，本地优先。iPhone、iPad、Mac。', 'meta.og': 'Moneta — 会听会看的 AI 记账本',
    'nav.ways': '三种方式', 'nav.details': '细节', 'nav.mac': 'Mac', 'nav.privacy': '隐私', 'nav.support': '支持', 'nav.store': 'App Store',
    'hero.eyebrow': 'Juno Moneta · AI 记账',
    'hero.title': '钱的事，<br><em>一句话</em>。',
    'hero.lead': '说一句、拍一张、聊两句——Moneta 自动入账。预算、报表、多币种、iCloud 同步，数据本地优先。',
    'hero.cta': 'App Store 下载', 'hero.film': '观看影片',
    'hero.meta1': 'iPhone · iPad · Mac', 'hero.meta2': '7 种语言', 'hero.meta3': '本地优先 · iCloud 同步',
    'hero.chip1k': '今日', 'hero.chip2k': '本月预算', 'hero.chip3k': '小票已入账', 'hero.scroll': '向下',
    'ways.eyebrow': '三种方式', 'ways.title': '说一句，拍一张，<br><em>聊两句</em>。',
    'ways.lead': 'AI 全都听得懂、看得懂。地铁上、餐桌边、开车后，掏出手机三秒记完。',
    'ways.t1.kicker': '拍一张', 'ways.t1.title': '小票变记录', 'ways.t1.desc': '扫描收据或发票，OCR 与 AI 自动提取金额、商户、日期与分类，确认即入账。',
    'ways.t1.tagk': '已识别', 'ways.t1.tagv': '−¥128.50', 'ways.t1.li1': '逐张识别，一次最多 3 张', 'ways.t1.li2': '邮件文本直接粘贴解析', 'ways.t1.li3': '显示置信度，方便核对',
    'ways.t2.kicker': '聊两句', 'ways.t2.title': '和钱对话', 'ways.t2.desc': '像聊天一样管理账本："这个月餐饮花了多少？""把昨天那笔改成 50。"增删改查，自然语言全搞定。',
    'ways.t2.tagk': '本月餐饮', 'ways.t2.tagv': '¥3,870', 'ways.t2.li1': '预算执行一目了然', 'ways.t2.li2': 'AI 思考中可随时停止', 'ways.t2.li3': '可接入任意 OpenAI 兼容接口',
    'ways.t3.kicker': '看一眼', 'ways.t3.title': '钱的去向', 'ways.t3.desc': '分类占比、支出趋势，日 / 周 / 月 / 年四个视角看清钱去哪儿了。',
    'ways.t3.tagk': '本月支出', 'ways.t3.tagv': '¥5,028', 'ways.t3.li1': '预算 80% 预警、100% 超支提醒', 'ways.t3.li2': '锁屏与小组件实时显示', 'ways.t3.li3': 'CSV 随时导入导出',
    'bento.eyebrow': '细节', 'bento.title': '每一处，<em>皆讲究</em>。',
    'bento.lead': '从小组件到桌面，从 26 种货币到 7 种语言——Moneta 在每一个尺寸上都保持克制与清晰。',
    'bento.a.k': 'Mac Catalyst', 'bento.a.t': '大屏，更从容', 'bento.a.p': 'AI 对话、报表与明细在桌面上并排展开，宽屏重新排版。',
    'bento.w.today': '今日', 'bento.w.month': '本月', 'bento.w.budget': '预算', 'bento.w.live': '小组件',
    'bento.c.k': '种货币 · 自动折算', 'bento.d.k': '预算', 'bento.d.l': '本月已用 63%，还剩 ¥2,972。',
    'bento.e.l': '种语言：中 · 英 · 日 · 韩 · 德 · 西 · 俄。',
    'bento.f.k': '明细', 'bento.f.t': '每一笔，有着落', 'bento.f.p': '按日分组、备注可搜、分享即入账。',
    'bento.g.k': '总览', 'bento.g.t': '本月净结余', 'bento.g.p': '收入与支出一眼掌握，预算进度实时更新。',
    'mac.eyebrow': 'Mac Catalyst', 'mac.title': '从口袋，<br><em>到桌面</em>。',
    'mac.lead': '同一本账，iPhone、iPad、Mac 经 iCloud 自动同步，无需注册账号。桌面端为宽屏重新排版。',
    'privacy.eyebrow': '隐私', 'privacy.title': '你的数据，<br><em>只属于你</em>。',
    'privacy.lead': '本地优先存储。无广告、无追踪、不贩卖数据。',
    'privacy.p1b': '本地优先', 'privacy.p1': '账本默认存储在你的设备上，我们不运营存放账目的服务器。',
    'privacy.p2b': '按需 AI', 'privacy.p2': '仅在发出请求时处理，可随时导出 CSV 带走全部数据。',
    'privacy.p3b': 'iCloud 同步', 'privacy.p3': '走你自己的 iCloud 私有库，端到端由 Apple 保障。',
    'privacy.link': '阅读隐私政策 →',
    'final.eyebrow': '现在开始', 'final.title': 'Say it. Snap it. <em>Done.</em>',
    'final.lead': 'Moneta 已在 App Store 上架，iPhone、iPad、Mac 一次购买通用。',
    'final.cta': 'App Store 下载', 'footer.made': '以 ❤️ 与 AI 打造',
    'marquee': ['会听 · 会看 · 会记', 'CNY', 'USD', 'EUR', 'JPY', 'GBP', 'KRW', '本地优先', 'iCloud 同步', 'Mac · iPad · iPhone', '7 种语言', '预算 · 报表 · 小组件']
  },
  en: {
    'meta.title': 'Moneta — The AI ledger that listens, sees & records', 'meta.desc': 'Say it, snap it, chat it — Moneta books it for you. Budgets, reports, multi-currency, iCloud sync. Local-first.', 'meta.og': 'Moneta — The AI ledger that listens, sees & records',
    'nav.ways': 'Three ways', 'nav.details': 'Details', 'nav.mac': 'Mac', 'nav.privacy': 'Privacy', 'nav.support': 'Support', 'nav.store': 'App Store',
    'hero.eyebrow': 'Juno Moneta · The AI ledger',
    'hero.title': 'Money, in <em>one sentence</em>.',
    'hero.lead': 'Say it, snap it, chat it — Moneta books it for you. Budgets, reports, multi-currency, iCloud sync. Local-first.',
    'hero.cta': 'Download on App Store', 'hero.film': 'Watch the film',
    'hero.meta1': 'iPhone · iPad · Mac', 'hero.meta2': '7 languages', 'hero.meta3': 'Local-first · iCloud sync',
    'hero.chip1k': 'Today', 'hero.chip2k': 'Monthly budget', 'hero.chip3k': 'Receipt booked', 'hero.scroll': 'Scroll',
    'ways.eyebrow': 'Three ways', 'ways.title': 'Say it, snap it, <br><em>chat it</em>.',
    'ways.lead': 'The AI understands all of them. On the train, at the table, after the drive — three seconds and it is booked.',
    'ways.t1.kicker': 'Snap', 'ways.t1.title': 'A receipt becomes a record', 'ways.t1.desc': 'Scan a receipt or invoice. OCR and AI extract the amount, merchant, date and category — confirm and it is booked.',
    'ways.t1.tagk': 'Recognized', 'ways.t1.tagv': '−¥128.50', 'ways.t1.li1': 'Up to 3 receipts, recognized one by one', 'ways.t1.li2': 'Paste email text, get a record', 'ways.t1.li3': 'Confidence shown so you can double-check',
    'ways.t2.kicker': 'Ask', 'ways.t2.title': 'Talk to your money', 'ways.t2.desc': 'Manage your ledger by chatting: "How much on food this month?" "Change yesterday\\u2019s one to 50." Create, update, query — all natural language.',
    'ways.t2.tagk': 'Dining this month', 'ways.t2.tagv': '¥3,870', 'ways.t2.li1': 'Budget at a glance', 'ways.t2.li2': 'Stop the AI mid-thought', 'ways.t2.li3': 'Bring any OpenAI-compatible endpoint',
    'ways.t3.kicker': 'See', 'ways.t3.title': 'Where it all goes', 'ways.t3.desc': 'Category share and spending trends across day, week, month and year views.',
    'ways.t3.tagk': 'This month', 'ways.t3.tagv': '¥5,028', 'ways.t3.li1': '80% warning, 100% over-budget alert', 'ways.t3.li2': 'Live on your Lock Screen and widgets', 'ways.t3.li3': 'CSV in and out anytime',
    'bento.eyebrow': 'Details', 'bento.title': 'Considered, <em>everywhere</em>.',
    'bento.lead': 'From the widget to the desktop, 26 currencies to 7 languages — Moneta stays restrained and clear at every size.',
    'bento.a.k': 'Mac Catalyst', 'bento.a.t': 'Room to breathe', 'bento.a.p': 'AI chat, reports and the ledger side by side — re-laid-out for wide screens.',
    'bento.w.today': 'Today', 'bento.w.month': 'This month', 'bento.w.budget': 'Budget', 'bento.w.live': 'Widget',
    'bento.c.k': 'currencies · auto-converted', 'bento.d.k': 'Budget', 'bento.d.l': '63% used this month, ¥2,972 to go.',
    'bento.e.l': 'languages: EN · ZH · JA · KO · DE · ES · RU.',
    'bento.f.k': 'Ledger', 'bento.f.t': 'Every entry, accounted', 'bento.f.p': 'Grouped by day, searchable notes, share-to-book.',
    'bento.g.k': 'Overview', 'bento.g.t': 'Net balance this month', 'bento.g.p': 'Income and expense at a glance, budget updating live.',
    'mac.eyebrow': 'Mac Catalyst', 'mac.title': 'From pocket <br><em>to desk</em>.',
    'mac.lead': 'One ledger across iPhone, iPad and Mac over iCloud — no account needed. Re-laid-out for wide screens.',
    'privacy.eyebrow': 'Privacy', 'privacy.title': 'Your data, <br><em>yours alone</em>.',
    'privacy.lead': 'Local-first. No ads, no trackers, no data broking.',
    'privacy.p1b': 'Local-first', 'privacy.p1': 'Your ledger lives on your device; we run no servers that hold it.',
    'privacy.p2b': 'AI on demand', 'privacy.p2': 'Processed only when you ask. Export everything as CSV anytime.',
    'privacy.p3b': 'iCloud sync', 'privacy.p3': 'Through your own private iCloud database, protected by Apple.',
    'privacy.link': 'Read the Privacy Policy →',
    'final.eyebrow': 'Get started', 'final.title': 'Say it. Snap it. <em>Done.</em>',
    'final.lead': 'Moneta is on the App Store — one purchase for iPhone, iPad and Mac.',
    'final.cta': 'Download on App Store', 'footer.made': 'Made with ❤️ & AI',
    'marquee': ['Listens · Sees · Records', 'CNY', 'USD', 'EUR', 'JPY', 'GBP', 'KRW', 'Local-first', 'iCloud sync', 'Mac · iPad · iPhone', '7 languages', 'Budgets · Reports · Widgets']
  }
};

const store = 'moneta.lang';
// Pages generated by scripts/build-site.mjs carry data-lang: their text is
// static and must stay in that language (the button navigates instead).
const forced = document.documentElement.dataset.lang || '';
let lang = forced || localStorage.getItem(store) || ((navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en');

function applyLang() {
  const d = I18N[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-t]').forEach(el => { const v = d[el.dataset.t]; if (v != null) el.textContent = v; });
  document.querySelectorAll('[data-t-html]').forEach(el => { const v = d[el.dataset.tHtml]; if (v != null) el.innerHTML = v; });
  document.getElementById('langbtn').textContent = lang === 'zh' ? 'EN' : '中文';
  document.title = lang === 'zh' ? 'Moneta — 会听会看的 AI 记账本' : 'Moneta — The AI ledger that listens, sees & records';
  // marquee (duplicated for a seamless loop)
  const items = d.marquee.map(s => `<span>${s}</span>`).join('');
  document.getElementById('marquee').innerHTML = items + items;
}
document.getElementById('langbtn').addEventListener('click', e => {
  if (forced) return; // <a href="/"> handles it on mirror pages
  e.preventDefault();
  lang = lang === 'zh' ? 'en' : 'zh'; localStorage.setItem(store, lang); applyLang();
});

/* nav state */
const hdr = document.getElementById('hdr');
const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 24);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

/* reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* pointer parallax: hero stage + spotlight */
const stage = document.getElementById('stage'), layer = document.getElementById('layer'), spot = document.getElementById('spot'), hero = document.querySelector('.hero');
const fine = matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches;
if (fine && stage) {
  let tx = 0, ty = 0, cx = 0, cy = 0;
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width - 0.5; ty = (e.clientY - r.top) / r.height - 0.5;
    spot.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    spot.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
  hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; });
  (function tick() {
    cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
    layer.style.transform = `rotateY(${cx * 10}deg) rotateX(${-cy * 8}deg)`;
    requestAnimationFrame(tick);
  })();
}

/* laptop tilt follows pointer */
const laptop = document.getElementById('laptop');
if (fine && laptop) {
  const tilt = laptop.querySelector('.tilt');
  laptop.addEventListener('pointermove', e => {
    const r = laptop.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `rotateX(${4 - y * 6}deg) rotateY(${x * 8}deg)`;
  });
  laptop.addEventListener('pointerleave', () => { tilt.style.transform = 'rotateX(10deg)'; });
}

/* film dialog */
const dlg = document.getElementById('filmDialog'), fv = dlg.querySelector('video');
const open = () => { dlg.showModal(); fv.currentTime = 0; fv.play().catch(() => {}); };
document.getElementById('playfilm').addEventListener('click', open);
document.getElementById('playfilm2').addEventListener('click', open);
document.getElementById('filmClose').addEventListener('click', () => dlg.close());
dlg.addEventListener('close', () => fv.pause());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

applyLang();

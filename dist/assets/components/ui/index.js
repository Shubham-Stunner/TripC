export const el = (tag, attrs = {}, ...children) => { const node = document.createElement(tag); Object.entries(attrs || {}).forEach(([k, v]) => { if (k === 'class')
    node.className = String(v);
else if (k.startsWith('on') && typeof v === 'function')
    node.addEventListener(k.slice(2).toLowerCase(), v);
else if (v !== false && v != null)
    node.setAttribute(k, String(v)); }); children.flat().forEach(c => node.append(c instanceof Node ? c : document.createTextNode(String(c)))); return node; };
export const card = (...c) => el('section', { class: 'card stack' }, ...c);
export const button = (label, cls = 'primary', onClick) => el('button', { class: `btn ${cls}`, onClick }, label);
export const emptyState = (title, body, action) => el('div', { class: 'panel stack' }, el('div', { class: 'eyebrow' }, 'Empty state'), el('h2', {}, title), el('p', { class: 'muted' }, body), action || '');
export const skeleton = () => el('div', { class: 'grid three' }, ...Array.from({ length: 3 }, () => el('div', { class: 'card' }, 'Loading…')));

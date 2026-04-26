module.exports = [
"[project]/components/HowItWorksScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorksScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function HowItWorksScroll() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const track = document.querySelector('.hw-track');
        const spine = document.getElementById('hwSpineFill');
        const ring = document.querySelector('.hw-rail-ring-fill');
        const pctEl = document.getElementById('hwRailPct');
        const labelEl = document.getElementById('hwRailLabel');
        const chapEl = document.getElementById('hwRailChap');
        const rail = document.querySelector('.hw-rail');
        if (!track || !spine || !ring) return;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const milestones = Array.from(track.querySelectorAll('.hw-ms'));
        const chapters = Array.from(track.querySelectorAll('.hw-chapter'));
        const RING_CIRC = 163.36;
        function setProgress(pct) {
            pct = Math.max(0, Math.min(100, pct));
            spine.style.height = pct + '%';
            ring.style.strokeDashoffset = String(RING_CIRC * (1 - pct / 100));
            if (pctEl) pctEl.textContent = Math.round(pct) + '%';
        }
        function updateActiveMilestone(scrollMid) {
            let active = null;
            for (const el of milestones){
                const r = el.getBoundingClientRect();
                if (r.top + r.height / 2 < scrollMid) active = el;
            }
            milestones.forEach((el)=>el.classList.toggle('is-active', el === active));
            if (active && labelEl && chapEl) {
                labelEl.textContent = active.dataset.day || '';
                let chap = null;
                for (const c of chapters){
                    const r = c.getBoundingClientRect();
                    if (r.top < scrollMid) chap = c;
                }
                if (chap) chapEl.textContent = chap.dataset.label || '';
            } else {
                if (labelEl) labelEl.textContent = 'Pre-kickoff';
                if (chapEl) chapEl.textContent = 'Chapter 01 · Connect';
            }
        }
        function update() {
            const rect = track.getBoundingClientRect();
            const vh = window.innerHeight;
            const total = rect.height + vh;
            const passed = Math.min(Math.max(vh - rect.top, 0), total);
            const progress = passed / total * 100;
            setProgress(progress);
            updateActiveMilestone(vh / 2);
        }
        if (!reduced && 'IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries)=>{
                entries.forEach((e)=>{
                    if (e.isIntersecting) {
                        e.target.classList.add('is-visible');
                        io.unobserve(e.target);
                    }
                });
            }, {
                rootMargin: '0px 0px -12% 0px',
                threshold: 0.08
            });
            milestones.forEach((el)=>io.observe(el));
            chapters.forEach((el)=>io.observe(el));
        } else {
            milestones.forEach((el)=>el.classList.add('is-visible'));
            chapters.forEach((el)=>el.classList.add('is-visible'));
        }
        let ticking = false;
        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(()=>{
                    update();
                    ticking = false;
                });
                ticking = true;
            }
        }
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        window.addEventListener('resize', onScroll);
        update();
        if ('IntersectionObserver' in window && rail) {
            const railIo = new IntersectionObserver((entries)=>{
                entries.forEach((e)=>rail.classList.toggle('is-active', e.isIntersecting));
            }, {
                rootMargin: '-30% 0px -40% 0px'
            });
            railIo.observe(track);
        }
        return ()=>{
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=components_HowItWorksScroll_tsx_0tm~lm_._.js.map
(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        r(c);
    new MutationObserver(c => {
        for (const f of c)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && r(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity),
        c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function r(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const f = s(c);
        fetch(c.href, f)
    }
}
)();

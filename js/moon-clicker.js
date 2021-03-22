function soundClick() {
    document.getElementById("click").play()
}

function soundBuy() {
    document.getElementById("buy").play()
}

function nFormatter(e, t) {
    var o, r = [{
        value: 1,
        symbol: ""
    }, {
        value: 1e3,
        symbol: "k"
    }, {
        value: 1e6,
        symbol: "m"
    }, {
        value: 1e9,
        symbol: "b"
    }, {
        value: 1e12,
        symbol: "t"
    }, {
        value: 1e15,
        symbol: "qa"
    }, {
        value: 1e18,
        symbol: "qu"
    }, {
        value: 1e21,
        symbol: "u"
    }, {
        value: 1e23,
        symbol: "de"
    }, {
        value: 1e26,
        symbol: " $devooooyt's"
    }];
    for (o = r.length - 1; o > 0 && !(e >= r[o].value); o--);
    return (e / r[o].value).toFixed(2) + r[o].symbol
}(function() {
    var e, t, o, r, a, n, s, u, l, c, m, i, d, y, g, p, I, S;
    S = "undefined" != typeof exports && null !== exports ? exports : this, s = parseInt(localStorage.getItem("mCash")) || 0, o = parseInt(localStorage.getItem("workers")) || 0, m = parseInt(localStorage.getItem("astronauts")) || 0, n = parseInt(localStorage.getItem("spacecraft")) || 0, u = parseInt(localStorage.getItem("rocketships")) || 0, g = parseInt(localStorage.getItem("rocketships")) || 0, r = parseInt(localStorage.getItem("workerCost")) || 15, i = parseInt(localStorage.getItem("astroCost")) || 100, t = parseInt(localStorage.getItem("spacecraftCost")) || 1100, y = parseInt(localStorage.getItem("rocketCost")) || 12e3, p = parseInt(localStorage.getItem("spacestionCost")) || 24e4, a = parseInt(localStorage.getItem("wMult")) || .1, c = parseInt(localStorage.getItem("aMult")) || 1, e = parseInt(localStorage.getItem("sMult")) || 8, l = parseInt(localStorage.getItem("rMult")) || 15, I = parseInt(localStorage.getItem("ssMult")) || 24, d = !1, S.clickyBud = function() {
        return soundClick(), s++, updateNumbers()
    }, S.popupReset = function() {
        confirm("Are you sure you want to reset your progress?") && reset()
    }, S.reset = function() {
        return s = 0, o = 0, m = 0, n = 0, u = 0, g = 0, r = 15, i = 100, t = 1100, y = 12e3, p = 24e4, a = .1, c = 1, e = 8, l = 15, I = 24, updateNumbers()
    }, S.buyWorker = function() {
        return s >= r ? (soundBuy(), s -= r, o += 1, r *= 1.2) : document.querySelector("#alerts").innerHTML = "Not enough Moon Cash to buy that worker! ", updateNumbers()
    }, S.buyAstronaut = function() {
        return s >= i ? (soundBuy(), s -= i, m += 1, i *= 1.15) : document.querySelector("#alerts").innerHTML = "Not enough Moon Cash to buy that astronaut! ", updateNumbers()
    }, S.buySpacecraft = function() {
        return s >= t ? (soundBuy(), s -= t, n += 1, t *= 1.3) : document.querySelector("#alerts").innerHTML = "Not enough Moon Cash to buy that spacecraft! ", updateNumbers()
    }, S.buyRocket = function() {
        return s >= y ? (soundBuy(), s -= y, u += 1, y *= 1.3) : document.querySelector("#alerts").innerHTML = "Not enough Moon Cash to buy that rocketship! ", updateNumbers()
    }, S.buySpacestation = function() {
        return s >= p ? (soundBuy(), s -= p, g += 1, p *= 1.3) : document.querySelector("#alerts").innerHTML = "Not enough Moon Cash to buy that spacestation! ", updateNumbers()
    }, S.useCheats = function() {
        return s >= 0 ? (s += 0x3c73d60ab450b2000, soundBuy()) : document.querySelector("#alerts").innerHTML = "Unable to do that... ", updateNumbers()
    }, S.updateNumbers = function() {
        var d;
        return d = o * a + m * c + n * e + u * I + g * l, document.title = "$" + nFormatter(s) + " • Moon Clicker v4.20 • Devoooo", checkAchievements(), document.querySelector(".workersC").innerHTML = "" + o.toFixed(0), document.querySelector(".astronautsC").innerHTML = "" + m.toFixed(0), document.querySelector(".spacecraftC").innerHTML = "" + n.toFixed(0), document.querySelector(".rocketshipC").innerHTML = "" + u.toFixed(0), document.querySelector(".mCash").innerHTML = "$" + nFormatter(s.toFixed(0)), document.querySelector(".cookierate").innerHTML = "$" + nFormatter(d.toFixed(2)) + " per second", document.querySelector(".worker").innerHTML = "🧑🏻 Worker 🧑🏻 <br>$" + nFormatter(r.toFixed(2)), document.querySelector(".astronauts").innerHTML = "👦🏼 Astronaut 👦🏼 <br>$" + nFormatter(i.toFixed(2)), document.querySelector(".spacecraft").innerHTML = "🚘 Spacecraft 🚘 <br>$" + nFormatter(t.toFixed(2)), document.querySelector(".rocketships").innerHTML = "🚀 Rocketship 🚀 <br>$" + nFormatter(y.toFixed(2))
    }, S.silentProduction = function() {
        return s += o * a + m * c + n * e + u * l + g * I, S.updateNumbers()
    }, S.checkAchievements = function() {
        if (!1 === d && m >= 5) return document.querySelector("#alerts").innerHTML = "Congrats! You now have " + m + " astronauts. As a result, your workers now work 1.5x harder.", c *= 1.5, d = !0
    }, S.alertClear = function() {
        return document.querySelector("#alerts").innerHTML = '<div style="styleAlert"><center>Did you know that you could change your factory name by pressing "Moon Clicker"?</center></div>'
    }, S.saveProgress = function() {
        localStorage.setItem("mCash", s), localStorage.setItem("workers", o), localStorage.setItem("astronauts", m), localStorage.setItem("spacecraft", n), localStorage.setItem("rocketships", u), localStorage.setItem("spacestations", g), localStorage.setItem("workerCost", r), localStorage.setItem("astroCost", i), localStorage.setItem("spacecraftCost", t), localStorage.setItem("rocketCost", y), localStorage.setItem("spacestationCost", p), localStorage.setItem("wMult", a), localStorage.setItem("aMult", c), localStorage.setItem("sMult", e), localStorage.setItem("rMult", l), localStorage.setItem("ssMult", I)
    }, S.setInterval(saveProgress, 10), S.setInterval(silentProduction, 900), S.setInterval(alertClear, 5e3), updateNumbers()
}).call(this);

!function(){function e(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=parseInt(t.target.elements.delay.value),o=parseInt(t.target.elements.step.value),a=parseInt(t.target.elements.amount.value),i=1;i<=a;i++){e(i,n+(i-1)*o).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.3a3953cf.js.map

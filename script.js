<script>
  // Build seamless ticker from key facts, duplicated for infinite loop
  (function(){
    const facts = [
      "15+ ANOS DE EXPERIÊNCIA MULTIDISCIPLINAR",
      "8 FORMAÇÕES ACADÊMICAS",
      "SENTINEL‑2 · NDVI · NDRE · SAVI · NDWI",
      "PYTHON · PYTORCH · OPENCV · SCIKIT‑LEARN",
      "IEC 61131‑3 · MODBUS · OPC UA · MQTT",
      "AGROTECH 5.0 · IoT · LoRa/LoRaWAN",
      "EX‑OFICIAL · MARINHA DO BRASIL",
      "PT · EN · DE · RU"
    ];
    const track = document.getElementById('tickerTrack');
    const build = () => facts.map(f => `<span class="ticker-item"><b>▸</b> ${f}</span>`).join('<span class="ticker-item sep">/</span>');
    track.innerHTML = build() + build();
  })();

  // Mobile nav toggle
  (function(){
    const btn = document.getElementById('navToggle');
    const nav = document.getElementById('navLinks');
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.textContent = open ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
      btn.textContent = '☰';
    }));
  })();

  // Scroll reveal
  (function(){
    const items = document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){ items.forEach(i => i.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    items.forEach(i => io.observe(i));
  })();
</script>

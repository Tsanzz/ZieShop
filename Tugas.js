function toggleMode() {
    document.body.classList.toggle("dark");
  }

  function showPage(pageId) {
    document.querySelectorAll(".page").forEach(el => el.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
  }

  function addToCart(product) {
    alert(product + ' ditambahkan ke keranjang.');
  }

  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msgEl = document.getElementById('formMessage');
    if (!name || !email || !message) {
      msgEl.textContent = 'Wajib mengisi semua field.';
      msgEl.style.color = 'red';
      return false;
    }
    msgEl.textContent = 'Data berhasil dikirim.';
    msgEl.style.color = 'green';
    return false; 
  }

  function toggleAccordion(btn) {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  }
  
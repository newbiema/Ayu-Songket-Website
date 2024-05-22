document.addEventListener('DOMContentLoaded', function () {
  const formOrder = document.getElementById('formOrder');
  
  formOrder.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const itemId = document.getElementById('item-id').value;

      if (!name) {
          alert('Please enter your name.');
          return;
      }

      if (!email) {
          alert('Please enter your email.');
          return;
      }

      if (!phone) {
          alert('Please enter your phone number.');
          return;
      }

      if (!itemId) {
          alert('Please enter the item ID.');
          return;
      }

      const message = encodeURIComponent(
          `*Form Payment Ayu Songket Tetebatu*\n
          Name: ${name}\n
          Email: ${email}\n
          Phone: ${phone}\n
          Item ID: ${itemId}\n
          *Metode pembayaran:*\n
          Dana : *-* (Naim)\n
          BRI : *-* (Naim)\n
          Gopay: *-* (Naim)\n
          *_Silahkan Untuk melakukan pembayaran ke salah satu metode diatas!_*`
      );

      const whatsappLink = `https://wa.me/6287861983713?text=${message}`;
      window.open(whatsappLink, "_blank");
  });
});
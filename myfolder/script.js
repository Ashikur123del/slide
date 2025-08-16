  
    // Sidebar toggle (mobile)
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('backdrop');
    const toggleBtn = document.getElementById('sidebarToggle');
    if(toggleBtn){
      toggleBtn.addEventListener('click', ()=>{ sidebar.classList.toggle('show'); backdrop.classList.toggle('show'); });
      backdrop.addEventListener('click', ()=>{ sidebar.classList.remove('show'); backdrop.classList.remove('show'); });
    }

    // Students Pie Chart
    const ctx = document.getElementById('studentsPie');
    if(ctx){
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Males','Females','Others'],
          datasets: [{
            data: [55, 46, 0],
            borderWidth: 0,
          }]
        },
        options: {
          plugins: { legend: { position: 'bottom' } },
          cutout: '65%'
        }
      });
    }

    document.querySelectorAll('.sidebar-menu .has-sub').forEach(menu => {
    menu.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.submenu').forEach(sub => {
        if (sub !== menu.nextElementSibling) {
          sub.classList.remove('show');
          sub.previousElementSibling.classList.remove('active');
        }
      });
      menu.classList.toggle('active');
      menu.nextElementSibling.classList.toggle('show');
    });
  });
  
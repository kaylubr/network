addEventListener('DOMContentLoaded', () => {
  const followBtn = document.querySelector('#follow-btn');

  if (followBtn) {
    followBtn.addEventListener('click', async () => {
      console.log("RUNS");
      await fetch(`/follow/${followBtn.getAttribute('data-user-id')}`);
    })
  }
})
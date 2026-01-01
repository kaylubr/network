addEventListener('DOMContentLoaded', () => {
  const followBtn = document.querySelector('#follow-btn');

  if (followBtn) {
    const followCount = document.querySelector('#followers-count');

    followBtn.addEventListener('click', async () => {
      if (followBtn.textContent === "Following") {
        await fetch(`/unfollow/${followBtn.getAttribute('data-user-id')}`);
        followBtn.textContent = "Follow";
        followCount.textContent = parseInt(followCount.textContent) - 1;
      } else if (followBtn.textContent === "Follow") {
        await fetch(`/follow/${followBtn.getAttribute('data-user-id')}`);
        followBtn.textContent = "Following";
        followCount.textContent = parseInt(followCount.textContent) + 1;
      }
    });
  }
})
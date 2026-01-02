// Follow
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

// Edit
const editBtn = document.querySelectorAll('#edit-btn');

editBtn.forEach(btn => {

  btn.addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-post-id');
    const postBox = document.getElementById(`${id}`);

    if (e.target.textContent === 'Edit') {
      const textArea = document.createElement('textarea');
      textArea.value = postBox.textContent;
      textArea.dataset.contentCache = postBox.textContent;
      textArea.classList.add('edit-textarea');
      textArea.setAttribute('id', id);

      postBox.replaceWith(textArea);
      e.target.textContent = 'Cancel';
    } else if (e.target.textContent === 'Cancel') {
      const p = document.createElement('p');
      p.textContent = postBox.getAttribute('data-content-cache');
      p.setAttribute('id', id);

      postBox.replaceWith(p);
      e.target.textContent = 'Edit';
    }
    
  });
});
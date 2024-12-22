document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.style.display === 'block';
      
      
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
  
      
      if (!isOpen) {
        answer.style.display = 'block';
        question.classList.add('active');
      }
    });
  });
  
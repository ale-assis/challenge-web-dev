function vote(name = '') {
  const result = confirm(`Você realmente deseja votar em ${name}?`);

  if (result) {
    let email = prompt('Diga qual seu email para enviarmos a confirmação: ')
    
    while (true) {
      if (email.length !== 0) {
        break;
      }
      
      email = prompt('Email Inválido, digite novamente: ')
    }

    alert(`Você votou em ${name}, Parabéns!\ncheque seu email em ${email}`);
  }
}